import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import Footer from "@/components/footer";
import { Listbox, Transition } from "@headlessui/react";

const job = ["Front End Developer", "Data Analyst"];

const data = [
  {
    id: 1,
    img: "/assets/landing/Designer1.jpg",
    firstname: "Muhammad",
    lastname: "Dzulhi Raihan",
    gender: "Male",
    role: "Client",
    city: "Kabupaten Dompu",
    job: "Front End Developer",
    email: "dzulhiraihan@gmail.com",
    phone: "081392709800",
    website: "88qiuqiuSlot.com",
    socialMedia: "@dzulhiraihan",
    birthDay: "02/02/2003",
    review:
      "Saya adalah seorang mahasiswa semester 4 yang sedang menempuh kuliah di universias mataram jurusan teknik informatika",
  },
];

export function Profile() {
  registerLocale("id", id);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    // Ambil URL foto profil dari database atau sumber penyimpanan file
    const existingProfilePicture = data[0].img;
    setPreview(existingProfilePicture);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById("profilePicture");
    if (fileInput) {
      fileInput.click();
    }
  };
  const [selectedCity, setSelectedCity] = useState(data[0].city);
  const [selectedGender, setSelectedGender] = useState(data[0].gender);
  const [selectedRole, setSelectedRole] = useState(data[0].role);
  const [firstName, setFirstName] = useState(data[0].firstname);
  const [lastName, setLastName] = useState(data[0].lastname);
  const [selectedEmail, setSelectedEmail] = useState(data[0].email);
  const [selectedNumber, setSelectedNumber] = useState(data[0].phone);
  const [selectedWebsite, setSelectedWebsite] = useState(data[0].website);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(
    data[0].socialMedia
  );
  const [selectedReview, setSelectedReview] = useState(data[0].review);

  const [birthday, setBirthday] = useState<Date | null>(
    new Date(data[0].birthDay)
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      preview,
      firstName,
      lastName,
      birthday,
      selectedGender,
      selectedRole,
      selectedCity,
      sideJobs,
      selectedEmail,
      selectedNumber,
      selectedWebsite,
      selectedSocialMedia,
      selectedReview
    );
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const [sideJobs, setSideJobs] = useState<string[]>(job); // State untuk menyimpan daftar pekerjaan sampingan

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
      <div className="left-0 top-0 w-[170px] rounded-full border-b-8 border-[#B17C3F]"></div>
      <form onSubmit={handleSubmit} className="mt-10 w-full">
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
              <span className="mt-3 w-[10.5rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
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
                <option value="" disabled hidden>
                  Choose Gender
                </option>
                <option value="Laki-laki">Male</option>
                <option value="Perempuan">Female</option>
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
                <option value="" disabled hidden>
                  Choose Role
                </option>
                <option value="Laki-laki">Client</option>
                <option value="Perempuan">Seller</option>
                <option value="Laki-laki">Merchant</option>
                <option value="Perempuan">Designer</option>
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
              <span className="mt-3 w-[11.5rem] text-base font-medium text-[#B17C3F] after:ml-0.5 after:text-red-500">
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
                          handleSideJobChange(index, e.target.value)
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

export default function Settings() {
  const [currentFunction, setCurrentFunction] = useState<"Profile" | "Account">(
    "Profile"
  );
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
                activeButton === "Profile" ? "text-[#B17C3F]" : "text-gray-400"
              }`}
            >
              Profil
            </button>
            <button
              onClick={() => handleFunctionChange("Account")}
              className={`w-[170px] text-[1.4rem] ${
                activeButton === "Account" ? "text-[#B17C3F]" : "text-gray-400"
              }`}
            >
              Akun
            </button>
            <div className="rounded-full border-b-8 border-gray-300 "></div>
          </div>
          <div className="absolute top-[2.1rem] w-full">
            <Transition
              show={currentFunction === "Profile"}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Profile></Profile>
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
