import { useSession } from "next-auth/react";
import ProfileNav from "./profileNav";
import NotifButton from "./notification";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {user} from "./notification";





const nama = "Ramadhani";
const img = "/assets/profile/avatar.jpg";

export default function ProfileButton() {
   
   
   


  const { data: session } = useSession();

  const [showProfileNav, setShowProfileNav] = useState(false);
  
  const handleOnCloseProf = () => setShowProfileNav(false);
  
  let textColor = "text-black ";

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowProfileNav(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="flex items-center gap-5 ">
      <NotifButton></NotifButton>
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
          <Image
            className="rounded-full"
            // src={img}
            alt="profile"
            src={session?.user?.image || '/default-profile-image.jpg'}
            width={36}
            height={36}
          />
          <div>
            <p className={"text-[1.125rem] font-normal" + textColor}>
              {session?.user?.firstName}
              {/* {nama} */}
            </p>
          </div>
        </div>
        <div className="absolute right-5 z-40 mt-[0rem]">
          <ProfileNav
            className=""
            isAgent={true}
            isDesigner={true}
            onClose={handleOnCloseProf}
            visible={showProfileNav}
          ></ProfileNav>
        </div>
      </div>
    </div>
  );
}

