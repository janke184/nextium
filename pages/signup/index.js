import AppLayout from "components/AppLayout";
import { useState } from "react";
import Link from "next/link";
import { signUp } from "/firebase/client";
import { okAlert } from '/utils'


export default function PageSignUp()
{
    const [signUpData, setSignUpData] = useState({})

    const handleSubmit = (event) => {

        signUp(signUpData.username, signUpData.password).then( (new_user) => {
            console.log('new_user', new_user);

            okAlert('Usuario creado con éxito!')
            
        });

        event.preventDefault()
    }

    const handleChange = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;

        signUpData[name] = value;

        setSignUpData(signUpData);
    }

    return (
        <>
        <AppLayout>

            <div className="login-content">
                
                <div className="lc-block toggled" id="l-register">
                    <form onSubmit={handleSubmit}>
                        <div className="lcb-form">

                            <div className="input-group m-b-20">
                                <span className="input-group-addon"><i className="zmdi zmdi-email"></i></span>
                                <div className="fg-line">
                                    <input onChange={handleChange} type="email" required name="username" className="form-control" placeholder="Email Address"/>
                                </div>
                            </div>

                            <div className="input-group m-b-20">
                                <span className="input-group-addon"><i className="zmdi zmdi-key"></i></span>
                                <div className="fg-line">
                                    <input onChange={handleChange} name="password" required type="password" className="form-control" placeholder="Password"/>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-login btn-success btn-float"><i className="zmdi zmdi-check"></i></button>
                        </div>

                        <div className="lcb-navigation">
                            <Link href="/signin"><a href="" data-ma-action="login-switch" data-ma-block="#l-login"><i className="zmdi zmdi-long-arrow-right"></i> <span>Sign in</span></a></Link>
                            <Link href="/forgotpassword"><a href="" data-ma-action="login-switch" data-ma-block="#l-forget-password"><i>?</i> <span>Forgot Password</span></a></Link>
                        </div>
                    </form>
                </div>

            </div>
        </AppLayout>
        </>
    );
}
