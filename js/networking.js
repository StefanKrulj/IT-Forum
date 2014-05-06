/*
 * Register Push TODO Med eller uden email ? hvis ja, email parameter i function til alias
 */
function pushRegister(email) {
	var pushConfig = {
		pushServerURL : "https://aerogear-itforum.rhcloud.com/",
		alias : "" + email,
		android : {
			senderID : "1002823794109",
			variantID : "aa00132e-acaa-4070-ad49-0256d07a9329",
			variantSecret : "93da4e63-426a-4f11-b715-6d53d6bc1d69"
		},
		ios : {
			variantID : "aa00132e-acaa-4070-ad49-0256d07a9329",
			variantSecret : "93da4e63-426a-4f11-b715-6d53d6bc1d69"
		}
	};
	try {
		push.register(onNotification, successHandler, errorHandler, pushConfig);
	} catch (err) {
		txt = "There was an error on this page.\n\n";
		txt += "Error description: " + err.message + "\n\n";
		alert(txt);
	}
}



/*
 * Success/error handlers
 */
function successHandler(result) {
	console.log("Success " + result);
}

function errorHandler(error) {
	console.log("Error: " + error);
}

/*
 * On Notification
 */
function onNotification(e) {
	/*
	* if the notification contains a sound, play it.
	*/
	// if (e.sound) {
	// // install the media plugin to use this
	// var media = new Media("/android_asset/www/" + e.sound);
	// media.play();
	// }

	if (e.coldstart) {
		// TODO Åbner app, den skal så redirect til anden side
	}
	/*
	* TODO Hvad skal der med e.alert
	*/
	// statusList.append('<li>MESSAGE -> MSG: ' + e.alert + '</li>');

	//only on ios
	if (e.badge) {
		push.setApplicationIconBadgeNumber(successHandler, e.badge);
	}
}

/*
 *
 */
// function sendNotification() {
	// var toUser = "User4";
// 
	// var user = localStorage.getItem("user");
	// var fromUser = JSON.parse(user).email;
	// var msg = "Hej med dig";

function sendNotification (toUser, msg) {
	var user = localStorage.getItem("user");
	var fromUser = JSON.parse(user).email;
	
	var result;

	var anotherCustomKey = 'some other value';
	
	$.ajax({
		type : "GET",

		url : "http://nodejs-itforum.rhcloud.com/notify?alert=" + encodeURIComponent(msg) + "&Alias=" + encodeURIComponent(toUser) + "&someKey=" + encodeURIComponent(fromUser) + "&anotherCustomKey=" + encodeURIComponent(anotherCustomKey) + "",
		dataType : "jsonp",

		success : function(result) {
			alert("Succeeded: " + JSON.stringify(result));
		},
		error : function() {
			alert('failure to access "getevents" api' + JSON.stringify(result));
		}
	});
}






