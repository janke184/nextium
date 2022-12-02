

import { ObjectId } from "mongodb";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const page = req.body;

        if(!page || !page.name || !page.route){
            replyErr(res, 'Missing page');
            return false;
        }

        const result = await isAllowedUser(req);

        if(result.success){

            if(page._id){

                console.log('Update');
                
                // Update
                const db = await getDb();
                const db_res = await db
                    .collection("pages")
                    .updateOne(
                        {
                            _id: new ObjectId(page._id)
                        },
                        {
                            $set: {
                                name: page.name,
                                route: page.route,
                                endpoints: page.endpoints
                            }
                        }
                    );

                replyOk(res, 'Page updated');


            }else{

                console.log('Insert');

                // Insert
                
                const db = await getDb();
                const db_res = await db
                    .collection("pages")
                    .insertOne(page);

                replyOk(res, 'Page added');

            }


        }else{
            
            replyErr(res, 'Invalid user');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}