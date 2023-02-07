

import { ObjectId } from "mongodb";
import { getDb } from "/connection/connect";
import { replyErr, replyOk } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";


export default async function handler(req, res)
{
    try {
        const template = req.body;

        if(!template 
        ){
            replyErr(res, 'Missing template');
            return false;
        }


        const result = await isAllowedUser(req);

        if(result.success){

            if(template._id){

                console.log('Update');

                // convert template.smtp._id to ObjectId
                if(template.smtp && template.smtp._id){
                    template.smtp._id = new ObjectId(template.smtp._id);
                }

                // convert template.event_handler._id to ObjectId
                if(template.event_handler && template.event_handler._id){
                    template.event_handler._id = new ObjectId(template.event_handler._id);
                }
                
                // Update
                const db = await getDb();
                const db_res = await db
                    .collection("mailing_templates")
                    .updateOne(
                        {
                            _id: new ObjectId(template._id)
                        },
                        {
                            $set: {
                                name: template.name,
                                from_name: template.from_name,
                                cc: template.cc,
                                cco: template.cco,
                                reply_to: template.reply_to,
                                subject: template.subject,
                                body: template.body,
                                smtp: template.smtp,
                                event_handler: template.event_handler,
                                updated_date: new Date()
                            }                            
                            
                        }
                    );

                replyOk(res, 'Template updated');



            }else{

                console.log('Insert');

                // Insert
                
                const db = await getDb();
                const db_res = await db
                    .collection("mailing_templates")
                    .insertOne({
                        ...template,
                        created_date: new Date()
                    });

                replyOk(res, 'Template added');

            }


        }else{
            
            replyErr(res, 'Invalid Template');

        }

    } catch (error) {
        console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }

}