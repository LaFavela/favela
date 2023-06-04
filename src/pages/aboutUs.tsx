import Navbar from "./navbar";
import Footer from "./footer";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Muhammad Dzulhi Raihan",
    src: "/assets/profile/raihan.png",
  },
  {
    id: 2,
    name: "Dwimas Nugraha",
    src: "/assets/profile/dwimas.png",
  },
  {
    id: 3,
    name: "Ramadhani AlQadri",
    src: "/assets/profile/rama.png",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <div className="flex justify-center space-x-[4.1875rem]">
        {data.map((item, index) => (
          <div key={index} className="mt-[7.25rem] flex">
            <div className="flex justify-center">
              <div className="absolute top-[15.78rem]">
                <img
                  key={item.id}
                  className="w-[21rem]"
                  src={item.src}
                  alt="Foto ${item.name}"
                />
              </div>
              <div className="space-y-[-1.3rem]">
                <div className="space-y-[-2.2rem]">
                  <p className="text-[3.125rem] font-semibold text-[#302110]">
                    FAVELA FAVELA
                  </p>
                  <p className="text-[3.125rem] font-semibold text-[#302110]">
                    FAVELA FAVELA
                  </p>
                  <p className="text-[3.125rem] font-semibold text-[#4E361B]">
                    FAVELA FAVELA
                  </p>
                  <p className="text-[3.125rem] font-semibold text-[#4E361B]">
                    FAVELA FAVELA
                  </p>
                  <p className="text-[3.125rem] font-semibold text-[#714E26]">
                    FAVELA FAVELA
                  </p>
                  <p className="text-[3.125rem] font-semibold text-[#714E26]">
                    FAVELA FAVELA
                  </p>
                  <p className="text-[3.125rem] font-semibold text-[#926431]">
                    FAVELA FAVELA
                  </p>
                  <p className="text-[3.125rem] font-semibold text-[#926431]">
                    FAVELA FAVELA
                  </p>
                </div>
                <div className="z-50 flex h-[7.0625rem] w-[23.630625rem] flex-wrap items-center justify-center bg-[#B17C3F] text-center text-[2.75rem] font-semibold uppercase leading-[2.625rem] text-black">
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
