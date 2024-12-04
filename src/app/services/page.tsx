"use client";
import {useState} from 'react';

const service = () => {
    let isLoggedIn  =  true;
    
    return (
        <>
            Services Component<br />
            {
                isLoggedIn ? 'Hello' : 'Hi'    
            }
            <br></br>
            <Button />
        </>
    )
}
export default service;

const Button = ()  =>{
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    function handleMinusClick(){
        if(count > 0){
            setCount(count - 1);
        }
    }
    return(
        <>
         <button type='button' onClick={handleClick} >Plus</button><br></br>
         <button type='button' onClick={handleMinusClick} >Minus</button><br></br>
         {count}
        </>
    )
}