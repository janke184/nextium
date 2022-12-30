import { getDb } from "/connection/connect";
import { decodeJWT } from "/utils/tokenUtils";

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
                
            const token = decodeJWT(tokenDb.userTokenId);
    
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

export const isAllowedUser = async (req, route) => {

    const user_resp = await getConnectedUser(req);

    const result = {
        success: false
    };
    
    if(user_resp.success)
    {
        result.user = user_resp.user;

        let allowed = false;

        // if req.url starts with /api
        if(req.url.startsWith('/api')){

            // check if user has that endpont in its routes
            console.log('Is an API Call');
            allowed = isAllowedToAccessEndpoint(req.url, user_resp);
            
        }else{

            // Check if user has that page in its routes
            console.log('Is a page request');
            allowed = isAllowedToAccessPage(route, user_resp);

        }

        console.log('allowed', allowed);

        if(allowed){
            result.success = true;
        }

        
    }

    return result;

}

const isAllowedToAccessPage = (url, user_resp) => {

    console.log('URL', url);
    
    if(url){

        // if user has any page with any route that matches the url, then he is allowed
        const allowed = user_resp.user.roles.find( (role) => {

            console.log('role', role.name);

            return role.pages.find( (page) => 
            {
                console.log('route', page.route);
                
                return url == page.route;
            });
        });

        return allowed;

    }else{

        console.log('Missing url');
        return undefined;

    }

}

const isAllowedToAccessEndpoint = (url, user_resp) => {

    console.log('URL', url);
    
    if(url){

        // if user has any role with any page with any endopoint that matches the url, then he is allowed
        const allowed = user_resp.user.roles.find( (role) => {

            console.log('role', role.name);

            return role.pages.find( (page) =>
            {
                console.log('page', page.name);

                return page.endpoints.find( (endpoint) =>
                {
                    console.log('endpoint', endpoint.endpoint);

                    return url == '/api' + endpoint.endpoint;
                });
            });
        });

        return allowed;

    }else{
        return undefined;

    }

}

export const checkPasswordSecurity = (password) => {
    
    let result = {
        success: false
    };

    if(password){

        if(password.length >= 8){
            result.success = true;

        }else{
            result.message = "Password must be at least 8 characters long";
        }

    }else{
        result.message = "Missing password";
    }

    return result;

}

