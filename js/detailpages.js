function EventDetails(event) {

	event.forEach(function(eve) {

		$("#pageDetailEvent #eventAttributes").empty();

		$("#pageDetailEvent #eventAttributes").append("<h2 id='eventTitle'>" + eve.title + "</h2>");
		$("#pageDetailEvent #eventAttributes").append("<img id='eventImage' src=" + eve.image +  "alt='some_text'>");
		
		$("#pageDetailEvent #eventAttributes").append("<h3 id='eventSubTitle'>" + eve.subtitle + "</h3>");
		//$("#pageDetailEvent #eventAttributes").append("<p id='eventData'> Den " + eve.date + " kl: " + eve.starttime + " - " + eve.endtime + "</p>");
		$("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.location + "</p>");
		$("#pageDetailEvent #eventAttributes").append("<p id='eventDescription'>" + eve.description + "</p>");
		
		
		
		//$("#pageDetailEvent #eventAttributes").append("<a href='#pagePaticipantsList' id='participants_btn' name='participants' class='ui-btn'>Deltagere</a>");

		// $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.StartTime + "</p" );
		// $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.EventLocation + "</p" );
		// $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.EventLocation + "</p" );

		//alert(eve.Name);

	});
}

function UserDetails(user) {

	user.forEach(function(us) {

		$("#pagePaticipantsDetail #userAttributes").empty();
		if (us.Id == localStorage.getItem("profile")) {
			$("#pagePaticipantsDetail #userAttributes").append("<a href='#editProfile' class='ui-btn ui-btn-inline ui-icon-gear ui-btn-icon-right'>Rediger bruger</a>");

			if (sessionStorage.profileSelected == "1") {

				$("#userBack").attr("href", "#page01");

				sessionStorage.profileSelected = "0";
			} else {

				$("#userBack").attr("href", "#pagePaticipantsList");

			}

		}

		$("#pagePaticipantsDetail #userAttributes").append("<table><tr><td><h2>Navn:</h2></td><td><h2  id='userFirstName'> " + us.FirstName + " " + us.LastName + "</h2></td></tr></table>");
		$("#pagePaticipantsDetail #userAttributes").append("<table><tr><td><h3>Titel:</h3></td><td><h3 id='userTitle'>" + us.Title + "</h3></td></tr></table>");

		$("#pagePaticipantsDetail #userAttributes").append("<table><tr><td><a href=" + us.LinkedInUrl + ">LinkedinUrl</a></td></tr></table>");
		$("#pagePaticipantsDetail #userAttributes").append("<table><tr><td><h3>Profiltekst:</h3></td><td><p id='userProfileText'> " + us.ProfileText + "</p></h3></td></tr></table>");
		$("#pagePaticipantsDetail #userAttributes").append("<table><tr><td><h3>Arbejdstelefon:</h3></td><td><p id='userPhoneNo'> " + us.PhoneNo + "</p></td></tr></table>");
		$("#pagePaticipantsDetail #userAttributes").append("<table><tr><td><h3>Mobiltelefon:</h3></td><td><p id='userMobileNo'> " + us.MobileNo + "</p></td></tr></table>");
		$("#pagePaticipantsDetail #userAttributes").append("<table><tr><td><h3>Email:</h3></td><td><p id='userEmail'> " + us.Email + "</p></td></tr></table>");

		$('#name').val($('#userFirstName').text());
		$('#title').val($('#userTitle').text());
		$('#emailEdit').val($('#userEmail').text());
		$('#tlf').val($('#userPhoneNo').text());
		$('#linkedin').val($("#LinkedinUrl").text());
		$('#txtArea').val($('#userProfileText').text());

	});
}

//s$(function () {

//});

/*
 LogoUrl : {
 type : String,
 required : false,
 maxLength : 500
 },
 WebPage : {
 type : String,
 required : false,
 maxLength : 500
 },
 Name : {
 type : String,
 required : true,
 maxLength : 200
 },
 ProfileText : {
 type : String,
 required : false,
 maxLength : 3000
 },
 CoreCompetencies : {
 type : String,
 required : false,
 maxLength : 3000
 },
 Branche : {
 type : String,
 required : false,
 maxLength : 100
 },
 Tags : {
 type : String,
 required : false,
 maxLength : 450
 },
 Size : {
 type : "int",
 required : true,
 maxLength : 20
 },
 Price : {
 type : "int",
 required : true,
 maxLength : 10
 },
 Address : {
 type : String,
 required : true,
 maxLength : 200
 },
 ZipCode : {
 type : "int",
 required : true,
 maxLength : 4
 },
 Town : {
 type : String,
 required : true,
 maxLength : 20
 },
 PhoneNo : {
 type : "int",
 required : true,
 maxLength : 8
 },
 EanNo : {
 type : "int",
 required : true,
 maxLength : 12
 }

 */
