$(document).ready(function() {

localStorage.profilID = "logout";

var profilid = parseInt(localStorage.profilID);
if (typeof profilid == 'number')
  {
  

  $('#blivmedlem').html("<h2>test2<h2/>");


 
$('#logind').html("<a href='#pageUserDetail'><img src='img/imgLog.jpg' /></a><div class='imgCaption'>Profil</div>");
	$('#logind').bind('touchstart mousedown', function(e) {
					
					sessionStorage.selectedId = localStorage.profilID;

					sessionStorage.profileSelected = '1';

				});
  
//$(".ui-grid-b").grid("refresh"); 

  }
else
  {
  }



});