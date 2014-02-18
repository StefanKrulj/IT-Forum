

function EventDetails(event){

	event.forEach(function(eve) { 
	
	         $("#pageDetailEvent #eventAttributes").empty();

        $("#pageDetailEvent #eventAttributes").append("<h2 id='eventTitle'>" + eve.Name + "</h2>" );
        $("#pageDetailEvent #eventAttributes").append("<p id='eventData'> Den " + eve.EventDate + " kl: "+ eve.StartTime + " - " + eve.EndTime + "</p>" ); 
        $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.EventLocation + "</p>" );
        $("#pageDetailEvent #eventAttributes").append("<p id='eventDescription'>" + eve.Description + "</p>" );
		
       // $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.StartTime + "</p" );
       // $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.EventLocation + "</p" );
       // $("#pageDetailEvent #eventAttributes").append("<p id='eventLocation'>" + eve.EventLocation + "</p" );

	        //alert(eve.Name);
	        
	        
	        
	        
	        });
}

function NewsDetails(itNews){

	itNews.forEach(function(news) { 
	
	         $("#pageNewsDetail #newsAttributes").empty();

        $("#pageNewsDetail #newsAttributes").append("<h2 id='newsTitle'>" + news.NewsTitle + "</h2>" );
        $("#pageNewsDetail #newsAttributes").append("<p id='newsDate'> Den " + news.NewsDate + "</p>" ); 
        
        $("#pageNewsDetail #newsAttributes").append("<p id='newsDescription'>" + news.NewsText + "</p>" );
		
               
	        
	        
	        
	        });
}

/*
	type : String,
			required : true,
			maxLength : 100
		},
		RegistrationDeadline : {
			type : String,
			required : true,
			maxLength : 100
		},
		EventLocation : {
			type : String,
			required : true,
			maxLenght : 100
		},
		StartTime : {
			type : String,
			required : true,
			maxLength : 100
		},
		EndTime : {
			type : String,
			required : true,
			maxLength : 100
		},
		Arranger : {
			type : String,
			required : true,
			maxLength : 100
		},
		Description : {
			type : String,
			required : true,
			maxLength : 3000
		},
		Tags : {
			type : String,
			required : false,
			maxLength : 450
		},
		Program : {
			type : String,
			required : false,
			maxLength : 1000
		},
		EventUrl : {
			type : String,
			required : false,
			maxLength : 200
		},
		Price : {
*/


function MemberDetails(member){
		//alert("kommer jheg her?")


	member.forEach(function(mem) { 
		$("#pageMemberDetail #memberAttributes").empty();
		
			//Size : 50,
			//Price : 100,
			
			//ZipCode : 8700,
			//Town : "Horsens",
			//PhoneNo : 87452632,
			//EanNo : 458742145477588
        $("#pageMemberDetail #memberAttributes").append("<h2 id='memberName'> Navn: " + mem.Name + "</h2>" );	
        $("#pageMemberDetail #memberAttributes").append("<h3 id='memberAddress'>" + mem.Address + "</h3>" );
        $("#pageMemberDetail #memberAttributes").append("<h3 id='memberZipCode'>" + mem.ZipCode + " " +  mem.Town +"</h3>" );
       	//$("#pageMemberDetail #memberAttributes").append("<h3 id='memberZipCode'>" + mem.ZipCode + " " +  mem.Town +"</h3>" );
       //	$("#pageMemberDetail #memberAttributes").append("<h3 id='memberZipCode'>" + mem.ZipCode + " " +  mem.Town +"</h3>" );
       	
        //$("#pageMemberDetail #memberAttributes").append("<a href=" + mem.WebPage + ">WebPage</a>"); 

        //$("#pageMemberDetail #memberAttributes").append("<p id='memberProfileText'>" + mem.ProfileText + "</p>" );
 
	  });
}

function UserDetails(user){
		

	user.forEach(function(us) {
	 
		$("#pageUserDetail #userAttributes").empty();
		if( us.Id == localStorage.profilID){
			 $("#pageUserDetail #userAttributes").append("<a href='#page03' class='ui-btn ui-btn-inline ui-icon-gear ui-btn-icon-right'>Indstillinger</a>");
			 
			if (sessionStorage.profileSelected == true){
			
			$("#userBack").attr("href", "#page01");
							
				sessionStorage.profileSelected = false;
			}
			
		}
		
		
        $("#pageUserDetail #userAttributes").append("<h2 id='userFirstName'>Navn: " + us.FirstName + " " + us.LastName + "</h2>" );
        $("#pageUserDetail #userAttributes").append("<h3 id='userTitle'>Titel: " + us.Title + "</h3>" );
       
        $("#pageUserDetail #userAttributes").append("<a href=" + us.LinkedInUrl + ">LinkedinUrl</a>");
		$("#pageUserDetail #userAttributes").append("<p id='userProfileText'> Profiltekst: " + us.ProfileText + "</p>" );
		$("#pageUserDetail #userAttributes").append("<p id='userPhoneNo'>Arbejdstelefon: " + us.PhoneNo + "</p>" );	
		$("#pageUserDetail #userAttributes").append("<p id='userMobileNo'>Mobiltelefon: " + us.MobileNo + "</p>" );	
		$("#pageUserDetail #userAttributes").append("<p id='userEmail'>emailadresse: " + us.Email + "</p>" );	
			
	       
	        
	        
	        });
}

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
