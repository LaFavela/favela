import { Html, Head, Main, NextScript } from "next/document";
import Providers from "@/components/Providers";

export default function Document() {
   return (
      <Html lang="en">
         <Head />
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
         />
         <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
         />
         <body className="bg-white text-black">
            <Providers>
               <Main />
               <NextScript />
            </Providers>
         </body>
      </Html>
   );
}
