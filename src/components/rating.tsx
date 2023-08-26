import { useState } from "react";

const review = [
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    rate: 5,
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    rate: 1,
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    rate: 4,
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    rate: 3,
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    rate: 3,
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    rate: 2,
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
  {
    name: "Raihan",
    img: "/assets/profile/raihan.JPG",
    rate: 4,
    posttime: "2 Days Ago",
    tittle: "Momen Kebersamaan",
    description:
      "Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen temen,,... ehhh y'oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya yang banyak ya..",
  },
];
interface IReview {
  rate: number;
}

export default function ShowRating(props: IReview) {
  // const rateAverage = Math.floor(
  //   review.reduce((total, item) => total + item.rate, 0) / review.length
  // );
  const gray = 5 - props.rate;
  return (
    <div className="flex    ">
      <div className="flex space-x-1">
        {/* {rateAverage.map((item, idx) => (
          
        ))} */}
        {[...Array(props.rate)].map((item, idx) => (
          <div key={idx} className="">
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99967 8.6473C4.42329 8.6473 3.88162 8.53785 3.37467 8.31896C2.86773 8.10008 2.42676 7.80327 2.05176 7.42855C1.67676 7.05355 1.37995 6.61258 1.16134 6.10563C0.94273 5.59869 0.833286 5.05702 0.833008 4.48063C0.833008 3.90424 0.942452 3.36258 1.16134 2.85563C1.38023 2.34869 1.67704 1.90771 2.05176 1.53271C2.42676 1.15771 2.86773 0.860909 3.37467 0.642298C3.88162 0.423687 4.42329 0.314243 4.99967 0.313965C5.57606 0.313965 6.11773 0.423409 6.62467 0.642298C7.13162 0.861187 7.57259 1.15799 7.94759 1.53271C8.32259 1.90771 8.61953 2.34869 8.83842 2.85563C9.05731 3.36258 9.16662 3.90424 9.16634 4.48063C9.16634 5.05702 9.0569 5.59869 8.83801 6.10563C8.61912 6.61258 8.32231 7.05355 7.94759 7.42855C7.57259 7.80355 7.13162 8.10049 6.62467 8.31938C6.11773 8.53827 5.57606 8.64758 4.99967 8.6473Z"
                fill="black"
              />
            </svg>
          </div>
        ))}
        {[...Array(gray)].map((item, idx) => (
          <div key={idx} className="">
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99967 8.6473C4.42329 8.6473 3.88162 8.53785 3.37467 8.31896C2.86773 8.10008 2.42676 7.80327 2.05176 7.42855C1.67676 7.05355 1.37995 6.61258 1.16134 6.10563C0.94273 5.59869 0.833286 5.05702 0.833008 4.48063C0.833008 3.90424 0.942452 3.36258 1.16134 2.85563C1.38023 2.34869 1.67704 1.90771 2.05176 1.53271C2.42676 1.15771 2.86773 0.860909 3.37467 0.642298C3.88162 0.423687 4.42329 0.314243 4.99967 0.313965C5.57606 0.313965 6.11773 0.423409 6.62467 0.642298C7.13162 0.861187 7.57259 1.15799 7.94759 1.53271C8.32259 1.90771 8.61953 2.34869 8.83842 2.85563C9.05731 3.36258 9.16662 3.90424 9.16634 4.48063C9.16634 5.05702 9.0569 5.59869 8.83801 6.10563C8.61912 6.61258 8.32231 7.05355 7.94759 7.42855C7.57259 7.80355 7.13162 8.10049 6.62467 8.31938C6.11773 8.53827 5.57606 8.64758 4.99967 8.6473Z"
                fill="gray"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

interface setRate {
  rateValue: number;
  setRateValue: (value: number) => void;
}
export function SetRating(props: setRate) {
  const [circle, setCircle] = useState([
    {
      id: 1,
      color: "gray",
    },
    {
      id: 2,
      color: "gray",
    },
    {
      id: 3,
      color: "gray",
    },
    {
      id: 4,
      color: "gray",
    },
    {
      id: 5,
      color: "gray",
    },
  ]);
  function handleMouseEnter(id: number) {
    setCircle(
      circle.map((item) => {
        if (item.id <= id) {
          return { ...item, color: "black" };
        } else {
          return { ...item, color: "gray" };
        }
      })
    );
  }
  function handleRateValue(id: number) {
    props.setRateValue(id);
  }
  console.log(props.rateValue);
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center   ">
        <div className="flex space-x-1">
          {circle.map((item) => (
            <div
              key={item.id}
              className=""
              onClick={() => {}}
              onMouseEnter={() => {
                handleMouseEnter(item.id);
                handleRateValue(item.id);
              }}
              onMouseLeave={() => {
                // handleMouseLeave();
              }}
            >
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99967 8.6473C4.42329 8.6473 3.88162 8.53785 3.37467 8.31896C2.86773 8.10008 2.42676 7.80327 2.05176 7.42855C1.67676 7.05355 1.37995 6.61258 1.16134 6.10563C0.94273 5.59869 0.833286 5.05702 0.833008 4.48063C0.833008 3.90424 0.942452 3.36258 1.16134 2.85563C1.38023 2.34869 1.67704 1.90771 2.05176 1.53271C2.42676 1.15771 2.86773 0.860909 3.37467 0.642298C3.88162 0.423687 4.42329 0.314243 4.99967 0.313965C5.57606 0.313965 6.11773 0.423409 6.62467 0.642298C7.13162 0.861187 7.57259 1.15799 7.94759 1.53271C8.32259 1.90771 8.61953 2.34869 8.83842 2.85563C9.05731 3.36258 9.16662 3.90424 9.16634 4.48063C9.16634 5.05702 9.0569 5.59869 8.83801 6.10563C8.61912 6.61258 8.32231 7.05355 7.94759 7.42855C7.57259 7.80355 7.13162 8.10049 6.62467 8.31938C6.11773 8.53827 5.57606 8.64758 4.99967 8.6473Z"
                  fill={item.color}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
