import AccessDenied from "components/AccessDenied";
import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import { useAuthenticatedContext } from "contexts/AuthenticatedContext";
import { getUserIdOfRequest } from "utils/pageUtils";

export default function PageDashboard(props)
{
	if(props.access_granted){

		const { user } = useAuthenticatedContext(null);

		return (
			<AuthenticatedPage>
				<AppLayoutShell>
					Dashboard {JSON.stringify(user.username)}
				</AppLayoutShell>
			</AuthenticatedPage>
		);

	}else{

		return (
			<AccessDenied/>
		);

	}
    
}


export const getServerSideProps = async ({ req, res }) => 
{
    return {
      props: {
        access_granted: await getUserIdOfRequest(req) ? true : false
      },
    };

};