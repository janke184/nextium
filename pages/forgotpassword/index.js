import AppLayout from "components/AppLayout";
import Link from "next/link";

export default function PageLogin()
{
    return (
        <>
        <AppLayout>

            <div className="login-content">

                <div className="lc-block toggled" id="l-forget-password">
                    <div className="lcb-form">
                        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu risus. Curabitur commodo lorem fringilla enim feugiat commodo sed ac lacus.</p>

                        <div className="input-group m-b-20">
                            <span className="input-group-addon"><i className="zmdi zmdi-email"></i></span>
                            <div className="fg-line">
                                <input type="text" className="form-control" placeholder="Email Address"/>
                            </div>
                        </div>

                        <a href="" className="btn btn-login btn-success btn-float"><i className="zmdi zmdi-check"></i></a>
                    </div>

                    <div className="lcb-navigation">
                        <Link href="/signin"><a href="" data-ma-action="login-switch" data-ma-block="#l-login"><i className="zmdi zmdi-long-arrow-right"></i> <span>Sign in</span></a></Link>
                        <Link href="/signup"><a href="" data-ma-action="login-switch" data-ma-block="#l-register"><i className="zmdi zmdi-plus"></i> <span>Register</span></a></Link>
                    </div>
                </div>
            </div>
            
        </AppLayout>
        </>
    );
}
