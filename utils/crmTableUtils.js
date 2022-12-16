import { getDb } from "/connection/connect";
import { isAllowedUser } from "/utils/userUtils";


export const allowedQueryResults = async (collection, req) => {
	
	let result = {
		success : false
	};

	try {
		
        const columns = req.body.columns ? req.body.columns : [];
        const filter = req.body.filter ? req.body.filter : {};

        let projection = {};
        columns.forEach(column => {
            projection[column.field] = 1;
        });

        if(!collection){
			result.message = 'Missing collection';
            return false;
        }

        const allowed = await isAllowedUser(req);

        if(allowed.success){

            const db = await getDb();
            const db_res = await db
                .collection(collection)
                .find(
                    filter
                    ,{
                        projection: projection
                    })
                .toArray();

			result.success = true;
			result.rows = db_res;

        }else{

			result.message = 'Not allowed';

        }

    } catch (error) {
        console.log('error', error);
		result.error = error;
		result.message = 'Unexpected error';
        
    }

	return result;
}