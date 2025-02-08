"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
// import FormControl from '@mui/material/FormControl';
import {FormControl, Button, TextField} from '@mui/material';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const validateEmail = (email:any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    function handleEmailChange(e: any) {
        // console.log(`Email: ${e.target.value}`);
        setIsEmail(false);
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            // setError("Invalid email format");
            setIsEmail(true);
          } else {
            setIsEmail(false);
          }
    }

    function handlePasswordChange(e: any) {
        // console.log(`password - ${e.target.value}`);
        setIsPassword(false);
        setPassword(e.target.value);
    }

    function handleSignForm() {
        if (email != '') {
            setIsEmail(false);
        } else {
            console.log(`Please enter email`);
            setIsEmail(true);
        }

        if (password != '') {
            setIsPassword(false);
        } else {
            console.log(`Please enter password`);
            setIsPassword(true);
        }

        if (email && password) {
        
            const body = {
                email: email,
                password: password
            };
            console.log(`login body: ${JSON.stringify(body)}`);
            // const signUpData = post("www.postapi", body);
            // if(signUpData){
            //     console.log("regitration successfully");
            // }else{
            //     console.log("regitration not successfully");
            // }
        }
    }
    return (
        <div className='container'>
            <div className="login form">
                <header>Login</header>
                <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <Grid container spacing={2}>
        <Grid size={12}>
        <FormControl fullWidth sx={{ m: 1 }}>
            <TextField id="standard-basic" label="Username" variant="standard" />
        </FormControl>
        </Grid>
        <Grid size={12}>
            <TextField className='input-filed' id="standard-basic" label="Username" variant="standard" />
        </Grid>
        <Grid size={12}>
            <TextField id="standard-basic" label="Username" variant="standard" />
        </Grid>
    </Grid> */}
{/*       
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" /> */}
      {/* <Button variant="contained">Submit</Button> */}
    </Box>
                <form className='form'>
                    <div className='input-sct'>
                        <input type="email" placeholder='Please enter email' value={email}
                            onChange={handleEmailChange} />
                        <br />
                        <p className='validation-txt'>{isEmail ? '* Please enter your email' : ''}</p>
                    </div>
                    <div className='input-sct'>
                        <input type="password" placeholder='Please enter Password' value={password}
                            onChange={handlePasswordChange} />
                        <p className='validation-txt'>{isPassword ? '* Please enter your password' : ''}</p>

                    </div>
                    <button type="button" className='button' onClick={handleSignForm}>Submit</button>
                </form>
            </div>
        </div>
    )
}
