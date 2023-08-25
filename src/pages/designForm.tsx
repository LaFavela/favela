import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Image from "next/image";

const sarana = ["Kolam Renang", "Lapangan Bulutangkis"];
const data = [
  {
    id: 1,
    designName: "Rumahku",
    description: "Rumah nyaman minimalis enak",
    fotoDesign: [
      "./assets/landing/Build1.jpg",
      "./assets/landing/Build2.jpg",
      "./assets/landing/Build3.jpg",
      "./assets/landing/Build4.jpg",
      "./assets/landing/Build5.jpg",
    ],
    type: "Rumah",
    file: "./assets/form/PRETES_PEMROGRAMAN_WEB_RAIHAN.pdf",
    denahDesign: [
      "./assets/landing/Build1.jpg",
      "./assets/landing/Build2.jpg",
      "./assets/landing/Build3.jpg",
      "./assets/landing/Build4.jpg",
      "./assets/landing/Build5.jpg",
    ],
    fitur: "Rumah ini bisa berubah menjadi robot",
    harga: 235000000,
    kamarTidur: 3,
    kamarMandi: 4,
    luas: 25.5,
  },
];

export default function DesignForm() {
  const [designName, setDesignName] = useState(data[0].designName);
  const [description, setDescription] = useState(data[0].description);
  const [fotoDesign,setFotoDesign] = useState(data[0].fotoDesign);
  const [type,setType] = useState(data[0].type);
  const [fitur, setFitur] = useState(data[0].fitur)
  const [harga, setHarga] = useState(data[0].harga)
  const [kamarTidur,setKamarTidur] = useState(data[0].kamarTidur);
  const [kamarMandi,setKamarMandi] = useState(data[0].kamarMandi);
  const [luas,setLuas] = useState(data[0].luas);
  
  const handleChange = (event: any) => {
    setType(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      designName,
      description,
      type,
      fitur,
      harga,
      kamarMandi,
      kamarTidur,
      luas,
      preview,
      infoImg);
  };
  

  
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setSelectedFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  useEffect(() => {
    // Ambil URL foto profil dari database atau sumber penyimpanan file
    const existingProfilePicture = data[0].file;
    setPreview(existingProfilePicture);
  }, []);
  
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      setSelectedFile(file);
    }
  };

  const [saranaLain, setSaranaLain] = useState<string[]>(sarana);

  const handleTambahLainnya = () => {
    setSaranaLain([...saranaLain, ""]);
  };

  const handleChangeSaranaLain = (index: number, value: string) => {
    const updatedSaranaLain = [...saranaLain];
    updatedSaranaLain[index] = value;
    setSaranaLain(updatedSaranaLain);
  };

  const handleHapusSaranaLain = (index: number) => {
    const updatedSaranaLain = [...saranaLain];
    updatedSaranaLain.splice(index, 1);
    setSaranaLain(updatedSaranaLain);
  };

  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(-1);

  const [infoImg, setInfoImg] = useState([] as any[]);
  const [imageInfoList, setInfoImageList] = useState([1, 2, 3, 4, 5]);
  const fileInfoChangeHandler = (event: any, index: any) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      let imageInfoData: any;
      if (onLoadEvent.target) {
        imageInfoData = { index: index, src: onLoadEvent.target.result };
      }

      setInfoImg((prevImages: any[]) => {
        if (prevImages.length < 5) {
          return [...prevImages, imageInfoData];
        } else {
          return prevImages; // Jumlah foto sudah mencapai batas maksimum, tidak menambahkan gambar baru
        }
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleImageDelete = (index: number) => {
    setInfoImg((prevImages: any[]) => {
      return prevImages.filter((imageInfo: any) => imageInfo.index !== index);
    });
  };

  const [detailImg, setDetailImg] = useState([] as any[]);
  const [imageDetailList, setDetailImageList] = useState([1, 2, 3, 4, 5]);
  const fileDetailChangeHandler = (event: any, index: any) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      let imageDetailData: any;
      if (onLoadEvent.target) {
        imageDetailData = { index: index, src: onLoadEvent.target.result };
      }

      setDetailImg((prevImages: any[]) => {
        if (prevImages.length < 5) {
          return [...prevImages, imageDetailData];
        } else {
          return prevImages; // Jumlah foto sudah mencapai batas maksimum, tidak menambahkan gambar baru
        }
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const handleDesignDelete = (index: number) => {
    setDetailImg((prevImages: any[]) => {
      return prevImages.filter((imageInfo: any) => imageInfo.index !== index);
    });
  };

  
  

  return (
    <div>
      <div className="flex justify-center ">
        <form onSubmit={handleSubmit}>
          <div className="mb-11 mt-[2.625rem] space-y-[2.4375rem]">
            {/* Tittle */}
            <p className="text-[2rem] font-medium ">Jual Design</p>
            {/* Informasi Desain */}
            <div className="flex h-[44.06rem] w-[78.93rem] justify-center rounded-[25px] bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
              <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
                {/* Informasi Desain Tittle */}
                <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                  Informasi Desain
                </p>
                {/* Nama Desain */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Nama Desain
                  </p>
                  <div>
                    <input
                      id="nama_desain"
                      name="nama_desain"
                      value={designName}
                      onChange={(e) => setDesignName(e.target.value)}
                      className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                      placeholder="Nama Desain"
                    />
                  </div>
                </div>
                {/* Deskripsi Desain */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Deskripsi Desain
                  </p>
                  <div>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-[0.625rem] h-[14.9375rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] pt-[0.5rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                      placeholder="Deskripsi Desain"
                    />
                  </div>
                </div>
                {/* Foto Desain */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Foto Desain
                  </p>
                  <div className="flex w-[53.875rem] justify-between">
                    {infoImg.map((imageData, idx) => (
                      <div
                      key={idx}
                        className="relative"
                        onMouseEnter={() => {
                          setHover(true);
                          setIndex(idx);  
                        }}
                        onMouseLeave={() => {
                          setHover(false);
                          setIndex(-1);
                        }}
                      >
                        <div className="relative">
                          <div className="  absolute h-full w-full rounded-xl hover:bg-[#0000007c]"></div>
                            <Image
                              width={150}
                              height={150}
                              key={imageData.index}
                              src={imageData.src}
                              alt={"Foto ${imageData.index+1}"}
                              className=" h-[9.375rem] w-[9.375rem] rounded-lg"
                            />
                        </div>
                        {hover && index === idx ? (
                          <button
                            className="absolute right-2 top-2"
                            onClick={(e) => {
                              e.preventDefault();
                              handleImageDelete(imageData.index);
                              imageInfoList.unshift(1);
                              console.log(imageDetailList);
                            }}
                          >
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 0C6.2 0 0 6.2 0 14C0 21.8 6.2 28 14 28C21.8 28 28 21.8 28 14C28 6.2 21.8 0 14 0ZM19.4 21L14 15.6L8.6 21L7 19.4L12.4 14L7 8.6L8.6 7L14 12.4L19.4 7L21 8.6L15.6 14L21 19.4L19.4 21Z"
                                fill="#DF3D3D"
                              />
                            </svg>
                          </button>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ))}
                    {imageInfoList.map((index) => (
                      <div key={index}>
                        <div>
                          <label
                            key={index}
                            className="flex h-[9.375rem] w-[9.375rem] cursor-pointer flex-col items-center rounded-lg border-4 border-dashed border-[#e3d0ba] stroke-[#e3d0ba] px-4 py-6 font-medium tracking-wide text-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F] hover:text-[#B17C3F]"
                          >
                            <svg
                              width="78"
                              height="78"
                              viewBox="0 0 78 78"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M68.25 39V61.75C68.25 63.4739 67.5652 65.1272 66.3462 66.3462C65.1272 67.5652 63.4739 68.25 61.75 68.25H52M68.25 39C47.3135 39 35.4087 45.4513 29.0712 52.7898M68.25 39V34.125M52 68.25H16.25C14.5261 68.25 12.8728 67.5652 11.6538 66.3462C10.4348 65.1272 9.75 63.4739 9.75 61.75V52M52 68.25C46.462 59.254 37.6122 54.769 29.0712 52.7898M29.0712 52.7898C21.5702 51.0478 14.3097 51.2395 9.75 52M9.75 52V16.25C9.75 14.5261 10.4348 12.8728 11.6538 11.6538C12.8728 10.4348 14.5261 9.75 16.25 9.75H42.25M61.75 6.5V16.25M61.75 16.25V26M61.75 16.25H71.5M61.75 16.25H52M27.625 22.75C26 22.75 22.75 23.725 22.75 27.625C22.75 31.525 26 32.5 27.625 32.5C29.25 32.5 32.5 31.525 32.5 27.625C32.5 23.725 29.25 22.75 27.625 22.75Z"
                                stroke-opacity="1"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span className="mt-1 leading-normal">
                              Foto {index}
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(event) => {
                                fileInfoChangeHandler(event, index);
                                imageInfoList.shift();
                  
                              }}
                            
                               />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Detail */}
            <div className="flex h-[55rem] w-[78.93rem] justify-center rounded-[25px] bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
              <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
                {/* Detail Tittle */}
                <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                  Detail
                </p>
                {/* Tipe Properti */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Tipe Properti
                  </p>
                  <div>
                    <select
                      id="type"
                      placeholder="Choose Type"
                      className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F]"
                      onChange={handleChange}
                      value={type}
                    >
                      <option value="" hidden>
                        Choose Type
                      </option>
                      <option value="Rumah">Rumah</option>
                      <option value="Kondomonium">Kondomonium</option>
                      <option value="Villa">Villa</option>
                      <option value="Tanah">Tanah</option>
                    </select>
                  </div>
                </div>
                {/* Blude Print */}
                <div className="flex justify-between">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f]">
                    File Blue Print
                  </p>
                  <div>
                    <label
                      className={`flex h-[9.375rem] w-[53.875rem] cursor-pointer flex-col items-center rounded-lg border-4 border-dashed border-[#e3d0ba] px-4 py-6 font-medium tracking-wide text-[#e3d0ba] hover:border-[#B17C3F] ${
                        selectedFile ? "border-gold" : " "
                      }`}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      {selectedFile ? (
                        <div className="text-gold">{preview}</div>
                      ) : (
                        <>
                          <svg
                            width="61"
                            height="82"
                            viewBox="0 0 61 82"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.7923 18.7188C15.9386 18.7188 14.1607 19.4552 12.8499 20.766C11.5391 22.0768 10.8027 23.8546 10.8027 25.7083V61.2917C10.8027 63.1454 11.5391 64.9232 12.8499 66.2341C14.1607 67.5449 15.9386 68.2812 17.7923 68.2812H43.209C45.0627 68.2812 46.8406 67.5449 48.1514 66.2341C49.4622 64.9232 50.1986 63.1454 50.1986 61.2917V33.252C50.1986 32.2836 49.8834 31.3432 49.2988 30.5705L41.6789 20.4852C41.2643 19.9365 40.7281 19.4914 40.1125 19.1849C39.4968 18.8784 38.8185 18.7188 38.1307 18.7188H17.7923ZM14.6152 25.7083C14.6152 23.9546 16.0386 22.5312 17.7923 22.5312H36.2194V33.707C36.2194 34.7592 37.0734 35.6132 38.1256 35.6132H46.3861V61.2917C46.3861 63.0454 44.9627 64.4688 43.209 64.4688H17.7923C16.0386 64.4688 14.6152 63.0454 14.6152 61.2917V25.7083Z"
                              fill="#B17C3F"
                            />
                          </svg>
                          <span className="mt-1 leading-normal text-[#B17C3F]">
                            Click or Drag a File to This Area
                          </span>
                        </>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileSelect}
                      />
                    </label>
                  </div>
                </div>
                {/* Denah Desain */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Denah Desain
                  </p>
                  <div className="flex w-[53.875rem] justify-between">
                    {detailImg.map((imageData, idx) => (
                      <div
                      key={idx}
                        className="relative"
                        onMouseEnter={() => {
                          setHover(true);
                          setIndex(idx);
                        }}
                        onMouseLeave={() => {
                          setHover(false);
                          setIndex(-1);
                        }}
                      >
                        <div className="relative">
                          <div className="  absolute h-full w-full rounded-xl hover:bg-[#0000007c]"></div>
                          <Image
                            key={imageData.index}
                            src={imageData.src}
                            height={150}
                            width={150}
                            alt={"Foto ${imageData.index+1}"}
                            className=" h-[9.375rem] w-[9.375rem] rounded-lg"
                          />
                        </div>
                        {hover && index === idx ? (
                          <button
                            className="absolute right-2 top-2"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDesignDelete(imageData.index);
                              imageDetailList.unshift(1);
                              console.log(imageDetailList);
                            }}
                          >
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 0C6.2 0 0 6.2 0 14C0 21.8 6.2 28 14 28C21.8 28 28 21.8 28 14C28 6.2 21.8 0 14 0ZM19.4 21L14 15.6L8.6 21L7 19.4L12.4 14L7 8.6L8.6 7L14 12.4L19.4 7L21 8.6L15.6 14L21 19.4L19.4 21Z"
                                fill="#DF3D3D"
                              />
                            </svg>
                          </button>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ))}
                    {imageDetailList.map((index) => (
                      <div key={index}>
                        <div>
                          <label
                            key={index}
                            className="flex h-[9.375rem] w-[9.375rem] cursor-pointer flex-col items-center rounded-lg border-4 border-dashed border-[#e3d0ba] stroke-[#e3d0ba] px-4 py-6 font-medium tracking-wide text-[#e3d0ba] hover:border-[#B17C3F] hover:stroke-[#B17C3F] hover:text-[#B17C3F]"
                          >
                            <svg
                              width="78"
                              height="78"
                              viewBox="0 0 78 78"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M68.25 39V61.75C68.25 63.4739 67.5652 65.1272 66.3462 66.3462C65.1272 67.5652 63.4739 68.25 61.75 68.25H52M68.25 39C47.3135 39 35.4087 45.4513 29.0712 52.7898M68.25 39V34.125M52 68.25H16.25C14.5261 68.25 12.8728 67.5652 11.6538 66.3462C10.4348 65.1272 9.75 63.4739 9.75 61.75V52M52 68.25C46.462 59.254 37.6122 54.769 29.0712 52.7898M29.0712 52.7898C21.5702 51.0478 14.3097 51.2395 9.75 52M9.75 52V16.25C9.75 14.5261 10.4348 12.8728 11.6538 11.6538C12.8728 10.4348 14.5261 9.75 16.25 9.75H42.25M61.75 6.5V16.25M61.75 16.25V26M61.75 16.25H71.5M61.75 16.25H52M27.625 22.75C26 22.75 22.75 23.725 22.75 27.625C22.75 31.525 26 32.5 27.625 32.5C29.25 32.5 32.5 31.525 32.5 27.625C32.5 23.725 29.25 22.75 27.625 22.75Z"
                                stroke-opacity="1"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span className="mt-1 leading-normal">
                              Foto {index}
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(event) => {
                                fileDetailChangeHandler(event, index);
                                imageDetailList.shift();
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Deskripsi Fitur */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Deskripsi Fitur
                  </p>
                  <div>
                    <textarea
                      className="mt-[0.625rem] h-[14.9375rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] pt-[0.5rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                      placeholder="Deskripsi Fitur"
                      value={fitur}
                      onChange={(e) => setFitur(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Harga */}
            <div className="flex h-[11.9375rem] w-[78.93rem] justify-center rounded-[25px] bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
              <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
                {/* Harga Tittle */}
                <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                  Harga
                </p>
                {/* Harga */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Harga
                  </p>
                  <div>
                    <input
                      className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                      placeholder="Harga"
                      value={harga}
                      onChange={(e:any) => setHarga(e.target.value)}

                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Sarana */}
            <div className=" flex h-max w-[78.93rem] justify-center rounded-[25px] bg-white pb-5 drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
              <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
                {/* Sarana Tittle */}
                <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                  Sarana & Prasarana
                </p>
                {/* Kamar Tidur */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Jumlah Kamar Tidur
                  </p>
                  <div>
                    <input
                      type="number"
                      className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                      placeholder="Kamar Tidur"
                      value={kamarTidur}
                      onChange={(e:any) => setKamarTidur(e.target.value)}
                    />
                  </div>
                </div>
                {/* Kamar Mandi */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Jumlah Kamar Mandi
                  </p>
                  <div>
                    <input
                      type="number"
                      className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                      placeholder="Kamar Mandi"
                      value={kamarMandi}
                      onChange={(e:any) => setKamarMandi(e.target.value)}
                    />
                  </div>
                </div>
                {/* Luas Properti */}
                <div className="flex justify-between ">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                    Luas Properti
                  </p>
                  <div>
                    <input
                      className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-white pl-[1.25rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                      placeholder="Luas Properti"
                      value={luas}
                      onChange={(e:any) => setLuas(e.target.value)}
                    />
                  </div>
                </div>
                {/* Sarana Lain */}
                <div className="flex justify-between">
                  <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f]">
                    Lainnya
                  </p>
                  <div className="flex flex-col">
                    {saranaLain.map((sarana, index) => (
                      <input
                        key={index}
                        className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-gold pl-[1.25rem] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] "
                        placeholder="Sarana Lain"
                        value={sarana}
                        onChange={(e) =>
                          handleChangeSaranaLain(index, e.target.value)
                        }
                      />
                    ))}
                    <div className="flex w-full justify-between">
                      <button
                        className="mt-1 text-[#b17c3f]"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTambahLainnya();
                        }}
                      >
                        + Tambah Lainnya (optional)
                      </button>
                      <button
                        className="mt-1 text-[#b17c3f]"
                        onClick={(e) => {
                          e.preventDefault();
                          handleHapusSaranaLain(index);
                        }}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-end">
              <div className="space-x-[1.75rem]">
                <button
                  type="submit"
                  value="kirim"
                  onSubmit={handleSubmit}
                  className="h-[2.5rem] w-[7.3125rem] rounded-[7px] bg-[#B17C3F] text-[0.875rem] font-normal text-white hover:bg-[#c88f4d]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
