import { getDb } from "connection/connect";
import { decodeJWTUserToken } from "./tokenUtils";

export const getConnectedUser = async (req) => {

    const result = {
        success: false
    };
    
    const userTokenId = req.cookies.userTokenId;

    if(userTokenId){

        const db = await getDb();
        const tokenDb = await db
            .collection("tokens")
            .findOne({
                userTokenId: userTokenId
            });

        if(tokenDb){
                
            const token = decodeJWTUserToken(tokenDb.userTokenId);
    
            if(token){

                const user = await db
                    .collection("users")
                    .findOne({
                        _id: tokenDb.user_id,
                        deleted_date: null
                    },
                    {
                        projection: {
                            password: 0
                        }
                    });
        
                if(user){

                    result.success = true;
                    result.user = user;

                }else{
                    result.message = "Non-existent user";

                }
                

            }else{
                result.message = "Invalid token";

                // delete token from db because it is invalid
                await db
                    .collection("tokens")
                    .deleteOne({
                        userTokenId: userTokenId
                    });
            }    

        }else{
            result.message = "Non-existent token";

        }


    }else{
        result.message = "Missing parameters";

    }        

    return result;

}