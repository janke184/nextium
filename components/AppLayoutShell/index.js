import AppLayout from "components/AppLayout";
import Footer from "components/Footer";
import Header from "components/Header";
import SideMenu from "components/SideMenu";

export default function AppLayoutShell({children})
{
    return (
        <>
        <AppLayout>
            <Header/>
            <SideMenu>
                <section id="content">
                    <div className="container">
                        {children}
                    </div>
                </section>                
            </SideMenu>
            <Footer/>                
        </AppLayout>
        </>
    )
}