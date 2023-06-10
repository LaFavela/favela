import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const user = [
  { id: 1, firsName: "Ramadhani", img: "/assets/profile/avatar.jpg" },
];

const participant = [
  {
    id: 1,
    firstName: "Ali",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/ali.jpg",
  },
  {
    id: 2,
    firstName: "Rama",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/avatar.jpg",
  },
  {
    id: 3,
    firstName: "Dhira",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/dhira.jpg",
  },
  {
    id: 4,
    firstName: "Dwimas",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 5,
    firstName: "Dwimas",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/dwimas.png",
  },
  {
    id: 6,
    firstName: "Rezky",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/eky.jpg",
  },
  {
    id: 7,
    firstName: "Raihan",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/raihan.JPG",
  },
  {
    id: 8,
    firstName: "Raihan",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/raihan.jpg",
  },
  {
    id: 9,
    firstName: "Rama",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/rama.png",
  },
  {
    id: 9,
    firstName: "yan",
    newChatAt: "12.00",
    newChat:
      "adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
    img: "/assets/profile/yan.jpg",
  },
];
const wasChat = { id: 1, firstname: "Ali", img: "/assets/profile/ali.jpg" };

const chat = [
  {
    id: 1,
    receiver: true,
    chat: "ma",
    img: "/assets/profile/ali.jpg",
  },
  {
    id: 2,
    receiver: true,
    chat: "MTM",
    img: "",
  },
  {
    id: 3,
    receiver: false,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
  {
    id: 4,
    receiver: true,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
  {
    id: 5,
    receiver: false,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
  {
    id: 6,
    receiver: true,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
  {
    id: 7,
    receiver: false,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
  {
    id: 8,
    receiver: true,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
  {
    id: 9,
    receiver: false,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
  {
    id: 10,
    receiver: true,
    img: "",
    chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ullam vitae vero reprehenderit repellendus veniam corporis",
  },
];

export default function Chat(props: { visible: any; onClose: any }) {
  return (
    <div>
      <AnimatePresence>
        {props.visible && (
          <motion.div
            initial={{ x: 0, y: 200 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: 0, y: 200 }}
            transition={{ ease: "easeIn", duration: 0.05 }}
            className="fixed bottom-0 right-0 mb-3 mr-3 "
          >
            <div className="flex h-[28.3125rem] w-[40.875rem] justify-center rounded-[1rem] bg-white drop-shadow">
              <div className="space-y-2">
                <div className="mt-3 flex w-[39.5rem] justify-between ">
                  <p className="text-[1rem] font-normal text-[#B17C3F]">Chat</p>
                  <svg
                    onClick={props.onClose}
                    className="cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_804_734)">
                      <path
                        d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM9.879 8.464C9.69946 8.28275 9.45743 8.17697 9.20245 8.16832C8.94748 8.15967 8.69883 8.2488 8.50742 8.41747C8.31601 8.58613 8.1963 8.82159 8.1728 9.07562C8.14929 9.32966 8.22378 9.58308 8.381 9.784L8.465 9.879L10.585 11.999L8.465 14.121C8.28375 14.3005 8.17797 14.5426 8.16932 14.7975C8.16067 15.0525 8.2498 15.3012 8.41847 15.4926C8.58713 15.684 8.82258 15.8037 9.07662 15.8272C9.33066 15.8507 9.58408 15.7762 9.785 15.619L9.879 15.536L12 13.414L14.121 15.536C14.3005 15.7173 14.5426 15.823 14.7975 15.8317C15.0525 15.8403 15.3012 15.7512 15.4926 15.5825C15.684 15.4139 15.8037 15.1784 15.8272 14.9244C15.8507 14.6703 15.7762 14.4169 15.619 14.216L15.536 14.121L13.414 12L15.536 9.879C15.7173 9.69946 15.823 9.45743 15.8317 9.20245C15.8403 8.94748 15.7512 8.69883 15.5825 8.50742C15.4139 8.31601 15.1784 8.1963 14.9244 8.1728C14.6703 8.14929 14.4169 8.22378 14.216 8.381L14.121 8.464L12 10.586L9.879 8.464Z"
                        fill="#ED8B8B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_804_734">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex w-[39.5rem] justify-between ">
                  {/* partisipant chat */}
                  <div className="no-scrollbar h-[25rem] w-[13.625rem] overflow-y-scroll  rounded-[0.5rem] bg-white drop-shadow">
                    {/* looping */}
                    {participant.map((data, idx) => (
                      <div
                        key={idx}
                        className="flex h-[3.375rem] w-[13.625rem] cursor-pointer snap-start items-center bg-white hover:bg-[#D9D9D9] "
                      >
                        <div className="relative ml-2 h-[2.3125rem] w-[2.3125rem]">
                          <Image
                            className="rounded-full"
                            src={data.img}
                            alt={"user"}
                            fill={true}
                            style={{ objectFit: "fill" }}
                          />
                        </div>
                        <div className="ml-2 w-[9.0625rem]">
                          <div className="flex w-full items-center justify-between ">
                            <p className="text-[0.625rem] font-light">
                              {data.firstName}
                            </p>
                            <p className="text-[0.375rem] font-light">
                              {data.newChatAt}
                            </p>
                          </div>
                          <p className="truncate text-[0.5rem] font-light ">
                            {data.newChat}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* isi chat */}
                  <div className="h-[25rem] w-[25.125rem] rounded-[0.5rem] bg-white drop-shadow">
                    <div className="mt-3 flex items-center border-b-2 border-gray-300 pb-2">
                      <div className="relative ml-4 h-[2.3125rem] w-[2.3125rem]">
                        <Image
                          className="rounded-full"
                          src={wasChat.img}
                          alt={"user"}
                          fill={true}
                          style={{ objectFit: "fill" }}
                        />
                      </div>
                      <p className=" ml-3 text-[1rem] font-normal">
                        {wasChat.firstname}
                      </p>
                    </div>
                    <div className="no-scrollbar mb-2 ml-5 mr-5 mt-2 h-[17rem] w-[22.5625rem] space-y-4 overflow-hidden overflow-y-scroll">
                      {chat.map((data, idx) => (
                        <div className="grid w-full">
                          {data.receiver ? (
                            <div className="w-[11.625rem] rounded-b-lg rounded-tr-lg bg-[#E6E6E6] pb-2 pl-2 pr-2 pt-2 text-[0.5rem]">
                              {/* <div className="relative h-[7rem] w-[7rem] ">
                                <Image
                                  className="rounded-sm"
                                  src={data.img}
                                  fill={true}
                                  alt={"chat"}
                                  style={{ objectFit: "fill" }}
                                />
                              </div> */}
                              <p>{data.chat}</p>
                            </div>
                          ) : (
                            <div className="w-[11.625rem] place-self-end rounded-b-lg rounded-tl-lg bg-[#e3d0ba] pb-2 pl-2 pr-2 pt-2 text-[0.5rem]">
                              <p>{data.chat}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* input chat */}
                    <form className="flex w-full justify-center">
                      <div className="flex h-[2.625rem] w-[22.5625rem] items-center justify-center space-x-2 rounded-[0.5rem] bg-white drop-shadow">
                        <label className="cursor-pointer hover:bg-gray-200">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6667 5.44444H11.6756M1 3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H14.3333C15.0406 1 15.7189 1.28095 16.219 1.78105C16.719 2.28115 17 2.95942 17 3.66667V14.3333C17 15.0406 16.719 15.7189 16.219 16.219C15.7189 16.719 15.0406 17 14.3333 17H3.66667C2.95942 17 2.28115 16.719 1.78105 16.219C1.28095 15.7189 1 15.0406 1 14.3333V3.66667Z"
                              stroke="#B17C3F"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1 12.5554L5.44444 8.11096C6.26933 7.31718 7.28622 7.31718 8.11111 8.11096L12.5556 12.5554"
                              stroke="#B17C3F"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.7778 10.7779L11.6667 9.88903C12.4916 9.09526 13.5085 9.09526 14.3334 9.88903L17.0001 12.5557"
                              stroke="#B17C3F"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <input
                            type="file"
                            accept="image"
                            className="hidden"
                          ></input>
                        </label>

                        <input
                          className="w-[17.5625rem] bg-white pl-1 text-[0.6rem]  text-[#B17C3F] placeholder:text-[0.6rem] focus:outline-none"
                          type="text"
                          placeholder="Tulis Pesan Disini"
                        />
                        <button type="submit">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="hover:fill-[#b38f66]"
                              d="M1.19351 0.0835065C0.551509 -0.22316 -0.153824 0.363507 0.0295089 1.05084L1.37351 6.07284C1.40719 6.19905 1.47721 6.31259 1.57487 6.39935C1.67254 6.48611 1.79354 6.54226 1.92284 6.56084L8.51217 7.50217C8.70284 7.52884 8.70284 7.80484 8.51217 7.83217L1.92351 8.77284C1.7942 8.79141 1.6732 8.84756 1.57554 8.93432C1.47788 9.02108 1.40786 9.13462 1.37417 9.26084L0.0295089 14.2855C-0.153824 14.9722 0.551509 15.5588 1.19351 15.2528L15.5255 8.42017C16.1582 8.11884 16.1582 7.2175 15.5255 6.9155L1.19351 0.0835065Z"
                              fill="#B17C3F"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
