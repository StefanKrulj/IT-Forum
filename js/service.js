/*
 * Mobile Page Transition
 */
$(document).bind("mobileinit", function() {
	$.mobile.defaultPageTransition = "slide";
});

/*
 * Wait for device API libraries to load
 */
document.addEventListener("deviceready", onDeviceReady, false);

/*
 * Device APIs are available
 */
function onDeviceReady() {
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);

	// FastClick
	FastClick.attach(document.body);

	// Native dialogs TODO Ser ikke ud til at virke
	if (navigator.notification) {// Override default HTML alert with native dialog
		window.alert = function(message) {
			navigator.notification.alert(message, // message
			null, // callback
			"ITForum", // title
			'OK' // buttonName
			);
		};
	}
	initiateDatabase(function() {
		// Hide splashscreen
		if (navigator.splashscreen != undefined) {
			navigator.splashscreen.hide();
		}
	});
}

function successHandler(result) {
	console.log("successfully registered with AeroGear push server : " + result);
}

function errorHandler(error) {
	console.log("Error in registering with AeroGear push server : " + error);
}

function onNotification(e) {
	showNotification(e.alert);
}

/*
 * When leaving app
 */
function onPause() {
	// Handle the pause event
}

/*
 * When resuming app
 */
function onResume() {
	// Handle the resume event
	getNewEvents();
}

/*
 * returns true if any internet connection is available, false if not
 */
function online() {
	var networkState = navigator.connection.type;

	var states = {};
	states[Connection.UNKNOWN] = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WiFi connection';
	states[Connection.CELL_2G] = 'Cell 2G connection';
	states[Connection.CELL_3G] = 'Cell 3G connection';
	states[Connection.CELL_4G] = 'Cell 4G connection';
	states[Connection.CELL] = 'Cell generic connection';
	states[Connection.NONE] = 'No network connection';

	if (states[networkState] == 'No network connection') {
		return false;
	} else {
		return true;
	}
}

/*
 * getNewEvents is called from service when new eventlist is needed
 */
function getNewEvents() {
	if (online()) {
		console.log("online");
		getLocalEvents(function() {
			getRemoteEvents();
		});
		getRemoteEvents();
	} else {
		console.log("offline");
		getLocalEvents();
	}
}

/*
 * TODO Dette er til test på browser, metoden ovenover er til mobile platformen
 */
function getNewEvents() {
	getRemoteEvents();
}

/*
 * create Jaydata database.
 */
function initiateDatabase() {
	createLocalDatabase(function() {
		console.log("Database created");
		getNewEvents();
	});
}


$('#pageEvent').on('pageshow', function() {
	try {
		$('#eventList').listview('refresh');
	} catch (e) {
		$('#eventList').listview();
	}
});
