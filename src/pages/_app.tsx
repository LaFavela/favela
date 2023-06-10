import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { addTransparentChangeListener, removeTransparentChangeListener } from "../tools/transparent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [transparent, setTransparent] = useState(false);
  let home = false;
  useEffect(() => {
    const handleChange = (value: boolean) => {
        setTransparent(value);
    };
    addTransparentChangeListener(handleChange);
    return () => {
      removeTransparentChangeListener(handleChange);
    };
  },[]);
  console.log(transparent)
  
  let temp = transparent;
  if (router.pathname === "/") {
    home = true;
  } else {
    temp = false;
    home = false;
  }
  console.log(temp)

  return (
    <main className={`${poppins.variable}`}>
      <Navbar 
      home={home} 
      transparent={temp}
      ></Navbar>
      <Component {...pageProps} />
    </main>
  );
}
