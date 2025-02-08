"use client"
import { useState } from 'react';
export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUsername, setIsUsername] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [response, setResponse] = useState<{ message: string; data?: { name: string; email: string, password:string } } | null>(null);

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

    function handleUsernameChange(e: any) {
        setIsUsername(false);
        setUsername(e.target.value);
    }

    async function handleSignForm() {
        if (username != '') {
            setIsUsername(false);
        } else {
            setIsUsername(true);
        }

        if (email != '') {
            setIsEmail(false);
        } else {
            setIsEmail(true);
        }

        if (password != '') {
            console.log(`got password: ${password}`);
            setIsPassword(false);
        } else {
            console.log(`Please enter password`);
            setIsPassword(true);
        }

        if (email && password) {
        
            const body = {
                name:username,
                email: email,
                password: password
            };
            console.log(`signup body: ${JSON.stringify(body)}`);

            try {
                const response = await fetch('/api/user', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ username, email, password }), // Send data as JSON
                });
          
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
          
                const data = await response.json();
                console.log("regitration successfully");
                setResponse(data);
                console.log("")
              } catch (error) {
                console.log("regitration not successfully");
                // setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
            }
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
                <header>Signup</header>
                <form className='form'>
                    <div className='input-sct'>
                        <input type="email" placeholder='Please enter username' value={username}
                            onChange={handleUsernameChange} />
                        <br />
                        <p className='validation-txt'>{isUsername ? '* Please enter your username' : ''}</p>
                    </div>
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
