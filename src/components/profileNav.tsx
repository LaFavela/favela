import React, { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link"
import { signOut } from "next-auth/react";

export default function ProfileNav(
  props: any = {
    visible: false,
    onClose: false,
    isDesigner: false,
    isAgent: false,

  }
) {
  return (
    <div>
      <AnimatePresence>
        {props.visible && (
          <motion.div 
          initial={{ y: -75}}
          animate={{ y: 75}}
          exit={{ opacity:0, y:-75}}
          transition={{ linear: true, duration: 0.15 }}
          
          // className="transition-all ease-in-out delay-150"
          >
            
            <div className=" flex w-[13.75rem] justify-center rounded-[1rem] bg-white drop-shadow">
              <div className="my-[0.7rem] space-y-2">
                {/* Profile */}
                <Link href={"/merchantProfile"}>
                  <div className="flex w-[11.5rem] items-center rounded-[0.5rem] bg-white py-[0.3rem] hover:bg-[#EAEAEA]">
                    <svg
                      className="ml-[0.5rem]"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#EAEAEA" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 10.4C18.3209 10.3997 16.6711 10.8398 15.2153 11.6764C13.7594 12.5129 12.5484 13.7167 11.7032 15.1675C10.858 16.6184 10.4081 18.2655 10.3984 19.9446C10.3887 21.6237 10.8196 23.2759 11.648 24.7364C12.2079 24.0087 12.9277 23.4195 13.7517 23.0144C14.5757 22.6092 15.4818 22.399 16.4 22.4H23.6C24.5182 22.399 25.4243 22.6092 26.2483 23.0144C27.0723 23.4195 27.7921 24.0087 28.352 24.7364C29.1804 23.2759 29.6113 21.6237 29.6016 19.9446C29.5919 18.2655 29.142 16.6184 28.2968 15.1675C27.4516 13.7167 26.2406 12.5129 24.7847 11.6764C23.3289 10.8398 21.6791 10.3997 20 10.4ZM29.5316 27.2912C31.136 25.1995 32.0039 22.6361 32 20C32 13.3724 26.6276 8 20 8C13.3724 8 8.00001 13.3724 8.00001 20C7.99605 22.6361 8.8639 25.1996 10.4684 27.2912L10.4624 27.3128L10.8884 27.8084C12.0139 29.1242 13.4113 30.1803 14.9843 30.9039C16.5573 31.6276 18.2685 32.0015 20 32C22.4328 32.0045 24.8089 31.2655 26.81 29.882C27.6631 29.2926 28.4367 28.5956 29.1116 27.8084L29.5376 27.3128L29.5316 27.2912ZM20 12.8C19.0452 12.8 18.1295 13.1793 17.4544 13.8544C16.7793 14.5295 16.4 15.4452 16.4 16.4C16.4 17.3548 16.7793 18.2704 17.4544 18.9456C18.1295 19.6207 19.0452 20 20 20C20.9548 20 21.8705 19.6207 22.5456 18.9456C23.2207 18.2704 23.6 17.3548 23.6 16.4C23.6 15.4452 23.2207 14.5295 22.5456 13.8544C21.8705 13.1793 20.9548 12.8 20 12.8Z"
                        fill="black"
                      />
                    </svg>
                    <p className="ml-[1rem] text-[1rem] font-medium text-black">
                      Profil
                    </p>
                  </div>
                </Link>
                {props.isAgent && (
                  // {/* Jual Property */}
                  <Link href={"/sellPropertyForm"}>
                    <div className="flex w-[11.5rem] items-center rounded-[0.5rem] bg-white py-[0.3rem] hover:bg-[#EAEAEA]">
                        <svg
                        className="ml-[0.5rem]"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="20" cy="20" r="20" fill="#EAEAEA" />
                        <g clip-path="url(#clip0_1249_2984)">
                            <path
                            d="M29.9166 20.1945C29.8252 20.195 29.7346 20.1775 29.65 20.1429C29.5654 20.1084 29.4884 20.0574 29.4235 19.9931L19.4999 10.0625L9.57633 19.9931C9.44348 20.1068 9.27259 20.1663 9.09782 20.1595C8.92304 20.1528 8.75725 20.0803 8.63357 19.9567C8.5099 19.833 8.43744 19.6672 8.43069 19.4924C8.42394 19.3176 8.48339 19.1467 8.59716 19.0139L19.0138 8.59723C19.1439 8.46789 19.3199 8.39529 19.5034 8.39529C19.6869 8.39529 19.8629 8.46789 19.993 8.59723L30.4097 19.0139C30.5052 19.1114 30.5699 19.2349 30.5957 19.3689C30.6215 19.503 30.6071 19.6417 30.5545 19.7676C30.5019 19.8936 30.4134 20.0013 30.2999 20.0772C30.1864 20.1531 30.0531 20.1939 29.9166 20.1945Z"
                            fill="black"
                            />
                            <path
                            d="M19.4998 12.4097L11.1665 20.7708V29.2222C11.1665 29.5906 11.3128 29.9439 11.5733 30.2043C11.8338 30.4648 12.187 30.6111 12.5554 30.6111H17.4165V23.6667H21.5832V30.6111H26.4443C26.8126 30.6111 27.1659 30.4648 27.4264 30.2043C27.6868 29.9439 27.8332 29.5906 27.8332 29.2222V20.7222L19.4998 12.4097Z"
                            fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1249_2984">
                            <rect
                                width="25"
                                height="25"
                                fill="white"
                                transform="translate(7 7)"
                            />
                            </clipPath>
                        </defs>
                        </svg>

                        <p className="ml-[1rem] text-[1rem] font-medium text-black">
                        Jual Property
                        </p>
                    </div>
                  </Link>

                )}
                {props.isDesigner && (
                  // {/* Jual Design */}
                  <Link href={"/designForm"}>
                    <div className="flex w-[11.5rem] items-center rounded-[0.5rem] bg-white py-[0.3rem] hover:bg-[#EAEAEA]">
                        <svg
                        className="ml-[0.5rem]"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="20" cy="20" r="20" fill="#EAEAEA" />
                        <path
                            d="M31 26.6854L24.764 20.4494L26.5281 18.6854L22.3146 14.4719L20.5506 16.236L14.3146 10L9 15.3146L15.236 21.5506L9.88764 26.8989V31.1124H14.1011L19.4494 25.764L25.6854 32L31 26.6854ZM16.8315 19.9551L12.1798 15.3146L14.3146 13.1798L15.7416 14.6067L14.4045 15.9438L15.9888 17.5281L17.3258 16.191L18.9551 17.8202L16.8315 19.9551ZM21.0449 24.1685L23.1798 22.0337L24.809 23.6629L23.4719 25L25.0562 26.5843L26.3933 25.2472L27.8202 26.6742L25.6854 28.809L21.0449 24.1685ZM23.5202 13.273L26.3719 10.4202L30.5831 14.6315L27.7315 17.4843L23.5202 13.273Z"
                            fill="black"
                        />
                        </svg>

                        <p className="ml-[1rem] text-[1rem] font-medium text-black">
                        Jual Design
                        </p>
                    </div>
                  </Link>

                )}
                {/* Transaction */}
                <Link href={"/transaction"}>
                  <div className="flex w-[11.5rem] items-center rounded-[0.5rem] bg-white py-[0.3rem] hover:bg-[#EAEAEA]">
                    <svg
                      className="ml-[0.5rem]"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#EAEAEA" />
                      <path
                        d="M10 15H28M24 10L29 15L24 20M30 25H12M16 20L11 25L16 30"
                        stroke="black"
                        stroke-width="3"
                      />
                    </svg>
                    <p className="ml-[1rem] text-[1rem] font-medium text-black">
                      Transaction
                    </p>
                  </div>
                </Link>
                {/* Liked */}
                <Link href={"/likeHistory"}>
                  <div className="flex w-[11.5rem] items-center rounded-[0.5rem] bg-white py-[0.3rem] hover:bg-[#EAEAEA]">
                    <svg
                      className="ml-[0.5rem]"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#EAEAEA" />
                      <path
                        d="M19.506 30L11.4429 22.1696C7.06085 17.4714 13.5025 8.45082 19.506 15.7487C25.5094 8.45082 31.9219 17.5027 27.569 22.1696L19.506 30Z"
                        fill="black"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="ml-[1rem] text-[1rem] font-medium text-black">
                      Liked
                    </p>
                  </div>
                </Link>
                {/* Setting */}
                <Link href={"/settings"}>
                  <div className="flex w-[11.5rem] items-center rounded-[0.5rem] bg-white py-[0.3rem] hover:bg-[#EAEAEA]">
                    <svg
                      className="ml-[0.5rem]"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#EAEAEA" />
                      <path
                        d="M20.5048 17.0962C19.6227 17.0962 18.7967 17.4204 18.1713 18.0127C17.5489 18.6051 17.2037 19.3874 17.2037 20.2229C17.2037 21.0583 17.5489 21.8406 18.1713 22.433C18.7967 23.0226 19.6227 23.3495 20.5048 23.3495C21.3868 23.3495 22.2128 23.0226 22.8382 22.433C23.4607 21.8406 23.8059 21.0583 23.8059 20.2229C23.8059 19.3874 23.4607 18.6051 22.8382 18.0127C22.5328 17.7212 22.1692 17.49 21.7686 17.3327C21.368 17.1754 20.9384 17.095 20.5048 17.0962ZM32.6677 23.6764L30.7384 22.1145C30.8298 21.5836 30.877 21.0415 30.877 20.5023C30.877 19.963 30.8298 19.4181 30.7384 18.8901L32.6677 17.3282C32.8134 17.21 32.9177 17.0526 32.9667 16.8769C33.0157 16.7012 33.0071 16.5156 32.942 16.3446L32.9155 16.272C32.3845 14.8657 31.5889 13.5621 30.5673 12.4245L30.5142 12.3658C30.3901 12.2276 30.2247 12.1283 30.0399 12.0809C29.8551 12.0336 29.6594 12.0403 29.4787 12.1004L27.0833 12.9079C26.1983 12.2205 25.213 11.6785 24.1451 11.3012L23.682 8.92904C23.647 8.75034 23.5555 8.58593 23.4195 8.45767C23.2836 8.32941 23.1097 8.24336 22.9209 8.21096L22.8412 8.19699C21.3072 7.93434 19.6906 7.93434 18.1566 8.19699L18.0769 8.21096C17.8881 8.24336 17.7142 8.32941 17.5783 8.45767C17.4423 8.58593 17.3508 8.75034 17.3158 8.92904L16.8497 11.3124C15.792 11.6926 14.8066 12.2334 13.9322 12.9134L11.5191 12.1004C11.3384 12.0398 11.1426 12.0328 10.9577 12.0802C10.7727 12.1277 10.6074 12.2273 10.4836 12.3658L10.4305 12.4245C9.4107 13.5633 8.61532 14.8666 8.08234 16.272L8.05579 16.3446C7.92304 16.6939 8.03219 17.0851 8.33014 17.3282L10.283 18.9068C10.1916 19.4321 10.1473 19.9686 10.1473 20.4995C10.1473 21.0359 10.1916 21.5724 10.283 22.0921L8.33604 23.6708C8.1903 23.789 8.08599 23.9464 8.03698 24.122C7.98797 24.2977 7.99659 24.4834 8.06169 24.6543L8.08824 24.727C8.62219 26.1324 9.40984 27.4317 10.4364 28.5745L10.4895 28.6331C10.6136 28.7713 10.7789 28.8706 10.9638 28.918C11.1486 28.9654 11.3443 28.9586 11.525 28.8986L13.9381 28.0855C14.8172 28.7701 15.7966 29.3121 16.8556 29.6865L17.3217 32.0699C17.3567 32.2486 17.4482 32.413 17.5842 32.5413C17.7201 32.6695 17.894 32.7556 18.0828 32.788L18.1625 32.802C19.7116 33.066 21.298 33.066 22.8471 32.802L22.9267 32.788C23.1156 32.7556 23.2895 32.6695 23.4254 32.5413C23.5614 32.413 23.6529 32.2486 23.6879 32.0699L24.151 29.6977C25.2189 29.3177 26.2042 28.7784 27.0892 28.0911L29.4846 28.8986C29.6652 28.9591 29.8611 28.9661 30.046 28.9187C30.231 28.8713 30.3963 28.7717 30.5201 28.6331L30.5732 28.5745C31.5998 27.4261 32.3874 26.1324 32.9214 24.727L32.9479 24.6543C33.0748 24.3078 32.9656 23.9195 32.6677 23.6764ZM20.5048 25.1349C17.6403 25.1349 15.3187 22.9359 15.3187 20.2229C15.3187 17.5098 17.6403 15.3108 20.5048 15.3108C23.3693 15.3108 25.6909 17.5098 25.6909 20.2229C25.6909 22.9359 23.3693 25.1349 20.5048 25.1349Z"
                        fill="black"
                      />
                    </svg>
                    <p className="ml-[1rem] text-[1rem] font-medium text-black">
                      Setting
                    </p>
                  </div>
                </Link>
                {/* Log Out */}
                <button onClick={() => signOut()} className="flex w-[11.5rem] items-center rounded-[0.5rem] bg-white py-[0.3rem] hover:bg-[#EAEAEA]">
                  <svg
                    className="ml-[0.5rem]"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#EAEAEA" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.4064 8.09005C19.6051 7.53271 21.1999 9.66074 21.1999 11.7648V30.4316C21.1999 32.5357 19.6051 34.6637 17.4064 34.1064C12.1233 32.7677 8.17578 27.4529 8.17578 21.0982C8.17578 14.7435 12.1233 9.42873 17.4064 8.09005ZM23.9149 16.1555C24.1369 15.9055 24.438 15.7651 24.752 15.7651C25.0659 15.7651 25.367 15.9055 25.5891 16.1555L29.1411 20.1555C29.3631 20.4056 29.4878 20.7446 29.4878 21.0982C29.4878 21.4518 29.3631 21.7908 29.1411 22.0409L25.5891 26.0409C25.3658 26.2838 25.0667 26.4182 24.7562 26.4152C24.4458 26.4121 24.1488 26.2719 23.9293 26.0247C23.7098 25.7775 23.5853 25.4431 23.5826 25.0935C23.5799 24.7439 23.6992 24.407 23.9149 24.1556L25.4458 22.4316H15.2799C14.9658 22.4316 14.6647 22.2911 14.4426 22.041C14.2206 21.791 14.0959 21.4518 14.0959 21.0982C14.0959 20.7446 14.2206 20.4054 14.4426 20.1554C14.6647 19.9053 14.9658 19.7649 15.2799 19.7649H25.4458L23.9149 18.0408C23.6929 17.7908 23.5682 17.4517 23.5682 17.0982C23.5682 16.7446 23.6929 16.4055 23.9149 16.1555Z"
                      fill="black"
                    />
                  </svg>

                  <p className="ml-[1rem] text-[1rem] font-medium text-black">
                    Log Out
                  </p>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
