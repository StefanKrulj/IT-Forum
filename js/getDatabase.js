$(document).ready(function() {
	
	getEventsJSON();
	
	
	
	function getEventsJSON() {
  		$.ajax({ 			
   				url : "http://www.itforum.dk/ws/appapi.asp?method=getevents",
   				dataType : "jsonp",
   				success : function(parsed_json) {
   					alert("getEventsJSON");
    				alert("Title:" + parsed_json[0].title);
    				
    				
   				},
   				error: function(){
    				alert('failure');
  				} 
  		});
 	}
 	
 	function saveEvents(e) {
 		itForumDatabase.onReady(function() {
 			itForumDatabase.Events.add({
				title : e.getString("title"),
				// subtitle : eventsArray[i].subtitle,
				// //date : eventsArray[i].date,
				// location : eventsArray[i].location,
				// type : eventsArray[i].type,
				// description : eventsArray[i].description,
				// url1 : eventsArray[i].url1,
				// url2 : eventsArray[i].url2,
					// //tags : for()
				eventid : parseInt(e.getString("eventid")),
				// organiser : eventsArray[i].organiser,
				// deadline : eventsArray[i].deadline,
				// starttime : eventsArray[i].starttime,
				// endtime : eventsArray[i].endtime,
				// image : eventsArray[i].image
				// //lessons : eventsArray[i].lessons
				// //prices : eventsArray[i].prices
			});
		});
	}

});