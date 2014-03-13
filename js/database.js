$(document).ready(function() {
	//NB på computed!!!!

	var eventsArray = [];
	var participantsArray = [];

	$data.Entity.extend("Participant", {
		id : {
			type : "int",
			// required : true,
			key : true,
			computed : true
		},firstname : {
			type : String,
			// required : true,
			maxLength : 200
		},
		lastname : {
			type : String,
			// required : true,
			maxLength : 200
		},
		company : {
			type : String,
			// required : true,
			maxLength : 200,
		},
		email : {
			type : String,
			// required : true,
			maxLength : 8
		},
		profile : {
			type : String,
			// required : false,
			maxLength : 3000
		},
		linkedinurl : {
			type : String,
			// required : true,
			maxLength : 200
		},
		mobile : {
			type : String,
			// required : true,
			maxLength : 8
		}
	});

	/*
	 * Events
	 */

	$data.Entity.extend("Event", {
		title : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		subtitle : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		date : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		location : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		type : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		description : {
			type : String,
			//required : true,
			maxLength : 20000
		},
		url1 : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		url2 : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		tags : {
			type : Array,
			elementType : String
			//required : true,
			//maxLength : 1000
		},
		eventid : {
			type : String,
			key : true
			//computed : false
		},
		organiser : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		deadline : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		starttime : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		endtime : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		image : {
			type : String,
			//required : true,
			maxLength : 1000
		},
		lessons : {
			type : Array,
			elementType : String
			//required : true,
			//maxLength : 1000
		},
		// IKKE ET ARRAY
		prices : {
			type : Array,
			elementType : String
			//required : true,
			//maxLength : 1000
		}
	});

	$data.EntityContext.extend("ITForumDatabase", {
		Events : {
			type : $data.EntitySet,
			elementType : Event
		},
		Participants : {
			type : $data.EntitySet,
			elementType : Participant
		}
	});
	
	// navigator.sayswho=  (function(){
    // var N= navigator.appName, ua= navigator.userAgent, tem,
    // M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*([\d\.]+)/i);
    // if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    // M= M? [M[1], M[2]]:[N, navigator.appVersion, '-?'];
    // return M.join(' ');
 	// })();
//  	
 	// var browserString = navigator.appCodeName;
 	// var browserSubstring = browserString.subString(0,2);
 	// alert("Browser: " + browserString);
 	// alert("Browser: " + browserSubstring);
 	
 	/*
 	 * isMobile checker for browser platform
 	 * Skal testes 
 	 */
 	
	var isMobile = {
		Android : function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry : function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS : function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera : function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows : function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any : function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	}; 
	
	if( isMobile.Android() ) alert('Android');
	if( isMobile.iOS() ) alert('iOS');
	if( isMobile.Windows() ) alert('Windows');
	
	if (isMobile.Windows()) {
		alert("Er inde i if Mobile Windows");
		var itForumDatabase = new ITForumDatabase({
			// provider : 'webSql',
			provider : 'indexedDb',
			databaseName : 'ITFDatabase',
			dbCreation : $data.storageProviders.DbCreationType.DropAllExistingTables

		});
	} else {
		alert("Er inde i else Mobile Windows dvs alle andre");
		var itForumDatabase = new ITForumDatabase({
			// provider : 'webSql',
			provider : 'indexedDb',
			databaseName : 'ITFDatabase',
			dbCreation : $data.storageProviders.DbCreationType.DropAllExistingTables

		});
	}

	// var itForumDatabase = new ITForumDatabase({
		// provider : 'webSql',
		// // provider : 'indexedDb',
		// databaseName : 'ITFDatabase',
		// dbCreation : $data.storageProviders.DbCreationType.DropAllExistingTables
		// 
	// });

	itForumDatabase.onReady(function() {
		getEventsJSON();

		function getEventsJSON() {
			$.ajax({
				url : "http://www.itforum.dk/ws/appapi.asp?method=getevents",
				dataType : "jsonp",
				success : function(parsed_json) {
					eventsArray = parsed_json;
					saveEvents();
				},
				error : function() {
					alert('failure to access "getevents" api');
				}
			});
		}

		function startTimeDate(time) {
			var d = new Date(parseInt(time));
			var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
			var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
			var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
			var formattedTime = hours + ":" + minutes;

			formattedDate = "<strong>Arrangement tidspunkt </strong>" + formattedDate + ", fra kl. " + formattedTime;
			return formattedDate;
		}

		function endTimeDate(starttime, endtime) {
			var result = "";
			var endtimeDate = new Date(parseInt(endtime));
			var starttimeDate = new Date(parseInt(starttime));

			var formattedDate = endtimeDate.getDate() + "-" + (endtimeDate.getMonth() + 1) + "-" + endtimeDate.getFullYear();

			var hours = (endtimeDate.getHours() < 10) ? "0" + endtimeDate.getHours() : endtimeDate.getHours();
			var minutes = (endtimeDate.getMinutes() < 10) ? "0" + endtimeDate.getMinutes() : endtimeDate.getMinutes();
			var formattedTime = hours + ":" + minutes;

			if (endtimeDate.getDate() == starttimeDate.getDate()) {
				result = " til " + formattedTime;
			} else if (endtimeDate.getDate() > starttimeDate.getDate()) {
				formattedDate = "<br> Slut " + formattedDate + ", kl. " + formattedTime;
				result = formattedDate;
			} else {
				result = "Wrong date object";
			}

			return result;
		}

		function saveEvents() {
			for (var i in eventsArray) {
				// alert("Test Title: " + eventsArray[i].title);
				// alert("Test ID: " + eventsArray[i].eventid);
				var event = new Event();
				event.title = eventsArray[i].title;
				event.subtitle = eventsArray[i].subtitle;
				event.date = eventsArray[i].date;
				event.location = eventsArray[i].location;
				event.type = eventsArray[i].type;
				event.description = eventsArray[i].description;
				event.url1 = eventsArray[i].url1;
				event.url2 = eventsArray[i].url2;
				// tags = eventsArray[i].tags;
				event.eventid = eventsArray[i].eventid;
				event.organiser = eventsArray[i].organiser;
				event.deadline = eventsArray[i].deadline;
				//XX REGEX EXPRESSION XX
				var numberPattern = /\d+/g;
				event.starttime = startTimeDate(eventsArray[i].starttime.match(numberPattern));

				event.endtime = endTimeDate(eventsArray[i].starttime.match(numberPattern), eventsArray[i].endtime.match(numberPattern));
				event.image = eventsArray[i].image;
				// event.lessons = eventsArray[i].lessons;
				// event.prices = eventsArray[i].prices;

				itForumDatabase.Events.add(event);
			}
			itForumDatabase.saveChanges();

			itForumDatabase.Events
			//.include("Event")
			.forEach(function(Event) {
				// alert("event: " + Event.eventid);
				if (!Event.image == "") {

					$('#eventList').append("<li data-id='" + Event.eventid + "' ><a href='#pageDetailEvent'><img src='" + Event.image + "'><p><strong>" + Event.title + "</strong></p><p>" + Event.subtitle + "</p><p>" + Event.starttime + "</p><p class='ui-li-aside'><strong id='" + Event.eventid + "'></strong></p></a></li>");
				} else {
					$('#eventList').append("<li data-id='" + Event.eventid + "' ><a href='#pageDetailEvent'><img src='img/imgArr.jpg'><p><strong>" + Event.title + "</strong></p><p>" + Event.subtitle + "</p><p>" + Event.starttime + "</p><p class='ui-li-aside'><strong id='" + Event.eventid + "'></strong></p></a></li>");

				}
				
				if (localStorage.getItem("user") != null) {
					var user = localStorage.getItem("user");
					var userEventArray = JSON.parse(user).events;
					for (var i in userEventArray) {
						if (userEventArray[i] == Event.eventid) {
							$('#' + Event.eventid + '').html("Tilmeldt");
						}
					}
				}


				$('#eventList').children('li').bind('touchstart mousedown', function(e) {
					//alert('Selected Name=' + $(this).attr('data-id'));
					//bliver kaldt antalgange der er tilbage i listen mange gange
					sessionStorage.selectedId = $(this).attr('data-id');
				});
			});
			//test
			$('#eventList').listview("refresh");
		}


		itForumDatabase.Participants.forEach(function(Participant) {
			alert("Each Participant" + Participant.firstname);

			// $('#participantsList').append("<li data-id='" + User.Id + "' ><a href='#pageParticipantsDetail'>" + User.FirstName + ' ' + User.LastName + '</li>');
			//
			// $('#participantsList').children('li').bind('touchstart mousedown', function(e) {
			//
			// sessionStorage.selectedId = $(this).attr('data-id');
			// });

			//$('#participantsList').listview("refresh");

		});

	});

	function getParticipentsJSON(eventid, callback) {
		var user = localStorage.getItem("user");
		var userLoginguid = JSON.parse(user).loginguid;
		$.ajax({
			url : "http://www.itforum.dk/ws/appapi.asp?method=getparticipants&guid=" + userLoginguid + "&eventid=" + eventid + "",
			dataType : "jsonp",
			success : function(parsed_json) {
				participantsArray.length = 0;
				participantsArray = parsed_json;
				callback();
			},
			error : function() {
				alert('failure to access "getparticipants" api');
			}
		});
	}


	$(document).on('pagebeforeshow', '#pageDetailEvent', function() {

		itForumDatabase.onReady(function() {

			itForumDatabase.Events.filter(function(event) {
				return event.eventid == sessionStorage.selectedId;
			}).toArray(function(events) {
				EventDetails(events);
			});
		});

	});

	$(document).on('pageshow', '#pageDetailEvent', function() {
		getParticipentsJSON(sessionStorage.selectedId, function() {
       		setParticipantArray();
    	});
		
	});
	
	function setParticipantArray () {
		$("#ParticipentsList").empty();
		
	  	for(i in participantsArray){
			$('#ParticipentsList').append("<li data-id='" + i + "' ><a href='#pageParticipentsDetail'>" + participantsArray[i].firstname + ' ' + participantsArray[i].lastname + '</li>');
			
			$('#ParticipentsList').children('li').bind('touchstart mousedown', function(e) {
				// sessionStorage.setItem("participant", JSON.stringify(participantsArray[i]));
			
				sessionStorage.selectedId = $(this).attr('data-id');
			});

			// $('#ParticipentsList').listview("refresh");
		}
		
		$('#ParticipentsList').listview("refresh");
	}

	$(document).on('pagebeforeshow', '#pageParticipentsDetail', function() {
		ParticipentDetails(participantsArray);

	});

	$(document).on('pagebeforeshow', '#pageUser', function() {
		ProfileDetails();

	});

});
