import {useState} from "react";
import Navbar from './navbar';
import Footer from './footer';
export default function designForm() {
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
            <Navbar></Navbar>
            <div className="flex justify-center ">
                <div className="mt-[2.625rem] space-y-[2.4375rem] mb-11">
                    {/* Tittle */}
                    <p className = "text-[2rem] font-medium ">Jual Design</p>
                    {/* Informasi Desain */}
                    <div className="flex justify-center w-[78.93rem] h-[44.06rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                        <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                            {/* Informasi Desain Tittle */}
                            <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Informasi Desain</p>
                            {/* Nama Desain */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Nama Desain</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Nama Desain" />
                                </div>
                            </div>
                            {/* Deskripsi Desain */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Deskripsi Desain</p>
                                <div>
                                    <textarea className="pt-[0.5rem] bg-white w-[53.875rem] h-[14.9375rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Deskripsi Desain" />
                                </div>
                            </div>
                            {/* Foto Desain */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Foto Desain</p>                                            
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
                    <div className="flex justify-center w-[78.93rem] h-[55rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                    <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                        {/* Detail Tittle */}
                        <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Detail</p>
                        {/* Tipe Properti */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Tipe Properti</p>
                            <div>
                                <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Tipe Properti" />
                            </div>
                        </div>
                        {/* Blude Print */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">File Blue Print</p>
                            <div>
                                <label className="w-[53.875rem] font-medium text-[#e3d0ba] h-[9.375rem] flex flex-col items-center px-4 py-6 rounded-lg tracking-wide border-dashed border-4 border-[#e3d0ba] hover:border-[#B17C3F] cursor-pointer">
                                <svg 
                                    width="61" 
                                    height="82" 
                                    viewBox="0 0 61 82" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.0312 46.0416C40.0312 45.5361 39.8304 45.0512 39.4729 44.6937C39.1154 44.3362 38.6306 44.1354 38.125 44.1354H22.875C22.3694 44.1354 21.8846 44.3362 21.5271 44.6937C21.1696 45.0512 20.9688 45.5361 20.9688 46.0416C20.9688 46.5472 21.1696 47.0321 21.5271 47.3895C21.8846 47.747 22.3694 47.9479 22.875 47.9479H38.125C38.6306 47.9479 39.1154 47.747 39.4729 47.3895C39.8304 47.0321 40.0312 46.5472 40.0312 46.0416ZM40.0312 56.2083C40.0312 55.7027 39.8304 55.2179 39.4729 54.8604C39.1154 54.5029 38.6306 54.302 38.125 54.302H22.875C22.3694 54.302 21.8846 54.5029 21.5271 54.8604C21.1696 55.2179 20.9688 55.7027 20.9688 56.2083C20.9688 56.7139 21.1696 57.1987 21.5271 57.5562C21.8846 57.9137 22.3694 58.1145 22.875 58.1145H38.125C38.6306 58.1145 39.1154 57.9137 39.4729 57.5562C39.8304 57.1987 40.0312 56.7139 40.0312 56.2083Z" fill="#B17C3F"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7923 18.7188C15.9386 18.7188 14.1607 19.4552 12.8499 20.766C11.5391 22.0768 10.8027 23.8546 10.8027 25.7083V61.2917C10.8027 63.1454 11.5391 64.9232 12.8499 66.2341C14.1607 67.5449 15.9386 68.2812 17.7923 68.2812H43.209C45.0627 68.2812 46.8406 67.5449 48.1514 66.2341C49.4622 64.9232 50.1986 63.1454 50.1986 61.2917V33.252C50.1986 32.2836 49.8834 31.3432 49.2988 30.5705L41.6789 20.4852C41.2643 19.9365 40.7281 19.4914 40.1125 19.1849C39.4968 18.8784 38.8185 18.7188 38.1307 18.7188H17.7923ZM14.6152 25.7083C14.6152 23.9546 16.0386 22.5312 17.7923 22.5312H36.2194V33.707C36.2194 34.7592 37.0734 35.6132 38.1256 35.6132H46.3861V61.2917C46.3861 63.0454 44.9627 64.4688 43.209 64.4688H17.7923C16.0386 64.4688 14.6152 63.0454 14.6152 61.2917V25.7083Z" fill="#B17C3F"/>
                                </svg>

                                <span className="text-[#B17C3F] mt-1 leading-normal">Click This Area to Upload a File</span>
                                <input type="file" className="hidden"/>
                                </label>
                            </div>
                        </div>
                        {/* Denah Desain */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Denah Desain</p>                                            
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
                        {/* Deskripsi Fitur */}
                        <div className="flex justify-between ">
                            <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Deskripsi Fitur</p>
                            <div>
                                <textarea className="pt-[0.5rem] bg-white w-[53.875rem] h-[14.9375rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Deskripsi Fitur" />
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Harga */}
                    <div className="flex justify-center w-[78.93rem] h-[11.9375rem] bg-white rounded-[25px] drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)]">
                        <div className="w-[67.625rem]  mt-[2rem] flex flex-col space-y-[2.43rem]">
                            {/* Harga Tittle */}
                            <p className="text-[1.31rem] font-semibold text-[#b17c3f] ">Harga</p>
                            {/* Harga */}
                            <div className="flex justify-between ">
                                <p className="pt-[1rem] text-[1.125rem] font-normal text-[#b17c3f] ">Harga</p>
                                <div>
                                    <input className="bg-white w-[53.875rem] h-[2.5rem] rounded-[7px] border-[1px] border-[#b17c3f] pl-[1.25rem] mt-[0.625rem] " placeholder="Harga" />
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