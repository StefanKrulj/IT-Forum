$(document).ready(function() {

localStorage.profilID = '1';

if (localStorage.profilID)
  {
  

  $('#blivmedlem').html("<h2>test2<h2/>");


 
$('#logind').html("<a href='#pageUserDetail'><img src='img/imgLog.jpg' /></a><div class='imgCaption'>Profil</div>");
	$('#logind').bind('touchstart mousedown', function(e) {
					
					sessionStorage.selectedId = localStorage.profilID;
					sessionStorage.profileSelected = true;
				});
  
//$(".ui-grid-b").grid("refresh"); 

  }
else
  {
  }



});