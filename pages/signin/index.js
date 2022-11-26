import AppLayout from "components/AppLayout";
import Link from "next/link";
import { useState } from 'react'
import { errorAlert, okAlert } from "/utils/notifications";
import { useRouter } from "next/router"
import { apiCall } from "/utils/httpUtils";
import jsCookie from "js-cookie";

export default function PageSignIn(props)
{
    const [state, setstate] = useState({})
    const router = useRouter()

    const handleSubmit = (event) => {

        apiCall('signin', {
            username: state.email,
            password: state.password
        })
        .then( (response) => {
            
            if(response.success && response.data.userTokenId){

                jsCookie.set('userTokenId', response.data.userTokenId);

                router.replace('/dashboard');

            }else{
                errorAlert('Invalid user or password (3)');

            }

        })
        .catch( (err) => {
            errorAlert('Invalid user or password', err.message);

        })

        event.preventDefault()
    }

    const handleChange = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;

        state[name] = value;

        setstate(state);
    }

    return (
        <>
        <AppLayout>

            <div className="login-content">
                <div className="lc-block toggled" id="l-login">
                    <form onSubmit={handleSubmit}>
                        <div className="lcb-form">
                            <div className="input-group m-b-20">
                                <span className="input-group-addon"><i className="zmdi zmdi-email"></i></span>
                                <div className="fg-line">
                                    <input name="email" required onChange={handleChange} type="email" className="form-control" placeholder="Email"/>
                                </div>
                            </div>

                            <div className="input-group m-b-20">
                                <span className="input-group-addon"><i className="zmdi zmdi-key"></i></span>
                                <div className="fg-line">
                                    <input name="password" required onChange={handleChange} type="password" className="form-control" placeholder="Password"/>
                                </div>
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>
                                    <i className="input-helper"></i>
                                    Keep me signed in
                                </label>
                            </div>

                            <button type="submit" className="btn btn-login btn-success btn-float"><i className="zmdi zmdi-arrow-forward"></i></button>
                        </div>
                    </form>

                    <div className="lcb-navigation">
                        <Link href="/signup"><a data-ma-action="login-switch" data-ma-block="#l-register"><i className="zmdi zmdi-plus"></i> <span>Register</span></a></Link>
                        <Link href="/forgotpassword"><a data-ma-action="login-switch" data-ma-block="#l-forget-password"><i>?</i> <span>Forgot Password</span></a></Link>
                    </div>
                </div>
            </div>
        </AppLayout>
        </>
    );
}
