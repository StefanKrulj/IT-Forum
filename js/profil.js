$(document).ready(function() {
	
	checkLogin();
	
	function login (username, password) {
			$.ajax({
				url : "http://www.itforum.dk/ws/appapi.asp?method=getchallenge&login="+ username +"",
				dataType : "jsonp",
				success : function(parsed_json) {
					alert('success got challenge');
				},
				error : function() {
					alert('failure to access api');
				}
			});
		
	}
	
	function checkLogin(){
		if (localStorage.getItem("profile") == 'loggedOut'|| localStorage.getItem("profile") === null) {
			$('#logind').show();
			$('#profil').hide();
			
			$('#blivmedlem').show();
			$('#networking').hide();
		}
		else{
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
	
	$('#loginBtn').on("click",function(){
		
		localStorage.setItem("profile", "1");
		
		checkLogin();
		
	});
	
	$('#logoutBtn').on("click",function(){
		localStorage.setItem("profile", "loggedOut");
		
		checkLogin();
		
	});

}); 