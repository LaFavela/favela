import Image from "next/image";
import Link from "next/link";
const user = [
  {
    id: 1,
    firstName: "Dhira Wahyu",
    lastName: "Febrian",
    email: "dhiraxio@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dhira.jpg",
  },
  {
    id: 2,
    firstName: "Ramadhani",
    lastName: "Al-Qadri",
    email: "ramadhanialqadri12@gmail.com",
    role: "Penjual",
    img: "/assets/profile/rama.png",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
  {
    id: 3,
    firstName: "Muhammad Dwimas",
    lastName: "Catur Nugraha",
    email: "dimasnugraha56@gmail.com",
    role: "Pembeli",
    img: "/assets/profile/dwimas.jpg",
  },
];

export default function Dashboard() {
  return (
    <div className="flex justify-center ">
      <div className="mt-10 w-fit space-y-10 ">
        <p className="text-[2rem] font-medium">Dashboard</p>
        <div>
          <p className="w-[170px] text-center text-[1.6875rem] font-medium text-[#B17C3F]">
            User
          </p>
          <div className="relative rounded-full border-b-8 border-gray-300 ">
            <div className="absolute left-0 top-0 w-[170px] rounded-full  border-b-8 border-[#B17C3F]"></div>
          </div>
        </div>

        <div className="flex min-h-[40rem] w-[78.93rem] justify-center overflow-hidden rounded-[25px] bg-white pb-5 drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
          <div className="w-full">
            <div className="flex h-[4.25rem] w-full items-center justify-center bg-[#F6F6F6]">
              <p className=" w-[20.875rem] text-center text-[1.125rem] font-medium">
                Profil
              </p>
              <p className=" w-[27.375rem] text-center text-[1.125rem] font-medium">
                Email
              </p>
              <p className=" w-[12.25rem] text-center text-[1.125rem] font-medium">
                Role
              </p>
              <p className=" w-[13.4375rem] text-center text-[1.125rem] font-medium">
                Action
              </p>
            </div>
            {user.map((data, idx) => (
              <div key={idx} className="mt-3 flex w-full justify-center">
                <div className="flex w-[20.875rem] items-center space-x-4 py-2">
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    src={data.img}
                    alt="user"
                  />
                  <p className="text-[1rem] font-normal">
                    {data.firstName} {data.lastName}
                  </p>
                </div>
                <div className="flex w-[27.375rem] items-center space-x-4 py-2">
                  <p className="text-[1rem] font-normal">{data.email}</p>
                </div>
                <div className="flex w-[12.25rem] items-center justify-center space-x-4 py-2">
                  <p className="text-[1rem] font-normal">{data.role}</p>
                </div>
                <div className="flex w-[13.4375rem] items-center justify-center space-x-4 py-2">
                  <Link href={"./adminSettings"}>
                    <button className="flex w-[4.25rem] items-center justify-center space-x-1 rounded-lg border border-[#B17C3F] bg-white p-1 hover:bg-[#e4d1bc]">
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4893 1.69849L16.6829 3.89203L15.0106 5.56498L12.8171 3.37143L14.4893 1.69849ZM6.45508 11.9263H8.64863L13.9768 6.59814L11.7832 4.40459L6.45508 9.73272V11.9263Z"
                          fill="#B17C3F"
                        />
                        <path
                          d="M14.4978 14.1198H6.57027C6.55126 14.1198 6.53152 14.1271 6.51251 14.1271C6.48838 14.1271 6.46425 14.1206 6.43939 14.1198H4.26119V3.88326H9.2676L10.73 2.4209H4.26119C3.4547 2.4209 2.79883 3.07604 2.79883 3.88326V14.1198C2.79883 14.9271 3.4547 15.5822 4.26119 15.5822H14.4978C14.8856 15.5822 15.2576 15.4281 15.5318 15.1539C15.8061 14.8796 15.9601 14.5077 15.9601 14.1198V7.78193L14.4978 9.2443V14.1198Z"
                          fill="#B17C3F"
                        />
                      </svg>
                      <p className="text-[0.625rem] text-[#B17C3F]">Edit</p>
                    </button>
                  </Link>
                  <button className="flex w-[4.25rem] items-center justify-center space-x-1 rounded-lg bg-[#DC7567] p-[0.35rem] hover:bg-[#e09388]">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.73652 15.5805C5.33437 15.5805 4.98998 15.4372 4.70336 15.1505C4.41673 14.8639 4.27366 14.5198 4.27415 14.1181V4.61274H3.54297V3.15037H7.19888V2.41919H11.586V3.15037H15.2419V4.61274H14.5107V14.1181C14.5107 14.5203 14.3674 14.8647 14.0808 15.1513C13.7942 15.4379 13.45 15.581 13.0483 15.5805H5.73652ZM13.0483 4.61274H5.73652V14.1181H13.0483V4.61274ZM7.19888 12.6557H8.66125V6.0751H7.19888V12.6557ZM10.1236 12.6557H11.586V6.0751H10.1236V12.6557Z"
                        fill="white"
                      />
                    </svg>

                    <p className="text-[0.625rem] text-white">Delete</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
