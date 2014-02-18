$(document).ready(function() {

localStorage.profilID = '1';

if (localStorage.profilID)
  {
  

  $('#blivmedlem').html("<h2>test2<h2/>");


 
$('#logind').html("<a href='#pageUserDetail'><img src='img/imgLog.jpg' /></a><div class='imgCaption'>Profil</div>");
	$('#logind').bind('touchstart mousedown', function(e) {
					
					sessionStorage.selectedId = localStorage.profilID;
<<<<<<< HEAD
					sessionStorage.profileSelected = '1';
=======
					sessionStorage.profileSelected = "1";
>>>>>>> f4b8cb2384dda50d8598cd09581a6515c5eef0d1
				});
  
//$(".ui-grid-b").grid("refresh"); 

  }
else
  {
  }



});