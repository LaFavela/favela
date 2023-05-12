import Link from "next/link";

export default function Register() {

   return (
      <div>
         <div className="flex justify-center items-center object-contain bg-cover bg-center min-h-screen text-black" style={{ backgroundImage: "url('/assets/login/bg3.jpg')" }}>
            <div className="w-2/4 min-h-full rounded-xl flex justify-center items-center">
               <div className="w-[400px] h-[550px] bg-nila  rounded-lg shadow-xl flex flex-col ">
                  <div className="h-12 border-[1px] border-gray-900 w-80 rounded-full mt-8 ml-9 flex" >
                     <Link className="w-full h-full rounded-l-full border-r-[1px] border-gray-900 font-poppins font-bold flex justify-center items-center" href="./login">Login</Link>
                     <Link className="w-full h-full rounded-r-full font-poppins font-bold flex justify-center items-center bg-grayhov" href="./register">Sign In</Link>
                  </div>

                  <form id="login" action="./footer" method="get" >``
                     <label htmlFor="email">
                        <span className="block mb-1 font-Poppins pl-11 ">Email Address</span>
                        <input type="email" id="email" placeholder="Enter your email" required className="px-3 py-2 ml-9 rounded-full bg-gray-300 w-80" />
                     </label>
                     <label htmlFor="password">
                        <span className="block mb-1 font-Poppins pl-11 mt-2">Password</span>
                        <input type="password" id="password" placeholder="Enter your password" required className="px-3 py-2 ml-9 rounded-full bg-gray-300 w-80" />

                     </label>
                     <label htmlFor="Confirm password">
                        <span className="block mb-1 font-Poppins pl-11 mt-2">Confirm Password</span>
                        <input type="password" id="confirm_password" placeholder="Confirm your password" required className="px-3 py-2 ml-9 rounded-full bg-gray-300 w-80" />
                        <a href="#" className="pl-11 font-Poppins font-bold text-gray-900 underline text-sm mt-1 block">Forgot password ?</a>
                        <button type="submit" className="bg-gold rounded-full text-white font-semibold ml-9 mt-3 w-80 py-2 hover:bg-grayhov  transition duration-300 ease-in-out ">SIGN IN</button>
                     </label>
                  </form>
                  <div className="flex justify-center mt-2 font-Poppins text-gray-400">
                     <p >or login with</p>
                  </div>
                  <div className="flex">
                     <form action="https://myaccount.google.com/personal-info" method="get">
                        <button className="border-2 border-red-500 rounded-full text-red-500 text-xl font-semibold ml-9 mt-2 w-[148px] py-2 hover:bg-gray-400 hover:border-gray-400 hover:text-black  transition duration-300 ease-in-out "><img src="/assets/login/google.png" alt="google" className="inline-block mr-5 mb-1" />Google</button>
                     </form>
                     <form action="https://www.facebook.com/" method="get">
                        <   button className="border-2 border-blue-500 rounded-full text-blue-500 text-xl font-semibold ml-6 mt-2 w-[148px] py-2 hover:bg-gray-400 hover:border-gray-400 hover:text-black  transition duration-300 ease-in-out "><img src="/assets/login/facebook.png" alt="facebook" className="inline-block mr-5 mb-1" />Facebook</button>
                     </form>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
}