import { useState } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div>
      <div
        className="ml-20 flex flex-row gap-8 pb-5"
        style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
      >
        <div
          className=" slider-container ml-3 mt-5"
          style={{
            display: "flex",
            flexDirection: "row",
            transition: "transform 0.5s",
            transform: `translateX(-${activeIndex * 31}rem)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`h-[16rem] w-[31rem] rounded-[1.5625rem] bg-white drop-shadow-landingShado ${
                index === activeIndex ? "opacity-100" : "opacity-100"
              }`}
              style={{ marginRight: "1rem" }} // Menambahkan margin kanan antara konten
            >
              {Konten(item)}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          className="h-10 w-20 rounded-xl bg-gray-500"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="h-10 w-20 rounded-xl bg-gray-500"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;

export function Konten(review: string) {
  return (
    <div>
      <div className="ml-7 mt-7 w-[25.5rem]">
        <p className="font-medium">Dzulhi Raihan</p>
        <p className="mt-4 text-[0.9rem] font-light">{review}</p>
        <svg
          width="95"
          height="13"
          viewBox="5 0 99 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-5"
        >
          <path
            d="M7 14.0034C6.03167 14.0034 5.12167 13.8195 4.27 13.4518C3.41833 13.0841 2.6775 12.5855 2.0475 11.9559C1.4175 11.3259 0.918867 10.5851 0.5516 9.73342C0.184333 8.88175 0.000466667 7.97175 0 7.00342C0 6.03508 0.183867 5.12508 0.5516 4.27342C0.919333 3.42175 1.41797 2.68092 2.0475 2.05092C2.6775 1.42092 3.41833 0.922285 4.27 0.555018C5.12167 0.187751 6.03167 0.00388464 7 0.00341797C7.96833 0.00341797 8.87833 0.187285 9.73 0.555018C10.5817 0.922751 11.3225 1.42138 11.9525 2.05092C12.5825 2.68092 13.0814 3.42175 13.4491 4.27342C13.8168 5.12508 14.0005 6.03508 14 7.00342C14 7.97175 13.8161 8.88175 13.4484 9.73342C13.0807 10.5851 12.582 11.3259 11.9525 11.9559C11.3225 12.5859 10.5817 13.0848 9.73 13.4525C8.87833 13.8202 7.96833 14.0039 7 14.0034Z"
            fill="black"
          />
          <path
            d="M42.0199 7.00001C42.0227 6.03168 42.2092 5.12221 42.5794 4.2716C42.9496 3.42099 43.4503 2.68158 44.0817 2.05338C44.7135 1.42518 45.4558 0.92867 46.3085 0.563838C47.1612 0.199006 48.0717 0.0177398 49.0401 0.0200397C50.0084 0.0228063 50.9179 0.209272 51.7685 0.579437C52.6191 0.949602 53.3585 1.45035 53.9866 2.08168C54.6148 2.71348 55.1113 3.45573 55.4761 4.30844C55.8409 5.16116 56.0222 6.07168 56.0199 7.04001C56.0171 8.00834 55.8306 8.91781 55.4604 9.76842C55.0902 10.619 54.5895 11.3584 53.9581 11.9866C53.3263 12.6148 52.584 13.1116 51.7313 13.4769C50.8786 13.8422 49.9681 14.0232 48.9997 14.02C48.0314 14.0172 47.1219 13.8307 46.2713 13.4606C45.4207 13.0904 44.6813 12.5897 44.0531 11.9583C43.425 11.3265 42.9282 10.5843 42.563 9.73157C42.1977 8.87886 42.0167 7.96834 42.0199 7.00001Z"
            fill="url(#paint0_linear_248_156)"
          />
          <path
            d="M28 14.0034C27.0317 14.0034 26.1217 13.8196 25.27 13.4518C24.4183 13.0841 23.6775 12.5855 23.0475 11.9559C22.4175 11.3259 21.9189 10.5851 21.5516 9.73342C21.1843 8.88175 21.0005 7.97175 21 7.00342C21 6.03508 21.1839 5.12508 21.5516 4.27342C21.9193 3.42175 22.418 2.68092 23.0475 2.05092C23.6775 1.42092 24.4183 0.922285 25.27 0.555018C26.1217 0.187751 27.0317 0.00388464 28 0.00341797C28.9683 0.00341797 29.8783 0.187285 30.73 0.555018C31.5817 0.922751 32.3225 1.42138 32.9525 2.05092C33.5825 2.68092 34.0814 3.42175 34.4491 4.27342C34.8168 5.12508 35.0005 6.03508 35 7.00342C35 7.97175 34.8161 8.88175 34.4484 9.73342C34.0807 10.5851 33.582 11.3259 32.9525 11.9559C32.3225 12.5859 31.5817 13.0848 30.73 13.4525C29.8783 13.8202 28.9683 14.0039 28 14.0034Z"
            fill="black"
          />
          <path
            d="M70.04 14C69.0717 14 68.1617 13.8161 67.31 13.4484C66.4584 13.0807 65.7175 12.582 65.0875 11.9525C64.4575 11.3225 63.9589 10.5817 63.5916 9.73C63.2244 8.87833 63.0405 7.96833 63.04 7C63.04 6.03167 63.2239 5.12167 63.5916 4.27C63.9594 3.41833 64.458 2.6775 65.0875 2.0475C65.7175 1.4175 66.4584 0.918867 67.31 0.5516C68.1617 0.184333 69.0717 0.000466667 70.04 0C71.0084 0 71.9184 0.183867 72.77 0.5516C73.6217 0.919333 74.3625 1.41797 74.9925 2.0475C75.6225 2.6775 76.1214 3.41833 76.4891 4.27C76.8569 5.12167 77.0405 6.03167 77.04 7C77.04 7.96833 76.8562 8.87833 76.4884 9.73C76.1207 10.5817 75.6221 11.3225 74.9925 11.9525C74.3625 12.5825 73.6217 13.0814 72.77 13.4491C71.9184 13.8168 71.0084 14.0005 70.04 14Z"
            fill="#BEB8B8"
          />
          <path
            d="M91.04 14C90.0717 14 89.1617 13.8161 88.31 13.4484C87.4584 13.0807 86.7175 12.582 86.0875 11.9525C85.4575 11.3225 84.9589 10.5817 84.5916 9.73C84.2244 8.87833 84.0405 7.96833 84.04 7C84.04 6.03167 84.2239 5.12167 84.5916 4.27C84.9594 3.41833 85.458 2.6775 86.0875 2.0475C86.7175 1.4175 87.4584 0.918867 88.31 0.5516C89.1617 0.184333 90.0717 0.000466667 91.04 0C92.0084 0 92.9184 0.183867 93.77 0.5516C94.6217 0.919333 95.3625 1.41797 95.9925 2.0475C96.6225 2.6775 97.1214 3.41833 97.4891 4.27C97.8569 5.12167 98.0405 6.03167 98.04 7C98.04 7.96833 97.8562 8.87833 97.4884 9.73C97.1207 10.5817 96.6221 11.3225 95.9925 11.9525C95.3625 12.5825 94.6217 13.0814 93.77 13.4491C92.9184 13.8168 92.0084 14.0005 91.04 14Z"
            fill="#BEB8B8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_248_156"
              x1="56.0199"
              y1="7.04001"
              x2="42.0199"
              y2="6.99967"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEB8B8" />
              <stop offset="0.0001" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
