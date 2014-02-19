$(document).ready(function() {
	
	checkLogin();
	
	function checkLogin(){
		if (localStorage.profilID == 'loggedOut') {
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

			sessionStorage.selectedId = localStorage.profilID;
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
		localStorage.profilID = 'loggedOut';
		
		checkLogin();
		
		// jQuery.mobile.changePage(window.location.href, {
        // allowSamePageTransition: true,
        // transition: 'none',
        // reloadPage: true
    	// });
	});
	
	$('#loginBtn').on("click",function(){
		localStorage.profilID = '1';
		
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