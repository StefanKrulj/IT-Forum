function EventDetails(event) {

	event.forEach(function(eve) {

		$("#pageDetailEvent #eventAttributes").empty();

		$("#pageDetailEvent #eventAttributes").append("<h2 id='eventTitle'>" + eve.title + "</h2>");
		$("#pageDetailEvent #eventAttributes").append("<img id='eventImage' src=" + eve.image +  " alt='some_text'>");
		$("#pageDetailEvent #eventAttributes").append("<h3 id='eventSubTitle'>" + eve.subtitle + "</h3>");
		$("#pageDetailEvent #eventAttributes").append(eve.starttime);
		$("#pageDetailEvent #eventAttributes").append(eve.endtime);
		$("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.location + "</p>");
		$("#pageDetailEvent #eventAttributes").append("<p id='eventDescription'>" + eve.description + "</p>");

		var user = localStorage.getItem("user");
		var userEventArray = JSON.parse(user).events;
		for (var i in userEventArray) {
			if (userEventArray[i] == eve.eventid) {
				$("#pageDetailEvent #eventAttributes").append("<a href='#pageParticipentsList' id='participants_btn' name='participants' class='ui-btn'>Deltagere</a>");
			}
		}

		// $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.StartTime + "</p" );
		// $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.EventLocation + "</p" );
		// $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.EventLocation + "</p" );

		//alert(eve.Name);

	});
}

function ProfileDetails() {
	var user = localStorage.getItem("user");
	var us = JSON.parse(user);

	$("#pageUser #userAttributes").empty();

	$("#pageUser #userAttributes").append("<a href='#editProfile' class='ui-btn ui-btn-inline ui-icon-gear ui-btn-icon-right'>Rediger bruger</a>");

	$("#pageUser #userAttributes").append("<table><tr><td><h2>Navn:</h2></td><td><h2  id='userFirstName'> " + us.firstname + " " + us.lastname + "</h2></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Virksomhed:</h3></td><td><a href=" + us.company + "><h3 id='userCompany'>" + us.company + "</h3></a></td></tr></table>");

	$("#pageUser #userAttributes").append("<table><tr><td><a href=" + us.linkedinurl + ">LinkedinUrl</a></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Profiltekst:</h3></td><td><p id='userProfileText'> " + us.profile + "</p></h3></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Mobiltelefon:</h3></td><td><p id='userMobileNo'> " + us.mobile + "</p></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Email:</h3></td><td><p id='userEmail'> " + us.email + "</p></td></tr></table>");

	// $('#name').val($('#userFirstName').text());
	// $('#title').val($('#userTitle').text());
	// $('#emailEdit').val($('#userEmail').text());
	// $('#tlf').val($('#userPhoneNo').text());
	// $('#linkedin').val($("#LinkedinUrl").text());
	// $('#txtArea').val($('#userProfileText').text());
}

function ParticipentDetails(participantsArray) {
	alert("Kør nu!");

	var participent = participantsArray[parseInt(sessionStorage.selectedId)];
	
	$("#pageParticipentsDetail #userAttributes").empty();
		
		$("#pageParticipentsDetail #userAttributes").append("<table><tr><td><h2>Navn:</h2></td><td><h2  id='userFirstName'> " + participent.firstname + " " + participent.lastname + "</h2></td></tr></table>");
		// De har ingen title
		// $("#pageParticipentsDetail #userAttributes").append("<table><tr><td><h3>Titel:</h3></td><td><h3 id='userTitle'>" + participent.title + "</h3></td></tr></table>");

		$("#pageParticipentsDetail #userAttributes").append("<table><tr><td><a href=" + participent.linkedinurl + ">LinkedinUrl</a></td></tr></table>");
		$("#pageParticipentsDetail #userAttributes").append("<table><tr><td><h3>Profiltekst:</h3></td><td><p id='userProfileText'> " + participent.profile + "</p></h3></td></tr></table>");
		// MÅ IKKE VISES
		// $("#pageParticipentsDetail #userAttributes").append("<table><tr><td><h3>Mobiltelefon:</h3></td><td><p id='userMobileNo'> " + participent.mobile + "</p></td></tr></table>");
		// $("#pageParticipentsDetail #userAttributes").append("<table><tr><td><h3>Email:</h3></td><td><p id='userEmail'> " + participent.email + "</p></td></tr></table>");
// 
		// $('#name').val($('#userFirstName').text());
		// $('#title').val($('#userTitle').text());
		// $('#emailEdit').val($('#userEmail').text());
		// $('#tlf').val($('#userPhoneNo').text());
		// $('#linkedin').val($("#LinkedinUrl").text());
		// $('#txtArea').val($('#userProfileText').text());
// 
	// });
}