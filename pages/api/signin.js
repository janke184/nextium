import { replyErr } from "utils/httpUtils";
import { getUIDByRequest, getUserFromDbByUID, createDocument
    , updateDocument, getUserFromFirebaseAuthByUID} from "/firebase/admin";
import { replyOk, replyUnauthorized } from "/utils/httpUtils";

export default async function handler(req, res)
{
    try {
        
        const uid = await getUIDByRequest(req)
    
        if(uid){
    
            const db_user = await getUserFromDbByUID(uid.user_id);
    
            console.log('db_user: ' , db_user);
    
            
            // Si no tengo el usuario en la base, lo creo con los datos de firebase auth
            if(!db_user){
                
                console.log('busco los datos del usuario en firebase auth')
                const fba_user = await getUserFromFirebaseAuthByUID(uid.user_id)
                console.log('fba_user', fba_user)
                console.log('fba_user', fba_user)

                if(fba_user){

                    console.log('creo el usuario')
                    const newUserDb = await createDocument("users", { 
                        uid: uid.user_id,
                        email: fba_user.email
                    })
                    console.log('creo el usuario', newUserDb)

                }else{
                    replyErr(res, "User data not found")

                }
            }    
    
            replyOk(res)
    
        }else{
    
            replyUnauthorized(res)
    
        }

    } catch (error) {
        console.log('error', error)
        replyErr(res)
        
    }
}