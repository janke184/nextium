import AppLayoutShell from "components/AppLayoutShell";
import { apiCall } from "utils/httpUtils";
import { auth, getUserTokenId} from '/firebase/client'
export default function PageUsers(props)
{
    const do_something = async ()=> {
        
        apiCall("signin", {}).then( (resp) => {
            console.log('resp', resp)
        });
    }
    return (
        <>
        <AppLayoutShell>
            Usuario <button type="button" onClick={do_something}>crear usuario</button>
        </AppLayoutShell>
        </>
    );
}
