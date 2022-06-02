import AppLayout from "components/AppLayout";
import Link from "next/link";
import { useState } from 'react'
import { loginWithEmailAndPassword, auth } from '/firebase/client'
import { errorAlert } from "/utils/notifications";
import { useRouter } from "next/router"
import { apiCall } from "/utils/httpUtils";

export default function PageSignIn(props)
{
    const [state, setstate] = useState({})
    const router = useRouter()

    auth.onAuthStateChanged( (auth) => {
        if(auth){

            apiCall('signin').then( () => {

                console.log('signin onAuthStateChanged', auth)

                router.replace('/dashboard')

            }).catch( (error)=> {

                console.log('error', error)
                errorAlert('Unexpected error')

            });

        }
    })

    const handleSubmit = (event) => {

        loginWithEmailAndPassword(state.email, state.password)
        .then( (user) => {

            console.log('login successfull');

        })
        .catch( (err) => {
            errorAlert('Invalid user or password');

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
