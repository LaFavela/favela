import { useState } from "react";
import Footer from "@/components/footer";
import Map from "@/components/maps";

const sarana = ["Kolam Renang", "Lapangan Bulutangkis"];

export default function SellPropertyForm() {
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

  const handleImageDelete = (index: number) => {
    setInfoImg((prevImages: any[]) => {
      return prevImages.filter((imageInfo: any) => imageInfo.index !== index);
    });
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center ">
        <div className="mb-11 mt-[2.625rem] space-y-[2.4375rem]">
          {/* Tittle */}
          <p className="text-[2rem] font-medium ">Jual Properti</p>
          {/* Informasi Desain */}
          <div className="flex h-[48rem] w-[78.93rem] justify-center rounded-[25px] bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
            <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
              {/* Informasi Desain Tittle */}
              <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                Informasi Properti
              </p>
              {/* Nama Properti */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Nama Properti
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Nama Properti"
                  />
                </div>
              </div>
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
              {/* Deskripsi Properti */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Deskripsi Properti
                </p>
                <div>
                  <textarea
                    className="mt-[0.625rem] h-[14.9375rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] pt-[0.5rem] "
                    placeholder="Deskripsi Properti"
                  />
                </div>
              </div>
              {/* Foto Desain */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Foto Properti
                </p>
                <div className="flex w-[53.875rem] justify-between">
                  {infoImg.map((imageData, idx) => (
                    <div
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
                        <img
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
                    <div>
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
          <div className="flex h-[41rem] w-[78.93rem] justify-center rounded-[25px] bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
            <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
              {/* Detail Tittle */}
              <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                Detail
              </p>
              {/* Pengembang */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Pengembang
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Pengembang"
                  />
                </div>
              </div>
              {/* Sertifikat */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Sertifikat
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Sertifikat"
                  />
                </div>
              </div>
              {/* Tahun Selesai */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Tahun Selesai
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Tahun Selesai"
                  />
                </div>
              </div>
              {/* Listrik */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Listrik
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Pengembang"
                  />
                </div>
              </div>
              {/* Denah */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Denah
                </p>
                <div className="flex w-[53.875rem] justify-between">
                  {detailImg.map((imageData, idx) => (
                    <div
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
                        <img
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
                    <div>
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
            </div>
          </div>
          {/* Sarana */}
          <div className="flex h-max w-[78.93rem] justify-center rounded-[25px] bg-white pb-7 drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
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
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] border-[#b17c3f] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] bg-white pl-[1.25rem] "
                    placeholder="Kamar Tidur"
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
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Kamar Mandi"
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
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Luas Properti"
                  />
                </div>
              </div>
              {/* Sarana Lain */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
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
          {/* Harga */}
          <div className="flex h-[24rem] w-[78.93rem] justify-center rounded-[25px] bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
            <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
              {/* Harga Tittle */}
              <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                Harga
              </p>
              {/* Harga Jual*/}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Harga Jual
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Harga"
                  />
                </div>
              </div>
              {/* Harga Sewa Perbulan */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Harga Sewa Perbulan
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Harga"
                  />
                </div>
              </div>
              {/* Harga Sewa Pertahun*/}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Harga Sewa Pertahun
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Harga"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Lokasi */}
          <div className="flex h-[47rem] w-[78.93rem] justify-center rounded-[25px] bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
            <div className="mt-[2rem]  flex w-[67.625rem] flex-col space-y-[2.43rem]">
              {/* Lokasi Tittle */}
              <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">
                Lokasi
              </p>
              {/* Provinsi*/}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Provinsi
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Provinsi"
                  />
                </div>
              </div>
              {/* Kabupaten */}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Kabupaten/Kota
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Kabupaten/Kota"
                  />
                </div>
              </div>
              {/* Kecamatan*/}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Kecamatan
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Kecamatan"
                  />
                </div>
              </div>
              {/*Kode Pos*/}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Kode Pos
                </p>
                <div>
                  <input
                    className="mt-[0.625rem] h-[2.5rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] "
                    placeholder="Kode Pos"
                  />
                </div>
              </div>
              {/*Alamat*/}
              <div className="flex justify-between ">
                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">
                  Alamat
                </p>
                <div>
                  <textarea
                    className="mt-[0.625rem] h-[14.9375rem] w-[53.875rem] rounded-[7px] border-[1px] text-gold focus:border-[#B17C3F] focus:outline-none focus:ring-1 focus:ring-[#B17C3F] border-[#b17c3f] bg-white pl-[1.25rem] pt-[0.5rem] "
                    placeholder="Alamat"
                  />
                </div>
              </div>
              <div className="mt-14 h-[80vh] w-full overflow-hidden rounded-3xl ">
                <Map lat={-8.59194106934345} lng={116.08996926363294}></Map>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-end">
            <div className="space-x-[1.75rem]">
              <button className="h-[2.5rem] w-[7.3125rem] rounded-[7px] border-[1px] border-[#b17c3f] bg-[#ffffff] text-[0.875rem] font-normal text-[#d39854] hover:bg-[#f1f1f1]">
                Batal
              </button>
              <button className="h-[2.5rem] w-[7.3125rem] rounded-[7px] bg-[#B17C3F] text-[0.875rem] font-normal text-white hover:bg-[#c88f4d]">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
