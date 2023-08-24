import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { data } from "@/pages/browse";

export const user = [
  {
    id: 0,
    type: "Transaction",
    time: "10.32",
    open: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ac velit molestie sollicitudin. Sed sit amet libero convallis, malesuada urna eu, sagittis purus.",
    link: "/product",
  },
  {
    id: 1,
    type: "Transaction",
    time: "10.32",
    open: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ac velit molestie sollicitudin. Sed sit amet libero convallis, malesuada urna eu, sagittis purus.",
    link: "/product",
  },
  {
    id: 2,
    type: "Transaction",
    time: "10.32",
    open: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ac velit molestie sollicitudin. Sed sit amet libero convallis, malesuada urna eu, sagittis purus.",
    link: "/product",
  },
  {
    id: 3,
    type: "Transaction",
    time: "10.32",
    open: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ac velit molestie sollicitudin. Sed sit amet libero convallis, malesuada urna eu, sagittis purus.",
    link: "/product",
  },
  {
    id: 4,
    type: "Transaction",
    time: "10.32",
    open: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ac velit molestie sollicitudin. Sed sit amet libero convallis, malesuada urna eu, sagittis purus.",
    link: "/product",
  },
  {
    id: 5,
    type: "Transaction",
    time: "10.32",
    open: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur nunc ac velit molestie sollicitudin. Sed sit amet libero convallis, malesuada urna eu, sagittis purus.",
    link: "/product",
  },
];

// const unopenedNotificationCount = countUnopenedNotifications(user);
// console.log(`Jumlah notifikasi yang belum dibuka: ${unopenedNotificationCount}`);

let container = " bg-[#fae1c4] ";

interface NotifyProps {
  visible: boolean;
  onClose: (value: boolean) => void;
  unopenedCount: number | null;
  setUnopenedCount: (value: number) => void;
}

export function Notify(props: NotifyProps) {
  return (
    <div>
      <AnimatePresence>
        {props.visible && (
          <motion.div
            initial={{ y: -75 }}
            animate={{ y: 75 }}
            exit={{ opacity: 0, y: -75 }}
            transition={{ linear: true, duration: 0.15 }}
          >
            <div className="h-[27.875rem] w-[18.125rem] overflow-hidden rounded-[0.5rem] bg-white drop-shadow">
              <div className="flex h-[2.25rem]  w-full items-center border-b-2 text-[0.75rem]">
                <p className="ml-[1rem]">Notification</p>
              </div>
              <div className="no-scrollbar h-[23.375rem] overflow-hidden overflow-y-scroll">
                {user.map((data, idx) => {
                  {
                    data.open
                      ? (container = "bg-white")
                      : (container = "bg-[#fae1c4]");
                  }
                  return (
                    <div
                    key={idx}
                    className={
                      " space-y-1 border-b-[0.05rem] p-3 pb-2 hover:bg-[#D9D9D9] " +
                      container
                    }>
                      <Link
                        
                        href={data.link}
                        onClick={() => {
                          data.open = true;
                          const unopenedNotifications = user.filter(
                            (item) => !item.open
                          );
                          props.setUnopenedCount(unopenedNotifications.length);
                        }}
                        
                      >
                        <div className="flex items-center space-x-1">
                          <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                              fill="#B17C3F"
                            />
                          </svg>
                          <p className="text-[0.625rem]">{data.type}</p>
                          <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-[#D9D9D9]"></div>
                          <p className="text-[0.625rem]">{data.time}</p>
                        </div>
                        <div>
                          <p className="text-[0.625rem] text-[#555555]">
                            {data.content}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className=" flex items-center justify-center h-[2.25rem] w-full  border-t-2 text-[0.75rem]">
                <p 
                onClick={() => {
                  for (let i = 0; i < user.length; i++) {
                    user[i].open = true;
                  }
                  props.setUnopenedCount(0)
                }}
                className="text-[#B17C3F] text-[0.7rem]">Mark as All Read</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default function NotifButton() {
  const [unopenedCount, setUnopenedCount] = useState(0);

  useEffect(() => {
    // Menghitung jumlah notifikasi yang belum dibuka setiap kali data berubah
    const unopenedNotifications = user.filter((item) => !item.open);
    setUnopenedCount(unopenedNotifications.length);
  },[]);

  console.log(unopenedCount);

  const [showNotif, setShowNotif] = useState(false);
  const handleOnCloseNotif = () => setShowNotif(false);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowNotif(false);
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
    <div
      ref={wrapperRef}
      onClick={() => {
        if (showNotif) {
          setShowNotif(false);
        } else {
          setShowNotif(true);
        }
      }}
      className="cursor-pointer "
    >
      {unopenedCount === 0 ? null : (
        <div className="absolute flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-red-600">
          <p className="text-[0.7rem] text-white">{unopenedCount}</p>
        </div>
      )}

      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2499 19.5V20.3125C16.2499 21.1745 15.9075 22.0011 15.298 22.6106C14.6885 23.2201 13.8618 23.5625 12.9999 23.5625C12.1379 23.5625 11.3113 23.2201 10.7018 22.6106C10.0923 22.0011 9.74988 21.1745 9.74988 20.3125V19.5M21.718 17.8461C20.4139 16.25 19.4933 15.4375 19.4933 11.0373C19.4933 7.00781 17.4356 5.57223 15.7421 4.875C15.5171 4.78258 15.3054 4.57031 15.2368 4.33926C14.9397 3.3282 14.1069 2.4375 12.9999 2.4375C11.8929 2.4375 11.0595 3.32871 10.7655 4.34027C10.697 4.57387 10.4852 4.78258 10.2602 4.875C8.56465 5.57324 6.50903 7.00375 6.50903 11.0373C6.50649 15.4375 5.58582 16.25 4.28176 17.8461C3.74145 18.5072 4.21473 19.5 5.15977 19.5H20.8451C21.785 19.5 22.2553 18.5042 21.718 17.8461Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute right-24 top-4 z-40 ">
        <Notify
          onClose={handleOnCloseNotif}
          visible={showNotif}
          unopenedCount = {unopenedCount}
          setUnopenedCount = {setUnopenedCount}
        ></Notify>
      </div>
    </div>
  );
}
