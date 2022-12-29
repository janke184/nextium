

import { ObjectId } from "mongodb";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const _id = req.body._id;

        if(!_id){
            replyErr(res, 'Missing template');
            return false;
        }

        const result = await isAllowedUser(req);

        if(result.success){
    
            // update page setting deleted_date to current date
            const db = await getDb();
            const db_res = await db
                .collection("mailing_templates")
                .updateOne(
                    {
                        _id: new ObjectId(_id)
                    },
                    {
                        $set: {
                            deleted_date: new Date()
                        }
                    }
                );

            replyOk(res, 'Template deleted');

        }else{
            
            replyErr(res, 'Invalid Template');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}