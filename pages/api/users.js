import { replyOk, replyUnauthorized } from 'utils/httpUtils';
import { getUIDByRequest } from '/firebase/admin'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

	const uid = await getUIDByRequest(req);

	if(uid){

		replyOk(res, {uid: uid})

	}else{

		replyUnauthorized(res)

	}

}




