import Footer from "@/components/footer";
import React from "react";
import Router from "next/router";
import Image from "next/image";

const data = [
  {
    transactionType: "SEWA",
    quantity: 1,
    toName: "Dhira Wahyu Febrian",
    toImg: "assets/profile/dhira.jpg",
    productName: "Rumah Minimalis Karya Anak Bangsa",
    productImg: "assets/product/scandinavian/image 1.png",
    productType: "Rumah",
    productPrice: 80000000,
    noTrans: "123wd4567wd8fwa9",
    status: "FINISHED",
    paymentMethode: "Credit Card",
    paymentTime: "2021-08-20 13:00:00",
    isProperty: false,
    bluePrint: "assets/product/scandinavian/image 1.png",
  },
];

export default function DetailTransaction() {
  const handleDownload = (filePath: any) => {
    const link = document.createElement("a");
    link.href = filePath;
    // link.download = true;
    link.click();
  };
  function clickHandler(link: string) {
    return Router.push(link);
  }
  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="mt-16 w-[95rem] space-y-[2.5rem] h-fit">
          <div className="space-y-[2.5rem]">
            <p className="font-medium text-[1.5rem]">
              {data[0].transactionType}
            </p>
            <div
              onClick={() => clickHandler("/merchantProfile")}
              className="flex items-center space-x-6 text-[1rem] w-fit rounded-xl font-normal hover:bg-[#cdcdcd]"
            >
              <Image
                width={48}
                height={48}
                src={data[0].toImg}
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <p>{data[0].toName}</p>
            </div>
            <div className="flex space-x-6 w-fit">
              <Image
                src={data[0].productImg}
                alt=""
                height={176}
                width={240}
                className="w-[15rem] h-[11rem] rounded-[25px]"
              />
              <div className="grid align-middle">
                <p className="text-[2.5rem] font-light">
                  {data[0].productName}
                </p>
                <p className="text-[1.6rem] text-gray-500">
                  {data[0].productType}
                </p>
                {data[0].transactionType === "SEWA" ? (
                  data[0].quantity === 12 ? (
                    <p className="text-[2.5rem]">
                      Rp {data[0].productPrice.toLocaleString("en-US")}.00 /
                      Tahunan
                    </p>
                  ) : (
                    <p className="text-[2.5rem]">
                      Rp {data[0].productPrice.toLocaleString("en-US")}.00 /
                      Bulanan
                    </p>
                  )
                ) : (
                  <p className="text-[2.5rem]">
                    Rp {data[0].productPrice.toLocaleString("en-US")}.00
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-[2rem] ">
            <p className="font-medium text-[1.5rem]">No. Transaction</p>
            <p className="text-[1.4rem] font-light">{data[0].noTrans}</p>
          </div>
          <div className="space-y-[2rem]">
            <p className="font-medium text-[1.5rem]">Status</p>
            <p className="text-[1.4rem] font-light">{data[0].status}</p>
          </div>
          <div className="space-y-[2rem]">
            <p className="font-medium text-[1.5rem]">Payment Methode</p>
            <p className="text-[1.4rem] font-light">{data[0].paymentMethode}</p>
          </div>
          <div className="space-y-[2rem]">
            <p className="font-medium text-[1.5rem]">Payment Time</p>
            <p className="text-[1.4rem] font-light">{data[0].paymentTime}</p>
          </div>
          {!data[0].isProperty ? (
            <div className="space-y-[2rem]">
              <p className="font-medium text-[1.5rem]">Blue Print</p>

              <button
                onClick={() => handleDownload(data[0].bluePrint)}
                className="px-[2rem] py-[0.5rem] border-[0.2rem] border-[#B17C3F] rounded-[16px] text-gold hover:bg-[#e4d1bc] text-[1rem] font-medium"
              >
                <p className="">{data[0].bluePrint.split("/").pop()}</p>
              </button>
            </div>
          ) : null}
          <div className="space-y-[2rem]">
            <p className="font-medium text-[1.5rem]">Action</p>
            <div>
              {data[0].status === "PENDING" ? (
                <div className="space-x-2">
                  <button className="px-[2rem] py-[0.5rem] border-[0.2rem] border-[#B17C3F] rounded-[16px] text-gold hover:bg-[#e4d1bc] text-[1rem] font-medium">
                    <p className="">Reject</p>
                  </button>
                  <button className="px-[2rem] py-[0.5rem]  bg-[#B17C3F] rounded-[16px] text-white hover:bg-[#cd9a60] text-[1rem] font-medium">
                    <p className="">Confirm</p>
                  </button>
                </div>
              ) : (
                <p className="text-10 font-light">Tidak Ada Aksi</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
