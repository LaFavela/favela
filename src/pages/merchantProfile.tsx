import React, { useState } from 'react';
import Navbar from './navbar';

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
               <p className='text-[38px] font-semibold'>Pesantren An - Nuur</p>
               <p className='text-[22px]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae iusto expedita eos cum autem deserunt
                  tempora voluptatum repellendus! Sint iste eveniet earum
                  amet deserunt eligendi, minima reprehenderit consequuntur doloribus Lorem ipsum dolor sit, amet consectetur
               </p>
            </div>
         </div>
         <div className='flex flex-row mt-10 mr-5'>
            <div className='basis-11/12 mr-3'>
               <p className='text-[38px] font-semibold'>Perumahan Payu</p>
               <p className='text-[22px] font-extralight'>
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
               <p className='text-[38px] font-semibold'>Sekret Rental PES</p>
               <p className='text-[22px]'>
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
               <p className='text-[38px] font-semibold'>Rumah Minimalis</p>
               <p className='text-[22px]'>
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
               <p className='text-[38px] font-semibold'>Rumah Ala Jepang</p>
               <p className='text-[22px]'>
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
               <p className='text-[38px] font-semibold'>Rumah Minimalis</p>
               <p className='text-[22px]'>
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
      </div>
   )
}


export default function merchantProfile() {

   const [currentFunction, setCurrentFunction] = useState<'desain' | 'kontak' | 'project'>('project');

   const handleFunctionChange = (functionName: 'desain' | 'kontak' | 'project') => {
      setCurrentFunction(functionName);
   };
   return (
      <div className='pb-10'>
         <Navbar></Navbar>
         <div className="flex flex-row">
            <div className="basis-1/2">
               <div className="justify-center items-center flex">
                  <img src="/assets/profile/ali.jpg" alt="foto profil" className="rounded-3xl w-[450px] h-[450px] mt-6 ml-10" />
               </div>
            </div>
            <div className="basis-11/12 flex flex-row ml-14">
               <div className="basis-[75%]">
                  <p className="text-[38px] font-semibold mt-4">Ali An Nuur</p>
                  <p className="text-[23px] text-gray-300 mt-2">Mataram, Indonesia</p>
                  <div className="flex flex-row mt-3">
                     <svg width="128" height="22" viewBox="0 0 128 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
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
                     <p className="ml-2 text-[20px] font-medium">20 Ulasan</p>
                  </div>
                  <div className="mt-3 flex flex-row">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg " className="mt-[0.20rem]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.67 13.1299C18.04 14.0599 19 15.3199 19 16.9999V19.9999H23V16.9999C23 14.8199 19.43 13.5299 16.67 13.1299Z" fill="black" />
                        <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5305 5.30422 15 6.6314 15 8C15 9.3686 14.5305 10.6958 13.67 11.76C14.09 11.9 14.53 12 15 12ZM9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13Z" fill="black" />
                     </svg>
                     <p className="ml-2 text-[20px] font-medium">500Rb Pengikut</p>
                  </div>
                  <p className="text-[24px] mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Enim voluptas doloremque eos obcaecati, minus aspernatur
                     nemo molestias dicta perferendis suscipit nisi amet ducimus,
                     repellat sit placeat modi quo cum aliquam!</p>
                  <div className="mt-6 flex flex-row space-x-5">
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
         <div className="flex flex-row mt-16">
            <div className="basis-1/2">
               <div className="flex flex-col space-x-8">
                  <div className="flex flex-row ml-8 mt-10">
                     <p className="pr-4 text-gray-400 text-[22px]">Pekerjaan</p>
                     <svg width="320" height="2" viewBox="0 0 379 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[1.05rem]">
                        <line x1="1" y1="1" x2="378" y2="1" stroke="#D0D0D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
                  <div className="flex flex-row space-y-5 space-x-9">
                     <p className="text-[27px] font-semibold mt-3">IKEA Designer</p>
                     <p className="rounded-full bg-[#E3D0BA] w-[112px] h-[28-x] flex items-center justify-center text-xs text-[#B17C3F]"> Main Job </p>
                  </div>
                  <p className="mt-3 text-[22px] text-gray-400">Jln. Seganteng Indah No 69 Blok 1945</p>

                  <div className="flex flex-row space-y-4 space-x-9 mt-8">
                     <p className="text-[27px] font-semibold mt-3">Electronic Art Corp.</p>
                     <p className="rounded-full bg-[#E3D0BA] w-[112px] h-[28-x] flex items-center justify-center text-xs text-[#B17C3F]"> Side Job </p>
                  </div>
                  <p className="mt-3 text-[22px] text-gray-400">Jln. Seganteng Indah No 69 Blok 1945</p>
               </div>
            </div>
            <div className="basis-11/12 ml-14 mt-3">

               <button onClick={() => handleFunctionChange('project')} className="w-[170px] text-[27px]" >Project</button>
               <button onClick={() => handleFunctionChange('desain')} className="w-[170px] text-[27px]" >Desain </button>
               <button onClick={() => handleFunctionChange('kontak')} className="w-[170px] text-[27px]">Contact</button>
               <button onClick={() => review()} className="w-[170px] text-[27px]">Review</button>
               {/* <div className="border-b-8 rounded-full border-gray-300 relative ">
                  <div className="border-b-8 rounded-full absolute border-[#B17C3F] w-[170px]  top-0 left-0"></div>
               </div> */}
               {currentFunction === 'project' && <Project />}
               {currentFunction === 'desain' && <Desain />}
               {currentFunction === 'kontak' && <Kontak />}
            </div>
         </div>

      </div>
   );
}

export function review() {
   return (
      <div>

      </div>
   )
}

