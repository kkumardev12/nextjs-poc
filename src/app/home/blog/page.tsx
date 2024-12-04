
"use client";
import Image from 'next/image';

export default function Blog(){
    let product =[
        {id:1, title:"product1"},
        {id:2, title:"product1"},
        {id:3, title:"product1"}
    ]
    return(
        <>
        <Image src="/premioum.jfif" alt="business" width={400} height={200}/>
        <Image src="/Penguins.jpg" alt="business" width={400} height={200}/>

            Blog Component
            {
                product.map((data, index) =>{
                    <p key={index}>{data.title}</p>
                })
            }
        </>
    )
}