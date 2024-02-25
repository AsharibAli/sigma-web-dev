import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5">
      <Image
        className=" mx-auto"
        src="https://cdn.vectorstock.com/i/1000x1000/47/36/military-infantry-cartoon-soldier-isolated-vector-46544736.webp"
        alt="image!"
        width={100}
        height={100}
      />
    </div>
  );
}
