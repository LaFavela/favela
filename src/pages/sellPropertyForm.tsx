import {useState} from "react";
import Footer from '@/components/footer';
import Map from "@/components/maps";

export default function SellPropertyForm() {
    const [images, setImages] = useState([])
    const fileChangeHandler = (event, index) =>{
        const reader = new FileReader();
        reader.onload = function (onLoadEvent) {
            const imageData = { index: index, src: onLoadEvent.target.result };
            setImages((prevImages) => {
            if (prevImages.length < 5) {
                return [...prevImages, imageData];
            } else {
                return prevImages; // Jumlah foto sudah mencapai batas maksimum, tidak menambahkan gambar baru
            }
            });
        }
        reader.readAsDataURL(event.target.files[0])
    }
    return (
        <div>
            <div className="flex justify-center ">
                <div className="mt-[2.625rem] space-y-[2.4375rem] mb-11">
                    {/* Tittle */}
                    <p className = "text-[2rem] font-medium ">Jual Properti</p>
                    {/* Informasi Desain */}
                    <div className="flex justify-center w-[78.93rem] h-[48rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                        <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                            {/* Informasi Desain Tittle */}
                            <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Informasi Properti</p>
                            {/* Nama Properti */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Nama Properti</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Nama Properti" />
                                </div>
                            </div>
                            {/* Tipe Properti */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Tipe Properti</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Tipe Properti" />
                                </div>
                            </div>
                            {/* Deskripsi Properti */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Deskripsi Properti</p>
                                <div>
                                    <textarea className="pt-[0.5rem] bg-white w-[53.875rem] h-[14.9375rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Deskripsi Properti" />
                                </div>
                            </div>
                            {/* Foto Desain */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Foto Properti</p>                                            
                                <div className="flex justify-between w-[53.875rem]">
                                    {images.map((imageData) => (
                                        <img className = "z-10 " key = {imageData.index} src={imageData.src} alt={'Foto ${imageData.index+1}'} className="w-[9.375rem] h-[9.375rem] rounded-lg" />
                                    ))}   
                                    {[1,2,3,4,5].map((index) => (<div>
                                        <div>
                                            <label key={index} className="stroke-[#e3d0ba] hover:stroke-[#B17C3F] w-[9.375rem] font-medium text-[#e3d0ba] h-[9.375rem] flex flex-col items-center px-4 py-6 rounded-lg tracking-wide border-dashed border-4 border-[#e3d0ba] cursor-pointer hover:border-[#B17C3F] hover:text-[#B17C3F]">
                                            <svg 
                                                width="78" 
                                                height="78" 
                                                viewBox="0 0 78 78" 
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M68.25 39V61.75C68.25 63.4739 67.5652 65.1272 66.3462 66.3462C65.1272 67.5652 63.4739 68.25 61.75 68.25H52M68.25 39C47.3135 39 35.4087 45.4513 29.0712 52.7898M68.25 39V34.125M52 68.25H16.25C14.5261 68.25 12.8728 67.5652 11.6538 66.3462C10.4348 65.1272 9.75 63.4739 9.75 61.75V52M52 68.25C46.462 59.254 37.6122 54.769 29.0712 52.7898M29.0712 52.7898C21.5702 51.0478 14.3097 51.2395 9.75 52M9.75 52V16.25C9.75 14.5261 10.4348 12.8728 11.6538 11.6538C12.8728 10.4348 14.5261 9.75 16.25 9.75H42.25M61.75 6.5V16.25M61.75 16.25V26M61.75 16.25H71.5M61.75 16.25H52M27.625 22.75C26 22.75 22.75 23.725 22.75 27.625C22.75 31.525 26 32.5 27.625 32.5C29.25 32.5 32.5 31.525 32.5 27.625C32.5 23.725 29.25 22.75 27.625 22.75Z" 
                                                    stroke-opacity="1" 
                                                    stroke-width="5" 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round"/>
                                            </svg>
                                            <span className="mt-1 leading-normal">Foto {index}</span>
                                            <input type="file" accept="image/*" className="hidden" onChange={(event) => fileChangeHandler(event, index)}/>
                                            </label>
                                        </div>
                                    </div> ))}     
                                </div>                                              
                            </div>
                        </div>
                    </div>
                    {/* Detail */}
                    <div className="flex justify-center w-[78.93rem] h-[41rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                    <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                        {/* Detail Tittle */}
                        <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Detail</p>
                        {/* Pengembang */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Pengembang</p>
                            <div>
                                <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Pengembang" />
                            </div>
                        </div>
                        {/* Sertifikat */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Sertifikat</p>
                            <div>
                                <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Sertifikat" />
                            </div>
                        </div>
                        {/* Tahun Selesai */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Tahun Selesai</p>
                            <div>
                                <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Tahun Selesai" />
                            </div>
                        </div>
                        {/* Listrik */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Listrik</p>
                            <div>
                                <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Pengembang" />
                            </div>
                        </div>
                        {/* Denah */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Denah</p>                                            
                            <div className="flex justify-between w-[53.875rem]">
                                {images.map((imageData) => (
                                    <img className = "z-10 " key = {imageData.index} src={imageData.src} alt={'Foto ${imageData.index+1}'} className="w-[9.375rem] h-[9.375rem] rounded-lg" />
                                ))}   
                                {[1,2,3,4,5].map((index) => (<div>
                                    <div>
                                        <label key={index} className="stroke-[#e3d0ba] hover:stroke-[#B17C3F] w-[9.375rem] font-medium text-[#e3d0ba] h-[9.375rem] flex flex-col items-center px-4 py-6 rounded-lg tracking-wide border-dashed border-4 border-[#e3d0ba] cursor-pointer hover:border-[#B17C3F] hover:text-[#B17C3F]">
                                        <svg 
                                            width="78" 
                                            height="78" 
                                            viewBox="0 0 78 78" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M68.25 39V61.75C68.25 63.4739 67.5652 65.1272 66.3462 66.3462C65.1272 67.5652 63.4739 68.25 61.75 68.25H52M68.25 39C47.3135 39 35.4087 45.4513 29.0712 52.7898M68.25 39V34.125M52 68.25H16.25C14.5261 68.25 12.8728 67.5652 11.6538 66.3462C10.4348 65.1272 9.75 63.4739 9.75 61.75V52M52 68.25C46.462 59.254 37.6122 54.769 29.0712 52.7898M29.0712 52.7898C21.5702 51.0478 14.3097 51.2395 9.75 52M9.75 52V16.25C9.75 14.5261 10.4348 12.8728 11.6538 11.6538C12.8728 10.4348 14.5261 9.75 16.25 9.75H42.25M61.75 6.5V16.25M61.75 16.25V26M61.75 16.25H71.5M61.75 16.25H52M27.625 22.75C26 22.75 22.75 23.725 22.75 27.625C22.75 31.525 26 32.5 27.625 32.5C29.25 32.5 32.5 31.525 32.5 27.625C32.5 23.725 29.25 22.75 27.625 22.75Z" 
                                                stroke-opacity="1" 
                                                stroke-width="5" 
                                                stroke-linecap="round" 
                                                stroke-linejoin="round"/>
                                        </svg>
                                        <span className="mt-1 leading-normal">Foto {index}</span>
                                        <input type="file" accept="image/*" className="hidden" onChange={(event) => fileChangeHandler(event, index)}/>
                                        </label>
                                    </div>
                                </div> ))}     
                            </div>                                              
                        </div>
                    </div>
                    </div>
                    {/* Sarana */}
                    <div className="flex justify-center w-[78.93rem] h-[31rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                        <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                            {/* Sarana Tittle */}
                            <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Sarana & Prasarana</p>
                            {/* Kamar Tidur */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Jumlah Kamar Tidur</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Kamar Tidur" />
                                </div>
                            </div>
                            {/* Kamar Mandi */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Jumlah Kamar Mandi</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Kamar Mandi" />
                                </div>
                            </div>
                            {/* Luas Properti */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Luas Properti</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Luas Properti" />
                                </div>
                            </div>
                            {/* Sarana Lain */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Lainnya</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Sarana Lain" />
                                    <p className="mt-1 text-[#b17c3f]">+ Tambah Lainnya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Harga */}
                    <div className="flex justify-center w-[78.93rem] h-[24rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                        <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                            {/* Harga Tittle */}
                            <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Harga</p>
                            {/* Harga Jual*/}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Harga Jual</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Harga" />
                                </div>
                            </div>
                            {/* Harga Sewa Perbulan */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Harga Sewa Perbulan</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Harga" />
                                </div>
                            </div>
                            {/* Harga Sewa Pertahun*/}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Harga Sewa Pertahun</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Harga" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Lokasi */}
                    <div className="flex justify-center w-[78.93rem] h-[47rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                        <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                            {/* Lokasi Tittle */}
                            <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Lokasi</p>
                            {/* Provinsi*/}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Provinsi</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Provinsi" />
                                </div>
                            </div>
                            {/* Kabupaten */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Kabupaten/Kota</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Kabupaten/Kota" />
                                </div>
                            </div>
                            {/* Kecamatan*/}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Kecamatan</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Kecamatan" />
                                </div>
                            </div>
                            {/*Kode Pos*/}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Kode Pos</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Kode Pos" />
                                </div>
                            </div>
                            {/*Alamat*/}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Alamat</p>
                                <div>
                                <textarea className="pt-[0.5rem] bg-white w-[53.875rem] h-[14.9375rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Alamat" />
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-3xl w-full h-[80vh] mt-14 ">
                                <Map lat={-8.59194106934345} lng={116.08996926363294}></Map>
                            </div>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="flex justify-end">
                        <div className="space-x-[1.75rem]">
                            <button className="w-[7.3125rem] h-[2.5rem] bg-[#ffffff] hover:bg-[#f1f1f1] border-[#b17c3f] border-[1px] text-[#d39854] text-[0.875rem] rounded-[7px] font-normal">Batal</button>
                            <button className="w-[7.3125rem] h-[2.5rem] bg-[#B17C3F] hover:bg-[#c88f4d] text-white text-[0.875rem] rounded-[7px] font-normal">Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}