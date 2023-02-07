

import { ObjectId } from "mongodb";
import { checkPasswordSecurity, checkUsernameSecurity } from "utils/validationUtils";
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

        // check if username is valid
        const userChecking = checkUsernameSecurity(user.username);
        if(!userChecking.success){
            replyErr(res, userChecking.message);
            return false;
        }

        // check if password is valid
        const passwordChecking = checkPasswordSecurity(user.password);
        if(!passwordChecking.success){
            replyErr(res, passwordChecking.message);
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
                                email: user.email,
                                display_name: user.display_name,
                                roles: user.roles,
                                updated_date: new Date()
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
                    .insertOne({
                        ...user,
                        created_date: new Date()
                    });

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