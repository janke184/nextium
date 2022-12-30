import AppLayout from "components/AppLayout";
import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResetPasswordEnd from "components/ResetPasswordEnd";
import ResetPasswordStart from "components/ResetPasswordStart";


const theme = createTheme();


export default function PageSignIn(props)
{

    const [user, setUser] = useState(props.user)

    return (
        <>
            <AppLayout>

                <ThemeProvider theme={theme}>

                    {
                    !user.token && (
                            <ResetPasswordStart user={props.user}/>
                        )
                    }

                    {
                        user.token && (
                            <ResetPasswordEnd user={props.user}/>
                        )
                    }

                </ThemeProvider>
                
            </AppLayout>
        </>
    );
}

export async function getServerSideProps(context) {
    
    const { token, username } = context.query;

    return {
        props: {
            user: {
                token: token ? token : '',   
                username: username ? username : ''
            }
        }
    }
}


