

import { ObjectId } from "mongodb";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const user = req.body;

        if(!user || !user.username || !user.password){
            replyErr(res, 'Missing page');
            return false;
        }

        // convert each user.role._id into ObjectId
        user.roles = user.roles.map( (role) => {
            role._id = ObjectId(role._id);
            return role;
        });

        const result = await isAllowedUser(req);

        if(result.success){

            if(user._id){

                console.log('Update');
                
                // Update
                const db = await getDb();
                const db_res = await db
                    .collection("users")
                    .updateOne(
                        {
                            _id: new ObjectId(user._id)
                        },
                        {
                            $set: {
                                username: user.username,
                                password: user.password,
                                display_name: user.display_name,
                                roles: user.roles
                            }
                        }
                    );

                replyOk(res, 'User updated');



            }else{

                console.log('Insert');

                // Insert
                
                const db = await getDb();
                const db_res = await db
                    .collection("users")
                    .insertOne(user);

                replyOk(res, 'Users added');

            }


        }else{
            
            replyErr(res, 'Invalid user');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}