
import { getDb } from "connection/connect";
import { replyErr, replyOk } from "utils/httpUtils";
import { newEvent } from "utils/eventsUtils";
import { checkPasswordSecurity } from "utils/userUtils";
import { createJWT } from "utils/tokenUtils";
import md5 from "md5";
import { ROUTE_RESET_PASSWORD } from "utils/routeUtils";

export default async function handler(req, res)
{
    try {

		const username = req.body.username;
		const password = req.body.password;
		const token = req.body.token;

		console.log('username', username);
		console.log('password', password);
		console.log('token', token);


		if(token){

			if(username){
				
				const password_checked = checkPasswordSecurity(password);
	
				if(password_checked.success){
	
					const db = await getDb();
					const user = await db
						.collection("users")
						.findOne({
							username: username,
							deleted_date: { $eq: null }
						});

					if (user) {

						if(user.reset_password_token==token){
							
							// update user setting new attribute call reset_password_token
							await db
								.collection("users")
								.updateOne(
									{
										_id: user._id
									},
									{
										$set: {
											password: password,
											reset_password_token: null
										}
									}
								);

							// create new event
							await newEvent({
								user_id: user._id,
								type: "PASSWORD_CHANGED",
								data: {
									username: username
								}
							});

							replyOk(res, "Password changed");

						}else{

							replyErr(res, {
								redirect_url: ROUTE_RESET_PASSWORD
							});
							
						}

					}else{
						replyErr(res, "Invalid username");

					}
	
				}else{
	
					replyErr(res, password_checked.message);
	
				}

			}else{
				replyErr(res, "Missing username");

			}
			
		}else if(username){

			const db = await getDb();
			const user = await db
				.collection("users")
				.findOne({
					username: username,
					deleted_date: { $eq: null }
				});
	
			if (user) {

				const userTokenId = md5(createJWT({_id: user._id}));

				if(userTokenId){

					// update user setting new attribute call reset_password_token
					await db
						.collection("users")
						.updateOne(
							{
								_id: user._id
							},
							{
								$set: {
									reset_password_token: userTokenId
								}
							}
						);
		
					newEvent("RESET_PASSWORD", {
						username: user.username,
						reset_password_token: userTokenId
					});
		
					replyOk(res, "Reset password token created");

				}else{
					replyErr(res, "Invalid username");
					
				}
	
			} else {
				replyErr(res, "Invalid username");

			}

		}else{
			replyErr(res, "Missing parameters");

		}

    } catch (error) {
		console.log('Unexpected error', error);
        replyErr(res, 'Unexpected error');
        
    }
}