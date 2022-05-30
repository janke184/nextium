import Head from "next/head";
import { globalStyles } from "styles/globals";

export default function AppLayout({children})
{
    return (
    <>
        <Head>
            <title>Softcake</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="/animate.css/animate.min.css" rel="stylesheet"/>
            <link href="/material-design-iconic-font/dist/css/material-design-iconic-font.min.css" rel="stylesheet"/>
        </Head>
        {children}
        <style jsx>{ globalStyles }</style>
    </>
    )
}