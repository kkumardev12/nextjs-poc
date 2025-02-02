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

            
<div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>


<br/>
{/* <div className="container mt-5">
  <div className="row">
  <div className="card">
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some example text. Some example text.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
  </div>
  </div> */}
            
        </>
    )
}

export default About;