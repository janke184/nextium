import { getDb } from "/connection/connect";
import { decodeJWTUserToken } from "/utils/tokenUtils";

export const getUserIdOfRequest = async (req) => {

    const userTokenId = req.cookies.userTokenId;

	const user_id = await getUserIdFromToken(userTokenId);

    return user_id;

};

export const getUserIdFromToken = async (userTokenId) => 
{
    let user_id = null;

    // Check if the userTokenId is valid
    if(userTokenId)
    {
		const db = await getDb();
		const token = await db
			.collection("tokens")
			.findOne({
				userTokenId: userTokenId
			});

		if(token)
		{
			if(decodeJWTUserToken(userTokenId))
			{
				user_id = token.user_id.toString();
			}
		}

    }

    return user_id;
}