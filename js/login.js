$(document).ready(function() {
	var username;
	var password;

	checkLogin();
	sessionStorage.loggedInNotAutoLoggedIn == null;
	function getChallenge() {
		$.ajax({
			url : "http://www.itforum.dk/ws/appapi.asp?method=getchallenge&login=" + localStorage.getItem("username") + "",
			dataType : "jsonp",
			success : function(parsed_json) {
				var hash = CryptoJS.SHA1(parsed_json.challenge + CryptoJS.SHA1(localStorage.getItem("username") + "" + localStorage.getItem("password")));
				login(hash);
			},
			error : function() {
				alert('failure to access challenge');
			}
		});

	}

	function login(hash) {
		$.ajax({
			url : "http://www.itforum.dk/ws/appapi.asp?method=login&response=" + hash + "",
			dataType : "jsonp",
			success : function(parsed_json) {
				localStorage.setItem("profile", parsed_json.loginguid);
				localStorage.setItem("user", JSON.stringify(parsed_json));
				var user = localStorage.getItem("user");

				checkLogin();

				if (localStorage.getItem("profile") != "loggedOut" || localStorage.getItem("profile") === null) {
					$.mobile.navigate("#pageMenu");
					document.getElementById('username').value = '';
					document.getElementById('password').value = '';
					$('#loginError').html("");

				} else {
					$('#loginError').html("1Email eller kodeord er forkert");
				}
			},
			error : function() {
				$('#loginError').html("2Email eller kodeord er forkert");
				alert('failure to access login');
			}
		});
	}

	//glemme ting, adgangskode og username og profile og ting gem i localstorage
	function checkLogin() {

		if (localStorage.getItem("autologincheckbox") == 'NotChecked' && sessionStorage.loggedInNotAutoLoggedIn != "loggedIn") {
			localStorage.setItem("profile", "loggedOut");
			localStorage.removeItem("user");
			localStorage.setItem("password", "");
			localStorage.setItem("username", "");
		};

		if (localStorage.getItem("profile") == 'loggedOut' || localStorage.getItem("profile") === null) {
			$('#logind').show();
			$('#profil').hide();

			$('#blivmedlem').show();
			$('#networking').hide();
		} else {
			$('#profil').show();
			$('#logind').hide();

			$('#networking').show();
			$('#blivmedlem').hide();
			if (localStorage.getItem("autologincheckbox") == 'checked' && sessionStorage.gotNewChallenge != "yesWeDid") {
				sessionStorage.gotNewChallenge = "yesWeDid";
				getChallenge();
			};

			$('#profil').bind('touchstart mousedown', function(e) {
				sessionStorage.selectedId = localStorage.getItem("profile");
				sessionStorage.profileSelected = '1';
			});
		}
	}

	$('#loginBtn').on("click", function() {
		if ($('#username').val() == "" || $('#password').val() == "") {
			$('#loginError').html("Email eller kodeord mangler");
		} else {
			localStorage.setItem("username", $('#username').val());
			localStorage.setItem("password", $('#password').val());

			if (document.getElementById("autologincheckbox").checked) {

				localStorage.setItem("autologincheckbox", "checked");
			} else {

				localStorage.setItem("autologincheckbox", "NotChecked");
				sessionStorage.loggedInNotAutoLoggedIn = "loggedIn";
			}

			getChallenge();
		}
		getLocalEvents();
	});

	$('#logoutBtn').on("click", function() {
		localStorage.setItem("profile", "loggedOut");
		localStorage.setItem("autologincheckbox", "NotChecked");
		checkLogin();
		
		getLocalEvents();
	});

});