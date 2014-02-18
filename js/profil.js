$(document).ready(function() {

localStorage.profilID = "logout";

var profilid = parseInt(localStorage.profilID);
if (typeof profilid == 'number')
  {
  

  $('#blivmedlem').html("<h2>test2<h2/>");


 
$('#logind').html("<a href='#pageUserDetail'><img src='img/imgprofile.jpg' /></a><div class='imgCaption'>Profil</div>");
	$('#logind').bind('touchstart mousedown', function(e) {
					
					sessionStorage.selectedId = localStorage.profilID;

					sessionStorage.profileSelected = '1';

				});
				
$('#blivmedlem').html("<a href='#pageNetworking'><img src='img/imgnetw.jpg' /></a><div class='imgCaption'>Networking</div>");				
  
//$(".ui-grid-b").grid("refresh"); 

  }
else
  {
  }



});