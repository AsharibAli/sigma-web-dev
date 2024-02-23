// "use client"
import fs from "fs/promises";
import Navbar from "@/components/Navbar";
// import { useState, useEffect } from 'react';

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("Hey I am running on server!");
  let a =  fs.readFile(".gitignore");
  a.then(e=>{console.log(e.toString())});
  return (
    <div>
      <Navbar/>
      I am just a component :)
      {/* {count} */}
      {/* <button onClick={() => setcount(count + 1)}>Click Me!</button> */}
    </div>
  );
}
