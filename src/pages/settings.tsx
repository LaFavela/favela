import React, { useState, useEffect, use } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import Footer from "@/components/footer";
import { Transition } from "@headlessui/react";
import { getSession, useSession } from "next-auth/react";
import { Users, Gender, RoleSelect } from "@prisma/client";
import { useGet, usePost } from "@/lib/axios";
import { GetServerSideProps } from "next";
import { v4 } from "uuid";
interface ProfileProps {
   data: Users;
}

export const getServerSideProps: GetServerSideProps<{ data: Users }> = async (
   context
) => {
   const session = await getSession(context);
   const token = session?.user.accessToken;
   const data = await useGet("/user", {
      authorization: token as string,
   });
   return {
      props: {
         data,
      },
   };
};

export function Profile(props: ProfileProps) {
   const { data: session, update } = useSession();
   const token = session?.user.accessToken;

   registerLocale("id", id);

   const [file, setFile] = useState<File | null>(null);
   const [preview, setPreview] = useState<string | null>(null);

   const handleFileChange = async (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      event.preventDefault();
      const selectedFile = event.target.files && event.target.files[0];

      const uploadImage = async () => {
         try {
            if (!selectedFile) return;
            const formData = new FormData();
            formData.append("myImage", selectedFile);

            const upload = await usePost(
               "/upload",
               {
                  authorization: token as string,
                  username : session?.user.username as string,
               },
               formData
            );
            console.log(upload);
         } catch (error: any) {
            console.log(error);
         }
      };

      if (selectedFile) {
         setFile(selectedFile);
         setPreview(URL.createObjectURL(selectedFile));
         uploadImage();
      }
   };

   useEffect(() => {
      // Ambil URL foto profil dari database atau sumber penyimpanan file
      const existingProfilePicture = props.data.image;
      setPreview(existingProfilePicture);
   }, []);

   const handleClick = () => {
      const fileInput = document.getElementById("profilePicture");
      if (fileInput) {
         fileInput.click();
      }
   };

   const [selectedCity, setSelectedCity] = useState(props.data.city);
   const [selectedGender, setSelectedGender] = useState<Gender>(
      props.data.gender
   );
   const [selectedRole, setSelectedRole] = useState<RoleSelect>(
      props.data.roleName
   );
   const [firstName, setFirstName] = useState(props.data.firstName);
   const [lastName, setLastName] = useState(props.data.lastName);
   const [selectedEmail, setSelectedEmail] = useState(props.data.email);
   const [selectedNumber, setSelectedNumber] = useState(props.data.phone);
   const [selectedWebsite, setSelectedWebsite] = useState(props.data.website);
   const [selectedSocialMedia, setSelectedSocialMedia] = useState(
      props.data.socialMedia
   );
   const [selectedReview, setSelectedReview] = useState(props.data.description);

   const [birthday, setBirthday] = useState<Date | null>(
      new Date(props.data.birthDay)
   );

   const [sideJobs, setSideJobs] = useState<string[]>(props.data.job); // State untuk menyimpan daftar pekerjaan sampingan

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      // Kirim data ke API
      const data = await usePost(
         "/user",
         {
            authorization: token as string,
         },
         {
            firstName: firstName,
            lastName: lastName,
            email: selectedEmail,
            phone: selectedNumber,
            website: selectedWebsite,
            socialMedia: selectedSocialMedia,
            description: selectedReview,
            birthDay: birthday,
            job: sideJobs,
            city: selectedCity,
            roleName: selectedRole,
            gender: selectedGender,
            image: "/assets/profile/private/" + props.data.id + "/avatar.jpg" 
         } as Users
      );

      const handleUpdateUser = async () => {
         const newSession = {
            ...session,
            user: {
               ...session?.user,
               firstName: firstName,
               lastName: lastName,
               email: selectedEmail,
               phone: selectedNumber,
               website: selectedWebsite,
               socialMedia: selectedSocialMedia,
               description: selectedReview,
               birthDay: birthday,
               job: sideJobs,
               city: selectedCity,
               roleName: selectedRole,
               gender: selectedGender,
               image: "/assets/profile/private/" + props.data.id + "/avatar.jpg" 
            },
         };
         await update(newSession);
         window.location.reload();
      };
      await handleUpdateUser();
   };

   const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedGender(event.target.value as Gender);
   };

   const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRole(event.target.value as RoleSelect);
   };

   const handleAddSideJob = () => {
      setSideJobs([...sideJobs, ""]); // Menambahkan input box baru ke dalam daftar pekerjaan sampingan
   };

   const handleSideJobChange = (index: number, value: string) => {
      const updatedSideJobs = [...sideJobs];
      updatedSideJobs[index] = value;
      setSideJobs(updatedSideJobs);
   };

   return (
      <div>
         <div className="left-0 top-0 w-[170px] rounded-full  border-b-8 border-[#B17C3F]"></div>
         <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex pr-[4rem]">
               <div className="w-[18]rem">
                  <div className="ml-[0.3rem] h-[13rem] w-[13rem]">
                     {preview ? (
                        <img
                           src={preview}
                           alt="Preview"
                           className="h-[13rem] w-[13rem] rounded-3xl object-cover"
                        />
                     ) : (
                        <div className="flex h-[13rem] w-[13rem] items-center justify-center rounded-3xl bg-gray-300">
                           <span className="text-gray-500">
                              Foto Profil Tidak Tersedia
                           </span>
                        </div>
                     )}
                  </div>

                  <div className="mt-4 flex justify-center ">
                     <button
                        type="button"
                        className="  h-10 w-52 rounded-3xl border-2 border-[#B17C3F] bg-white text-[0.83rem] text-base text-[#B17C3F] duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
                        onClick={handleClick}
                     >
                        Ubah Foto Profil
                     </button>
                     <input
                        type="file"
                        id="profilePicture"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                     />
                  </div>
               </div>

               <div className="ml-10 flex w-full flex-col gap-8">
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Firstname
                     </span>
                     <input
                        type="text"
                        name="firtsname"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="Firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                     />
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[13rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Lastname
                     </span>
                     <input
                        type="text"
                        name="lastname"
                        className="ml-[3.5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="Lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                     />
                  </label>
                  <label className="flex pr-[4.8rem]">
                     <span className="mt-3 w-[10rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Birthday
                     </span>
                     <DatePicker
                        id="birthdate"
                        selected={birthday}
                        onChange={(date) => setBirthday(date)}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                        locale="id"
                        placeholderText="Birthday"
                        className="ml-[4.8rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                     />
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Gender
                     </span>
                     <select
                        id="gender"
                        value={selectedGender}
                        onChange={handleGenderChange}
                        placeholder="Choose Gender"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                     >
                        <option value={Gender.UNKNOWN} disabled hidden>
                           Choose Gender
                        </option>
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                     </select>
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Role
                     </span>
                     <select
                        id="role"
                        value={selectedRole}
                        onChange={handleRoleChange}
                        placeholder="Choose Role"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                     >
                        <option value={""} disabled hidden>
                           Choose Role
                        </option>
                        <option value={RoleSelect.PEMBELI}>Client</option>
                        <option value={RoleSelect.PENJUAL}>Seller</option>
                        <option value={RoleSelect.TUKANG}>Tukang</option>
                        <option value={RoleSelect.DESAINER}>Designer</option>
                     </select>
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        City
                     </span>
                     <input
                        type="text"
                        name="city"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="City"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              e.preventDefault();
                           }
                        }}
                     />
                  </label>
                  <div className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Job
                     </span>
                     <div className="w-full">
                        {sideJobs.map((sideJob, index) => (
                           <div key={index}>
                              <label className="flex">
                                 <input
                                    type="text"
                                    className="ml-[4rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                                    placeholder="Job"
                                    value={sideJob}
                                    onChange={(e) =>
                                       handleSideJobChange(
                                          index,
                                          e.target.value
                                       )
                                    }
                                    onKeyDown={(e) => {
                                       if (e.key === "Enter") {
                                          e.preventDefault();
                                       }
                                    }}
                                 />
                              </label>
                           </div>
                        ))}
                        <button
                           className="ml-[4rem] mt-2 text-base text-[#B17C3F]"
                           onClick={handleAddSideJob}
                        >
                           + Add Side Job (Optional)
                        </button>
                     </div>
                  </div>
                  {/* batas */}
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Email
                     </span>
                     <input
                        type="email"
                        name="email"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="Email"
                        value={selectedEmail}
                        onChange={(e) => setSelectedEmail(e.target.value)}
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              e.preventDefault();
                           }
                        }}
                     />
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Phone Number
                     </span>
                     <input
                        type="text"
                        name="phone"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="Phone Number"
                        value={selectedNumber}
                        onChange={(e) => setSelectedNumber(e.target.value)}
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              e.preventDefault();
                           }
                        }}
                     />
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Website
                     </span>
                     <input
                        type="text"
                        name="website"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="www.example.com"
                        value={selectedWebsite}
                        onChange={(e) => setSelectedWebsite(e.target.value)}
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              e.preventDefault();
                           }
                        }}
                     />
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Social Media
                     </span>
                     <input
                        type="text"
                        name="socialMedia"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="@example"
                        value={selectedSocialMedia}
                        onChange={(e) => setSelectedSocialMedia(e.target.value)}
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              e.preventDefault();
                           }
                        }}
                     />
                  </label>
                  <label className="flex">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Description
                     </span>

                     <textarea
                        id="description"
                        placeholder="Description"
                        className="ml-[5rem] mt-1 block h-[15rem] w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        maxLength={500}
                        value={selectedReview}
                        onChange={(e) => setSelectedReview(e.target.value)}
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              e.preventDefault();
                           }
                        }}
                     ></textarea>
                  </label>
               </div>
            </div>
            {/* div foto profil */}
            <div className="mt-[5rem] flex justify-end pr-[4rem]">
               <button
                  type="submit"
                  className=" h-11 w-32 rounded-xl border-2 border-[#B17C3F] bg-[#B17C3F] text-base text-white duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
               >
                  Simpan
               </button>
            </div>
         </form>
      </div>
   );
}

export function Account() {
   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Lakukan pengiriman file ke server dan penyimpanan ke database menggunakan Prisma di sini
   };
   return (
      <div>
         {/* <div className="relative rounded-full border-b-8 border-gray-300 ">
        <div className="absolute left-[10.35rem] top-0 w-[170px] rounded-full  border-b-8 border-[#B17C3F]"></div>
      </div> */}
         <div className="top-0 ml-[10.35rem] w-[170px] rounded-full  border-b-8 border-[#B17C3F]"></div>
         <div className="mt-10">
            <form onSubmit={handleSubmit} className="pl-[10.4rem] pr-[4rem]">
               <div className="flex flex-col gap-8">
                  <label className="flex w-full">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Username
                     </span>
                     <input
                        type="text"
                        name="username"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="username"
                     />
                  </label>
                  <label className="flex w-full">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Old Password
                     </span>
                     <input
                        type="password"
                        name="password"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="password"
                     />
                  </label>
                  <label className="flex w-full">
                     <span className="mt-3 w-[11rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        New Password
                     </span>
                     <input
                        type="pasword"
                        name="newPassword"
                        className="ml-[5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="new password"
                     />
                  </label>
                  <label className="flex w-full">
                     <span className="mt-3 w-[13rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
                        Confirm Password
                     </span>
                     <input
                        type="password"
                        name="confirmPassword"
                        className="ml-[3.5rem] mt-1 block w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        placeholder="confirm password"
                     />
                  </label>
               </div>
               <div className="mt-[5rem] flex justify-end">
                  <button
                     type="submit"
                     className=" h-11 w-32 rounded-xl border-2 border-[#B17C3F] bg-[#B17C3F] text-base text-white duration-300 ease-in-out hover:border-[#d9b285] hover:bg-[#d9b285] hover:text-white"
                  >
                     Simpan
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default function Settings({ data }: ProfileProps) {
   const [currentFunction, setCurrentFunction] = useState<
      "Profile" | "Account"
   >("Profile");
   const [activeButton, setActiveButton] = useState<"Profile" | "Account">(
      "Profile"
   );
   const handleFunctionChange = (functionName: "Profile" | "Account") => {
      setCurrentFunction(functionName);
      setActiveButton(functionName);
   };

   return (
      <div>
         <div className="ml-[12rem] mt-6 pr-[13rem]">
            <h1 className="text-[1.7rem] font-medium">Setting</h1>

            <div className="relative">
               <div className="mt-10">
                  <button
                     onClick={() => handleFunctionChange("Profile")}
                     className={`w-[170px] text-[1.4rem] ${
                        activeButton === "Profile"
                           ? "text-[#B17C3F]"
                           : "text-gray-400"
                     }`}
                  >
                     Profil
                  </button>
                  <button
                     onClick={() => handleFunctionChange("Account")}
                     className={`w-[170px] text-[1.4rem] ${
                        activeButton === "Account"
                           ? "text-[#B17C3F]"
                           : "text-gray-400"
                     }`}
                  >
                     Akun
                  </button>
                  <div className="rounded-full border-b-8 border-gray-300 "></div>
               </div>
               <div className="absolute top-[2.1rem]">
                  <Transition
                     show={currentFunction === "Profile"}
                     enter="transition-opacity duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="transition-opacity duration-300"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <Profile data={data}></Profile>
                  </Transition>
                  <Transition
                     show={currentFunction === "Account"}
                     enter="transition-opacity duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="transition-opacity duration-300"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <Account></Account>
                  </Transition>

                  <Footer></Footer>
               </div>
            </div>
         </div>
      </div>
   );
}
