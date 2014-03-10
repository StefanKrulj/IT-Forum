$(document).ready(function() {
	var username;
	var password;

	checkLogin();

	function getChallenge() {
		$.ajax({
			url : "http://www.itforum.dk/ws/appapi.asp?method=getchallenge&login=" + $('#username').val() + "",
			dataType : "jsonp",
			success : function(parsed_json) {
				// alert('success got challenge');
				// alert("Challenge: " + parsed_json.challenge);
				var hash = CryptoJS.SHA1(parsed_json.challenge + CryptoJS.SHA1($('#username').val() + "" + $('#password').val()));
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
				alert('success login: ' + parsed_json.firstname);
				localStorage.setItem("profile", "" + parsed_json.loginguid);
				
				checkLogin();
				
				if (localStorage.getItem("profile") != "loggedOut") {
					// alert("Vi skifter side");
					$.mobile.navigate("#page01");
					
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

	function checkLogin() {
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

			$('#profil').bind('touchstart mousedown', function(e) {

				sessionStorage.selectedId = localStorage.getItem("profile");
				sessionStorage.profileSelected = '1';

			});
		}
	}


	$('#loginBtn').on("click", function() {
		if($('#username').val() == "" || $('#password').val() == ""){
			$('#loginError').html("Email eller kodeord mangler");
		}else{
			alert("Vi er i else i loginbtn");
			getChallenge();
		}
	});

	$('#logoutBtn').on("click", function() {
		localStorage.setItem("profile", "loggedOut");
		checkLogin();

	});

});
