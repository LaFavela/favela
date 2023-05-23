import React, { useState } from "react";
import Link from "next/link";
import Slider from "./Slider";
import Footer from "./footer";
export default function Landing() {
  const [isPressed, setIsPressed] = useState(false);
  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div>
      <div
        className="flex min-h-screen flex-col bg-cover bg-center object-contain text-black"
        style={{ backgroundImage: "url('/assets/landing/landingBG.jpg')" }}
      >
        <img
          src="/assets/landing/favela.png"
          alt="logo"
          className="ml-16 mt-[10.5rem] h-36 w-[26rem]"
        />
        <div className="ml-[5.38rem] mt-2">
          <p className="text-[3rem] font-extralight text-white">
            Your Property in
          </p>
          <p className="pb-7 text-[3rem] font-extralight text-white">
            One Click
          </p>
          <button className="button-brown w-44">Explore now</button>
        </div>
      </div>
      <div className="mt-28 flex flex-col items-center justify-center">
        <p className="text-[2.2rem] font-medium">
          The <span className="text-[#B17C3F]">Service</span> You Get From{" "}
          <span className="text-[#B17C3F]">Favela</span>
        </p>
        <div className="w-[44.6rem]">
          <p className="mt-4 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>
      </div>
      <div className="mt-16 flex flex-row items-center justify-center gap-8 pb-10">
        <div className="h-[18.3rem] w-[18.3rem] rounded-[1.5625rem] bg-white drop-shadow-landingShado ">
          <div className="ml-7 mt-5 flex flex-row">
            <p className="mt-12 text-[1.2rem] font-medium">Buy Properties</p>
            <div className=" ml-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 drop-shadow-none">
              <svg
                width="45"
                height="44"
                viewBox="0 0 54 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 32C42 33.1935 41.5259 34.3381 40.682 35.182C39.8381 36.0259 38.6935 36.5 37.5 36.5C36.3065 36.5 35.1619 36.0259 34.318 35.182C33.4741 34.3381 33 33.1935 33 32C33 30.8065 33.4741 29.6619 34.318 28.818C35.1619 27.9741 36.3065 27.5 37.5 27.5C38.6935 27.5 39.8381 27.9741 40.682 28.818C41.5259 29.6619 42 30.8065 42 32Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.439 10.184L38.439 0.755048C39.5553 0.436013 40.7304 0.380481 41.8718 0.592825C43.0132 0.80517 44.0897 1.27959 45.0165 1.97873C45.9434 2.67787 46.6953 3.58264 47.213 4.62178C47.7307 5.66093 48.0001 6.80608 48 7.96705V11C49.5913 11 51.1174 11.6322 52.2426 12.7574C53.3679 13.8826 54 15.4087 54 17V47C54 48.5913 53.3679 50.1175 52.2426 51.2427C51.1174 52.3679 49.5913 53 48 53H6C4.4087 53 2.88258 52.3679 1.75736 51.2427C0.632141 50.1175 0 48.5913 0 47V17C0 13.865 2.505 11.021 5.439 10.184ZM40.089 6.52405C40.312 6.46052 40.5467 6.44955 40.7746 6.49199C41.0025 6.53444 41.2175 6.62914 41.4027 6.76868C41.5879 6.90821 41.7382 7.08877 41.8418 7.29618C41.9455 7.50358 41.9996 7.73219 42 7.96405V11H24.42L40.089 6.52405ZM6 17H48V47H6V17Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <p className="ml-7 mt-3 pr-10 text-[0.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <Link href={"./browse"}>
            <button className="ml-7 mt-2 h-[2rem] w-[2rem] rounded-full bg-[#B17C3F]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[0.44rem]"
              >
                <path
                  d="M9 17.5L6 14.5L9.5 11H0V7H9.5L6 2.5L9 0L17.5 9L9 17.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="h-[18.3rem] w-[18.3rem] rounded-[1.5625rem] bg-white drop-shadow-landingShado">
          <div className="ml-7 mt-5 flex flex-row">
            <p className="mt-12 text-[1.2rem] font-medium">Sell Properties</p>
            <div className=" ml-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 drop-shadow-none">
              <svg
                width="56 "
                height="56"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.7266 62.1807V42.1724C53.7261 39.5814 53.2151 37.0159 52.2229 34.6224C51.2307 32.2289 49.7767 30.0544 47.944 28.2229L42.4487 22.7277V41.2903C42.4487 43.7984 39.4136 45.0581 37.6383 43.2827L33.9889 39.6361C32.5798 38.2271 29.1953 37.3817 26.938 39.6361C24.6836 41.8906 25.529 45.2723 26.938 46.6813L42.4487 62.1807"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.1819 5.81921H36.818C38.3128 5.81921 39.7464 6.41302 40.8034 7.47C41.8604 8.52699 42.4542 9.96056 42.4542 11.4554V17.0915M31.1819 5.81921C31.1819 9.57571 33.4363 17.0915 42.4542 17.0915M31.1819 5.81921H25.5457M42.4542 17.0915V34M25.5457 5.81921H19.9096C18.4148 5.81921 16.9812 6.41302 15.9242 7.47C14.8672 8.52699 14.2734 9.96056 14.2734 11.4554V17.0915M25.5457 5.81921C25.5457 9.57571 23.2913 17.0915 14.2734 17.0915M14.2734 34V39.6361C14.2734 41.1309 14.8672 42.5645 15.9242 43.6215C16.9812 44.6785 18.4148 45.2723 19.9096 45.2723H25.5457C25.5457 41.5158 23.2913 34 14.2734 34ZM14.2734 34V17.0915"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.546 25.5457C25.546 27.1021 26.8077 28.3638 28.3641 28.3638C29.9204 28.3638 31.1821 27.1021 31.1821 25.5457C31.1821 23.9894 29.9204 22.7277 28.3641 22.7277C26.8077 22.7277 25.546 23.9894 25.546 25.5457Z"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="ml-7 mt-3 pr-10 text-[0.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <button className="ml-7 mt-2 h-[2rem] w-[2rem] rounded-full bg-[#B17C3F]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[0.44rem]"
            >
              <path
                d="M9 17.5L6 14.5L9.5 11H0V7H9.5L6 2.5L9 0L17.5 9L9 17.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="h-[18.3rem] w-[18.3rem] rounded-[1.5625rem] bg-white drop-shadow-landingShado">
          <div className="ml-7 mt-5 flex flex-row">
            <p className="mt-12 text-[1.2rem] font-medium">Rent Properties</p>
            <div className=" ml-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 drop-shadow-none">
              <svg
                width="48"
                height="42"
                viewBox="0 0 56 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.7867 15.625L49.6533 25H6.34667L8.21333 15.625H47.7867ZM52.8889 0H3.11111V6.25H52.8889V0ZM52.8889 9.375H3.11111L0 25V31.25H3.11111V50H34.2222V31.25H46.6667V50H52.8889V31.25H56V25L52.8889 9.375ZM9.33333 43.75V31.25H28V43.75H9.33333Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <p className="ml-7 mt-3 pr-10 text-[0.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <button className="ml-7 mt-2 h-[2rem] w-[2rem] rounded-full bg-[#B17C3F]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[0.44rem]"
            >
              <path
                d="M9 17.5L6 14.5L9.5 11H0V7H9.5L6 2.5L9 0L17.5 9L9 17.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="h-[18.3rem] w-[18.3rem] rounded-[1.5625rem] bg-white drop-shadow-landingShado">
          <div className="ml-7 mt-5 flex flex-row">
            <p className="mt-12 text-[1.2rem] font-medium">Build Properties</p>
            <div className=" ml-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 drop-shadow-none">
              <svg
                width="52"
                height="52"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4955 17.0482C28.6381 17.0482 25.8448 17.8955 23.469 19.483C21.0931 21.0705 19.2414 23.3268 18.1479 25.9667C17.0544 28.6066 16.7683 31.5115 17.3258 34.314C17.8832 37.1165 19.2592 39.6908 21.2797 41.7113C23.3002 43.7318 25.8744 45.1078 28.677 45.6652C31.4795 46.2227 34.3843 45.9366 37.0242 44.8431C39.6641 43.7496 41.9205 41.8978 43.508 39.522C45.0955 37.1461 45.9428 34.3529 45.9428 31.4955C45.9388 27.665 44.4154 23.9926 41.7069 21.2841C38.9984 18.5756 35.3259 17.0522 31.4955 17.0482ZM31.4955 41.127C29.5905 41.127 27.7284 40.5622 26.1445 39.5038C24.5606 38.4455 23.3261 36.9413 22.5971 35.1813C21.8681 33.4214 21.6774 31.4848 22.049 29.6165C22.4206 27.7481 23.338 26.032 24.685 24.685C26.032 23.338 27.7481 22.4206 29.6165 22.049C31.4848 21.6774 33.4214 21.8681 35.1813 22.5971C36.9413 23.3261 38.4455 24.5606 39.5038 26.1445C40.5622 27.7284 41.127 29.5905 41.127 31.4955C41.127 34.0499 40.1123 36.4998 38.306 38.306C36.4998 40.1123 34.0499 41.127 31.4955 41.127ZM57.9822 32.1456C57.9943 31.7122 57.9943 31.2788 57.9822 30.8454L62.473 25.235C62.7084 24.9404 62.8714 24.5947 62.9488 24.2256C63.0262 23.8565 63.0157 23.4744 62.9184 23.11C62.1822 20.3428 61.081 17.6858 59.6437 15.2091C59.4555 14.885 59.1942 14.6093 58.8807 14.404C58.5672 14.1986 58.2101 14.0693 57.8378 14.0263L50.6984 13.2317C50.4014 12.9186 50.1004 12.6177 49.7954 12.3287L48.9527 5.17126C48.9093 4.79868 48.7795 4.44138 48.5736 4.12784C48.3678 3.8143 48.0915 3.5532 47.7668 3.36535C45.2892 1.93069 42.6324 0.830548 39.8659 0.0936311C39.5013 -0.0032956 39.1191 -0.0132092 38.75 0.0646892C38.3809 0.142588 38.0353 0.306119 37.7409 0.5421L32.1456 5.00873H30.8454L25.235 0.527051C24.9404 0.291585 24.5947 0.128599 24.2256 0.0512258C23.8565 -0.0261478 23.4744 -0.0157469 23.11 0.0815914C20.3432 0.819089 17.6864 1.92026 15.2091 3.35632C14.885 3.54451 14.6093 3.80577 14.404 4.11928C14.1986 4.4328 14.0693 4.78993 14.0263 5.16223L13.2317 12.3137C12.9186 12.6126 12.6177 12.9136 12.3287 13.2166L5.17126 14.0383C4.79868 14.0817 4.44138 14.2114 4.12784 14.4173C3.8143 14.6232 3.5532 14.8995 3.36535 15.2242C1.93069 17.7018 0.830548 20.3585 0.0936311 23.1251C-0.0032956 23.4896 -0.0132092 23.8719 0.0646892 24.241C0.142588 24.6101 0.306119 24.9557 0.5421 25.25L5.00873 30.8454V32.1456L0.527051 37.756C0.291585 38.0506 0.128599 38.3963 0.0512258 38.7654C-0.0261478 39.1345 -0.0157469 39.5166 0.0815914 39.881C0.817771 42.6482 1.91902 45.3052 3.35632 47.7818C3.54451 48.1059 3.80577 48.3816 4.11928 48.587C4.4328 48.7924 4.78993 48.9217 5.16223 48.9647L12.3016 49.7593C12.6006 50.0723 12.9016 50.3733 13.2046 50.6623L14.0383 57.8197C14.0817 58.1923 14.2114 58.5496 14.4173 58.8631C14.6232 59.1767 14.8995 59.4378 15.2242 59.6256C17.7018 61.0603 20.3585 62.1604 23.1251 62.8973C23.4896 62.9943 23.8719 63.0042 24.241 62.9263C24.6101 62.8484 24.9557 62.6849 25.25 62.4489L30.8454 57.9822C31.2788 57.9943 31.7122 57.9943 32.1456 57.9822L37.756 62.473C38.0506 62.7084 38.3963 62.8714 38.7654 62.9488C39.1345 63.0262 39.5166 63.0157 39.881 62.9184C42.6482 62.1822 45.3052 61.081 47.7818 59.6437C48.1059 59.4555 48.3816 59.1942 48.587 58.8807C48.7924 58.5672 48.9217 58.2101 48.9647 57.8378L49.7593 50.6984C50.0723 50.4014 50.3733 50.1004 50.6623 49.7954L57.8197 48.9527C58.1923 48.9093 58.5496 48.7795 58.8631 48.5736C59.1767 48.3678 59.4378 48.0915 59.6256 47.7668C61.0603 45.2892 62.1604 42.6324 62.8973 39.8659C62.9943 39.5013 63.0042 39.1191 62.9263 38.75C62.8484 38.3809 62.6849 38.0353 62.4489 37.7409L57.9822 32.1456ZM53.1364 30.1892C53.1875 31.0593 53.1875 31.9317 53.1364 32.8018C53.1005 33.3975 53.2871 33.9853 53.6601 34.4512L57.9311 39.7877C57.441 41.3452 56.8135 42.856 56.0559 44.3024L49.2537 45.073C48.6613 45.1387 48.1143 45.4218 47.7186 45.8676C47.1393 46.5192 46.5222 47.1362 45.8706 47.7156C45.4249 48.1113 45.1417 48.6583 45.076 49.2506L44.3205 56.0469C42.8743 56.8048 41.3633 57.4323 39.8057 57.922L34.4662 53.6511C34.0389 53.3097 33.5082 53.1239 32.9613 53.1243H32.8168C31.9467 53.1755 31.0744 53.1755 30.2043 53.1243C29.6086 53.0885 29.0208 53.2751 28.5549 53.6481L23.2033 57.922C21.6458 57.432 20.135 56.8045 18.6885 56.0469L17.918 49.2537C17.8523 48.6613 17.5691 48.1143 17.1234 47.7186C16.4718 47.1393 15.8547 46.5222 15.2754 45.8706C14.8797 45.4249 14.3327 45.1417 13.7403 45.076L6.94407 44.3175C6.18616 42.8712 5.55863 41.3603 5.06893 39.8027L9.33992 34.4632C9.71286 33.9973 9.89949 33.4095 9.86363 32.8138C9.81247 31.9437 9.81247 31.0713 9.86363 30.2012C9.89949 29.6055 9.71286 29.0178 9.33992 28.5518L5.06893 23.2033C5.55901 21.6458 6.18652 20.135 6.94407 18.6885L13.7373 17.918C14.3297 17.8523 14.8767 17.5691 15.2723 17.1234C15.8517 16.4718 16.4688 15.8547 17.1204 15.2754C17.5679 14.8794 17.8522 14.3312 17.918 13.7373L18.6735 6.94407C20.1197 6.18616 21.6306 5.55863 23.1883 5.06893L28.5278 9.33992C28.9937 9.71286 29.5815 9.89949 30.1772 9.86363C31.0473 9.81247 31.9196 9.81247 32.7897 9.86363C33.3854 9.89949 33.9732 9.71286 34.4391 9.33992L39.7877 5.06893C41.3452 5.55901 42.856 6.18652 44.3024 6.94407L45.073 13.7373C45.1387 14.3297 45.4218 14.8767 45.8676 15.2723C46.5192 15.8517 47.1362 16.4688 47.7156 17.1204C48.1113 17.5661 48.6583 17.8492 49.2506 17.915L56.0469 18.6705C56.8048 20.1167 57.4323 21.6276 57.922 23.1853L53.6511 28.5248C53.2745 28.9946 53.0877 29.5884 53.1273 30.1892H53.1364Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <p className="ml-7 mt-3 pr-10 text-[0.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <button className="ml-7 mt-2 h-[2rem] w-[2rem] rounded-full bg-[#B17C3F]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[0.44rem]"
            >
              <path
                d="M9 17.5L6 14.5L9.5 11H0V7H9.5L6 2.5L9 0L17.5 9L9 17.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-28 flex flex-col items-center justify-center pb-28">
        <p className="text-[2.2rem] font-medium">
          We Provide The <span className="text-[#B17C3F]">Base Based</span> On{" "}
        </p>
        <p className="text-[2.2rem] font-medium">
          The <span className="text-[#B17C3F]">Property</span> You Like{" "}
        </p>
        <div className="w-[44.6rem]">
          <p className="mt-4 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-10">
        <div className="relative ml-[8.5rem] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/build1.jpg"
            alt="build1"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem]"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <div className="flex h-8 w-24 items-center justify-center rounded-full border-2 border-white">
                  <p className="text-[0.75rem] font-medium text-white">Rumah</p>
                </div>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <Link
                href={"./product"}
                className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative ml-[4rem] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/build2.jpg"
            alt="build2"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem]"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <div className="flex h-8 w-24 items-center justify-center rounded-full border-2 border-white">
                  <p className="text-[0.75rem] font-medium text-white">Rumah</p>
                </div>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <Link
                href={"./product"}
                className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative ml-[1] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/build3.jpg"
            alt="build3"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem]"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <div className="flex h-8 w-24 items-center justify-center rounded-full border-2 border-white">
                  <p className="text-[0.75rem] font-medium text-white">Rumah</p>
                </div>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <Link
                href={"./product"}
                className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative ml-[8.5rem] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/build4.jpg"
            alt="build4"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem]"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <div className="flex h-8 w-24 items-center justify-center rounded-full border-2 border-white">
                  <p className="text-[0.75rem] font-medium text-white">Rumah</p>
                </div>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <Link
                href={"./product"}
                className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative ml-[4rem] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/build5.jpg"
            alt="build5"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem]"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <div className="flex h-8 w-24 items-center justify-center rounded-full border-2 border-white">
                  <p className="text-[0.75rem] font-medium text-white">Rumah</p>
                </div>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <Link
                href={"./product"}
                className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative ml-[1] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/build6.jpg"
            alt="build6"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem]"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <div className="flex h-8 w-24 items-center justify-center rounded-full border-2 border-white">
                  <p className="text-[0.75rem] font-medium text-white">Rumah</p>
                </div>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <Link
                href={"./product"}
                className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 flex flex-col items-center justify-center pb-20 ">
        <p className="text-[2.2rem] font-medium">
          Start <span className="text-[#B17C3F]">Consult Or Buy</span> A Design{" "}
        </p>
        <p className="text-[2.2rem] font-medium">
          From The<span className="text-[#B17C3F]"> Designer</span>
        </p>
        <div className="w-[44.6rem]">
          <p className="mt-4 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 pb-28">
        <div className="relative ml-[8.5rem] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/Designer1.jpg"
            alt="Designer 1"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem] object-cover"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <p className="text-[1.3rem] font-semibold text-white">
                  Paper Pot
                </p>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <Link
                href={"./product"}
                className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative ml-[4rem] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/Designer2.jpg"
            alt="Designer 2"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem] object-cover"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <p className="text-[1.3rem] font-semibold text-white">Freya</p>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <button className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="relative ml-[1] h-[24rem] w-[20.75rem] rounded-[1.5625rem]">
          <img
            src="/assets/landing/Designer3.jpg"
            alt="Designer 3"
            className="h-[24rem] w-[20.75rem] rounded-[1.5625rem] object-cover"
          />
          <div className="absolute inset-0 flex rounded-[1.5625rem] bg-black bg-opacity-25 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <div className="absolute inset-0 flex justify-between">
              <div className="ml-5 mt-5 flex">
                <p className="text-[1.3rem] font-semibold text-white">
                  Antonio Rudiger
                </p>
              </div>
              <div className="mr-5 mt-5">
                <button onClick={handleButtonClick}>
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 38 32"
                    fill={isPressed ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-end">
              <button className="absolute mb-5 ml-5 h-[2.5rem] w-[2.5rem]  rounded-full">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 30.8L30.8 22L22 13.2L18.92 16.28L22.44 19.8H13.2V24.2H22.44L18.92 27.72L22 30.8ZM22 44C18.9567 44 16.0967 43.4221 13.42 42.2664C10.7433 41.1107 8.415 39.5435 6.435 37.565C4.455 35.585 2.88787 33.2567 1.7336 30.58C0.579334 27.9033 0.00146667 25.0433 0 22C0 18.9567 0.577867 16.0967 1.7336 13.42C2.88933 10.7433 4.45647 8.415 6.435 6.435C8.415 4.455 10.7433 2.88787 13.42 1.7336C16.0967 0.579334 18.9567 0.00146667 22 0C25.0433 0 27.9033 0.577867 30.58 1.7336C33.2567 2.88933 35.585 4.45647 37.565 6.435C39.545 8.415 41.1129 10.7433 42.2686 13.42C43.4243 16.0967 44.0015 18.9567 44 22C44 25.0433 43.4221 27.9033 42.2664 30.58C41.1107 33.2567 39.5435 35.585 37.565 37.565C35.585 39.545 33.2567 41.1129 30.58 42.2686C27.9033 43.4243 25.0433 44.0015 22 44Z"
                    className="fill-white hover:fill-gray-200"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center pb-20 ">
        <p className="text-[2.2rem] font-medium">
          <span className="text-[#B17C3F]">This</span> Is What Theres have{" "}
          <span className="text-[#B17C3F]">To Say</span>
        </p>
        <div className="w-[44.6rem]">
          <p className="mt-4 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
      <div className="pb-10">
        <Slider></Slider>
      </div>
      <Footer></Footer>
    </div>
  );
}
