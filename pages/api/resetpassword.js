
import { getDb } from "connection/connect";
import { createJWTUserToken } from "utils/tokenUtils";
import { ObjectId } from "mongodb";
import { replyErr, replyOk } from "utils/httpUtils";
import { newEvent } from "utils/eventsUtils";

export default async function handler(req, res)
{
    try {

        const db = await getDb();
        const user = await db
			.collection("users")
			.findOne({
				username: req.body.username,
				deleted_date: { $eq: null }
			});

		if (user) {

			newEvent("RESET_PASSWORD", {username: user.username});

			replyOk(res);

		} else {
			replyErr(res, "Invalid username or password (1)");
		}

    } catch (error) {
		console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }
}