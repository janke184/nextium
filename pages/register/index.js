import AppLayout from "components/AppLayout";
import { useState } from "react";
import Link from "next/link";
import { createUser } from "/firebase/client";
import Swal from 'sweetalert2'


export default function PageRegister()
{
    const [state, setstate] = useState({})

    const handleSubmit = (event) => {

        console.log('state', state);

        createUser(state.username, state.password).then( (createdUser) => {
            console.log('createdUser', createdUser);

        }).catch( (err) => {
            console.log('err', err);
            Swal.fire({title: "Error", icon: 'error', text: err.message});
        });

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
                                <span className="input-group-addon"><i className="zmdi zmdi-male"></i></span>
                                <div className="fg-line">
                                    <input onChange={handleChange} name="password" required type="password" className="form-control" placeholder="Password"/>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-login btn-success btn-float"><i className="zmdi zmdi-check"></i></button>
                        </div>

                        <div className="lcb-navigation">
                            <Link href="/login"><a href="" data-ma-action="login-switch" data-ma-block="#l-login"><i className="zmdi zmdi-long-arrow-right"></i> <span>Sign in</span></a></Link>
                            <Link href="/forgotpassword"><a href="" data-ma-action="login-switch" data-ma-block="#l-forget-password"><i>?</i> <span>Forgot Password</span></a></Link>
                        </div>
                    </form>
                </div>

            </div>
        </AppLayout>
        </>
    );
}
