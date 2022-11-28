

import { getDb } from "connection/connect";
import { replyErr, replyOk } from "utils/httpUtils";
import { isAllowedUser } from "utils/userUtils";


export default async function handler(req, res)
{
    try {
        const collection = req.body.collection;
        const columns = req.body.columns ? req.body.columns : [];

        let projection = {};
        columns.forEach(column => {
            projection[column.field] = 1;
        });

        if(!collection){
            replyErr(res, 'Missing collection');
            return false;
        }

        const result = await isAllowedUser(req);

        if(result.success){

            const db = await getDb();
            const db_res = await db
                .collection(collection)
                .find(
                    {

                    }
                    ,{
                        projection: projection
                    })
                .toArray();

            replyOk(res, {rows: db_res});

        }else{
            
            replyErr(res, 'Invalid user');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }
}