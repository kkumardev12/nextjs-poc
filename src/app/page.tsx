"use client";

import { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState("");
  const products = [
    { title: 'Cabbage', id: '1', desc: 'sdflsdjflsdj' },
    { title: 'Garlic', id: '2', desc: 'sdflsdjflsdj' },
    { title: 'Apple', id: '3' },
  ];
  // let list:any[] = [];
  const list = products.map((data, idx) => <li key={idx}>{idx}, {data.id}, {data.title}, {data.desc}</li>);

  function handleClick(val: any) {
    console.log("value", val);
    setValue(value + val);
  }

  return (
    <>
      <br />
      Main Page 11 <br />
      <input type="text" value={value} placeholder='calculater' />
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      {list}

      
    </>
  );
}

export default Home;