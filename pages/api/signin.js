
import { getDb } from "connection/connect";
import { createJWTUserToken } from "utils/tokenUtils";
import { ObjectId } from "mongodb";
import { replyErr, replyOk } from "utils/httpUtils";

export default async function handler(req, res)
{
    try {

        const db = await getDb();
        const user = await db
			.collection("users")
			.findOne({
				username: req.body.username,
				password: req.body.password
			});

		if (user) {

			const userTokenId = createJWTUserToken(user._id);


			const db_res = await db
				.collection("tokens")
				.updateOne(
					{ 
						userTokenId: userTokenId
					},
					{ 
						$set: { 
							user_id: new ObjectId(user._id),
							userTokenId: userTokenId 
						} 
					},
					{ upsert: true }
				);

			replyOk(res, {userTokenId: userTokenId});

		} else {
			replyErr(res, "Invalid username or password (1)");
		}

    } catch (error) {
		console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }
}