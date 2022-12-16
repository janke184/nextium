exports = async function(changeEvent) {
	/*
		A Database Trigger will always call a function with a changeEvent.
		Documentation on ChangeEvents: https://docs.mongodb.com/manual/reference/change-events/

		Access the _id of the changed document:
		const docId = changeEvent.documentKey._id;

		Access the latest version of the changed document
		(with Full Document enabled for Insert, Update, and Replace operations):
		const fullDocument = changeEvent.fullDocument;

		const updateDescription = changeEvent.updateDescription;

		See which fields were changed (if any):
		if (updateDescription) {
			const updatedFields = updateDescription.updatedFields; // A document containing updated fields
		}

		See which fields were removed (if any):
		if (updateDescription) {
			const removedFields = updateDescription.removedFields; // An array of removed fields
		}

		Functions run by Triggers are run as System users and have full access to Services, Functions, and MongoDB Data.

		Access a mongodb service:
		const collection = context.services.get(<SERVICE_NAME>).db("db_name").collection("coll_name");
		const doc = collection.findOne({ name: "mongodb" });

		Note: In Atlas Triggers, the service name is defaulted to the cluster name.

		Call other named functions if they are defined in your application:
		const result = context.functions.execute("function_name", arg1, arg2);

		Access the default http client and execute a GET request:
		const response = context.http.get({ url: <URL> })

		Learn more about http client here: https://www.mongodb.com/docs/atlas/app-services/functions/context/#std-label-context-http
	*/

	console.log('changeEvent', JSON.stringify(changeEvent));
	console.log('changeEvent.operationType', changeEvent.operationType);


	// if is an update
	if(changeEvent.operationType === 'update') {

        console.log('update event');

        // connect to db
		const mongodb = context.services.get('AtlasCluster');
		const db = mongodb.db("nextcrm");	
		
        // New Page
		const fullDocument = changeEvent.fullDocument;
		console.log(`Page updated: ${fullDocument.name} - ${fullDocument.route}`);

        // Looking for roles that have this page
		const roles = await db.collection("roles").find({
			pages: {
				$elemMatch: {
					_id: changeEvent.documentKey._id
				}
			}
		}).toArray();

        // Update roles
		console.log(`Roles qty: ${roles.length}`);
		roles.forEach(async role => {

			console.log(`Role to Update: ${role.name}`);

            // New page's lists
			const pages = role.pages.map(page => {
				if (page._id.toString() === changeEvent.documentKey._id.toString()) {

					// Update page keeping some fields from the old page
					return {
						...fullDocument,
						group: page.group,
						icon: page.icon,
						visible: page.visible,
						order: page.order
					};
				}
				return page;
			});

			// Replace all pages of the role
			const db_resp = await db.collection("roles").updateOne(
				{
					_id: role._id
				},
				{
					$set: {
						pages: pages
					}
				}
			);

			console.log('Update result', JSON.stringify(db_resp));
			
		})

	}else{
		console.log('Is not an update');
	}


};