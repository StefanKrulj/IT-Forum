$(document).ready(function() {
	//NB på computed!!!!
	
	var eventsArray=[];
	

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
		//Company: { type: "Member", required: true, inverseProperty: "User" },
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
			elementType: String
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

		Users : {
			type : $data.EntitySet,
			elementType : User
		},
		Events : {
			type : $data.EntitySet,
			elementType : Event
		},
	});

	var itForumDatabase = new ITForumDatabase({
		 provider: 'webSql', 
		 databaseName: 'ITFDatabase', 
		 dbCreation: $data.storageProviders.DbCreationType.DropAllExistingTables 

	});
	


	itForumDatabase.onReady(function() {
		
		getEventsJSON();
		
		function getEventsJSON() {
  			$.ajax({ 			
   				url : "http://www.itforum.dk/ws/appapi.asp?method=getevents",
   				dataType : "jsonp",
   				success : function(parsed_json) {
    				eventsArray = parsed_json;
    				alert("lenght" + eventsArray.length);
    				saveEvents();
   				},
   				error: function(){
    				alert('failure to access api');
  				} 
  			});
 		}
 		function saveEvents() {
 		for(var i in eventsArray){
 			 //alert("Test Title: " + eventsArray[i].title);
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
    }
    	
		
		// function saveEvents(e) {
			// // alert("test: " + e.title);
			// // alert("test: " + e.eventid);
			// itForumDatabase.onReady(function() {
 			// itForumDatabase.Events.add({
				// title : e.title,
				// subtitle : eventsArray[i].subtitle,
				// date : eventsArray[i].date,
				// location : eventsArray[i].location,
				// type : eventsArray[i].type,
				// description : eventsArray[i].description,
				// url1 : eventsArray[i].url1,
				// url2 : eventsArray[i].url2,
				// tags : for()
				// eventid : e.eventid
				// organiser : eventsArray[i].organiser,
				// deadline : eventsArray[i].deadline,
				// starttime : eventsArray[i].starttime,
				// endtime : eventsArray[i].endtime,
				// image : eventsArray[i].image
				// lessons : eventsArray[i].lessons
				// prices : eventsArray[i].prices
				// });
		// });
	// }
// 		
		// itForumDatabase.Events.add({
				// title : "eventsArray[i].title",
				// // subtitle : "eventsArray[i].subtitle",
				// // //date : "eventsArray[i].date",
				// // location : "eventsArray[i].location",
				// // type : "eventsArray[i].type",
				// // description : "eventsArray[i].description",
				// // url1 : "eventsArray[i].url1",
				// // url2 : "eventsArray[i].url2",
				// // //tags : for()
				// eventid : "1",
				// // organiser : "eventsArray[i].organiser",
				// // deadline : "eventsArray[i].deadline",
				// // starttime : "eventsArray[i].starttime",
				// // endtime : "eventsArray[i].endtime",
				// // image : "eventsArray[i].image"
				// // //lessons : eventsArray[i].lessons
				// // //prices : eventsArray[i].prices
		// });
		

		//Create related data
		// itForumDatabase.Events.add({
			// Name : "Hvordan bliver jeg en bedre bankrøver?",
			// EventDate : "18-02-2014",
			// Type : "Networking",
			// RegistrationDeadline : "01-01-2014",
			// EventLocation : "Hårbyvej 28, 8660 Skanderborg",
			// StartTime : "14:00",
			// EndTime : "14:01",
			// Arranger : "Karin Madsen",
			// Description : "Dette kursus handler om hvordan du kan blive en bedre bankrøver. Der er mange forskellige faktorer der spiller ind. I kurset indgår der også workshops - hvis vi har tid - røver vi en rigtig bank"
		// });
// 
		// itForumDatabase.Events.add({
			// Name : "Lær at grine med elefanter",
			// EventDate : "18-03-2014",
			// Type : "Selvlearning",
			// RegistrationDeadline : "01-02-2014",
			// EventLocation : "Lokesvej 23, 8600 Silkeborg",
			// StartTime : "14:12",
			// EndTime : "14:41",
			// Arranger : "Viggo Erichsson",
			// Description : "Ha hahahahahahah ha ha ha haha aha ha ha hah ah ah ahahahahahahahahahahahah he heheheheheheheheh hahahahahy hihihihihihihihihih høhøhøhøhøhøhøhøhøhøhøhøhøhøh aaaaaaaaahhhhh hahahahah"
			// //Task: "Your task",
			// //Person: new Person({Name: 'Peter'});
		// });
// 
		// itForumDatabase.Events.add({
			// Name : "Da spiderman reddede mit liv",
			// EventDate : "18-05-2014",
			// Type : "Fortælling",
			// RegistrationDeadline : "01-04-2014",
			// EventLocation : "Hjortensgade 15, 8000 Aarhus C",
			// StartTime : "14:45",
			// EndTime : "14:58",
			// Arranger : "Kirsten Dunst",
			// Description : "Hør det spændende foredrag af Kirsten Dunst, om  hvordan hun blev reddet af den sagnomspundne spiderman. Det bliver edderspændende - husk kleenex, da det også bliver en tåreperser"
			// //Task: "Your task",
			// //Person: new Person({Name: 'Peter'});
		//});

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

			//$('#eventList').append('<li>test</li>');
			$('#eventList').append("<li data-id='" + Event.Id + "' ><a href='#pageDetailEvent'>" + Event.Name +'</li>');
			
			$('#eventList').children('li').bind('touchstart mousedown', function(e) {
				//alert('Selected Name=' + $(this).attr('data-id'));
				//bliver kaldt antalgange der er tilbage i listen mange gange
				sessionStorage.selectedId = $(this).attr('data-id');
});
});
	
			//$('#eventList').listview("refresh");
			


			
		


			itForumDatabase.Users
			
			
			.forEach(function(User) {

				
				$('#paticipantsList').append("<li data-id='" + User.Id + "' ><a href='#pagePaticipantsDetail'>" + User.FirstName + ' ' + User.LastName + '</li>');

				$('#paticipantsList').children('li').bind('touchstart mousedown', function(e) {
					
					sessionStorage.selectedId = $(this).attr('data-id');
				});
				

				//$('#paticipantsList').listview("refresh");

			});
		
			
		

	

	
		
	});
	



$(document).on('pagebeforeshow', '#pageDetailEvent', function(){      

itForumDatabase.onReady(function() {

		itForumDatabase.Events
        .filter(function(event) {return event.Id == sessionStorage.selectedId;})
        .toArray( function(events) { 
        //$("#pageDetailEvent #eventTitle").html(events.join(""));
	     //   alert(events);
	    EventDetails(events);
	        //$('#pageDetailEvent #eventTitle').html('My name is ' + events.attributes ;    
        
        });     
                });
                
                
                
                
     /*
           
         itForumDatabase.Events
        .filter(Event.Id == sessionStorage.selectedId)
        .toArray( function(events) { 
        $("#pageDetailEvent #eventTitle").html(events.join(""));
	        alert(events)
	        //$('#pageDetailEvent #eventTitle').html('My name is ' + events.attributes ;    
        
        })     
                });
                
         
*/
        
    //$('#pageDetailEvent #eventTitle').html('My name is ' + sessionStorage.selectedId); 
    
});




$(document).on('pagebeforeshow', '#pagePaticipantsDetail', function(){       

        
    itForumDatabase.onReady(function() {

		itForumDatabase.Users
        .filter(function(user) {return user.Id == sessionStorage.selectedId;})
        .toArray( function(users) { 
	    UserDetails(users);
        
        });     
                });    
    
});


});

//Virker ikke endnu

// $data.Entity.extend("$newsDatabase.Types.NewsEntry", {
// Id : {
// type : "int",
// key : true,
// computed : true
// },
// NewsDate : {
// type : Date,
// required : true
// },
// Headline : {
// type : String,
// required : true,
// maxLength : 200
// },
// Subheadline : {
// type : String,
// required : true,
// maxLength : 500
// },
// Bodytext : {
// type : String,
// required : true,
// maxLength : 3000
// },
// ImageURL : {
// type : String,
// required : false,
// maxLength : 1000
// },
// LinkURL : {
// type : String,
// required : false,
// maxLength : 1000
// },
// });
//
// $data.EntityContext.extend("$newsDatabase.Types.NewsContext", {
// NewsEntries : {
// type : $data.EntitySet,
// elementType : $newsDatabase.Types.NewsEntry
// }
// });
//
// $newsDatabase.context = new $newsDatabase.Types.NewsContext({ name: "webSql", databaseName: "newsDatabase"});
// $newsDatabase.context.onReady({
// sucess: updateView,
// error: function () {
// $newsDatabase.context = null;
// updateView();
// }
// });

// var date = new Date();
// var entity = new $newsDatabase.Types.NewsEntry({ Date: date, Headline: "Headline1", Subheadline: "Subheadline1", Bodytext: "Bodytext1" });
// $newsDatabase.context.NewsEntries.add(entity);
// $newsDatabase.context.saveChanges(updateView());
//
// var date1 = new Date();
// var entity1 = new $newsDatabase.Types.NewsEntry({ Date: date1, Headline: "Headline1", Subheadline: "Subheadline1", Bodytext: "Bodytext1" });
// $newsDatabase.context.NewsEntries.add(entity1);
// $newsDatabase.context.saveChanges(updateView());

// var date = new Date();
//
// var newsItems = newsDB.News.addMany([
// { NewsDate: date, Headline: "Headline1" , Subheadline: "Subheadline1", Bodytext: "Bodytext1"},
// { NewsDate: date, Headline: "Headline2" , Subheadline: "Subheadline2", Bodytext: "Bodytext2"},
// { NewsDate: date, Headline: "Headline3" , Subheadline: "Subheadline3", Bodytext: "Bodytext3"},
// ]);
// newsDB.saveChanges(function() {
// newItems.forEach( function(news) { alert(newsItems.Id); });
// });

// function updateView() {
// if ($newsDatabase.context) {
// $('#wrapper>div:not(#providerSelection)').show();
// $newsDatabase.context.NewsEntries.toArray(function (items) {
// $("#newList").empty();
// items.forEach(function (entity) {
// $("#newsEntryTemplate").tmpl(entity).data("entity", entity).appendTo("#newsList");
// //$('#newsList').append("<li>bøf</li>");
// alert("Vi er inde i forEach, og har added");
// });
// });
// } else {
// $('#wrapper>div:not(#providerSelection)').hide();
// }
// }

// var newsDB = new NewsDatabase({
// provider : "webSql",
// databaseName : "NewsDatabase"
// });
//
// newsDB.onReady(function() {
//
// });
//
// var news = new News();
// news.NewsDate = new Date();
// news.Headline = "Headline1";
// news.Subheadline = "Subheadline1";
// news.Bodytext = "Bodytext1";
// newsDB.add(news);
// newsDB.saveChanges().then(function() {
// alert("done!");
// });
//
// newsDB.News.forEach(function(news) {
// alert("lol");
// $("#news").append("<li>" + news.Headline + "<li>");
// });
 