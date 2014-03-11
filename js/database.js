$(document).ready(function() {
	//NB på computed!!!!

	var eventsArray = [];

	$data.Entity.extend("User", {
		Id : {
			type : "int",
			key : true,
			computed : true
		},
		FirstName : {
			type : String,
			required : true,
			maxLength : 200
		},
		LastName : {
			type : String,
			required : true,
			maxLength : 200
		},
		Title : {
			type : String,
			required : true,
			maxLength : 100
		},
		LinkedInUrl : {
			type : String,
			required : true,
			maxLength : 200
		},
		ProfileText : {
			type : String,
			required : false,
			maxLength : 3000
		},
		Interests : {
			type : String,
			required : false,
			maxLength : 500
		},
		PhoneNo : {
			type : "int",
			required : true,
			maxLength : 8
		},
		MobileNo : {
			type : "int",
			required : true,
			maxLength : 8
		},
		Email : {
			type : String,
			required : true,
			maxLength : 200
		},
		FirstEncounter : {
			type : String,
			required : false,
			maxLength : 450
		},
		NewsLetter : {
			type : Boolean
		}
		// Events: { type: Array, elementType: Event, inverseProperty: "Person" }
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
		Users : {
			type : $data.EntitySet,
			elementType : User
		},

	});

	var itForumDatabase = new ITForumDatabase({
		provider : 'webSql',
		databaseName : 'ITFDatabase',
		dbCreation : $data.storageProviders.DbCreationType.DropAllExistingTables

	});

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
					alert('failure to access api');
				}
			});
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
				event.starttime = eventsArray[i].starttime;
				event.endtime = eventsArray[i].endtime;
				event.image = eventsArray[i].image;
				// event.lessons = eventsArray[i].lessons;
				// event.prices = eventsArray[i].prices;

				itForumDatabase.Events.add(event);
			}
			itForumDatabase.saveChanges();
			// }

			itForumDatabase.Users.add({
				FirstName : "Kukuruza",
				LastName : "Van Diek",
				Title : "CEO",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Jeg er direktør i et stort firma, der sælger hash og nøgler",
				PhoneNo : 86251436,
				MobileNo : 22557788,
				Email : "crazyPonytail@gmail.com",
				NewsLetter : false
				//Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Miska",
				LastName : "Miheilovich",
				Title : "Teknisk designer",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Jeg elsker bare når det hele spiller max",
				PhoneNo : 86287536,
				MobileNo : 48189338,
				Email : "ILovemyeyes@gmail.com",
				NewsLetter : true
				//Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Dennis",
				LastName : "Nikolaievich",
				Title : "Underdirektør",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Jeg lever og ånder for mit arbejde, det giver mig mening. Endvidere bliver jeg helt rørt, når jeg ser smuk kode",
				PhoneNo : 89402533,
				MobileNo : 27135685,
				Email : "givemefive@gmail.com",
				NewsLetter : true
				//Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Lars",
				LastName : "Sølvpapegøje Madsen",
				Title : "Scrummaster",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "At arbejde er at leve",
				PhoneNo : 87253698,
				MobileNo : 45667425,
				Email : "MeinNaseIstSehrKrum@gmail.com",
				NewsLetter : true
				// Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Nina",
				LastName : "Gorkova",
				Title : "Klunser",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "My milkshake brings all the boys to my yard",
				PhoneNo : 86782514,
				MobileNo : 25124585,
				Email : "otteogfyrre@gmail.com",
				NewsLetter : true
				// Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Mads",
				LastName : "Sørensen",
				Title : "appudvikler",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Native apps FTW!!!",
				PhoneNo : 86745896,
				MobileNo : 22336585,
				Email : "madsen@gmail.com",
				NewsLetter : true
				//Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Sergei",
				LastName : "Absalonovich",
				Title : "Businessman",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Fem bananer i hatten er bedre end en hat af fem bananer",
				PhoneNo : 87586214,
				MobileNo : 26254785,
				Email : "jatak@gmail.com",
				NewsLetter : true
				// Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Petra",
				LastName : "Ibrahimovich",
				Title : "Supporter",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Have you tried turning it off and then on again?",
				PhoneNo : 86785241,
				MobileNo : 27126987,
				Email : "fembananer@gmail.com",
				NewsLetter : false
				// Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Michael",
				LastName : "Petersen",
				Title : "Slave",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Jeg lever og ånder for mit arbejde, det giver mig mening. Endvidere bliver jeg helt rørt, når jeg ser smuk kode",
				PhoneNo : 86402536,
				MobileNo : 25784210,
				Email : "gimmeyourheartaftermidtnight@gmail.com",
				NewsLetter : false
				// Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.Users.add({
				FirstName : "Flemming",
				LastName : "Knutsson",
				Title : "Productowner",
				//Company: { type: "Member", required: true, inverseProperty: "User" },
				LinkedInUrl : "www.linkedin.dk",
				ProfileText : "Programmering er en livsstil",
				PhoneNo : 64402578,
				MobileNo : 22458763,
				Email : "Fugle@gmail.com",
				NewsLetter : true
				//Events: { type: Array, elementType: Event, inverseProperty: "Person" }
			});

			itForumDatabase.saveChanges();

			//UI with jQuery
			itForumDatabase.Events
			//.include("Event")
			.forEach(function(Event) {
				if (!Event.image == "") {

					$('#eventList').append("<li data-id='" + Event.eventid + "' ><a href='#pageDetailEvent'><img src='" + Event.image + "'><p><strong>" + Event.title + "</strong></p><p>" + Event.subtitle + "</p><p class='ui-li-aside'><strong id='" + Event.eventid + "'></strong></p></a></li>");
				} else {
					$('#eventList').append("<li data-id='" + Event.eventid + "' ><a href='#pageDetailEvent'><img src='img/imgArr.jpg'><p><strong>" + Event.title + "</strong></p><p>" + Event.subtitle + "</p><p class='ui-li-aside'><strong id='"+ Event.eventid +"'></strong></p></a></li>");
					

				}
				var user = localStorage.getItem("user");
				var userEventArray = JSON.parse(user).events;
				for (var i in userEventArray) {
					if (userEventArray[i] == Event.eventid) {
						$('#'+Event.eventid+'').html("Tilmeldt");
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


		itForumDatabase.Users.forEach(function(User) {

			$('#paticipantsList').append("<li data-id='" + User.Id + "' ><a href='#pagePaticipantsDetail'>" + User.FirstName + ' ' + User.LastName + '</li>');

			$('#paticipantsList').children('li').bind('touchstart mousedown', function(e) {

				sessionStorage.selectedId = $(this).attr('data-id');
			});

			//$('#paticipantsList').listview("refresh");

		});

	});

	$(document).on('pagebeforeshow', '#pageDetailEvent', function() {

		itForumDatabase.onReady(function() {

			itForumDatabase.Events.filter(function(event) {
				return event.eventid == sessionStorage.selectedId;
			}).toArray(function(events) {
				EventDetails(events);
			});
		});

	});

	$(document).on('pagebeforeshow', '#pagePaticipantsDetail', function() {

		itForumDatabase.onReady(function() {

			itForumDatabase.Users.filter(function(user) {
				return user.Id == sessionStorage.selectedId;
			}).toArray(function(users) {
				UserDetails(users);

			});

		});

	});

	$(document).on('pagebeforeshow', '#pageUser', function() {
		ProfileDetails();

	});

});
