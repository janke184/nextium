

import { ObjectId } from "mongodb";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const role = req.body;

        if(!role || !role.name){
            replyErr(res, 'Missing page');
            return false;
        }

        // convert each role.page._id into ObjectId
        role.pages = role.pages.map( (page) => {
            page._id = ObjectId(page._id);
            return page;
        });
        
        const result = await isAllowedUser(req);

        if(result.success){

            if(role._id){

                console.log('Update');
                
                // Update
                const db = await getDb();
                const db_res = await db
                    .collection("roles")
                    .updateOne(
                        {
                            _id: new ObjectId(role._id)
                        },
                        {
                            $set: {
                                name: role.name,
                                pages: role.pages
                            }
                        }
                    );

                replyOk(res, 'Role updated');



            }else{

                console.log('Insert');

                // Insert
                
                const db = await getDb();
                const db_res = await db
                    .collection("roles")
                    .insertOne(role);

                replyOk(res, 'Role added');

            }


        }else{
            
            replyErr(res, 'Invalid user');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}