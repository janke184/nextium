

import { ObjectId } from "mongodb";
import { checkPasswordSecurity, checkUsernameSecurity } from "utils/validationUtils";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const person = req.body;

        if(!person || !person.display_name){
            replyErr(res, 'Missing display name');
            return false;
        }

        const result = await isAllowedUser(req);

        if(result.success){

            if(person._id){

                console.log('Update');
                
                // Update
                const db = await getDb();
                const db_res = await db
                    .collection("people")
                    .updateOne(
                        {
                            _id: new ObjectId(person._id)
                        },
                        {
                            $set: {
                                display_name: person.display_name,
                                first_name: person.first_name,
                                last_name: person.last_name,
                                email: person.email,
                                main_phone: person.main_phone,
                                updated_date: new Date()
                            }
                        }
                    );

                replyOk(res, 'Person updated');



            }else{

                console.log('Insert');

                // Insert
                
                const db = await getDb();
                const db_res = await db
                    .collection("people")
                    .insertOne({
                        ...person,
                        created_date: new Date()
                    });

                replyOk(res, 'Person added');

            }


        }else{
            
            replyErr(res, 'Invalid person');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}