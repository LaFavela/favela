import ProfileNav from "./profileNav"
import { useState } from "react";


export default function ProfileButton(
    props: any = { transparent: false }
) {
    const [showProfileNav, setShowProfileNav] = useState(false);
    const handleOnClose = () => setShowProfileNav(false);
    let textColor = "text-black ";
    if (props.transparent) {
        textColor = "text-white ";
    }
  return (
    <div
      onClick={() => {
        if (showProfileNav) {
          setShowProfileNav(false);
        }else {
          setShowProfileNav(true)
        }
      }} 
      className="cursor-pointer flex justify-end">
      <div className="flex items-center space-x-4">
        <img
          src="assets/profile/avatar.jpg"
          alt=""
          className="aspect-square w-14 rounded-full"
        ></img>
        <div>
          <p className={"text-[1.3125rem] font-light " + textColor}>Ramadhani</p>
        </div>
      </div>
      <div className="absolute right-5 mt-[4.3rem]">
        <ProfileNav isAgent={true} isDesigner={true} onClose={handleOnClose} visible={showProfileNav}></ProfileNav>
      </div>
    </div>
  );
}
