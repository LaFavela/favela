// "use client";

import React, { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { set } from "react-hook-form";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion" 

// const username = "admin";
// const email = "ramadhanialqadri12@gmail.com";
// const password = "12345";

export default function Login(props: { visible: any; onClose: any }) {
   const usernameLogin = useRef<any>(null);
   const passwordLogin = useRef<any>(null);
   const rememberMe = useRef<any>(null);

   const [isError, setIsError] = useState(false)
   const [errorMessage, setErrorMessage] = useState("")
   const handleSubmitLogin = async (event: any) => {
      event.preventDefault();
      const result = await signIn("username-login", {
         redirect: false,
         username: usernameLogin?.current.value,
         password: passwordLogin?.current.value,
         rememberMe: rememberMe?.current.checked,
         error: "Invalid username or password",
      })
         .then((res) => {
            if (res?.error) {
               setIsError(true);
               setErrorMessage("Invalid username or password")
               
               // alert("Login Failed");
            }
         })
         .catch((err) => {
            setIsError(true);
            setErrorMessage("Invalid username or password")
            // alert("Login Failed");
         });
   };

   const usernameRegister = useRef<any>(null);
   const emailRegister = useRef<any>(null);
   const passwordRegister = useRef<any>(null);
   const passwordConfirmRegister = useRef<any>(null);

   const accept = useRef<any>(null);

   const handleSubmitRegister = async (event: any) => {
      event.preventDefault();
      if (
         passwordRegister.current?.value !==
         passwordConfirmRegister.current?.value
      ) {
         alert("Password and Confirm Password must be same");
         return;
      }
      if (!accept.current?.checked) {
         alert("CCAPET THE TERMS AND SERVICE");
         return;
      }
      const res = await fetch("/api/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            username: usernameRegister.current?.value,
            email: emailRegister.current?.value,
            password: passwordRegister.current?.value,
         }),
         // callback if success
      }).then((res) => {
         if (res.status === 200) {
            alert("Register Success");
            setShowRegister(false);
         } else {
            alert("Register Failed");
         }
      });
   };

   const [showRegister, setShowRegister] = useState(false);
   if (!props.visible) return null;
   return (
      // blur Background
      <AnimatePresence>
      <div 
      
      className="fixed inset-0 flex h-screen w-screen items-center justify-center">
         
         <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
         transition={{duration: 0.4}}
         
         onClick={props.onClose}
         
         className="absolute left-0 top-0 h-full w-full bg-[#0000007c]"
         ></motion.div>
         {!showRegister ? (
            // {/* Kotak Login */}
            <div 
            className="z-50 flex h-[34.5rem] w-[54rem] justify-center rounded-[25px] bg-white opacity-100">
               {/* Kontainer untuk welcome dan foto */}
               <div className="h-full w-1/2">
                  {/* welcome */}
                  <p className="absolute ml-[2.3125rem] mt-[1.5625rem] text-[1.25rem] font-semibold text-[#B17C3F]">
                     Welcome!
                  </p>
                  {/* Gambar */}
                  <div className="h-full">
                     <Image
                        src="/assets/login/bg.jpg"
                        alt="bg-property"
                        className="h-full w-full rounded-l-[25px]"
                     />
                  </div>
               </div>
               {/* Kontainer untuk form login */}
               <form className="w-1/2" onSubmit={handleSubmitLogin}>
                  {/* Login */}
                  <p className="ml-[2.3125rem] mt-[1.5625rem] text-[1.25rem] font-semibold text-[#B17C3F]">
                     Login
                  </p>
                  {/* Email dan username */}
                  <div className="ml-[2.3125rem] mt-[1.8rem] ">
                     <p className="text-[0.625rem] font-normal text-[#B17C3F]">
                        Email or Username
                     </p>
                     <input
                        type="text"
                        className="mt-[0.2rem] h-[2.5rem] w-[22.375rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-[0.9rem] text-[#B17C3F] placeholder:text-[0.8rem] placeholder:font-light "
                        placeholder="Email or Username"
                        id="username"
                        ref={usernameLogin}
                     />
                     
                  </div>
                  {/* Password */}
                  <div className="ml-[2.3125rem] mt-[1.8rem] w-[22.375rem] ">
                     <p className="text-[0.625rem] font-normal text-[#B17C3F]">
                        Password
                     </p>
                     <input
                        type="password"
                        className="mt-[0.2rem] h-[2.5rem] w-[22.375rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-[0.9rem] text-[#B17C3F] placeholder:text-[0.8rem] placeholder:font-light "
                        placeholder="Password"
                        id="password"
                        ref={passwordLogin}
                     />
                     <p className="mt-[0.8rem] flex justify-end text-[0.6rem] font-semibold underline underline-offset-1">
                        Forgot your password?
                     </p>
                  </div>
                  {/* checkbox */}
                  <div className="ml-[2.3125rem] mt-[0.5rem] flex w-[22.375rem] items-center">
                     <input
                        type="checkbox"
                        id="checkbox1"
                        className="
                                    peer 
                                    relative 
                                    h-4 
                                    w-4 appearance-none 
                                    rounded-sm border
                                    border-[#B17C3F]
                                    after:absolute 
                                    after:left-0
                                    after:top-0
                                    after:h-full
                                    after:w-full
                                    after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]
                                    after:bg-[length:40px]
                                    after:bg-center
                                    after:bg-no-repeat
                                    after:ring-[#B17C3F]
                                    after:content-['']
                                    checked:bg-[#B17C3F]
                                    checked:ring-[#B17C3F]
                                    hover:ring
                                    hover:ring-[#B17C3F]
                                    focus:outline-none
                                    focus:outline
                                    "
                        ref={rememberMe}
                     />
                     <label
                        htmlFor="checkbox1"
                        className="ml-[0.5rem] w-full cursor-pointer text-[0.625rem] font-normal text-[#B17C3F]"
                     >
                        Keep me logged in
                     </label>
                  </div>
                  {/* button login now */}
                  <div className="ml-[2.3125rem] mt-[1.2rem] w-[22.375rem]">
                    {isError ? (
                        
                       <motion.p
                       className="text-[#e82d2dfb] -mt-6 text-[0.8rem] font-medium"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                        >{errorMessage}</motion.p>
                     ):(
                        null
                     )}
                    
                     <button
                        onSubmit={handleSubmitLogin}
                        type="submit"
                        className="h-[2.5rem] w-[22.375rem] rounded-[7px] bg-[#B17C3F] text-[0.8rem] font-normal text-white"
                     >
                        Login Now
                     </button>
                     
                     <div className="flex justify-start space-x-1">
                        <p className="mt-[0.2rem] text-[0.6rem] font-normal ">
                           
                        </p>
                        <button
                           onClick={() => setShowRegister(true)}
                           className="mt-[0.2rem] text-[0.6rem] font-semibold underline underline-offset-1 "
                        >
                           Register now
                        </button>
                     </div>
                  </div>
                  {/* opsi login lain */}
                  <div className="ml-[2.3125rem] mt-[0.5rem] w-[22.375rem]">
                     <p className="mt-[0.8rem] text-[0.6rem] font-normal ">
                        Or sign in with
                     </p>
                     <div className="mt-[0.7rem] flex justify-between ">
                        <button className="flex h-[2rem] w-[7.375rem] items-center justify-center space-x-1 rounded-[7px] border border-[#B17C3F] bg-white">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M2.04234 5.00659C2.59701 3.90208 3.44792 2.97359 4.49996 2.3249C5.552 1.6762 6.76372 1.33286 7.99967 1.33325C9.79634 1.33325 11.3057 1.99392 12.4597 3.06992L10.5483 4.98192C9.85701 4.32125 8.97834 3.98459 7.99967 3.98459C6.26301 3.98459 4.79301 5.15792 4.26968 6.73325C4.13634 7.13325 4.06034 7.55992 4.06034 7.99992C4.06034 8.43992 4.13634 8.86659 4.26968 9.26659C4.79367 10.8426 6.26301 12.0153 7.99967 12.0153C8.89634 12.0153 9.65967 11.7786 10.257 11.3786C10.6033 11.1506 10.8998 10.8547 11.1285 10.5089C11.3572 10.1631 11.5134 9.77449 11.5877 9.36659H7.99967V6.78792H14.2783C14.357 7.22392 14.3997 7.67859 14.3997 8.15125C14.3997 10.1819 13.673 11.8913 12.4117 13.0513C11.309 14.0699 9.79967 14.6666 7.99967 14.6666C7.1241 14.6669 6.25703 14.4947 5.44804 14.1598C4.63904 13.8249 3.90398 13.3339 3.28485 12.7147C2.66572 12.0956 2.17467 11.3606 1.83976 10.5516C1.50486 9.74256 1.33266 8.8755 1.33301 7.99992C1.33301 6.92392 1.59034 5.90659 2.04234 5.00659Z"
                                 fill="#B17C3F"
                              />
                           </svg>
                           <p className="text-[0.5rem] font-normal text-black ">
                              Google
                           </p>
                        </button>
                        <button className="flex h-[2rem] w-[7.375rem] items-center justify-center space-x-1 rounded-[7px] border border-[#B17C3F] bg-white">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M9.33366 8.99992H11.0003L11.667 6.33325H9.33366V4.99992C9.33366 4.31325 9.33366 3.66659 10.667 3.66659H11.667V1.42659C11.4497 1.39792 10.629 1.33325 9.76233 1.33325C7.95233 1.33325 6.66699 2.43792 6.66699 4.46658V6.33325H4.66699V8.99992H6.66699V14.6666H9.33366V8.99992Z"
                                 fill="#B17C3F"
                              />
                           </svg>

                           <p className="text-[0.5rem] font-normal text-black ">
                              Facebook
                           </p>
                        </button>
                        <button className="flex h-[2rem] w-[7.375rem] items-center justify-center space-x-1 rounded-[7px] border border-[#B17C3F] bg-white">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M14.973 4.00008C14.4597 4.23341 13.9064 4.38675 13.333 4.46008C13.9197 4.10675 14.373 3.54675 14.5864 2.87341C14.033 3.20675 13.4197 3.44008 12.773 3.57341C12.2464 3.00008 11.5064 2.66675 10.6664 2.66675C9.0997 2.66675 7.8197 3.94675 7.8197 5.52675C7.8197 5.75341 7.84637 5.97341 7.89303 6.18008C5.5197 6.06008 3.40637 4.92008 1.9997 3.19341C1.75303 3.61341 1.61303 4.10675 1.61303 4.62675C1.61303 5.62008 2.11303 6.50008 2.88637 7.00008C2.41303 7.00008 1.97303 6.86675 1.58637 6.66675V6.68675C1.58637 8.07341 2.57303 9.23341 3.8797 9.49341C3.46019 9.60822 3.01976 9.62419 2.59303 9.54008C2.7741 10.1084 3.12873 10.6057 3.60704 10.962C4.08536 11.3184 4.66333 11.5159 5.2597 11.5267C4.24879 12.327 2.9957 12.7596 1.70637 12.7534C1.4797 12.7534 1.25303 12.7401 1.02637 12.7134C2.29303 13.5267 3.7997 14.0001 5.41303 14.0001C10.6664 14.0001 13.553 9.64008 13.553 5.86008C13.553 5.73341 13.553 5.61341 13.5464 5.48675C14.1064 5.08675 14.5864 4.58008 14.973 4.00008Z"
                                 fill="#B17C3F"
                              />
                           </svg>

                           <p className="text-[0.5rem] font-normal text-black ">
                              Twitter
                           </p>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         ) : (
            // {/* Kotak Register */}
            <div className="z-50 flex h-[34.5rem] w-[54rem] justify-center rounded-[25px] bg-white opacity-100">
               {/* Kontainer untuk welcome dan foto */}

               <div className="h-full w-1/2">
                  {/* welcome */}
                  <p className="absolute ml-[2.3125rem] mt-[1.5625rem] text-[1.25rem] font-semibold text-[#B17C3F]">
                     Welcome!
                  </p>
                  {/* Gambar */}
                  <div className="h-full">
                     <Image
                        src="/assets/login/bg.jpg"
                        alt="bg-property"
                        className="h-full w-full rounded-l-[25px]"
                        height={864}
                        width={552}
                     />
                  </div>
               </div>
               {/* Kontainer untuk form Register */}
               <form
                  onSubmit={handleSubmitRegister}
                  className="w-1/2 "
                  action=""
               >
                  {/* Register*/}
                  <p className="ml-[2.3125rem] mt-[1.5625rem] text-[1.25rem] font-semibold text-[#B17C3F]">
                     Register
                  </p>
                  {/*username */}
                  <div className="ml-[2.3125rem] mt-[0.8rem] ">
                     <p className="text-[0.625rem] font-normal text-[#B17C3F]">
                        Username
                     </p>
                     <input
                        type="text"
                        className="mt-[0.2rem] h-[2.5rem] w-[22.375rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-[0.9rem] text-[#B17C3F] placeholder:text-[0.8rem] placeholder:font-light "
                        placeholder="Username"
                        ref={usernameRegister}
                     />
                  </div>
                  {/* Email */}
                  <div className="ml-[2.3125rem] mt-[1rem] w-[22.375rem] ">
                     <p className="text-[0.625rem] font-normal text-[#B17C3F]">
                        Email
                     </p>
                     <input
                        type="email"
                        className="mt-[0.2rem] h-[2.5rem] w-[22.375rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-[0.9rem] text-[#B17C3F] placeholder:text-[0.8rem] placeholder:font-light "
                        placeholder="Email"
                        ref={emailRegister}
                     />
                  </div>
                  {/* Password */}
                  <div className="ml-[2.3125rem] mt-[1rem] flex w-[22.375rem] justify-between ">
                     <div>
                        <p className="text-[0.625rem] font-normal text-[#B17C3F]">
                           Password(*)
                        </p>
                        <input
                           type="password"
                           className="mt-[0.2rem] h-[2.5rem] w-[10.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-[0.9rem] text-[#B17C3F] placeholder:text-[0.8rem] placeholder:font-light "
                           placeholder="Password"
                           ref={passwordRegister}
                        />
                     </div>
                     <div>
                        <p className="text-[0.625rem] font-normal text-[#B17C3F]">
                           Repeat Password(*)
                        </p>
                        <input
                           type="password"
                           className="mt-[0.2rem] h-[2.5rem] w-[10.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-[0.9rem] text-[#B17C3F] placeholder:text-[0.8rem] placeholder:font-light "
                           placeholder="Password"
                           ref={passwordConfirmRegister}
                        />
                     </div>
                  </div>
                  <div className="ml-[2.3125rem] mt-[0.5rem] w-[22.375rem]">
                     <p className="w-full text-[0.625rem] font-normal leading-3 text-[#B17C3F]">
                        Favela may keep me informated with personalized emails
                        about product and serveices. See our{" "}
                        <a className="font-bold">Privacy Policy</a> for more
                        details
                     </p>
                  </div>
                  {/* checkbox */}
                  <div className="ml-[2.3125rem] mt-[0.3rem] flex w-[22.375rem] items-center">
                     <input
                        type="checkbox"
                        id="checkbox1"
                        className="
                                peer 
                                relative
                                h-4 
                                w-4 appearance-none 
                                rounded-sm border
                                border-[#B17C3F]
                                after:absolute 
                                after:left-0
                                after:top-0
                                after:h-full
                                after:w-full
                                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]
                                after:bg-[length:40px]
                                after:bg-center
                                after:bg-no-repeat
                                after:ring-[#B17C3F]
                                after:content-['']
                                checked:bg-[#B17C3F]
                                checked:ring-[#B17C3F]
                                hover:ring
                                hover:ring-[#B17C3F]
                                focus:outline-none
                                focus:outline
                                "
                        ref={accept}
                     />
                     <label
                        htmlFor="checkbox1"
                        className="ml-[0.5rem] w-full cursor-pointer text-[0.625rem] font-normal text-[#B17C3F]"
                     >
                        have read and accept the Terms and Condition
                     </label>
                  </div>
                  {/* button login now */}
                  <div className="ml-[2.3125rem] mt-[0.6rem] w-[22.375rem]">
                     <button
                        type="submit"
                        className="h-[2.5rem] w-[22.375rem] rounded-[7px] bg-[#B17C3F] text-[0.8rem] font-normal text-white"
                     >
                        Register
                     </button>
                     <div className="flex justify-start space-x-1">
                        <p className="mt-[0.2rem] text-[0.6rem] font-normal ">
                           Already have account?
                        </p>
                        <button
                           onClick={() => setShowRegister(false)}
                           className="mt-[0.2rem] text-[0.6rem] font-semibold underline underline-offset-1 "
                        >
                           Login now
                        </button>
                     </div>
                  </div>
                  {/* opsi login lain */}
                  <div className="ml-[2.3125rem] mt-[0.5rem] w-[22.375rem]">
                     <p className="mt-[0.8rem] text-[0.6rem] font-normal ">
                        Or sign in with
                     </p>
                     <div className="mt-[0.7rem] flex justify-between ">
                        <button className="flex h-[2rem] w-[7.375rem] items-center justify-center space-x-1 rounded-[7px] border border-[#B17C3F] bg-white">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M2.04234 5.00659C2.59701 3.90208 3.44792 2.97359 4.49996 2.3249C5.552 1.6762 6.76372 1.33286 7.99967 1.33325C9.79634 1.33325 11.3057 1.99392 12.4597 3.06992L10.5483 4.98192C9.85701 4.32125 8.97834 3.98459 7.99967 3.98459C6.26301 3.98459 4.79301 5.15792 4.26968 6.73325C4.13634 7.13325 4.06034 7.55992 4.06034 7.99992C4.06034 8.43992 4.13634 8.86659 4.26968 9.26659C4.79367 10.8426 6.26301 12.0153 7.99967 12.0153C8.89634 12.0153 9.65967 11.7786 10.257 11.3786C10.6033 11.1506 10.8998 10.8547 11.1285 10.5089C11.3572 10.1631 11.5134 9.77449 11.5877 9.36659H7.99967V6.78792H14.2783C14.357 7.22392 14.3997 7.67859 14.3997 8.15125C14.3997 10.1819 13.673 11.8913 12.4117 13.0513C11.309 14.0699 9.79967 14.6666 7.99967 14.6666C7.1241 14.6669 6.25703 14.4947 5.44804 14.1598C4.63904 13.8249 3.90398 13.3339 3.28485 12.7147C2.66572 12.0956 2.17467 11.3606 1.83976 10.5516C1.50486 9.74256 1.33266 8.8755 1.33301 7.99992C1.33301 6.92392 1.59034 5.90659 2.04234 5.00659Z"
                                 fill="#B17C3F"
                              />
                           </svg>
                           <p className="text-[0.5rem] font-normal text-black ">
                              Google
                           </p>
                        </button>
                        <button className="flex h-[2rem] w-[7.375rem] items-center justify-center space-x-1 rounded-[7px] border border-[#B17C3F] bg-white">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M9.33366 8.99992H11.0003L11.667 6.33325H9.33366V4.99992C9.33366 4.31325 9.33366 3.66659 10.667 3.66659H11.667V1.42659C11.4497 1.39792 10.629 1.33325 9.76233 1.33325C7.95233 1.33325 6.66699 2.43792 6.66699 4.46658V6.33325H4.66699V8.99992H6.66699V14.6666H9.33366V8.99992Z"
                                 fill="#B17C3F"
                              />
                           </svg>

                           <p className="text-[0.5rem] font-normal text-black ">
                              Facebook
                           </p>
                        </button>
                        <button className="flex h-[2rem] w-[7.375rem] items-center justify-center space-x-1 rounded-[7px] border border-[#B17C3F] bg-white">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M14.973 4.00008C14.4597 4.23341 13.9064 4.38675 13.333 4.46008C13.9197 4.10675 14.373 3.54675 14.5864 2.87341C14.033 3.20675 13.4197 3.44008 12.773 3.57341C12.2464 3.00008 11.5064 2.66675 10.6664 2.66675C9.0997 2.66675 7.8197 3.94675 7.8197 5.52675C7.8197 5.75341 7.84637 5.97341 7.89303 6.18008C5.5197 6.06008 3.40637 4.92008 1.9997 3.19341C1.75303 3.61341 1.61303 4.10675 1.61303 4.62675C1.61303 5.62008 2.11303 6.50008 2.88637 7.00008C2.41303 7.00008 1.97303 6.86675 1.58637 6.66675V6.68675C1.58637 8.07341 2.57303 9.23341 3.8797 9.49341C3.46019 9.60822 3.01976 9.62419 2.59303 9.54008C2.7741 10.1084 3.12873 10.6057 3.60704 10.962C4.08536 11.3184 4.66333 11.5159 5.2597 11.5267C4.24879 12.327 2.9957 12.7596 1.70637 12.7534C1.4797 12.7534 1.25303 12.7401 1.02637 12.7134C2.29303 13.5267 3.7997 14.0001 5.41303 14.0001C10.6664 14.0001 13.553 9.64008 13.553 5.86008C13.553 5.73341 13.553 5.61341 13.5464 5.48675C14.1064 5.08675 14.5864 4.58008 14.973 4.00008Z"
                                 fill="#B17C3F"
                              />
                           </svg>

                           <p className="text-[0.5rem] font-normal text-black ">
                              Twitter
                           </p>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         )}
           
      </div>
      </AnimatePresence>
      
   );
}
