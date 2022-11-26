

import { replyErr, replyOk } from "utils/httpUtils";
import { getConnectedUser } from "utils/userUtils";

export default async function handler(req, res)
{
    try {

        const result = await getConnectedUser(req);

        if(result.success){

            replyOk(res, {user: result.user});

        }else{
            
            replyErr(res, 'Invalid user');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }
}