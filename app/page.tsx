"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { NextRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const redirectToLinkPage = () => {
    router.push("/article");
  };
  const redirectToSearch = () => {
    router.push("/search");
  };
  const navElements = ["Your NFTs", "Pricing", "Link"];
  return (
    <>
      <nav className="flex justify-around p-5 items-center">
        <div className="right">
<<<<<<< HEAD
          <ul className="flex gap-2">
            <li>1</li>
            <li>69</li>
=======
          <ul className="flex gap-8">
            {navElements.map((value, i) => (
              <li
                key={i}
                className="font-medium cursor-pointer"
                onClick={value === "Link" ? () => redirectToLinkPage() : ""}
              >
                {value.toUpperCase()}
              </li>
            ))}
>>>>>>> 0e9616316b26df02ff887a47b859f02cd84d913f
          </ul>
        </div>
        <h1>Ar3cle</h1>
        <div className="flex items-center gap-6">
          <button
            className="py-2 px-4 text-black duration-200 bg-white hover:bg-transparent hover:text-white hover:border ease-in-out rounded-md font-bold"
            onClick={redirectToSearch}
          >
            About Us
          </button>
          <Image src="/images/Avatar.svg" alt="" width={40} height={40} />
        </div>
      </nav>
      <section className="LandingPage font-bold w-[100%] mt-40 flex flex-col gap-6 justify-center">
        <div className="flex justify-around flex-wrap-reverse">
          <div>
            <h1 className="text-8xl tracking-wide pb-6 max-[768px]:text-3xl">
              Beyond <br />
              the <br />
              Headlines
            </h1>
            <h3 className="text-4xl py-5 pb-2">A summarised Article review</h3>
            <h5 className="font-light text-left text-wrap pb-8">
              In the age of information overload, staying on top of important
              news and research can feel overwhelming. <br /> That's where we
              come in. Our platform delivers concise, insightful summaries of
              the most relevant articles, <br /> saving you valuable time while
              keeping you informed and engaged.
            </h5>
            <button
              className="border rounded-md bg-white text-black font-bold px-20 py-4 hover:bg-transparent duration-200 hover:border hover:text-white ease-in-out"
              onClick={redirectToLinkPage}
            >
              GET STARTED
            </button>
          </div>

          <div>
            <Image src="/images/building.jpg" alt="" width={200} height={200} />
          </div>
        </div>
      </section>
    </>
  );
}
