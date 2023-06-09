//import axios from 'axios';
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import '../styles/signup.css';
import '../styles/login.css';
import '../styles/otp.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

const Forgot_password = () => {

   // const navigate = useNavigate();

    // States for registration
    const [email, setEmail] = useState('');

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };


    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('this is forgot password');


        // axios.post('http://localhost:5000/forgot-password', { email: email }).then(response => {
        //     if (response.data.email === email) {
        //         navigate("/dashboard");
        //     }
        // }
        // );
    };


    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Forgot Password
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                onChange={handleEmail}
                                value={email}
                                autoComplete="email"
                                autoFocus
                            />
                            <Link className='otplink' to="otp">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}

                                >Send Email
                                </Button>
                            </Link>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/" variant="body2">
                                        Back to Login
                                    </Link>
                                </Grid>
                            </Grid>
                            <Outlet></Outlet>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Forgot_password;