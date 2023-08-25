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




export default function ShowRating(){
    return(
        <div className="flex justify-center items-center">
            <div className="flex space-x-1">
                {review.map((item,idx) => (
                    <div 
                    key={idx}
                    className="rounded-full w-[0.520625rem] h-[0.520625rem]  bg-black">

                    </div>
                ))}
            </div>
        </div>
    );
}