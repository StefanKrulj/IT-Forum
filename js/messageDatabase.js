var itForumDatabase;

function createMessageDatabase() {
	console.log("Creating Database");

	/*
	 * Messages
	 */
	$data.Entity.extend("Message", {
		id : {
			type : "int",
			// required : true,
			key : true,
			computed : true
		},
		toAlias : {
			type : string,
			maxLength : 50
		},
		fromAlias : {
			type : string,
			maxLength : 50
		},
		date : {
			type : string,
			maxLength : 20
		},
		messageText : {
			type : string,
			maxLength : 200
		}
	});
	
	$data.EntityContext.extend("ITForumDatabase", {
		Messages : {
			type : $data.EntitySet,
			elementType : Message
		}	
	});
}