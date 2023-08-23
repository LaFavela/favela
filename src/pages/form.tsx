import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import InputBox from "@/components/inpuBox";
import InputPopUp from "@/components/popUpInput";
import CloseIcon from "@mui/icons-material/Close";
import Dropdown from "@/components/dropdwon";
import { useAsyncError } from "react-router-dom";

export default function Form() {
  const [members, setMembers] = useState<{ name: string; job: string }[]>([]);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleJobChange = (event: any) => {
    setJob(event.target.value);
  };
  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newMember = { name, job, description };
    setMembers([...members, newMember]);
    setName("");
    setJob("");
    setDescription("");
  };

  const handleDelete = (index: number) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  const handleEdit = (index: number, editedMember: any) => {
    const updatedMembers = members.map((member, i) =>
      i === index ? editedMember : member
    );
    setMembers(updatedMembers);
  };

  const [modal, setModal] = useState(false);

  const openPopUp = () => {
    setModal(!modal);
  };

  // MEMBER SETTING

  // DETAIL PROJECT
  const [projects, setProjects] = useState<
    {
      institution: string;
      title: string;
      departement: string;
      dateFrom: string;
      dateUntil: string;
      information: string;
      image: string[];
    }[]
  >([]);
  const [institution, setInstitution] = useState("");
  const [title, setTitle] = useState("");
  const [departement, setDepartement] = useState("");
  const [information, setInformation] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateUntil, setDateUntil] = useState("");
  const [image, setImage] = useState<string[]>([]);

  const handleInstitutionChange = (event: any) => {
    setInstitution(event.target.value);
  };

  const handleInformationChange = (event: any) => {
    setInformation(event.target.value);
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDepartementChange = (event: any) => {
    setDepartement(event.target.value);
  };

  const handleDateFromChange = (event: any) => {
    setDateFrom(event.target.value);
  };

  const getSelectedYearFrom = () => {
    if (dateFrom) {
      const dateObject = new Date(dateFrom);
      // console.log(dateFrom)
      // console.log(dateObject)
      return dateObject.getFullYear();
    }
    return "";
  };

  const handleDateUntilChange = (event: any) => {
    setDateUntil(event.target.value);
  };

  const getSelectedYearUntil = () => {
    if (dateUntil) {
      const dateObject = new Date(dateUntil);
      // console.log(dateUntil)
      // console.log(dateObject)
      return dateObject.getFullYear();
    }
    return "";
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];

      for (let i = 0; i < files.length; i++) {
        if (newImages.length < 3) {
          newImages.push(URL.createObjectURL(files[i]));
        }
      }

      setImage((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = [...image]; // Create a copy of the images array
    updatedImages.splice(index, 1); // Remove the image at the specified index
    setImage(updatedImages); // Update the state with the modified array
  };

  const handleProjectSubmit = (event: any) => {
    event.preventDefault();
    const newProjects = {
      institution,
      title,
      departement,
      dateFrom,
      dateUntil,
      information,
      image: [...image],
    };
    setProjects([...projects, newProjects]);

    setInstitution("");
    setTitle("");
    setInformation("");
    setDepartement("");
    setDateFrom("");
    setDateUntil("");
    setImage([]);
  };

  const handleProjectDelete = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleProjectEdit = (index: number, editedProjects: any) => {
    const updatedProjects = projects.map((Projects, i) =>
      i === index ? editedProjects : Projects
    );
    setProjects(updatedProjects);
  };

  const [projectModal, setProjectModal] = useState(false);

  const openProjectPopUp = () => {
    setProjectModal(!projectModal);
    image.length = 0;
  };
  // DETAIL PROJECT
  //BIODATA
  const [biodata, setBiodata] = useState<
    {
      firstName: string;
      lastName: string;
      province: string;
      about: string;
      selectedCity: string;
    }[]
  >([]);

  console.log(biodata);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [province, setProvince] = useState("");
  const [about, setAbout] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // State to store the selected city

  const handleChangeFirstname = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: any) => {
    setLastName(event.target.value);
  };

  const handleChangeProvince = (event: any) => {
    setProvince(event);
  };

  const handleChangeAbout = (event: any) => {
    setAbout(event.target.value);
  };

  const handleDropdown = (city: any) => {
    setSelectedCity(city); // Update the selected city when the dropdown changes
  };

  const handleBiodataSubmit = (event: any) => {
    event.preventDefault();
    const newBiodata = {
      firstName,
      lastName,
      province,
      selectedCity,
      about,
    };

    setBiodata([...biodata, newBiodata]);
    setFirstName("");
    setLastName("");
    setProvince("");
    setSelectedCity("");
    setAbout("");
  };

  const [confirmModal, setConfirmModal] = useState(false);

  const openConfirmPopUp = () => {
    setConfirmModal(!confirmModal);
  };

  return (
    <div>
      <div>
        {modal && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="absolute bottom-0 left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/40">
              <div className="modal-content w-[553px] rounded-3xl bg-white">
                <div className="border-b-2 border-gold/60">
                  <h2 className="mx-8 my-4  text-[18px]">Detail Member</h2>
                </div>

                <form id="memberForm" onSubmit={handleSubmit}>
                  <div className="ml-14 py-5">
                    <InputPopUp
                      type="text"
                      title="nama"
                      value={name}
                      onChange={handleNameChange}
                      required
                    ></InputPopUp>
                    <InputPopUp
                      title="Job"
                      type="text"
                      value={job}
                      required
                      onChange={handleJobChange}
                    ></InputPopUp>
                    <label className="mt-4 gap-24 pr-14">
                      <span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
                        Additonal Information
                      </span>
                      <textarea
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Description"
                        className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        maxLength={500}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                          }
                        }}
                      ></textarea>
                    </label>
                  </div>
                  <div className="flex justify-end border-t-2 border-gold/60">
                    <button
                      type="submit"
                      className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
                    >
                      Save
                    </button>
                    <button
                      type="submit"
                      className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
                      onClick={openPopUp}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {projectModal && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="absolute bottom-0 left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/40">
              <div className="modal-content w-[553px] rounded-3xl bg-white">
                <div className="border-b-2 border-gold/60">
                  <h2 className="mx-8 my-4  text-[18px]">Detail Project</h2>
                </div>

                <form id="projectForm" onSubmit={handleProjectSubmit}>
                  <div className="ml-14 py-5">
                    <InputPopUp
                      type="text"
                      title="Institution"
                      value={institution}
                      onChange={handleInstitutionChange}
                      required
                    ></InputPopUp>
                    <InputPopUp
                      title="Title"
                      type="text"
                      value={title}
                      required
                      onChange={handleTitleChange}
                    ></InputPopUp>
                    <InputPopUp
                      title="From"
                      type="date"
                      value={dateFrom}
                      required
                      onChange={handleDateFromChange}
                    ></InputPopUp>
                    <InputPopUp
                      title="Until"
                      type="date"
                      value={dateUntil}
                      required
                      onChange={handleDateUntilChange}
                    ></InputPopUp>
                    <label className="mt-4 gap-24 pr-14">
                      <span className="mt-2 w-[120px] text-[10px]  text-[#B17C3F] ">
                        Additonal Information
                      </span>
                      <textarea
                        id="description"
                        value={information}
                        onChange={handleInformationChange}
                        placeholder="Description"
                        className=" mt-1 block w-[440px] h-[127px] rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                        maxLength={500}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                          }
                        }}
                      ></textarea>
                    </label>
                    <div>
                      <p className="mb-1 ml-[2px] text-[11px] text-gold">
                        Foto
                      </p>
                      <div className="flex gap-3">
                        <div
                          className="gap-3 flex  rounded-sm border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
                          onClick={handleImageClick}
                        >
                          {image.length > 0
                            ? image.map((imageUrl, index) => (
                                <div
                                  key={index}
                                  className="flex relative group"
                                >
                                  <div>
                                    <Image
                                      src={imageUrl}
                                      alt={`Selected Image ${index + 1}`}
                                      style={{
                                        maxWidth: "120px",
                                        maxHeight: "120px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                      width={120}
                                      height={120}
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                                      <CloseIcon
                                        className="text-white absolute top-2 right-2 cursor-pointer"
                                        onClick={() => handleImageDelete(index)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              ))
                            : ""}
                          {image.length < 3 ? (
                            <label
                              htmlFor="image-input"
                              className=" flex justify-center items-center rounded-md border-[3px] w-[100px] h-[100px] border-dashed border-[#e3d0ba] stroke-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F]"
                            >
                              <input
                                id="image-input"
                                type="file"
                                ref={inputRef}
                                onChange={handleChangeImage}
                                multiple
                                accept="image/*"
                                className="hidden"
                              />
                              <svg
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M40.5 23.445V38.6117C40.5 39.7609 40.0435 40.8631 39.2308 41.6758C38.4181 42.4884 37.3159 42.945 36.1667 42.945H29.6667M40.5 23.445C26.5423 23.445 18.6058 27.7458 14.3808 32.6382M40.5 23.445V20.195M29.6667 42.945H5.83333C4.68406 42.945 3.58186 42.4884 2.7692 41.6758C1.95655 40.8631 1.5 39.7609 1.5 38.6117V32.1117M29.6667 42.945C25.9747 36.9477 20.0748 33.9577 14.3808 32.6382M14.3808 32.6382C9.38017 31.4768 4.53983 31.6047 1.5 32.1117M1.5 32.1117V8.27832C1.5 7.12905 1.95655 6.02685 2.7692 5.21419C3.58186 4.40153 4.68406 3.94499 5.83333 3.94499H23.1667M36.1667 1.77832V8.27832M36.1667 8.27832V14.7783M36.1667 8.27832H42.6667M36.1667 8.27832H29.6667M13.4167 12.6117C12.3333 12.6117 10.1667 13.2617 10.1667 15.8617C10.1667 18.4617 12.3333 19.1117 13.4167 19.1117C14.5 19.1117 16.6667 18.4617 16.6667 15.8617C16.6667 13.2617 14.5 12.6117 13.4167 12.6117Z"
                                  // stroke="#B17C3F"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </label>
                          ) : (
                            <input
                              id="image-input"
                              type="file"
                              ref={inputRef}
                              onChange={handleChangeImage}
                              multiple
                              accept="image/*"
                              className="hidden"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end border-t-2 border-gold/60">
                    <button
                      type="submit"
                      className="my-3 mr-3 rounded-full border-[1px] border-gold bg-gold px-8 py-1 text-[13px] text-white hover:border-goldhov hover:bg-goldhov"
                    >
                      Save
                    </button>
                    <button
                      type="submit"
                      className="my-3 mr-14 rounded-full border-[1px] border-gold px-5 py-1 text-[13px] hover:border-red-400 hover:bg-red-400 hover:text-white"
                      onClick={openProjectPopUp}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {confirmModal && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="absolute bottom-0 left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/40">
              <div className="modal-content w-[553px] rounded-3xl bg-white">
                <div className="w-full rounded-t-3xl bg-[#FAB566]">
                  <p className="py-2 ml-7 font-semibold text-white">
                    Request as Constuctor
                  </p>
                </div>
                <div className="flex items-center justify-center h-[230px] ">
                  <p className="w-[322px] text-center">
                    This request may take 24 hours to confirm you as a
                    Constructor
                  </p>
                </div>
                <div className="pr-5 flex justify-end border-t-2">
                  <Link href={"./merchantProfile"}>
                    <button
                      onClick={openConfirmPopUp}
                      type="submit"
                      className="my-3 mr-3 rounded-full border-[1px] border-[#FAB566] bg-[#FAB566] px-8 py-1 text-[13px] text-white hover:border-[#FFD5A6] hover:bg-[#FFD5A6]"
                    >
                      Confirm
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container relative mx-auto mt-20 flex h-10 max-w-[1320px] justify-between ">
          <div className=" container relative max-w-[884px]  ">
            <p className="text-[20px] font-medium ml-1">Profile</p>
            <div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-7">
              <div className="ml-14 py-8">
                <p className="text-[15px] font-semibold text-gold">Biodata</p>
                <InputBox
                  form="biodata-Form"
                  type="text"
                  title="Firstname"
                  onChange={handleChangeFirstname}
                ></InputBox>
                <InputBox
                  form="biodata-Form"
                  type="text"
                  title="Lastname"
                  onChange={handleChangeLastName}
                ></InputBox>
                <Dropdown
                  form="biodata-Form"
                  styleClass="text-gold flex gap-[120px] mt-2 w-full pr-7"
                  styleClassTag="border-2 border-gold rounded-[7px] w-full"
                  title="Province"
                  data={[
                    { value: "Lombok Timur", label: "Lombok Timur" },
                    { value: "Mataram", label: "Mataram" },
                    { value: "Bima", label: "Bima" },
                    { value: "Dompu", label: "Dompu" },
                    { value: "Sumbawa", label: "Sumbawa" },
                  ]}
                  value={province}
                  placehoder="Select Province"
                  onChange={handleChangeProvince}
                ></Dropdown>
                <Dropdown
                  form="biodata-Form"
                  styleClass="text-gold flex gap-[157px] mt-2 w-full pr-7"
                  styleClassTag="border-2 border-gold rounded-[7px] w-full"
                  title="City"
                  data={[
                    { value: "Lombok Timur", label: "Lombok Timur" },
                    { value: "Mataram", label: "Mataram" },
                    { value: "Bima", label: "Bima" },
                    { value: "Dompu", label: "Dompu" },
                    { value: "Sumbawa", label: "Sumbawa" },
                  ]}
                  value={selectedCity}
                  placehoder="Select City"
                  onChange={handleDropdown}
                ></Dropdown>
                <label className="mt-5 flex gap-24 pr-14">
                  <span className="mt-3 w-[120px] text-base  text-[#B17C3F] ">
                    About
                  </span>
                  <textarea
                    form="biodata-Form"
                    id="description"
                    value={about}
                    onChange={handleChangeAbout}
                    className=" mt-1 block h-[95px] w-full rounded-md border border-[#B17C3F] bg-white px-3 py-2 text-[#B17C3F] placeholder-slate-400 shadow-sm focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] sm:text-sm"
                    maxLength={500}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                      }
                    }}
                  ></textarea>
                </label>
              </div>
            </div>

            {/* BATAS BIODATA */}

            <div className=" mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado">
              <div className="ml-14 mr-14 py-8 pb-14">
                <div className="mb-8 flex w-full justify-between">
                  <p className="text-[15px] font-semibold text-gold">Member</p>
                  <button onClick={openPopUp}>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.351807 10C0.351807 4.477 4.81366 0 10.318 0C15.8223 0 20.2842 4.477 20.2842 10C20.2842 15.523 15.8223 20 10.318 20C4.81366 20 0.351807 15.523 0.351807 10ZM10.318 2C8.20343 2 6.17548 2.84285 4.68026 4.34315C3.18505 5.84344 2.34504 7.87827 2.34504 10C2.34504 12.1217 3.18505 14.1566 4.68026 15.6569C6.17548 17.1571 8.20343 18 10.318 18C12.4325 18 14.4605 17.1571 15.9557 15.6569C17.4509 14.1566 18.2909 12.1217 18.2909 10C18.2909 7.87827 17.4509 5.84344 15.9557 4.34315C14.4605 2.84285 12.4325 2 10.318 2Z"
                        fill="#B17C3F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3146 5C11.3146 4.73478 11.2096 4.48043 11.0227 4.29289C10.8358 4.10536 10.5823 4 10.318 4C10.0536 4 9.80015 4.10536 9.61325 4.29289C9.42635 4.48043 9.32135 4.73478 9.32135 5V9H5.33487C5.07056 9 4.81706 9.10536 4.63016 9.29289C4.44326 9.48043 4.33826 9.73478 4.33826 10C4.33826 10.2652 4.44326 10.5196 4.63016 10.7071C4.81706 10.8946 5.07056 11 5.33487 11H9.32135V15C9.32135 15.2652 9.42635 15.5196 9.61325 15.7071C9.80015 15.8946 10.0536 16 10.318 16C10.5823 16 10.8358 15.8946 11.0227 15.7071C11.2096 15.5196 11.3146 15.2652 11.3146 15V11H15.3011C15.5654 11 15.8189 10.8946 16.0058 10.7071C16.1927 10.5196 16.2977 10.2652 16.2977 10C16.2977 9.73478 16.1927 9.48043 16.0058 9.29289C15.8189 9.10536 15.5654 9 15.3011 9H11.3146V5Z"
                        fill="#B17C3F"
                      />
                    </svg>
                  </button>
                </div>
                {members.map((member, index) => (
                  <div className="flex pb-10" key={index}>
                    <span>
                      <svg
                        width="53"
                        height="55"
                        viewBox="0 0 53 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.9375 54.875C4.9375 54.875 0.625 54.875 0.625 50.3125C0.625 45.75 4.9375 32.0625 26.5 32.0625C48.0625 32.0625 52.375 45.75 52.375 50.3125C52.375 54.875 48.0625 54.875 48.0625 54.875H4.9375ZM26.5 27.5C29.9312 27.5 33.2219 26.0579 35.6482 23.491C38.0744 20.9241 39.4375 17.4427 39.4375 13.8125C39.4375 10.1823 38.0744 6.70088 35.6482 4.13398C33.2219 1.56707 29.9312 0.125 26.5 0.125C23.0688 0.125 19.7781 1.56707 17.3518 4.13398C14.9256 6.70088 13.5625 10.1823 13.5625 13.8125C13.5625 17.4427 14.9256 20.9241 17.3518 23.491C19.7781 26.0579 23.0688 27.5 26.5 27.5Z"
                          fill="#B17C3F"
                        />
                      </svg>
                    </span>
                    <span className="ml-8 w-full ">
                      <div className="flex w-full  justify-between">
                        <p className="text-[17px] font-medium">{member.name}</p>

                        <div className="flex gap-2">
                          <button onClick={() => handleDelete(index)}>
                            <svg
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
                                fill="#B17C3F"
                              />
                            </svg>
                          </button>

                          <button onClick={() => handleEdit(index, member)}>
                            <svg
                              width="15"
                              height="16"
                              viewBox="0 0 15 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
                                stroke="#B17C3F"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p>{member.job}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BATAS MEMBER */}

            <div className=" mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado">
              <div className="ml-14 mr-14 py-8 pb-14">
                <div className="mb-8 flex w-full justify-between">
                  <p className="text-[15px] font-semibold text-gold">Project</p>
                  <button onClick={openProjectPopUp}>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.351807 10C0.351807 4.477 4.81366 0 10.318 0C15.8223 0 20.2842 4.477 20.2842 10C20.2842 15.523 15.8223 20 10.318 20C4.81366 20 0.351807 15.523 0.351807 10ZM10.318 2C8.20343 2 6.17548 2.84285 4.68026 4.34315C3.18505 5.84344 2.34504 7.87827 2.34504 10C2.34504 12.1217 3.18505 14.1566 4.68026 15.6569C6.17548 17.1571 8.20343 18 10.318 18C12.4325 18 14.4605 17.1571 15.9557 15.6569C17.4509 14.1566 18.2909 12.1217 18.2909 10C18.2909 7.87827 17.4509 5.84344 15.9557 4.34315C14.4605 2.84285 12.4325 2 10.318 2Z"
                        fill="#B17C3F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3146 5C11.3146 4.73478 11.2096 4.48043 11.0227 4.29289C10.8358 4.10536 10.5823 4 10.318 4C10.0536 4 9.80015 4.10536 9.61325 4.29289C9.42635 4.48043 9.32135 4.73478 9.32135 5V9H5.33487C5.07056 9 4.81706 9.10536 4.63016 9.29289C4.44326 9.48043 4.33826 9.73478 4.33826 10C4.33826 10.2652 4.44326 10.5196 4.63016 10.7071C4.81706 10.8946 5.07056 11 5.33487 11H9.32135V15C9.32135 15.2652 9.42635 15.5196 9.61325 15.7071C9.80015 15.8946 10.0536 16 10.318 16C10.5823 16 10.8358 15.8946 11.0227 15.7071C11.2096 15.5196 11.3146 15.2652 11.3146 15V11H15.3011C15.5654 11 15.8189 10.8946 16.0058 10.7071C16.1927 10.5196 16.2977 10.2652 16.2977 10C16.2977 9.73478 16.1927 9.48043 16.0058 9.29289C15.8189 9.10536 15.5654 9 15.3011 9H11.3146V5Z"
                        fill="#B17C3F"
                      />
                    </svg>
                  </button>
                </div>
                {projects.map((projects, index) => (
                  <div className="flex pb-10" key={index}>
                    <span>
                      <svg
                        width="53"
                        height="59"
                        viewBox="0 0 53 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.625 6.625H34.6075C33.4 3.29 30.2375 0.875 26.5 0.875C22.7625 0.875 19.6 3.29 18.3925 6.625H6.375C3.2125 6.625 0.625 9.2125 0.625 12.375V52.625C0.625 55.7875 3.2125 58.375 6.375 58.375H46.625C49.7875 58.375 52.375 55.7875 52.375 52.625V12.375C52.375 9.2125 49.7875 6.625 46.625 6.625ZM26.5 6.625C28.0812 6.625 29.375 7.91875 29.375 9.5C29.375 11.0813 28.0812 12.375 26.5 12.375C24.9188 12.375 23.625 11.0813 23.625 9.5C23.625 7.91875 24.9188 6.625 26.5 6.625ZM29.375 46.875H15C13.4187 46.875 12.125 45.5812 12.125 44C12.125 42.4188 13.4187 41.125 15 41.125H29.375C30.9562 41.125 32.25 42.4188 32.25 44C32.25 45.5812 30.9562 46.875 29.375 46.875ZM38 35.375H15C13.4187 35.375 12.125 34.0812 12.125 32.5C12.125 30.9188 13.4187 29.625 15 29.625H38C39.5812 29.625 40.875 30.9188 40.875 32.5C40.875 34.0812 39.5812 35.375 38 35.375ZM38 23.875H15C13.4187 23.875 12.125 22.5812 12.125 21C12.125 19.4188 13.4187 18.125 15 18.125H38C39.5812 18.125 40.875 19.4188 40.875 21C40.875 22.5812 39.5812 23.875 38 23.875Z"
                          fill="#B17C3F"
                        />
                      </svg>
                    </span>
                    <span className="ml-8 w-full ">
                      <div className="flex w-full  justify-between">
                        <p className="text-[17px] font-medium">
                          {projects.institution}
                        </p>

                        <div className="flex gap-2">
                          <button onClick={() => handleProjectDelete(index)}>
                            <svg
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.49561 0C4.23961 0 0.776855 3.46275 0.776855 7.71875C0.776855 11.9748 4.23961 15.4375 8.49561 15.4375C12.7516 15.4375 16.2144 11.9748 16.2144 7.71875C16.2144 3.46275 12.7516 0 8.49561 0ZM8.49561 1.1875C12.1098 1.1875 15.0269 4.10459 15.0269 7.71875C15.0269 11.3329 12.1098 14.25 8.49561 14.25C4.88145 14.25 1.96436 11.3329 1.96436 7.71875C1.96436 4.10459 4.88145 1.1875 8.49561 1.1875ZM4.93311 7.125V8.3125H12.0581V7.125H4.93311Z"
                                fill="#B17C3F"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => handleProjectEdit(index, projects)}
                          >
                            <svg
                              width="15"
                              height="16"
                              viewBox="0 0 15 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5477 2.0001C10.7175 1.79946 10.9275 1.63614 11.1644 1.52055C11.4013 1.40497 11.6598 1.33966 11.9235 1.32878C12.1872 1.31789 12.4503 1.36169 12.696 1.45736C12.9417 1.55303 13.1646 1.69848 13.3506 1.88445C13.5366 2.07041 13.6815 2.29281 13.7761 2.53746C13.8707 2.78211 13.9129 3.04366 13.9001 3.30542C13.8873 3.56718 13.8197 3.82342 13.7017 4.05781C13.5836 4.2922 13.4176 4.49959 13.2144 4.66677L4.2144 13.6668L0.547729 14.6668L1.54773 11.0001L10.5477 2.0001Z"
                                stroke="#B17C3F"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p>{projects.title}</p>
                      <p className="text-black/60">
                        {projects.dateFrom.substr(0, 0 + 4)} -
                        {projects.dateUntil.substr(0, 0 + 4) === "2023"
                          ? " Now"
                          : projects.dateUntil.substr(0, 0 + 4)}
                      </p>
                      {projects.image.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <Image src={item} alt="" height={54} width={54} />
                        </div>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pb-20 justify-end w-full flex">
              <form id="biodata-Form" onSubmit={handleBiodataSubmit}>
                <button
                  onClick={openConfirmPopUp}
                  type="submit"
                  className="bg-gold rounded-full py-3 px-7 text-white text-[15px] hover:bg-goldhov"
                >
                  Request
                </button>
              </form>
            </div>
          </div>

          <div className="container max-w-[400px]">
            <div className="mb-10 w-full rounded-3xl bg-white drop-shadow-landingShado mt-14">
              <div className="px-7 py-6">
                <p className="text-[17px] font-medium">Lorem Ipsum</p>
                <p className="text-[15px]">
                  Morbi lobortis aliquet nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Pellentesque maximus felis id
                  varius imperdiet. Donec condimentum bibendum tempus. Proin ac
                  massa non felis ultricies varius eget ut est. Aliquam
                  scelerisque velit in lorem pellentesque, a vulputate dolor
                  accumsan. Nulla tortor ipsum, placerat eget risus ut, sagittis
                  tincidunt lectus. Donec in dui erat. Duis eu risus tristique,
                  rhoncus erat et, iaculis elit. Mauris id suscipit libero, id
                  fringilla nisi. Duis a vestibulum est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
