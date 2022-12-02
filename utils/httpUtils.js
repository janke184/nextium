export const EP_SIGNIN = '/signin';
export const EP_GET_CONNECTED_USER = '/getconnecteduser';
export const EP_GET_TABLE = '/gettable';
export const EP_ADD_PAGE = '/page/add';
export const EP_DELETE_PAGE = '/page/delete';
export const EP_ADD_ROLE = '/role/add';
export const EP_DELETE_ROLE = '/role/delete';


export const apiCall = async (endpoint, data = {}) => {

	const url = 'http://localhost:3000/api' + endpoint;

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
	}).then(response => response.json());
}

export const replyOk = (res, data = null) => {
	res.status(200).json({
		success: true,
		data: data
	});
}

export const replyErr = (res, data = null) => {
	res.status(200).json({
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