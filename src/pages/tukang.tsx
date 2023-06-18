import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import merchantProfile from "./merchantProfile";

type Person = {
   id: number;
   name: string;
};
const people: Person[] = [
   { id: 1, name: "Nama" },
   { id: 2, name: "Popularitas" },
   { id: 3, name: "Sering Dicari" },
];

export const data = [
  {
    id: 1,
    nama: "Ali An Nuur",
    img: "/assets/profile/ali.jpg",
    designerName: "Ali",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
    
  },
  {
    id: 2,
    nama: "Dhira Wahyu Febrian",
    img: "/assets/profile/dhira.jpg",
    designerName: "Dhira",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 3,
    nama: "Yan Saputra",
    img: "/assets/profile/yan.jpg",
    designerName: "Freya",
    rating: 3,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 4,
    nama: "Muhammad Rezky Sulihin",
    img: "/assets/profile/eky.jpg",
    designerName: "Eky",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 5,
    nama: "Muhammad Dwimas Catur N.",
    img: "/assets/profile/dwimas.jpg",
    designerName: "Dwimas",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 6,
    nama: "Ali An Nuur",
    img: "/assets/profile/ali.jpg",
    designerName: "Ali",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 7,
    nama: "Dhira Wahyu Febrian",
    img: "/assets/profile/dhira.jpg",
    designerName: "Dhira",
    rating: 4,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 8,
    nama: "Yan Saputra",
    img: "/assets/profile/yan.jpg",
    designerName: "Freya",
    rating: 3,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 9,
    nama: "Muhammad Rezky Sulihin",
    img: "/assets/profile/eky.jpg",
    designerName: "Eky",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
  {
    id: 10,
    nama: "Muhammad Dwimas Catur N.",
    img: "/assets/profile/dwimas.jpg",
    designerName: "Dwimas",
    rating: 5,
    like: 12,
    job: "Ikea Designer",
  },
]

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

export function PilihTukang() {
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
        <Link href={"./merchantProfile"}>
        <div className="px-35 flex flex-grow flex-row flex-wrap justify-center gap-5">
          {data.slice(0, visibleItems).map((data, idx) => {
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
                    src={data.img}
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
                    {data.designerName}
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
                      {data.nama}
                    </div>

                    <div className="flex flex-col">
                      {/* isi rating */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: generateRatingStars(data.rating),
                        }}
                        style={{ display: "flex", flexDirection: "row" }}
                      ></div>

                      <span>{data.job}</span>
                    </div>
                  </span>
                  <span className="flex text-xl font-semibold">
                    <span className="text-[1.125rem] text-black">
                      {data.like}
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
          
        </Link>
      </div>
      <div className="ml-20 mt-10 flex items-center justify-center">
        {visibleItems < data.length && (
          <button
            className=" h-12 w-36 rounded-3xl border-2 border-[#B17C3F] bg-white text-xl text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}



export default function Tukang() {
   const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
   const [isOpen, setIsOpen] = useState(false);
   const [isClick, setIsClick] = useState(false);
   const toggleDropdown = () => {
      setIsClick(!isClick);
   };
  const refCategory = useRef<any>(null);

   function OutsideCategory(ref: any) {
      useEffect(() => {
         /**
          * Alert if clicked on outside of element
          */
         function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
               if (!isClick) setIsClick(false);
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

   OutsideCategory(refCategory);

   return (
      <div>
         <div className="ml-20 sticky top-20 z-30 flex space-x-10 bg-white px-16 py-5">
            <div className="flex flex-row space-x-3">
               <div className="h-12 w-56">
                  <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                     <Listbox.Button
                        onClick={toggleDropdown}
                        className={`h-full w-full cursor-default rounded-3xl py-2 pl-3 pr-10 text-left font-light sm:text-xl ${
                           isClick
                              ? "bg-[#E4D1BC] text-[#B17C3F]"
                              : "bg-[#F1F1F1] text-[#9ca3af]"
                        }`}
                     >
                        <div className="flex w-max">
                           <span className="w-[11rem]">
                              {selectedPerson
                                 ? selectedPerson.name
                                 : "Choose Type"}
                           </span>
                           <span className="flex items-center justify-end ">
                              {isClick ? (
                                 <svg
                                    width="19"
                                    height="11"
                                    viewBox="0 0 19 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-[#B17C3F]"
                                 >
                                    <path d="M0.374609 0.374999C0.624609 0.124999 0.920609 -7.89165e-07 1.26261 -7.74216e-07C1.60461 -7.59267e-07 1.90028 0.124999 2.14961 0.374999L9.47461 7.7L16.8246 0.35C17.0579 0.116666 17.3496 -7.1031e-08 17.6996 -5.5732e-08C18.0496 -4.0433e-08 18.3496 0.125 18.5996 0.375C18.8496 0.625 18.9746 0.921 18.9746 1.263C18.9746 1.605 18.8496 1.90067 18.5996 2.15L10.1746 10.55C10.0746 10.65 9.96628 10.721 9.84961 10.763C9.73294 10.805 9.60794 10.8257 9.47461 10.825C9.34128 10.825 9.21628 10.804 9.09961 10.762C8.98294 10.72 8.87461 10.6493 8.77461 10.55L0.349609 2.125C0.116276 1.89167 -0.000391077 1.604 -0.000391062 1.262C-0.000391047 0.919999 0.124609 0.624332 0.374609 0.374999Z" />
                                 </svg>
                              ) : (
                                 <svg
                                    width="19"
                                    height="11"
                                    viewBox="0 0 19 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-slate-500"
                                 >
                                    <path d="M18.6 10.4501C18.35 10.7001 18.054 10.8251 17.712 10.8251C17.37 10.8251 17.0743 10.7001 16.825 10.4501L9.5 3.12507L2.15 10.4751C1.91667 10.7084 1.625 10.8251 1.275 10.8251C0.925 10.8251 0.625 10.7001 0.375 10.4501C0.125 10.2001 1.09828e-08 9.90407 1.50611e-08 9.56207C1.91394e-08 9.22007 0.125 8.92441 0.375 8.67507L8.8 0.275072C8.9 0.175072 9.00833 0.104073 9.125 0.0620729C9.24167 0.020073 9.36667 -0.000594027 9.5 7.25925e-05C9.63333 7.25941e-05 9.75833 0.0210725 9.875 0.0630723C9.99167 0.105072 10.1 0.175738 10.2 0.275072L18.625 8.70007C18.8583 8.93341 18.975 9.22107 18.975 9.56307C18.975 9.90507 18.85 10.2007 18.6 10.4501Z" />
                                 </svg>
                              )}
                           </span>
                        </div>
                     </Listbox.Button>
                     <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                     >
                        <Listbox.Options
                           onClick={toggleDropdown}
                           className="mt-2 max-h-max w-full overflow-auto rounded-xl bg-white py-1 text-xl shadow-sm ring-1 ring-black ring-opacity-5"
                           ref={refCategory}
                        >
                           {people.map((person) => (
                              <Listbox.Option
                                 key={person.id}
                                 value={person}
                                 className={({ active }) =>
                                    `relative mx-2 cursor-pointer select-none rounded-xl px-4 py-2 ${
                                       active
                                          ? "bg-[#E8D6C2] text-[#B17C3F]"
                                          : "text-[#9ca3af]"
                                    }`
                                 }
                              >
                                 {person.name}
                              </Listbox.Option>
                           ))}
                        </Listbox.Options>
                     </Transition>
                  </Listbox>
               </div>
               <div>
                  <form className="h-12" action="">
                     <div className="float-right pr-12"></div>
                     <input
                        type="text"
                        className="h-full w-full rounded-full bg-[#F1F1F1] pl-5 text-xl font-light focus:outline-none"
                        placeholder="Lokasi..."
                     ></input>
                  </form>
               </div>
            </div>
         </div>
         {/* batas */}
         <PilihTukang></PilihTukang>
        
         <Footer></Footer>
      </div>
   );
}
