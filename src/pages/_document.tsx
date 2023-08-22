import { Html, Head, Main, NextScript } from "next/document";
import Providers from "@/components/Providers";

export default function Document() {
   return (
      <Html lang="en">
         <Head />
         <body className="">
            <Providers>
               <Main />
               <NextScript />
            </Providers>
         </body>
      </Html>
   );
}
