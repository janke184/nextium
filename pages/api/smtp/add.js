

import { ObjectId } from "mongodb";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const smtp = req.body;

        if(!smtp 
            || !smtp.name
            || !smtp.host
            || !smtp.username 
            || !smtp.password
            || !smtp.from
            || !smtp.from_name
            || !smtp.port
        ){
            replyErr(res, 'Missing smtp');
            return false;
        }


        const result = await isAllowedUser(req);

        if(result.success){

            if(smtp._id){

                console.log('Update');
                
                // Update
                const db = await getDb();
                const db_res = await db
                    .collection("smtps")
                    .updateOne(
                        {
                            _id: new ObjectId(smtp._id)
                        },
                        {
                            $set: {
                                name: smtp.name,
                                from: smtp.from,
                                from_name: smtp.from_name,
                                host: smtp.host,
                                port: smtp.port,
                                username: smtp.username,
                                password: smtp.password,
                                updated_date: new Date()
                            }
                        }
                    );

                replyOk(res, 'SMTP updated');



            }else{

                console.log('Insert');

                // Insert
                
                const db = await getDb();
                const db_res = await db
                    .collection("smtps")
                    .insertOne({
                        ...smtp,
                        created_date: new Date()
                    });

                replyOk(res, 'SMTP added');

            }


        }else{
            
            replyErr(res, 'Invalid SMTP');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}