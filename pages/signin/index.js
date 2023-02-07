import AppLayout from "components/AppLayout";
import { useState } from 'react'
import { errorAlert, okAlert } from "/utils/notifications";
import { useRouter } from "next/router"
import { apiCall } from "/utils/httpUtils";
import jsCookie from "js-cookie";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { EP_SIGNIN } from "utils/httpUtils";
import { ROUTE_DASHBOARD, ROUTE_RESET_PASSWORD } from "/utils/routeUtils";


const theme = createTheme();


export default function PageSignIn(props)
{
    const [user, setUser] = useState({})
    const router = useRouter()

    const handleSubmit = (event) => {

        apiCall(EP_SIGNIN, {
            username: user.username,
            password: user.password
        })
        .then( (response) => {
            
            if(response.success && response.data.userTokenId){

                jsCookie.set('userTokenId', response.data.userTokenId);

                router.replace(ROUTE_DASHBOARD);

            }else{
                errorAlert('Invalid user or password (3)');

            }

        })
        .catch( (err) => {
            errorAlert('', 'Invalid user or password', err.message);

        })

        event.preventDefault()
    }

    const handleChange = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;

        user[name] = value;

        setUser(user);
    }

    return (
        <>
            <AppLayout>

                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>

                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    type="email"
                                    required
                                    fullWidth
                                    label="Username"
                                    name="username"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                Sign In
                                </Button>
                                
                                <Grid container justifyContent="center">

                                    <Grid item>
                                        <Link href={ROUTE_RESET_PASSWORD} variant="body2">
                                        Forgot password?
                                        </Link>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
                
            </AppLayout>
        </>
    );
}
