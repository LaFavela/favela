import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProfileButton from "@/components/profileButton";
import React from "react";
import Router from "next/router";
import { useLocation } from "react-router-dom";
import LoginButton from "@/components/loginButton";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const data = [
  {
    id: 0,
    Name: "Ramadhani Al-Qadri",
  },
  {
    id: 0,
    Name: "Muhammad Dwimas Catur Nugraha",
  },
  {
    id: 0,
    Name: "Muhammad Dzulhi Raihan",
  },
  {
    id: 0,
    Name: "Yan Saputra",
  },
  {
    id: 0,
    Name: "Rifki Rusdi",
  },
  {
    id: 0,
    Name: "Dhira Wahyu",
  },
  {
    id: 0,
    Name: "Ramadhani Al-Qadri",
  },
];

export default function Navbar(
  props: any = {
    transparent: false,
    login: false,
    home: false,
    place: "",
    about: false,
  }
) {
  const [history, setHistory] = useState<string[]>([]);

  const [value, setValue] = useState("");
  const onChange = (event: any) => setValue(event.target.value);
  const onSearch = (searchTerm: any) => {
    console.log("search", searchTerm);
  };

  const { data: session } = useSession();

  let navBackground = "bg-white drop-shadow";
  let searchRing =
    " placeholder:text-[#B17C3F] focus:outline-none focus:border-[#B17C3F] focus:ring-2 focus:ring-[#B17C3F] ";
  let searchBackground = "bg-[#F1F1F1]";
  let searchTextColor = "text-[#B17C3F]";
  let textColor = "text-[#CAC5C5] hover:text-[#B17C3F]";
  let homie = " sticky top-0";
  if (props.home) homie = " fixed";
  if (props.about) homie = " ";

  function clickHandler(link: string) {
    return Router.push(link);
  }
  type NavItemType = {
    label: string;
    link: string;
  };
  const NavItem = ({ label, link }: NavItemType) => {
    {
      const pathname = useRouter().pathname;

      let param =
        "h-11 w-[6rem] text-[1.0625rem] rounded-full font-light " + textColor;

      return (
        <div>
          <button onClick={() => clickHandler(link)} className={param}>
            {label}
          </button>
        </div>
      );
    }
  };

  return (
    <nav
      className={
        "z-40 flex h-[4.8125rem] w-full items-center justify-center text-black transition-colors duration-300 " +
        navBackground +
        homie
      }
    >
      <div className="flex w-full items-center justify-between px-12">
        <div className="w-28">
          <svg
            width="88"
            height="30"
            viewBox="0 0 88 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.94433 23V1.8268H4.53814V11.0062H15.0165V1.8268H18.6103V23H15.0165V14.3402H4.53814V23H0.94433ZM33.1687 6.89278H36.5894V23H33.1687V20.0557C32.6203 21.0371 31.8553 21.8165 30.8739 22.3938C29.9213 22.9711 28.8966 23.2598 27.7997 23.2598C25.9522 23.2598 24.4801 22.6969 23.3832 21.5711C22.2863 20.4454 21.7378 18.8433 21.7378 16.7649V6.89278H25.1151V15.7258C25.1151 18.699 26.3419 20.1856 28.7955 20.1856C30.0368 20.1856 31.076 19.7814 31.9131 18.9732C32.7502 18.1649 33.1687 17.0392 33.1687 15.5959V6.89278ZM42.7528 23H39.3755V6.89278H42.7528V9.79381C43.3012 8.81237 44.0518 8.04742 45.0043 7.49897C45.9858 6.92165 47.0249 6.63299 48.1219 6.63299C49.9981 6.63299 51.4847 7.19588 52.5816 8.32165C53.6786 9.44742 54.227 11.0495 54.227 13.1278V23H50.8064V14.167C50.8064 11.1938 49.5796 9.70722 47.126 9.70722C45.8847 9.70722 44.8456 10.1113 44.0085 10.9196C43.1713 11.699 42.7528 12.8103 42.7528 14.2536V23ZM60.2172 23H56.8399V6.89278H60.2172V23ZM56.4069 2.1299C56.4069 1.55258 56.609 1.06186 57.0131 0.657732C57.4461 0.224742 57.9657 0.0082463 58.5719 0.0082463C59.1492 0.0082463 59.6399 0.224742 60.044 0.657732C60.477 1.06186 60.6935 1.55258 60.6935 2.1299C60.6935 2.73608 60.477 3.25567 60.044 3.68866C59.6399 4.09278 59.1492 4.29484 58.5719 4.29484C57.9657 4.29484 57.4605 4.07835 57.0564 3.64536C56.6234 3.24124 56.4069 2.73608 56.4069 2.1299ZM67.2228 6.89278H71.4661V9.62062H67.2228V23H63.8455V9.62062H61.8104V6.89278H63.8455V5.63711C63.8455 3.99175 64.3506 2.66392 65.3609 1.65361C66.3712 0.614432 67.6125 0.0948437 69.0846 0.0948437C70.5568 0.0948437 71.8702 0.628865 73.0248 1.69691L71.6393 4.07835C70.9465 3.38557 70.2537 3.03917 69.5609 3.03917C68.8393 3.03917 68.262 3.2701 67.829 3.73196C67.4248 4.16495 67.2228 4.77113 67.2228 5.55052V6.89278ZM70.6638 27.8062L72.2226 25.0784C72.9442 25.7423 73.6803 26.0742 74.4308 26.0742C75.1524 26.0742 75.7586 25.8 76.2494 25.2515C76.7401 24.732 76.9854 24.1402 76.9854 23.4763C76.9854 23.2165 74.8061 17.6887 70.4473 6.89278H74.0844L78.9339 18.7567L83.7401 6.89278H87.3772L79.5401 26.0309C79.0782 27.0701 78.4143 27.8928 77.5483 28.499C76.6823 29.1052 75.7298 29.4082 74.6906 29.4082C73.1896 29.4082 71.8473 28.8742 70.6638 27.8062Z"
              fill="#B17C3F"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-4 flex items-center  justify-center space-x-4">
            <form
              onSubmit={() => {onSearch(value);
                setHistory([...history, value]);
                if (history.length > 5) {
                  setHistory(history.slice(1));
                }}}
              className="h-[2.625rem] w-[50vw]"
              action=""
            >
              <div className="flex h-full w-full">
                <div className="flex items-center">
                  <svg
                    className={"absolute ml-4 fill-current " + searchTextColor}
                    width="20"
                    height="20"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.0965 20.1475L28 26.0496L26.0496 28L20.1475 22.0965C17.9514 23.857 15.2199 24.8145 12.4052 24.8105C5.55755 24.8105 0 19.2529 0 12.4052C0 5.55755 5.55755 0 12.4052 0C19.2529 0 24.8105 5.55755 24.8105 12.4052C24.8145 15.2199 23.857 17.9514 22.0965 20.1475ZM19.3315 19.1247C21.0808 17.3258 22.0577 14.9144 22.0538 12.4052C22.0538 7.07512 17.7354 2.75672 12.4052 2.75672C7.07512 2.75672 2.75672 7.07512 2.75672 12.4052C2.75672 17.7354 7.07512 22.0538 12.4052 22.0538C14.9144 22.0577 17.3258 21.0808 19.1247 19.3315L19.3315 19.1247Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className={
                      "+ h-full w-full rounded-full pl-7 text-[1.0625rem] font-light " +
                      searchTextColor +
                      " placeholder:" +
                      searchTextColor +
                      " focus:outline-none " +
                      searchBackground +
                      searchRing +
                      "pl-[3.5rem] caret-pink-600"
                    }
                    placeholder="Search..."
                  ></input>
                </div>
              </div>
              {value!=""&&(

                <div className="mt-2 w-full space-y-5 rounded-xl bg-white drop-shadow-landingShado">
                  <p className="mx-6 pt-4">Recommendation</p>
                  {data
                    .filter((item) => {
                      const searchTerm = value.toLowerCase();
                      const Name = item.Name.toLowerCase();
                      return searchTerm && Name.startsWith(searchTerm);
                    })
                    .map((item, index) => (
                      <div
                        className="mx-6   flex cursor-pointer items-center space-x-4 rounded-md"
                        onClick={() => {
                          onSearch(item.Name);
                          setHistory([...history, item.Name]);
                          if (history.length > 5) {
                            setHistory(history.slice(1));
                          }
                        }}
                        key={index}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.2049 12.952L18 16.7462L16.7462 18L12.952 14.2049C11.5402 15.3366 9.78419 15.9522 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9522 9.78419 15.3366 11.5402 14.2049 12.952ZM12.4274 12.2945C13.5519 11.138 14.18 9.58786 14.1774 7.9748C14.1774 4.54829 11.4013 1.77218 7.9748 1.77218C4.54829 1.77218 1.77218 4.54829 1.77218 7.9748C1.77218 11.4013 4.54829 14.1774 7.9748 14.1774C9.58786 14.18 11.138 13.5519 12.2945 12.4274L12.4274 12.2945Z"
                            fill="#B17C3F"
                          />
                        </svg>

                        <p className="text-[0.75rem] font-light">{item.Name}</p>
                      </div>
                    ))}
                    {history.length>0?(

                    <div className="space-y-4 pb-4">
                      <p className="mx-6 ">History</p>
                      {history.map((item, index) => (
                        <div
                          className="mx-6 flex cursor-pointer items-center justify-between space-x-4 rounded-md"
                          key={index}
                        >
                          <div
                            className="flex space-x-4"
                            onClick={() => {
                              onSearch(item);
                              setHistory([...history, item]);
                              if (history.length > 5) {
                                setHistory(history.slice(1));
                              }
                            }}
                          >
                            <svg
                              width="21"
                              height="18"
                              viewBox="0 0 21 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 0C9.61305 0 7.32387 0.948211 5.63604 2.63604C3.94821 4.32387 3 6.61305 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C6.47341 16.198 7.46449 16.8627 8.55606 17.3158C9.64764 17.769 10.8181 18.0015 12 18C14.3869 18 16.6761 17.0518 18.364 15.364C20.0518 13.6761 21 11.3869 21 9C21 6.61305 20.0518 4.32387 18.364 2.63604C16.6761 0.948211 14.3869 3.55683e-08 12 0ZM11 5V10L15.25 12.52L16.02 11.24L12.5 9.15V5H11Z"
                                fill="#B17C3F"
                              />
                            </svg>

                            <p className="text-[0.75rem] font-light">{item}</p>
                          </div>
                          <div
                          onClick={()=>{
                            setHistory(history.filter((it)=>it!==item));
                          }}>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.00021 5.58623L11.9502 0.63623L13.3652 2.05123L8.41521 7.00123L13.3652 11.9512L11.9502 13.3652L7.00021 8.41523L2.05021 13.3652L0.637207 11.9502L5.58721 7.00023L0.637207 2.05023L2.05021 0.63823L7.00021 5.58823V5.58623Z"
                                fill="#878787"
                              />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                    ):(
                      <div className="h-[0.1rem]">

                      </div>
                    )}
                </div>
              )}
            </form>
            <NavItem label="Home" link="/"></NavItem>
            <NavItem label="Build" link="/build"></NavItem>
            <NavItem label="Design" link="/design"></NavItem>
            <div className="h-[1.875rem] w-[0.1rem] bg-[#BEB8B8]"></div>
          </div>
          {/* <ProfileButton></ProfileButton> */}
          {session ? (
            <ProfileButton></ProfileButton>
          ) : (
            <LoginButton></LoginButton>
          )}
        </div>
      </div>
      {/* mobile nav */}
    </nav>
  );
}
