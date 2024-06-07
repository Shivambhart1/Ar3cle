"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { NextRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const redirect = () => {
    router.push("/article");
  };
  return (
    <>
      <nav className="flex bg-white text-black justify-between p-5 border border-b-black-400">
        <h1>Ar3cle</h1>
        <div className="right">
          <ul className="flex gap-2">
            <li>1</li>
            <li>69</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="py-2 px-4 text-white rounded-full bg-gradient-to-r from-red-500 to-violet-500">
            About Us
          </button>
          <Image src="" alt="" width={20} height={20} />
        </div>
      </nav>
      <section className="LandingPage w-[100%] mt-52 items-center flex flex-col gap-6 justify-center">
        <h1 className="text-6xl">FrontKick</h1>
        <button className="border rounded-full px-16 py-2" onClick={redirect}>
          Get Started
        </button>
      </section>
    </>
  );
}
