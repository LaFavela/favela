import React, { useState } from 'react';
import Navbar from './navbar';
import StarRating from './rating';
import Footer from './footer';

export function Project() {
   return (
      <div>
         <div className="border-b-8 rounded-full border-gray-300 relative ">
            <div className="border-b-8 rounded-full absolute border-[#B17C3F] w-[170px]  top-0 left-0"></div>
         </div>
         <div className='flex flex-row mt-10 mr-5'>
            <div className='basis-1/2 mt-3'>
               <img src="/assets/merchant/pesantren.jpg" alt="pesantren" className='rounded-3xl h-[260px] w-[292px]' />
            </div>
            <div className='basis-11/12 ml-9'>
               <p className='text-[2rem] font-medium'>Pesantren An - Nuur</p>
               <p className='text-[1.15rem] font-extralight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae iusto expedita eos cum autem deserunt
                  tempora voluptatum repellendus! Sint iste eveniet earum
                  amet deserunt eligendi, minima reprehenderit consequuntur doloribus Lorem ipsum dolor sit, amet consectetur
               </p>
            </div>
         </div>
         <div className='flex flex-row mt-10 mr-5'>
            <div className='basis-11/12 mr-3'>
               <p className='text-[2rem] font-semibold'>Perumahan Payu</p>
               <p className='text-[1.15rem] font-extralight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae iusto expedita eos cum autem deserunt
                  tempora voluptatum repellendus! Sint iste eveniet earum
                  amet deserunt eligendi, minima reprehenderit consequuntur doloribus Lorem ipsum dolor sit, amet consectetur
               </p>
            </div>
            <div className='basis-1/2 mt-3'>
               <img src="/assets/merchant/Perumahan_Payu.jpg" alt="pesantren" className='rounded-3xl h-[260px] w-[292px]' />
            </div>
         </div>
         <div className='flex flex-row mt-10 mr-5'>
            <div className='basis-1/2 mt-3'>
               <img src="/assets/merchant/sekret_RentalPes.jpg" alt="pesantren" className='rounded-3xl h-[260px] w-[292px]' />
            </div>
            <div className='basis-11/12 ml-9'>
               <p className='text-[2rem] font-semibold'>Sekret Rental PES</p>
               <p className='text-[1.15rem] font-extralight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae iusto expedita eos cum autem deserunt
                  tempora voluptatum repellendus! Sint iste eveniet earum
                  amet deserunt eligendi, minima reprehenderit consequuntur doloribus Lorem ipsum dolor sit, amet consectetur
               </p>
            </div>
         </div>

      </div>
   )
}

export function Desain() {
   return (
      <div>
         <div className="border-b-8 rounded-full border-gray-300 relative ">
            <div className="border-b-8 rounded-full absolute border-[#B17C3F] w-[170px]  top-0 left-[10.35rem]"></div>
         </div>
         <div className='flex flex-row mt-10 mr-5'>
            <div className='basis-1/2 mt-3'>
               <img src="/assets/merchant/model1.jpg" alt="pesantren" className='rounded-3xl h-[260px] w-[292px]' />
            </div>
            <div className='basis-11/12 ml-9'>
               <p className='text-[2rem] font-semibold'>Rumah Minimalis</p>
               <p className='text-[1.15rem] font-extralight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae iusto expedita eos cum autem deserunt
                  tempora voluptatum repellendus! Sint iste eveniet
               </p>
               <button className='button-grey w-56 mt-6'>Selengkapnya</button>
            </div>
         </div>
         <div className='flex flex-row mt-10 mr-5'>
            <div className='basis-1/2 mt-3'>
               <img src="/assets/merchant/Model2.jpg" alt="pesantren" className='rounded-3xl h-[260px] w-[292px]' />
            </div>
            <div className='basis-11/12 ml-9'>
               <p className='text-[2rem] font-semibold'>Rumah Ala Jepang</p>
               <p className='text-[1.15rem] font-extralight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae iusto expedita eos cum autem deserunt
                  tempora voluptatum repellendus! Sint iste eveniet
               </p>
               <button className='button-grey w-56 mt-6'>Selengkapnya</button>
            </div>
         </div>
         <div className='flex flex-row mt-10 mr-5'>
            <div className='basis-1/2 mt-3'>
               <img src="/assets/merchant/model1.jpg" alt="pesantren" className='rounded-3xl h-[260px] w-[292px]' />
            </div>
            <div className='basis-11/12 ml-9'>
               <p className='text-[2rem] font-semibold'>Rumah Minimalis</p>
               <p className='text-[1.15rem] font-extralight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae iusto expedita eos cum autem deserunt
                  tempora voluptatum repellendus! Sint iste eveniet
               </p>
               <button className='button-grey w-56 mt-6'>Selengkapnya</button>
            </div>
         </div>

      </div>
   )
}

export function Kontak() {
   return (
      <div>
         <div className="border-b-8 rounded-full border-gray-300 relative ">
            <div className="border-b-8 rounded-full absolute border-[#B17C3F] w-[170px]  top-0 left-[21.10rem]"></div>
         </div>
         <div className='min-w-fit  mt-8'>
            <p className='text-[1.15rem] text-gray-400'>Nomor Telepon</p>
            <p className='text-[1.4rem] font-medium pb-3 '> +6281392709800</p>
            <svg width="837" height="2" viewBox="0 0 983 2" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="1" y1="1" x2="982" y2="1" stroke="#D0D0D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
         </div>
         <div className='min-w-fit  mt-8'>
            <p className='text-[1.15rem] text-gray-400'>E-Mail</p>
            <p className='text-[1.4rem] font-medium pb-3 '> dzulhiraihan@gmail.com</p>
            <svg width="837" height="2" viewBox="0 0 983 2" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="1" y1="1" x2="982" y2="1" stroke="#D0D0D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
         </div>
         <div className='min-w-fit  mt-8'>
            <p className='text-[1.15rem] text-gray-400'>Situs</p>
            <p className='text-[1.4rem] font-medium pb-3 '> Desainerterpecaya.com</p>
            <svg width="837" height="2" viewBox="0 0 983 2" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="1" y1="1" x2="982" y2="1" stroke="#D0D0D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
         </div>
         <div className='min-w-fit  mt-8'>
            <p className='text-[1.15rem] text-gray-400'>Media Sosial</p>
            <p className='text-[1.4rem] font-medium pb-3 '> @bukanrehan__</p>
            <svg width="837" height="2" viewBox="0 0 983 2" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="1" y1="1" x2="982" y2="1" stroke="#D0D0D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
         </div>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
      </div>
   )
}


export function Review() {
   const [rating, setRating] = useState(0);
   const handleRatingChange = (selectedRating: number) => {
      setRating(selectedRating);
   };
   return (
      <div>
         <div className="border-b-8 rounded-full border-gray-300 relative ">
            <div className="border-b-8 rounded-full absolute border-[#B17C3F] w-[170px]  top-0 left-[31.57rem]"></div>
         </div>

         <div className='flex flex-col'>
            <div className='flex flex-row mt-8'>
               <div className='mt-3'>
                  <div className='w-12 h-12 rounded-full'>
                     <img src="/assets/profile/dwimas.jpg" alt="" className='rounded-full' />
                  </div>
               </div>
               <div className='min-h-fit ml-6'>
                  <div className='flex flex-row space-x-2 items-center mt-1'>
                     <p className='text-lg font-normal'>Dimas Nugraha</p>
                     <p className='text-xs font-extralight mt-1'>3 minutes ago</p>
                  </div>
                  <svg width="74" height="11" viewBox="0 0 74 11" fill="none" xmlns="http://www.w3.org/2000/svg " className='ml-[2px]'>
                     <g clip-path="url(#clip0_120_585)">
                        <path d="M5.00016 9.16671C4.42377 9.16671 3.88211 9.05726 3.37516 8.83837C2.86822 8.61948 2.42725 8.32268 2.05225 7.94796C1.67725 7.57296 1.38044 7.13198 1.16183 6.62504C0.943218 6.1181 0.833774 5.57643 0.833496 5.00004C0.833496 4.42365 0.942941 3.88199 1.16183 3.37504C1.38072 2.8681 1.67752 2.42712 2.05225 2.05212C2.42725 1.67712 2.86822 1.38032 3.37516 1.16171C3.88211 0.943096 4.42377 0.833652 5.00016 0.833374C5.57655 0.833374 6.11822 0.942819 6.62516 1.16171C7.13211 1.3806 7.57308 1.6774 7.94808 2.05212C8.32308 2.42712 8.62002 2.8681 8.83891 3.37504C9.0578 3.88199 9.16711 4.42365 9.16683 5.00004C9.16683 5.57643 9.05738 6.1181 8.8385 6.62504C8.61961 7.13198 8.3228 7.57296 7.94808 7.94796C7.57308 8.32296 7.13211 8.6199 6.62516 8.83879C6.11822 9.05768 5.57655 9.16698 5.00016 9.16671Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip1_120_585)">
                        <path d="M32.8579 5.01286C32.8595 4.43647 32.9705 3.89512 33.1909 3.38881C33.4112 2.88249 33.7093 2.44237 34.0851 2.06845C34.4611 1.69453 34.903 1.39899 35.4105 1.18183C35.9181 0.964676 36.4601 0.856786 37.0365 0.858162C37.6129 0.859816 38.1542 0.970814 38.6605 1.19116C39.1668 1.4115 39.607 1.70957 39.9809 2.08537C40.3548 2.46144 40.6503 2.90326 40.8675 3.41083C41.0847 3.9184 41.1925 4.46038 41.1912 5.03677C41.1895 5.61315 41.0785 6.1545 40.8582 6.66082C40.6378 7.16713 40.3398 7.60725 39.964 7.98117C39.5879 8.3551 39.1461 8.65077 38.6385 8.86821C38.1309 9.08564 37.589 9.19339 37.0126 9.19146C36.4362 9.18981 35.8948 9.07881 35.3885 8.85847C34.8822 8.63812 34.4421 8.34005 34.0682 7.96426C33.6942 7.58818 33.3986 7.14636 33.1811 6.63879C32.9637 6.13122 32.8559 5.58924 32.8579 5.01286Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip2_120_585)">
                        <path d="M21.0002 9.16671C20.4238 9.16671 19.8821 9.05726 19.3752 8.83837C18.8682 8.61949 18.4272 8.32268 18.0522 7.94796C17.6772 7.57296 17.3804 7.13198 17.1618 6.62504C16.9432 6.1181 16.8338 5.57643 16.8335 5.00004C16.8335 4.42365 16.9429 3.88199 17.1618 3.37504C17.3807 2.8681 17.6775 2.42712 18.0522 2.05212C18.4272 1.67712 18.8682 1.38032 19.3752 1.16171C19.8821 0.943096 20.4238 0.833652 21.0002 0.833374C21.5766 0.833374 22.1182 0.942819 22.6252 1.16171C23.1321 1.3806 23.5731 1.6774 23.9481 2.05212C24.3231 2.42712 24.62 2.8681 24.8389 3.37504C25.0578 3.88199 25.1671 4.42365 25.1668 5.00004C25.1668 5.57643 25.0574 6.1181 24.8385 6.62504C24.6196 7.13198 24.3228 7.57296 23.9481 7.94796C23.5731 8.32296 23.1321 8.6199 22.6252 8.83879C22.1182 9.05768 21.5766 9.16698 21.0002 9.16671Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip3_120_585)">
                        <path d="M53.0002 9.16671C52.4238 9.16671 51.8821 9.05726 51.3752 8.83837C50.8682 8.61948 50.4272 8.32268 50.0522 7.94796C49.6772 7.57296 49.3804 7.13198 49.1618 6.62504C48.9432 6.1181 48.8338 5.57643 48.8335 5.00004C48.8335 4.42365 48.9429 3.88199 49.1618 3.37504C49.3807 2.8681 49.6775 2.42712 50.0522 2.05212C50.4272 1.67712 50.8682 1.38032 51.3752 1.16171C51.8821 0.943096 52.4238 0.833652 53.0002 0.833374C53.5766 0.833374 54.1182 0.942819 54.6252 1.16171C55.1321 1.3806 55.5731 1.6774 55.9481 2.05212C56.3231 2.42712 56.62 2.8681 56.8389 3.37504C57.0578 3.88199 57.1671 4.42365 57.1668 5.00004C57.1668 5.57643 57.0574 6.1181 56.8385 6.62504C56.6196 7.13198 56.3228 7.57296 55.9481 7.94796C55.5731 8.32296 55.1321 8.6199 54.6252 8.83879C54.1182 9.05768 53.5766 9.16698 53.0002 9.16671Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip4_120_585)">
                        <path d="M69.0002 9.16671C68.4238 9.16671 67.8821 9.05726 67.3752 8.83837C66.8682 8.61948 66.4272 8.32268 66.0522 7.94796C65.6772 7.57296 65.3804 7.13198 65.1618 6.62504C64.9432 6.1181 64.8338 5.57643 64.8335 5.00004C64.8335 4.42365 64.9429 3.88199 65.1618 3.37504C65.3807 2.8681 65.6775 2.42712 66.0522 2.05212C66.4272 1.67712 66.8682 1.38032 67.3752 1.16171C67.8821 0.943096 68.4238 0.833652 69.0002 0.833374C69.5766 0.833374 70.1182 0.942819 70.6252 1.16171C71.1321 1.3806 71.5731 1.6774 71.9481 2.05212C72.3231 2.42712 72.62 2.8681 72.8389 3.37504C73.0578 3.88199 73.1671 4.42365 73.1668 5.00004C73.1668 5.57643 73.0574 6.1181 72.8385 6.62504C72.6196 7.13198 72.3228 7.57296 71.9481 7.94796C71.5731 8.32296 71.1321 8.6199 70.6252 8.83879C70.1182 9.05768 69.5766 9.16698 69.0002 9.16671Z" fill="#BEB8B8" />
                     </g>
                     <defs>
                        <clipPath id="clip0_120_585">
                           <rect width="10" height="10" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(42.0391 0.0391846) rotate(90.1644)" />
                        </clipPath>
                        <clipPath id="clip2_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(16)" />
                        </clipPath>
                        <clipPath id="clip3_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(48)" />
                        </clipPath>
                        <clipPath id="clip4_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(64)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <p className='text-sm mt-3'>Momen Kebersamaan</p>
                  <p className='text-sm mt-1 w-9/12 text-[#909090] font-light font-poppins'>
                     Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,
                     ,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama
                     sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang
                     sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen
                     temen,,... ehhh y&apos;oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya
                     yang banyak ya... dug dug..
                  </p>
                  <div className='flex flex-row space-x-4 items-center mt-2'>
                     <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8.16064V20.1606H0V8.16064H4ZM8 20.1606C7.46957 20.1606 6.96086 19.9499 6.58579 19.5749C6.21071 19.1998 6 18.6911 6 18.1606V8.16064C6 7.61064 6.22 7.11064 6.59 6.75064L13.17 0.160645L14.23 1.22064C14.5 1.49064 14.67 1.86064 14.67 2.27064L14.64 2.59064L13.69 7.16064H20C20.5304 7.16064 21.0391 7.37136 21.4142 7.74643C21.7893 8.1215 22 8.63021 22 9.16064V11.1606C22 11.4206 21.95 11.6606 21.86 11.8906L18.84 18.9406C18.54 19.6606 17.83 20.1606 17 20.1606H8ZM8 18.1606H17.03L20 11.1606V9.16064H11.21L12.34 3.84064L8 8.19064V18.1606Z" fill="#6E6E6E" />
                     </svg>
                     <p className='text-sm font-normal text-[#6E6E6E] mt-1'>20</p>
                  </div>

                  <svg width="760" height="2" viewBox="0 0 993 2" fill="none" xmlns="http://www.w3.org/2000/svg " className='mt-4'>
                     <line x1="0.25" y1="0.910645" x2="992.75" y2="0.910645" stroke="#D0D0D0" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </div>
            </div>

            <div className='flex flex-row mt-8'>
               <div className='mt-3'>
                  <div className='w-12 h-12 rounded-full'>
                     <img src="/assets/profile/raihan.jpg" alt="" className='rounded-full' />
                  </div>
               </div>
               <div className='min-h-fit ml-6'>
                  <div className='flex flex-row space-x-2 items-center mt-1'>
                     <p className='text-lg font-normal'>Dzulhi Nugraha</p>
                     <p className='text-xs font-extralight mt-1'>3 minutes ago</p>
                  </div>
                  <svg width="74" height="11" viewBox="0 0 74 11" fill="none" xmlns="http://www.w3.org/2000/svg " className='ml-[2px]'>
                     <g clip-path="url(#clip0_120_585)">
                        <path d="M5.00016 9.16671C4.42377 9.16671 3.88211 9.05726 3.37516 8.83837C2.86822 8.61948 2.42725 8.32268 2.05225 7.94796C1.67725 7.57296 1.38044 7.13198 1.16183 6.62504C0.943218 6.1181 0.833774 5.57643 0.833496 5.00004C0.833496 4.42365 0.942941 3.88199 1.16183 3.37504C1.38072 2.8681 1.67752 2.42712 2.05225 2.05212C2.42725 1.67712 2.86822 1.38032 3.37516 1.16171C3.88211 0.943096 4.42377 0.833652 5.00016 0.833374C5.57655 0.833374 6.11822 0.942819 6.62516 1.16171C7.13211 1.3806 7.57308 1.6774 7.94808 2.05212C8.32308 2.42712 8.62002 2.8681 8.83891 3.37504C9.0578 3.88199 9.16711 4.42365 9.16683 5.00004C9.16683 5.57643 9.05738 6.1181 8.8385 6.62504C8.61961 7.13198 8.3228 7.57296 7.94808 7.94796C7.57308 8.32296 7.13211 8.6199 6.62516 8.83879C6.11822 9.05768 5.57655 9.16698 5.00016 9.16671Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip1_120_585)">
                        <path d="M32.8579 5.01286C32.8595 4.43647 32.9705 3.89512 33.1909 3.38881C33.4112 2.88249 33.7093 2.44237 34.0851 2.06845C34.4611 1.69453 34.903 1.39899 35.4105 1.18183C35.9181 0.964676 36.4601 0.856786 37.0365 0.858162C37.6129 0.859816 38.1542 0.970814 38.6605 1.19116C39.1668 1.4115 39.607 1.70957 39.9809 2.08537C40.3548 2.46144 40.6503 2.90326 40.8675 3.41083C41.0847 3.9184 41.1925 4.46038 41.1912 5.03677C41.1895 5.61315 41.0785 6.1545 40.8582 6.66082C40.6378 7.16713 40.3398 7.60725 39.964 7.98117C39.5879 8.3551 39.1461 8.65077 38.6385 8.86821C38.1309 9.08564 37.589 9.19339 37.0126 9.19146C36.4362 9.18981 35.8948 9.07881 35.3885 8.85847C34.8822 8.63812 34.4421 8.34005 34.0682 7.96426C33.6942 7.58818 33.3986 7.14636 33.1811 6.63879C32.9637 6.13122 32.8559 5.58924 32.8579 5.01286Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip2_120_585)">
                        <path d="M21.0002 9.16671C20.4238 9.16671 19.8821 9.05726 19.3752 8.83837C18.8682 8.61949 18.4272 8.32268 18.0522 7.94796C17.6772 7.57296 17.3804 7.13198 17.1618 6.62504C16.9432 6.1181 16.8338 5.57643 16.8335 5.00004C16.8335 4.42365 16.9429 3.88199 17.1618 3.37504C17.3807 2.8681 17.6775 2.42712 18.0522 2.05212C18.4272 1.67712 18.8682 1.38032 19.3752 1.16171C19.8821 0.943096 20.4238 0.833652 21.0002 0.833374C21.5766 0.833374 22.1182 0.942819 22.6252 1.16171C23.1321 1.3806 23.5731 1.6774 23.9481 2.05212C24.3231 2.42712 24.62 2.8681 24.8389 3.37504C25.0578 3.88199 25.1671 4.42365 25.1668 5.00004C25.1668 5.57643 25.0574 6.1181 24.8385 6.62504C24.6196 7.13198 24.3228 7.57296 23.9481 7.94796C23.5731 8.32296 23.1321 8.6199 22.6252 8.83879C22.1182 9.05768 21.5766 9.16698 21.0002 9.16671Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip3_120_585)">
                        <path d="M53.0002 9.16671C52.4238 9.16671 51.8821 9.05726 51.3752 8.83837C50.8682 8.61948 50.4272 8.32268 50.0522 7.94796C49.6772 7.57296 49.3804 7.13198 49.1618 6.62504C48.9432 6.1181 48.8338 5.57643 48.8335 5.00004C48.8335 4.42365 48.9429 3.88199 49.1618 3.37504C49.3807 2.8681 49.6775 2.42712 50.0522 2.05212C50.4272 1.67712 50.8682 1.38032 51.3752 1.16171C51.8821 0.943096 52.4238 0.833652 53.0002 0.833374C53.5766 0.833374 54.1182 0.942819 54.6252 1.16171C55.1321 1.3806 55.5731 1.6774 55.9481 2.05212C56.3231 2.42712 56.62 2.8681 56.8389 3.37504C57.0578 3.88199 57.1671 4.42365 57.1668 5.00004C57.1668 5.57643 57.0574 6.1181 56.8385 6.62504C56.6196 7.13198 56.3228 7.57296 55.9481 7.94796C55.5731 8.32296 55.1321 8.6199 54.6252 8.83879C54.1182 9.05768 53.5766 9.16698 53.0002 9.16671Z" fill="black" />
                     </g>
                     <g clip-path="url(#clip4_120_585)">
                        <path d="M69.0002 9.16671C68.4238 9.16671 67.8821 9.05726 67.3752 8.83837C66.8682 8.61948 66.4272 8.32268 66.0522 7.94796C65.6772 7.57296 65.3804 7.13198 65.1618 6.62504C64.9432 6.1181 64.8338 5.57643 64.8335 5.00004C64.8335 4.42365 64.9429 3.88199 65.1618 3.37504C65.3807 2.8681 65.6775 2.42712 66.0522 2.05212C66.4272 1.67712 66.8682 1.38032 67.3752 1.16171C67.8821 0.943096 68.4238 0.833652 69.0002 0.833374C69.5766 0.833374 70.1182 0.942819 70.6252 1.16171C71.1321 1.3806 71.5731 1.6774 71.9481 2.05212C72.3231 2.42712 72.62 2.8681 72.8389 3.37504C73.0578 3.88199 73.1671 4.42365 73.1668 5.00004C73.1668 5.57643 73.0574 6.1181 72.8385 6.62504C72.6196 7.13198 72.3228 7.57296 71.9481 7.94796C71.5731 8.32296 71.1321 8.6199 70.6252 8.83879C70.1182 9.05768 69.5766 9.16698 69.0002 9.16671Z" fill="#BEB8B8" />
                     </g>
                     <defs>
                        <clipPath id="clip0_120_585">
                           <rect width="10" height="10" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(42.0391 0.0391846) rotate(90.1644)" />
                        </clipPath>
                        <clipPath id="clip2_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(16)" />
                        </clipPath>
                        <clipPath id="clip3_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(48)" />
                        </clipPath>
                        <clipPath id="clip4_120_585">
                           <rect width="10" height="10" fill="white" transform="translate(64)" />
                        </clipPath>
                     </defs>
                  </svg>
                  <p className='text-sm mt-3'>Momen Kebersamaan</p>
                  <p className='text-sm mt-1 w-9/12 text-[#909090] font-light font-poppins'>
                     Pada saat moment kebersamaan kita,kita pesan 1 es,pas saya lagi sendok es itu ke mulut,
                     ,cuttttttttttt itu ngilu nya,saya benar benar langsung kehilangan moment kebersamaan sama
                     sahabat sahabat saya,Dokter sarankan coba deh ibu pakai sensodyne khusus untuk gigi yang
                     sensitif,berkat sensodyne,waaahhhhhh,, saya malah mungkin paling banyak kali tuh kata temen
                     temen,,... ehhh y&apos;oll pelan pelan dong makannya kita belum kebagian nihh....,,mas es nya
                     yang banyak ya... dug dug..
                  </p>
                  <div className='flex flex-row space-x-4 items-center mt-2'>
                     <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8.16064V20.1606H0V8.16064H4ZM8 20.1606C7.46957 20.1606 6.96086 19.9499 6.58579 19.5749C6.21071 19.1998 6 18.6911 6 18.1606V8.16064C6 7.61064 6.22 7.11064 6.59 6.75064L13.17 0.160645L14.23 1.22064C14.5 1.49064 14.67 1.86064 14.67 2.27064L14.64 2.59064L13.69 7.16064H20C20.5304 7.16064 21.0391 7.37136 21.4142 7.74643C21.7893 8.1215 22 8.63021 22 9.16064V11.1606C22 11.4206 21.95 11.6606 21.86 11.8906L18.84 18.9406C18.54 19.6606 17.83 20.1606 17 20.1606H8ZM8 18.1606H17.03L20 11.1606V9.16064H11.21L12.34 3.84064L8 8.19064V18.1606Z" fill="#6E6E6E" />
                     </svg>
                     <p className='text-sm font-normal text-[#6E6E6E] mt-1'>20</p>
                  </div>

                  <svg width="760" height="2" viewBox="0 0 993 2" fill="none" xmlns="http://www.w3.org/2000/svg " className='mt-4'>
                     <line x1="0.25" y1="0.910645" x2="992.75" y2="0.910645" stroke="#D0D0D0" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </div>
            </div>
         </div>
         <div className='flex justify-center'>
            <a href="#" className='underline font-poppins text-gray-400 mt-8'>Tampilkan Lebih Banyak</a>
         </div>
         <p className='font-poppins text-[20px]'>Tulis Ulasan</p>
         <p className='font-poppins text-[17px] mt-3'>Seberapa Suka Anda Terhadap Desainer</p>
         <StarRating rating={rating} onChange={handleRatingChange} />

         <form action="">
            <label htmlFor="Judul-ulasan">
               <span className="block mb-1 font-poppins mt-6 text-[17px]">Judul Ulasan</span>
               <div className='border-[1px] border-gray-400 rounded-[10px] max-w-screen-md'>
                  <input type="text" id="judul-ulasan" placeholder="Masukkan Judul" className="px-3 py-2 rounded-[10px] bg-white w-full" />
               </div>
            </label>
            <label htmlFor="ulasan">
               <span className="block mb-1 font-poppins mt-6 text-[17px]">Ulasan Produk</span>
               <div className='border-[1px] border-gray-400 rounded-[10px] max-w-screen-md h-[242px] '>
                  <textarea id="ulasan" placeholder="Tulis Ulasan....." className="px-3 py-2 rounded-[10px] bg-white w-full h-[240px] resize-none" maxLength={500}></textarea>
               </div>
               <button type="submit" className="bg-[#DBDBDB] rounded-full text-[#B17C3F] font-semibold mt-6 w-[126px] py-2 hover:bg-[#E7E7E7]  transition duration-300 ease-in-out ">Kirim Ulasan</button>
            </label>
         </form>

      </div>
   )
}


export default function merchantProfile() {

   const [currentFunction, setCurrentFunction] = useState<'Desain' | 'Kontak' | 'Project' | 'Review'>('Project');
   const [activeButton, setActiveButton] = useState<'Desain' | 'Kontak' | 'Project' | 'Review'>('Project');
   const handleFunctionChange = (functionName: 'Desain' | 'Kontak' | 'Project' | 'Review') => {
      setCurrentFunction(functionName);
      setActiveButton(functionName);
   };
   return (
      <div>
         <Navbar></Navbar>
         <div className="flex flex-row">
            <div className="basis-1/2  mt-3">
               <div className="justify-center items-center flex">
                  <img src="/assets/profile/raihan.jpg" alt="foto profil" className="rounded-3xl w-[26rem] h-[26rem] mt-6 ml-10" />
               </div>
            </div>
            <div className="basis-[93%] flex flex-row ml-20 mt-3">
               <div className="basis-[75%]">
                  <p className="text-[2.1rem] font-medium mt-4 ml-2">Muhammad Dzulhi Raihan</p>
                  <p className="text-[1.2rem] text-gray-400 ml-2">Mataram, Indonesia</p>
                  <div className="flex flex-row mt-2">
                     <svg width="123" height="18" viewBox="0 0 128 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                        <path d="M10.6082 19.4482C9.38528 19.4482 8.23606 19.216 7.16052 18.7516C6.08498 18.2872 5.1494 17.6575 4.35379 16.8625C3.55818 16.0669 2.92848 15.1313 2.46467 14.0558C2.00086 12.9802 1.76866 11.831 1.76807 10.6082C1.76807 9.38528 2.00027 8.23606 2.46467 7.16052C2.92906 6.08498 3.55877 5.1494 4.35379 4.35379C5.1494 3.55818 6.08498 2.92848 7.16052 2.46467C8.23606 2.00086 9.38528 1.76866 10.6082 1.76807C11.831 1.76807 12.9802 2.00027 14.0558 2.46467C15.1313 2.92906 16.0669 3.55877 16.8625 4.35379C17.6581 5.1494 18.2881 6.08498 18.7525 7.16052C19.2169 8.23606 19.4488 9.38528 19.4482 10.6082C19.4482 11.831 19.216 12.9802 18.7516 14.0558C18.2872 15.1313 17.6575 16.0669 16.8625 16.8625C16.0669 17.6581 15.1313 18.2881 14.0558 18.7525C12.9802 19.2169 11.831 19.4488 10.6082 19.4482Z" fill="black" />
                        <path d="M36.8243 19.4482C35.6015 19.4482 34.4523 19.216 33.3767 18.7516C32.3012 18.2872 31.3656 17.6575 30.57 16.8625C29.7744 16.0669 29.1447 15.1313 28.6809 14.0558C28.217 12.9802 27.9848 11.831 27.9843 10.6082C27.9843 9.38528 28.2165 8.23606 28.6809 7.16052C29.1453 6.08498 29.775 5.1494 30.57 4.35379C31.3656 3.55818 32.3012 2.92848 33.3767 2.46467C34.4523 2.00086 35.6015 1.76866 36.8243 1.76807C38.0472 1.76807 39.1964 2.00027 40.272 2.46467C41.3475 2.92906 42.2831 3.55877 43.0787 4.35379C43.8743 5.1494 44.5043 6.08498 44.9687 7.16052C45.4331 8.23606 45.665 9.38528 45.6644 10.6082C45.6644 11.831 45.4322 12.9802 44.9678 14.0558C44.5034 15.1313 43.8737 16.0669 43.0787 16.8625C42.2831 17.6581 41.3475 18.2881 40.272 18.7525C39.1964 19.2169 38.0472 19.4488 36.8243 19.4482Z" fill="black" />
                        <path d="M54.2308 10.6131C54.2343 9.39018 54.4698 8.24164 54.9373 7.16743C55.4048 6.09323 56.0372 5.15946 56.8345 4.36614C57.6324 3.57282 58.5697 2.94579 59.6466 2.48507C60.7235 2.02435 61.8734 1.79545 63.0962 1.79837C64.3191 1.80188 65.4676 2.03737 66.5418 2.50485C67.6161 2.97234 68.5498 3.60473 69.3431 4.40203C70.1365 5.19991 70.7635 6.13729 71.2242 7.21416C71.6849 8.29103 71.9138 9.44091 71.9109 10.6638C71.9074 11.8867 71.6719 13.0352 71.2044 14.1094C70.7369 15.1836 70.1046 16.1174 69.3073 16.9107C68.5094 17.704 67.572 18.3313 66.4951 18.7926C65.4182 19.254 64.2684 19.4826 63.0455 19.4785C61.8226 19.475 60.6741 19.2395 59.5999 18.772C58.5257 18.3045 57.5919 17.6721 56.7986 16.8748C56.0053 16.0769 55.3779 15.1395 54.9166 14.0627C54.4553 12.9858 54.2267 11.8359 54.2308 10.6131Z" fill="url(#paint0_linear_84_46)" />
                        <path d="M89.3175 19.4482C88.0946 19.4482 86.9454 19.216 85.8699 18.7516C84.7943 18.2872 83.8588 17.6575 83.0631 16.8625C82.2675 16.0669 81.6378 15.1313 81.174 14.0558C80.7102 12.9802 80.478 11.831 80.4774 10.6082C80.4774 9.38528 80.7096 8.23606 81.174 7.16052C81.6384 6.08498 82.2681 5.1494 83.0631 4.35379C83.8588 3.55818 84.7943 2.92848 85.8699 2.46467C86.9454 2.00086 88.0946 1.76866 89.3175 1.76807C90.5404 1.76807 91.6896 2.00027 92.7651 2.46467C93.8407 2.92906 94.7763 3.55877 95.5719 4.35379C96.3675 5.1494 96.9975 6.08498 97.4619 7.16052C97.9263 8.23606 98.1582 9.38528 98.1576 10.6082C98.1576 11.831 97.9254 12.9802 97.461 14.0558C96.9966 15.1313 96.3669 16.0669 95.5719 16.8625C94.7763 17.6581 93.8407 18.2881 92.7651 18.7525C91.6896 19.2169 90.5404 19.4488 89.3175 19.4482Z" fill="black" />
                        <path d="M115.534 19.4482C114.311 19.4482 113.162 19.216 112.086 18.7516C111.011 18.2872 110.075 17.6575 109.279 16.8625C108.484 16.0669 107.854 15.1313 107.39 14.0558C106.926 12.9802 106.694 11.831 106.694 10.6082C106.694 9.38528 106.926 8.23606 107.39 7.16052C107.855 6.08498 108.484 5.1494 109.279 4.35379C110.075 3.55818 111.011 2.92848 112.086 2.46467C113.162 2.00086 114.311 1.76866 115.534 1.76807C116.757 1.76807 117.906 2.00027 118.981 2.46467C120.057 2.92906 120.992 3.55877 121.788 4.35379C122.584 5.1494 123.214 6.08498 123.678 7.16052C124.142 8.23606 124.374 9.38528 124.374 10.6082C124.374 11.831 124.142 12.9802 123.677 14.0558C123.213 15.1313 122.583 16.0669 121.788 16.8625C120.992 17.6581 120.057 18.2881 118.981 18.7525C117.906 19.2169 116.757 19.4488 115.534 19.4482Z" fill="#9C9797" />
                        <defs>
                           <linearGradient id="paint0_linear_84_46" x1="71.9109" y1="10.6638" x2="54.2308" y2="10.6131" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#BEB8B8" />
                              <stop offset="0.0001" />
                           </linearGradient>
                        </defs>
                     </svg>
                     <p className="ml-2 text-[1.1rem] mt-[0.18rem] font-medium">20 Ulasan</p>
                  </div>
                  <div className="mt-3 flex flex-row">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg " className="mt-[0.20rem] ml-2 ">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.67 13.1299C18.04 14.0599 19 15.3199 19 16.9999V19.9999H23V16.9999C23 14.8199 19.43 13.5299 16.67 13.1299Z" fill="black" />
                        <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5305 5.30422 15 6.6314 15 8C15 9.3686 14.5305 10.6958 13.67 11.76C14.09 11.9 14.53 12 15 12ZM9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13Z" fill="black" />
                     </svg>
                     <p className="ml-2 text-[20px] font-medium">500Rb Pengikut</p>
                  </div>
                  <p className="text-[1.25rem] mt-5 ml-2 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Incidunt sapiente veniam pariatur. Rerum molestias, vero.. Lorem ipsum dolor sit amet consectetur, adipisicing
                     elit. Incidunt sapiente veniam pariatur. Rerum molestias, vero..</p>
                  <div className="mt-[4.5rem] flex flex-row space-x-5 ">
                     <button className="button-grey w-[178px]">
                        Kirim Pesan
                     </button>
                     <button className="button-brown w-[251px]">
                        Hubungi
                     </button>
                  </div>
               </div>

               <div className="mt-[1.30rem] basis-1/4 flex place-content-end mr-7">
                  <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15.4805 24.4857L4.04624 14.1286C-2.16804 7.91428 6.96696 -4.01714 15.4805 5.63571C23.9941 -4.01714 33.0877 7.95571 26.9148 14.1286L15.4805 24.4857Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
                     <path d="M17.5 17.1418C16.6133 17.1418 15.82 17.4992 15.2133 18.0591L6.895 13.1151C6.95333 12.841 7 12.567 7 12.2811C7 11.9952 6.95333 11.7212 6.895 11.4472L15.12 6.55075C15.75 7.14642 16.5783 7.51574 17.5 7.51574C19.4367 7.51574 21 5.91934 21 3.94171C21 1.96408 19.4367 0.367676 17.5 0.367676C15.5633 0.367676 14 1.96408 14 3.94171C14 4.22763 14.0467 4.50164 14.105 4.77565L5.88 9.67207C5.25 9.0764 4.42167 8.70708 3.5 8.70708C1.56333 8.70708 0 10.3035 0 12.2811C0 14.2587 1.56333 15.8551 3.5 15.8551C4.42167 15.8551 5.25 15.4858 5.88 14.8902L14.1867 19.8461C14.1283 20.0963 14.0933 20.3584 14.0933 20.6205C14.0933 22.5386 15.6217 24.0992 17.5 24.0992C19.3783 24.0992 20.9067 22.5386 20.9067 20.6205C20.9067 18.7025 19.3783 17.1418 17.5 17.1418Z" fill="black" />
                  </svg>
               </div>
            </div>
         </div>
         {/* pembatas */}
         <div className="flex flex-row mt-16 pb-8">
            <div className="basis-1/2">
               <div className="flex flex-col space-x-8">
                  <div className="flex flex-row ml-8 mt-10">
                     <p className="pr-4 text-gray-400 text-[1.1rem] mt-1">Pekerjaan</p>
                     <svg width="320" height="2" viewBox="0 0 379 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[1.05rem]">
                        <line x1="1" y1="1" x2="378" y2="1" stroke="#D0D0D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
                  <div className="flex flex-row space-y-5 space-x-9">
                     <p className="text-[1.4rem] font-semibold mt-4">IKEA Designer</p>
                     <p className="rounded-full bg-[#E3D0BA] w-[112px] h-[28-x] flex items-center justify-center text-xs text-[#B17C3F]"> Main Job </p>
                  </div>
                  <p className="mt-3 text-[1.1rem] text-gray-400">Jln. Seganteng Indah No 69 Blok 1945</p>

                  <div className="flex flex-row space-y-4 space-x-9 mt-6">
                     <p className="text-[1.4rem] font-semibold mt-3">Electronic Art Corp.</p>
                     <p className="rounded-full bg-[#E3D0BA] w-[112px] h-[28-x] flex items-center justify-center text-xs text-[#B17C3F]"> Side Job </p>
                  </div>
                  <p className="mt-3 text-[1.1rem] text-gray-400">Jln. Seganteng Indah No 69 Blok 1945</p>
               </div>
            </div>
            <div className="basis-11/12 ml-14 mt-[1.15rem] ">

               <button onClick={() => handleFunctionChange('Project')} className={`w-[170px] text-[1.4rem] ${activeButton === 'Project' ? 'text-[#B17C3F]' : 'text-gray-400'}`} >Project</button>
               <button onClick={() => handleFunctionChange('Desain')} className={`w-[170px] text-[1.4rem] ${activeButton === 'Desain' ? 'text-[#B17C3F]' : 'text-gray-400'}`} >Desain </button>
               <button onClick={() => handleFunctionChange('Kontak')} className={`w-[170px] text-[1.4rem] ${activeButton === 'Kontak' ? 'text-[#B17C3F]' : 'text-gray-400'}`}>Contact</button>
               <button onClick={() => handleFunctionChange('Review')} className={`w-[170px] text-[1.4rem] ${activeButton === 'Review' ? 'text-[#B17C3F]' : 'text-gray-400'}`}>Review</button>
               {currentFunction === 'Project' && <Project />}
               {currentFunction === 'Desain' && <Desain />}
               {currentFunction === 'Kontak' && <Kontak />}
               {currentFunction === 'Review' && <Review />}


            </div>
         </div>

         <Footer></Footer>
      </div>
   );
}


