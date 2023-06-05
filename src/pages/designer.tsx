import Navbar from "./navbar";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Footer from "./footer";

// const designerName = [
//   { id: 1, name: "Antonio Rudiger" },
//   { id: 2, name: "Paper Pots" },
//   { id: 3, name: "Freya" },
//   { id: 4, name: "Paper Pots" },
//   { id: 5, name: "Paper Pots" },
// ];
// export function getDesignerName(){
//   return designerName;
// }

export const designerData = [
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Paper Pots",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Freya",
    rating: 3,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Paper Pots",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 1,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 2,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer2.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer3.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Antonio Rudiger",
    img: "/assets/landing/Designer1.jpg",
    designerName: "Antonio Rudiger",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
];


export function generateRatingStars(rating: number) {
  const maxRating = 5;
  const fullStar =
    '<span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00008 12.8332C6.19314 12.8332 5.4348 12.6799 4.72508 12.3735C4.01536 12.0671 3.398 11.6515 2.873 11.1269C2.348 10.6019 1.93247 9.98456 1.62641 9.27484C1.32036 8.56511 1.16714 7.80678 1.16675 6.99984C1.16675 6.19289 1.31997 5.43456 1.62641 4.72484C1.93286 4.01512 2.34839 3.39775 2.873 2.87275C3.398 2.34775 4.01536 1.93223 4.72508 1.62617C5.4348 1.32012 6.19314 1.16689 7.00008 1.1665C7.80703 1.1665 8.56536 1.31973 9.27508 1.62617C9.9848 1.93262 10.6022 2.34814 11.1272 2.87275C11.6522 3.39775 12.0679 4.01512 12.3743 4.72484C12.6808 5.43456 12.8338 6.19289 12.8334 6.99984C12.8334 7.80678 12.6802 8.56511 12.3737 9.27484C12.0673 9.98456 11.6518 10.6019 11.1272 11.1269C10.6022 11.6519 9.9848 12.0676 9.27508 12.3741C8.56536 12.6805 7.80703 12.8336 7.00008 12.8332Z" fill="black" className="flex"/></svg></span>';
  const emptyStar =
    '<span><svg width="12" height="12" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.04012 11.8332C5.23318 11.8332 4.47484 11.6799 3.76512 11.3735C3.0554 11.0671 2.43804 10.6515 1.91304 10.1269C1.38804 9.60192 0.972509 8.98456 0.666454 8.27484C0.360398 7.56511 0.207176 6.80678 0.206787 5.99984C0.206787 5.19289 0.360009 4.43456 0.666454 3.72484C0.972898 3.01512 1.38843 2.39775 1.91304 1.87275C2.43804 1.34775 3.0554 0.932226 3.76512 0.626171C4.47484 0.320115 5.23318 0.166893 6.04012 0.166504C6.84706 0.166504 7.6054 0.319726 8.31512 0.626171C9.02484 0.932615 9.6422 1.34814 10.1672 1.87275C10.6922 2.39775 11.1079 3.01512 11.4144 3.72484C11.7208 4.43456 11.8738 5.19289 11.8735 5.99984C11.8735 6.80678 11.7202 7.56511 11.4138 8.27484C11.1073 8.98456 10.6918 9.60192 10.1672 10.1269C9.6422 10.6519 9.02484 11.0676 8.31512 11.3741C7.6054 11.6805 6.84706 11.8336 6.04012 11.8332Z" fill="#9C9797"/></svg></span>';

  const fullStarsCount = Math.floor(rating);
  const emptyStarsCount = maxRating - fullStarsCount;

  const fullStars = fullStar.repeat(fullStarsCount);
  const emptyStars = emptyStar.repeat(emptyStarsCount);

  return fullStars + emptyStars;
}

export default function Designer() {
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(-1);
  const [isPressed, setIsPressed] = useState(false);
  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  const [visibleItems, setVisibleItems] = useState(8); // Jumlah item yang terlihat awalnya
  const [loadCount] = useState(6); // Jumlah item yang ditambahkan setiap kali "load more" diklik
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + loadCount);
  };

  return (
    <div>
      <div className="ml-20 pt-10">
        <div className="px-35 flex flex-grow flex-row flex-wrap justify-center gap-5">
          {designerData.slice(0, visibleItems).map((designerData, idx) => {
            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
                  hover && index == idx
                    ? "h-[31rem] w-[23.5rem]"
                    : "h-[25rem] w-[19rem]"
                }`}
                onMouseEnter={() => {
                  setHover(true);
                  setIndex(idx);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setIndex(-1);
                }}
              >
                <div className="relative h-full w-full flex-auto">
                  <Image
                    className="rounded-3xl"
                    src={designerData.img}
                    alt={""}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <p
                    className={`${
                      hover && index == idx
                        ? ""
                        : "absolute top-3 ml-5 h-full w-full text-[1.3125rem] font-medium text-white"
                    }`}
                  >
                    {designerData.designerName}
                  </p>
                </div>
                <div
                  className={`transition-all duration-300 ${
                    hover && index == idx
                      ? "absolute top-0 h-full w-full bg-[#00000035]"
                      : ""
                  }`}
                ></div>
                <div
                  className={`flex justify-between p-4 text-[#4B4B4B] transition-all duration-300 ${
                    hover && index == idx
                      ? "absolute bottom-0 h-[28%] w-full bg-[#ffffffe7]"
                      : ""
                  }`}
                >
                  <span className="flex flex-col space-y-3">
                    <div className="text-xl font-medium ">
                      {designerData.nama}
                    </div>

                    <div className="flex flex-col">
                      {/* isi rating */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: generateRatingStars(designerData.rating),
                        }}
                        style={{ display: "flex", flexDirection: "row" }}
                      ></div>

                      <span>{designerData.job}</span>
                    </div>
                  </span>
                  <span className="flex text-xl font-semibold">
                    <span className="text-[1.125rem] text-black">
                      {designerData.like}
                    </span>
                    <div className="ml-1 mr-3">
                      <button onClick={handleButtonClick}>
                        <svg
                          width="32"
                          height="26"
                          viewBox="0 0 38 32"
                          fill={isPressed ? "black" : "none"}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.0107 30L4.58209 17.1029C-3.25953 9.36467 8.26766 -5.49276 19.0107 6.52732C29.7537 -5.49276 41.2286 9.41626 33.4393 17.1029L19.0107 30Z"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ml-20 mt-10 flex items-center justify-center">
        {visibleItems < designerData.length && (
          <button
            className=" h-12 w-36 rounded-3xl border-2 border-[#B17C3F] bg-white text-xl text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
