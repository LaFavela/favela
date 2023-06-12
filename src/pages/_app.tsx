import Providers from "@/components/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Providers>
         <main>
            <Component {...pageProps} />
         </main>
      </Providers>
   );
}
