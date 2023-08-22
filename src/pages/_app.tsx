import Providers from "@/components/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  addTransparentChangeListener,
  removeTransparentChangeListener,
} from "../tools/transparent";
import ChatButton from "@/components/chatButton";

import { Poppins } from "next/font/google";

const poppins = Poppins({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-poppins",
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [transparent, setTransparent] = useState(true);
  let home = false;
  let about = false;
  useEffect(() => {
    const handleChange = (value: boolean) => {
      setTransparent(value);
    };
    addTransparentChangeListener(handleChange);
    return () => {
      removeTransparentChangeListener(handleChange);
    };
  }, []);
  
  let temp = transparent;
  if (router.pathname === "/") {
    home = true;
  } else if (router.pathname === "/aboutUs"){
    about = true;
    temp = false;
    home = false;
  }else{
    temp = false;
    home = false;
  }

  return (
    <Providers>
      <main className={poppins.className}>
        <Navbar home={home} transparent={temp} about={about} login={true}></Navbar>
        <ChatButton></ChatButton>
        <Component {...pageProps} />
      </main>
    </Providers>
  );
}
