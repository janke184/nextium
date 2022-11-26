import AppLayoutShell from "/components/AppLayoutShell";
import { useEffect, useState } from "react";
import { apiCall, EP_GET_CONNECTED_USER } from "/utils/httpUtils";
import AccessDenied from "components/AccessDenied";
import { useAuthenticatedContext } from "contexts/AuthenticatedContext";

export default function AuthenticatedPage({children, props})
{
	const [isLoading, setIsLoading] = useState(true);
    const {user, setUser} = useAuthenticatedContext();

    useEffect(() => {

        if(!user){

            apiCall(EP_GET_CONNECTED_USER).then( (resp) => {
                setIsLoading(false);
                setUser(resp.data.user);
            });

        }else{

        }

    }, []);


	if(isLoading){
		return <AppLayoutShell>Loading...</AppLayoutShell>
	}

	if(user){

		return (
			<>
				{children}
			</>
		);

	}else{

		return (
            <AccessDenied></AccessDenied>
		);
	}

    
}

