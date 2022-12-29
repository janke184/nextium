export const EP_SIGNIN = '/signin';
export const EP_RESET_PASSWORD = '/resetpassword';

export const EP_GET_CONNECTED_USER = '/getconnecteduser';

export const EP_ADD_PAGE = '/page/add';
export const EP_DELETE_PAGE = '/page/delete';
export const EP_QUERY_GET_PAGES = '/query/getpages';

export const EP_ADD_ROLE = '/role/add';
export const EP_DELETE_ROLE = '/role/delete';
export const EP_QUERY_GET_ROLES = '/query/getroles';

export const EP_ADD_USER = '/user/add';
export const EP_DELETE_USER = '/user/delete';
export const EP_QUERY_GET_USERS = '/query/getusers';

export const EP_QUERY_GET_EVENTS = '/query/getevents';

export const EP_ADD_EVENT_HANDLER = '/eventhandler/add';
export const EP_DELETE_EVENT_HANDLER = '/eventhandler/delete';
export const EP_QUERY_GET_EVENT_HANDLERS = '/query/geteventhandlers';

export const EP_ADD_SMTP = '/smtp/add';
export const EP_DELETE_SMTP = '/smtp/delete';
export const EP_QUERY_GET_SMTPS = '/query/getsmtps';

export const EP_ADD_MAILING_TEMPLATE = '/mailingtemplate/add';
export const EP_DELETE_MAILING_TEMPLATE = '/mailingtemplate/delete';
export const EP_QUERY_GET_MAILING_TEMPLATES = '/query/getmailingtemplates';



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