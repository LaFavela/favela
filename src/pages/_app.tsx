import Providers from "@/components/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  addTransparentChangeListener,
  removeTransparentChangeListener,
} from "../tools/transparent";
import ChatButton from "@/components/chatButton";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [transparent, setTransparent] = useState(true);
  let home = false;
  useEffect(() => {
    const handleChange = (value: boolean) => {
      setTransparent(value);
    };
    addTransparentChangeListener(handleChange);
    return () => {
      removeTransparentChangeListener(handleChange);
    };
  }, []);
  console.log(transparent);

  let temp = transparent;
  if (router.pathname === "/") {
    home = true;
  } else {
    temp = false;
    home = false;
  }
  console.log(temp);

  return (
    <Providers>
      <main>
        <Navbar home={home} transparent={temp} login={true}></Navbar>
        <ChatButton></ChatButton>
        <Component {...pageProps} />
      </main>
    </Providers>
  );
}
