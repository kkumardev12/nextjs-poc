"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Home(){
    let age = 5;
    const [ageData, setAgeData]=useState(0);
    function handleClick(){
        alert("hello");
        setAgeData(ageData + 1);
    }
    // Props : Harcoded/readonly/static(we can't change anything)
    // State : Dynamincaly/read and write changing(we can change anything)/ Update
    return(
        <>
           {age}<br/>
           {ageData}<br/>
            Home Component<br/>
            <button type="button" onClick={handleClick}>Submit</button> <br />
            {/* <Image src="/b74fea46-e804-45b8-bd03-5dc77be85373.jfif" alt='img' className="slider-img" width="1500" height="200" /> */}
        </>
    )
}

// const Home = () =>{
//         function handleClick(){
//             alert("hello");
//         }
//     return(
//         <>
//            <Header />
//             Home Component<br />
//             <button type="button" onClick={handleClick}>Submit</button>
//         </>
//     )
// }

// export default Home;