import AppLayout from "components/AppLayout";
import { useRouter } from 'next/router'
import { auth } from '/firebase/client'

export default function PageSignOut(props)
{
    const router = useRouter();

    auth.signOut().then( () => {
        router.replace('/signin')

    }).catch( () => {
        router.replace('/signin')

    });

    return (
        <>
        <AppLayout>
            Signing out...
        </AppLayout>
        </>
    );
}
