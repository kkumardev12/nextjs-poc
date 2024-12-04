"use client"
import { useState } from 'react';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    function handleEmailChange(e: any) {
        // console.log(`Email: ${e.target.value}`);
        setIsEmail(false);
        setEmail(e.target.value);
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
