import { useSession } from "next-auth/react";
import ProfileNav from "./profileNav";
import { useState, useRef, useEffect } from "react";

export default function ProfileButton(props: any = { transparent: false }) {
   
   const {data: session} = useSession();

   const [showProfileNav, setShowProfileNav] = useState(false);
   const handleOnClose = () => setShowProfileNav(false);
   let textColor = "text-black ";
   if (props.transparent) {
      textColor = "text-white ";
   }

   function useOutsideAlerter(ref: any) {
      useEffect(() => {
         /**
          * Alert if clicked on outside of element
          */
         function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
               setShowProfileNav(false);
            }
         }
         // Bind the event listener
         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
         };
      }, [ref]);
   }

   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef);
   

   return (
      <div
         ref={wrapperRef}
         onClick={() => {
            if (showProfileNav) {
               setShowProfileNav(false);
            } else {
               setShowProfileNav(true);
            }
         }}
         className="flex cursor-pointer justify-end"
      >
         <div className="flex items-center space-x-4">
            <img
               src="assets/profile/avatar.jpg"
               alt=""
               className="aspect-square w-14 rounded-full"
            ></img>
            <div>
               <p className={"text-[1.3125rem] font-light " + textColor}>
                  {session?.user?.firstName}
               </p>
            </div>
         </div>
         <div className="absolute right-5 z-40 mt-[0rem]">
            <ProfileNav
               className=""
               isAgent={true}
               isDesigner={true}
               onClose={handleOnClose}
               visible={showProfileNav}
            ></ProfileNav>
         </div>
      </div>
   );
}
