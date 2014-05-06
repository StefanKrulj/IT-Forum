function EventDetails(events) {

	events.forEach(function(event) {

		$("#pageDetailEvent #eventAttributes").empty();

		$("#pageDetailEvent #eventAttributes").append("<h2 id='eventTitle'>" + event.title + "</h2>");
		$("#pageDetailEvent #eventAttributes").append("<img id='eventImage' src=" + event.image + ">");
		$("#pageDetailEvent #eventAttributes").append("<h3 id='eventSubTitle'>" + event.subtitle + "</h3>");
		$("#pageDetailEvent #eventAttributes").append(event.starttime);
		$("#pageDetailEvent #eventAttributes").append(event.endtime);
		$("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + event.location + "</p>");
		$("#pageDetailEvent #eventAttributes").append("<p id='eventDescription'>" + event.description + "</p>");
		
		if (localStorage.getItem("user") != null) {
			var user = localStorage.getItem("user");
			var userEventArray = JSON.parse(user).events;
			var login = JSON.parse(user).loginguid;
			var participating = "false";
			for (var i in userEventArray) {
				if (userEventArray[i] == event.eventid) {
					$("#pageDetailEvent #eventAttributes").append("<a href='#pageParticipantsList' id='participants_btn' name='participants' class='ui-btn'>Deltagere</a>");
					participating = "true";
				}
			}
			if (participating == "false"){
					$("#pageDetailEvent #eventAttributes").append("<a href='" + event.url2 + "&guid=" + login + "' class='ui-btn'>Deltag i arrangementet</a>");
			}
			
		} else{
			//TODO Hvad skal der sker hvis man ikke er logget ind overhovedet?
		}

	});
}

function ProfileDetails() {
	var user = localStorage.getItem("user");
	var us = JSON.parse(user);

	$("#pageUser #userAttributes").empty();

	$("#pageUser #userAttributes").append("<a href='http://www.itforum.dk/' class='ui-btn ui-btn-inline ui-icon-gear ui-btn-icon-right'>Rediger bruger</a>");

	$("#pageUser #userAttributes").append("<table><tr><td><h2>Navn:</h2></td><td><h2  id='userFirstName'> " + us.firstname + " " + us.lastname + "</h2></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Virksomhed:</h3></td><td><a href=" + us.company + "><h3 id='userCompany'>" + us.company + "</h3></a></td></tr></table>");

	$("#pageUser #userAttributes").append("<table><tr><td><a href=" + us.linkedinurl + ">LinkedinUrl</a></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Profiltekst:</h3></td><td><p id='userProfileText'> " + us.profile + "</p></h3></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Mobiltelefon:</h3></td><td><p id='userMobileNo'> " + us.mobile + "</p></td></tr></table>");
	$("#pageUser #userAttributes").append("<table><tr><td><h3>Email:</h3></td><td><p id='userEmail'> " + us.email + "</p></td></tr></table>");
}

function ParticipantDetails(participantsArray) {

	var par = participantsArray[parseInt(sessionStorage.selectedParIndex)];
	var participant = par;


	$("#pageParticipantsDetail #userAttributes").empty();

	$("#pageParticipantsDetail #userAttributes").append("<table><tr><td><h2>Navn:</h2></td><td><h2  id='userFirstName'> " + participant.firstname + " " + participant.lastname + "</h2></td></tr></table>");
	// De har ingen title
	// $("#pageParticipantsDetail #userAttributes").append("<table><tr><td><h3>Titel:</h3></td><td><h3 id='userTitle'>" + participant.title + "</h3></td></tr></table>");
	if (participant.linkedinurl != "") {
		$("#pageParticipantsDetail #userAttributes").append("<a href=" + participant.linkedinurl + ">LinkedinUrl</a>");
	}
	$("#pageParticipantsDetail #userAttributes").append("<table><tr><td><h3>Profiltekst:</h3></td><td><p id='userProfileText'> " + participant.profile + "</p></h3></td></tr></table>");
	
	 $("#pageParticipantsDetail #userAttributes").append("<table><tr><td><h3>Mobiltelefon:</h3></td><td><p id='userMobileNo'> " + participant.mobile + "</p></td></tr></table>");
	 
	 $("#favoriteToggle").change(function() {
	 	var state = $("#favoriteToggle").val();
	 	alert(state);
	 	if(state == "on"){
	 		setFavoriteParticipant(participant);
	 	}
    
    $('#togshow').text(state.toString());
	});
	 
	 // MÅ IKKE VISES
	// $("#pageParticipantsDetail #userAttributes").append("<table><tr><td><h3>Email:</h3></td><td><p id='userEmail'> " + participant.email + "</p></td></tr></table>");
}