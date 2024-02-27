"use client";
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Asharib Ali",
      role: "Ambassador",
    };
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Nextjs API Routes Demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
