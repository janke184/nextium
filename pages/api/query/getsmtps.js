

import { allowedQueryResults } from "/utils/crmTableUtils";
import { replyErr, replyOk } from "/utils/httpUtils";


export default async function handler(req, res)
{
    const result = await allowedQueryResults("smtps", req);

    if(result.success){
        replyOk(res, {rows: result.rows});
    }else{
        replyErr(res, result.message);
    }
}