

import { ObjectId } from "mongodb";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const eventHandler = req.body;

        if(!eventHandler || !eventHandler.name || !eventHandler.event_name || !eventHandler.event_handler){
            replyErr(res, 'Missing event handler');
            return false;
        }

        const result = await isAllowedUser(req);

        if(result.success){

            if(eventHandler._id){

                console.log('Update');
                
                // Update
                const db = await getDb();
                const db_res = await db
                    .collection("event_handlers")
                    .updateOne(
                        {
                            _id: new ObjectId(eventHandler._id)
                        },
                        {
                            $set: {
                                name: eventHandler.name,
                                event_name: eventHandler.event_name,
                                event_handler: eventHandler.event_handler,
                                next_event: eventHandler.next_event
                            }
                        }
                    );

                replyOk(res, 'Event handler updated');



            }else{

                console.log('Insert');

                // Insert
                
                const db = await getDb();
                const db_res = await db
                    .collection("event_handlers")
                    .insertOne(eventHandler);

                replyOk(res, 'Event handler added');

            }


        }else{
            
            replyErr(res, 'Invalid event handler');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}