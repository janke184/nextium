import AppLayout from "components/AppLayout";
import { useState } from 'react'
import { errorAlert, okAlert } from "/utils/notifications";
import { useRouter } from "next/router"
import { apiCall } from "/utils/httpUtils";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { EP_RESET_PASSWORD } from "/utils/httpUtils";
import { ROUTE_SIGNIN } from "/utils/routeUtils";
import { LockReset } from "@mui/icons-material";


const theme = createTheme();


export default function PageSignIn(props)
{
    const [user, setUser] = useState({})
    const router = useRouter()

    const handleSubmit = (event) => {

        apiCall(EP_RESET_PASSWORD, {
            username: user.username
        })
        .then( (response) => {
            
            if(response.success){

                okAlert('An email has been sent to your email address. Please check your email and follow the instructions to reset your password.');

            }else{
                errorAlert('Invalid user or password (3)');

            }

        })
        .catch( (err) => {
            errorAlert('Invalid user or password', err.message);

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
                                <LockReset />
                            </Avatar>

                            <Typography component="h1" variant="h5">
                                Reset password
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
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                Reset password
                                </Button>
                                
                                <Grid container>

                                    <Grid item xs>
                                        <Link href={ROUTE_SIGNIN} variant="body2">
                                        Sign in
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
