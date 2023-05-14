export default function Navbar() {
   // const [navbar, setNavbar] = useState(false);
   return (
      <nav className="mx-auto text-xl pt-16 pb-10 px-28 text-black bg-white z-10">
         <div className="flex justify-between">
            <div className="flex items-center">
               <img src="/assets/logo/properti.png" className="w-9 h-9" />
               <p className="font-poppins font-bold">FAVELA</p>
            </div>
            <div className="flex space-x-16 items-center">
               <div className="space-x-16">
                  <a className="border-b-[2.5px] border-black" href="#">
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
                  <img src="assets/profile/avatar.jpg" alt="" className="w-9 h-9 rounded-full"></img>
               </div>
            </div>
         </div>
         {/* mobile nav */}
      </nav>
   );
}