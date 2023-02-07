import { useEffect, useState } from 'react'
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
import { Key } from "@mui/icons-material";
import { useRouter } from 'next/router';
import { checkPasswordSecurity } from 'utils/validationUtils';


export default function ResetPasswordEnd(props)
{
    const [user, setUser] = useState(props.user)
    const router = useRouter();
    
    const [formValidations, setFormValidations] = useState({
        password: {
            valid: false,
            message: ''
        }
    })

    const handleSubmit = (event) => {

        apiCall(EP_RESET_PASSWORD, user)
        .then( (response) => {
            
            if(response.success){

                okAlert('', response.data, () => {
                    router.push(ROUTE_SIGNIN);
                });

            }else{

                if(response.data && response.data.redirect_url){

                    window.location = response.data.redirect_url;

                }else{
                    errorAlert('', response.data);

                }

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
        if(event.target.name === 'password'){
            const passwordCheck = checkPasswordSecurity(event.target.value);
            console.log('passwordCheck', passwordCheck);
            setFormValidations({
                ...formValidations,
                password: {
                    valid: passwordCheck.success,
                    message: passwordCheck.message
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
                        <Key />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Enter a new password
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            type="email"
                            required
                            fullWidth
                            label="Username"
                            name="username"
                            disabled
                            onChange={handleChange}
                            value={ user.username }
                        />

                        <TextField
                            margin="normal"
                            type="password"
                            required={ true }
                            fullWidth
                            label="New password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            error={ !formValidations.password.valid }
                            helperText={ formValidations.password.message }
                        />

                        <TextField
                            margin="normal"
                            type=""
                            sx={{ display: 'none' }}
                            name="token"
                            value={ user.token }
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={ !formValidations.password.valid }
                            endIcon={ <Key /> }
                        >
                        Reset password
                        </Button>
                        
                        <Grid container justifyContent="center">

                            <Grid item xs>
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
