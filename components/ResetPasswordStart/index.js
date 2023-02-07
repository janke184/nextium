import { errorAlert, okAlert } from "/utils/notifications";
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
import { EP_RESET_PASSWORD } from "/utils/httpUtils";
import { ROUTE_SIGNIN } from "/utils/routeUtils";
import { Email, LockReset } from "@mui/icons-material";
import { useState } from "react";
import { checkUsernameSecurity } from "/utils/validationUtils";



export default function ResetPasswordStart(props)
{
    const [user, setUser] = useState(props.user)
    const [formValidations, setFormaValidations] = useState({
        username: {
            valid: false,
            message: ''
        }

    })

    const handleSubmit = (event) => {

        apiCall(EP_RESET_PASSWORD, user)
        .then( (response) => {
            
            if(response.success){

                okAlert('', 'An email has been sent to your email address. Please check your email and follow the instructions to reset your password.');

            }else{
                errorAlert('', response.data);

            }

        })
        .catch( (err) => {
            errorAlert('', response.data);

        })

        event.preventDefault();
        return false;
    }

    const handleChange = (event) =>
    {
        if(event.target.name === 'username'){
            const usernameCheck = checkUsernameSecurity(event.target.value);
            setFormaValidations({
                ...formValidations,
                username: {
                    valid: usernameCheck.success,
                    message: usernameCheck.message
                }
            })
        }

        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
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

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            error={!formValidations.username.valid}
                            helperText={formValidations.username.message}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            endIcon={<Email />}
                            disabled={!formValidations.username.valid}
                        >
                        Send email
                        </Button>
                        
                        <Grid container justifyContent="center">

                            <Grid >
                                <Link href={ROUTE_SIGNIN} variant="body2">
                                Sign in
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}