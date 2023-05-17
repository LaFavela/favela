export default function Landing (){
   return(
      <div>
         <div className="flex flex-col object-contain bg-cover bg-center min-h-screen text-black" style={{ backgroundImage: "url('/assets/landing/landingBG.jpg')" }}>
            <img src="/assets/landing/favela.png" alt="logo" className="h-36 w-[26rem] mt-[10.5rem] ml-16"  />
            <div className="ml-[5.38rem] mt-2">
            <p className="text-white font-extralight text-[3rem]">Your Property in</p>
            <p className="text-white font-extralight text-[3rem] pb-7">One Click</p>
            <button className="button-brown w-44">Explore now</button>
               
            </div>
         </div>
      </div>
   )
}