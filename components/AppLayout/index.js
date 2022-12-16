import Head from "next/head";
import { globalStyles } from "styles/globals";

export default function AppLayout({children})
{
    return (
    <>
        <Head>
            <title>Softcake</title>
            <link rel="icon" href="/favicon.ico" />
            
        </Head>

        {children}

        <style jsx>{ globalStyles }</style>

        
    </>
    )
}