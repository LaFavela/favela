import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Favela Your Property at One Click</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo/properti.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>
      <nav className="mx-auto font-poppins bg-white shadow text-xl pt-16 px-28 text-black">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src="/assets/logo/properti.png" className="w-9 h-9" />
            <p className="font-poppins font-bold">FAVELA</p>
          </div>
          <div className="flex space-x-16">
            <div className="space-x-16">
              <a className="border-b-2 border-black" href="#">
                Home
              </a>
              <a className="nav-button-hover" href="#">
                Order
              </a>
              <a className="nav-button-hover" href="#">
                About
              </a>
              <a className="nav-button-hover" href="#">
                Contact
              </a>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-9 w-9">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
              </svg>
            </div>
          </div>
        </div>
        {/* mobile nav */}
      </nav>
      <body className="bg-white min-h-screen">
        <div className="items-center m-8 pt-28 bg-transparent">
          <h1 className="text-2xl text-justify font-bold text-black font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            magni sapiente? Possimus quod porro nemo deleniti maxime non ullam
            exercitationem totam voluptates sit, commodi voluptatum repellat
            neque vero eius nostrum unde et tempora. Sint consectetur ea,
            consequatur assumenda ipsum laboriosam tenetur minima natus dolore
            labore officia praesentium obcaecati est. Magnam?
          </h1>
        </div>
      </body>
    </div>
  );
}
