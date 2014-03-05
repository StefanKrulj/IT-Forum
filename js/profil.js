$(document).ready(function() {
	

	
	checkLogin();
	
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

	// if (localStorage.loggedIn == 'true') {
// 		
		// $('#profil').bind('touchstart mousedown', function(e) {
// 
			// sessionStorage.selectedId = localStorage.profilID;
			// sessionStorage.profileSelected = '1';
		// });
// 	
		// $(".ui-grid-b").grid("refresh");
	// } else {
// 
		// $(".ui-grid-b").grid("refresh");
	// }
	
	$('#logoutBtn').on("click",function(){
		localStorage.setItem("profile", "loggedOut");
		
		checkLogin();
		
		// jQuery.mobile.changePage(window.location.href, {
        // allowSamePageTransition: true,
        // transition: 'none',
        // reloadPage: true
    	// });
	});
	
	$('#loginBtn').on("click",function(){
		localStorage.setItem("profile", "1");
		
		
		checkLogin();
		
		// jQuery.mobile.changePage(window.location.href, {
        // allowSamePageTransition: true,
        // transition: 'none',
        // reloadPage: true
    	// });
	});
	
	// $('#settings').on('click', 'li', function() {
        // alert("Works"); // id of clicked li by directly accessing DOMElement property
    // });

}); 