import React, { useState } from 'react';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Balram Singh
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


const Signup = () => {

    const navigate = useNavigate();

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // Handling Confirm Password
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }


    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // post a data in database
        const data = { name: name, email: email, password: password, confirmPassword: confirmPassword };

        if (name && email && password && confirmPassword && (password === confirmPassword)) {
            axios.post('http://localhost:5000/register', data)
                .then((result) => {
                    console.log(result);
                })

            navigate("/home");
        }
        else {
            alert('invalid input');
        }

    };

    // const resetData = () => {
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //     setConfirmPassword('');
    // }



    // return (
    //     <div className='registration'>
    //         <h1>Registraion</h1>
    //         <form>
    //             <label className="label">Name</label>
    //             <input onChange={handleName} className="input"
    //                 value={name} type="text" />

    //             <label className="label">Email</label>
    //             <input onChange={handleEmail} className="input"
    //                 value={email} type="email" />

    //             <label className="label">Password</label>
    //             <input onChange={handlePassword} className="input"
    //                 value={password} type="password" />

    //             <label className="label">Confirm Password</label>
    //             <input onChange={handleConfirmPassword} className="input"
    //                 value={confirmPassword} type="password" />

    //             <button id='btnn' className="btn" onClick={handleSubmit} type='submit'>
    //                 Create an Account
    //             </button>

    //             <div>
    //                 Already Registered? <Link to="/">Login Now !</Link>
    //             </div>

    //         </form>
    //     </div>
    // )


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
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={handleName}
                                value={name}
                                autoFocus
                            />

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

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handlePassword}
                                value={password}
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Confirm Password"
                                name="password"
                                type="password"
                                onChange={handleConfirmPassword}
                                value={confirmPassword}
                                autoComplete="email"
                                autoFocus
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/forgot-password" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                <Link to="/">Login Now !</Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );

}

export default Signup