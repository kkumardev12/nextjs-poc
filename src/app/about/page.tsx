"use client"
import { useState } from 'react';

// function About(){
//     return(
//         <>
//         <Header />
//             About Component
//         </>
//     )
// }

// export default About;
const data=[
    {
        id:1,
        name:"sdf",
        rollNo:2
    },
    {
        id:1,
        name:"sdf",
        rollNo:2
    },
    {
        id:1,
        name:"sdf",
        rollNo:2
    },
    {
        id:1,
        name:"sdf",
        rollNo:2
    }
];

const About = () =>{
    const [data, setData] = useState({});
    const callAPI = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
            const data = await res.json();
            setData(data);
            console.log(data);

            const abcData = await abc(data);
            console.log(abcData);

            // CRUD application (Create/Read/Update/Delete)
        } catch (err) {
            console.log(err);
        }
    };

    async function abc(data:any){
        console.log('OK', data);

        try{
            console.log("Working");
        }catch(err){
            console.log("error");
        }
    }
    return(
        <>
            About Component
            <button onClick={callAPI}>Make API call</button>
            {/* {data?.title} */}
            
        </>
    )
}

export default About;