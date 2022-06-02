import { getUserTokenId } from "/firebase/client";

export const apiCall = async (apiPath, data = {})=>{

	// Add the user credentials to post data
	const userTokenId = await getUserTokenId();
	data.userTokenId = userTokenId;

	const url = 'http://localhost:3000/api/' + apiPath;

	return fetch(url, {
		method: 'POST', 
		mode: 'cors', 
		cache: 'no-cache', 
		credentials: 'same-origin', 
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow', 
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data) 
	});
}

export const replyOk = (res, data = null) => {
	res.status(200).json({
		success: true,
		data: data
	});
}
export const replyErr = (res, data = null) => {
	res.status(500).json({
		success: false,
		data: data
	});
}
export const replyUnauthorized = (res, data = null) => {
	res.status(401).json({
		success: false,
		data: data
	});
}