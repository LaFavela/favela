import Image from "next/image"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef, useState } from "react";

const images = [
   '/assets/product/scandinavian/image 3.png',
   '/assets/product/scandinavian/image 4.png',
   '/assets/product/scandinavian/image 1.png',
   '/assets/product/scandinavian/image 1.png',
   '/assets/product/scandinavian/image 4.png',]

const responsive = {
   superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
   },
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
   }
};

export default function CarouselImage() {
   const [img, setImg] = useState(images[0])
   const [currImg, setCurrImg] = useState(0)
   const clickHandler = (images: any, index: number) => {
      setImg(images)
      setCurrImg(index)
   };

   const refs = useRef([]);
   refs.current = [];
   // const addRefs = (el: any) => {
   //    if (el && !refs.current.includes(el)) {
   //       refs.current.push(el);
   //    }
   // };


   function LeftArrow() {
      return (
         <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2258 25.4855L0.354858 13.9604C0.225826 13.8232 0.134213 13.6746 0.08002 13.5145C0.0258265 13.3544 -0.000840053 13.1829 2.01613e-05 13C2.01613e-05 12.8171 0.0271169 12.6456 0.0813104 12.4855C0.135504 12.3254 0.226686 12.1768 0.354858 12.0396L11.2258 0.480211C11.5269 0.16007 11.9032 0 12.3548 0C12.8065 0 13.1936 0.171504 13.5161 0.514512C13.8387 0.85752 14 1.2577 14 1.71504C14 2.17238 13.8387 2.57256 13.5161 2.91557L4.03227 13L13.5161 23.0844C13.8172 23.4046 13.9677 23.7993 13.9677 24.2685C13.9677 24.7377 13.8065 25.1434 13.4839 25.4855C13.1613 25.8285 12.7849 26 12.3548 26C11.9247 26 11.5484 25.8285 11.2258 25.4855Z" fill="black" />
         </svg>);
   }
   function RightArrow() {
      return (
         <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.77419 0.514512L13.6451 12.0396C13.7742 12.1768 13.8658 12.3254 13.92 12.4855C13.9742 12.6456 14.0008 12.8171 14 13C14 13.1829 13.9729 13.3544 13.9187 13.5145C13.8645 13.6746 13.7733 13.8232 13.6451 13.9604L2.77419 25.5198C2.47311 25.8399 2.09677 26 1.64516 26C1.19355 26 0.80645 25.8285 0.48387 25.4855C0.16129 25.1425 1.09951e-07 24.7423 1.49934e-07 24.285C1.89916e-07 23.8276 0.16129 23.4274 0.48387 23.0844L9.96773 13L0.483872 2.91557C0.182798 2.59543 0.0322592 2.20074 0.0322592 1.73151C0.0322592 1.26227 0.193549 0.856604 0.51613 0.514512C0.83871 0.171504 1.21505 -1.1177e-06 1.64516 -1.08009e-06C2.07527 -1.04249e-06 2.45161 0.171504 2.77419 0.514512Z" fill="black" />
         </svg>);
   }
   return (
      <div className="w-full h-full flex flex-col space-y-5">
         <div className="aspect-square flex h-4/6">
            <div className="w-full relative flex-auto h-full">
               <Image
                  className="rounded-3xl"
                  src={img}
                  alt={''}
                  fill={true}
                  style={{ objectFit: "cover" }} />
            </div>
         </div>
         <div className="">
            {/* <div>
               <LeftArrow></LeftArrow>
            </div> */}
            <Carousel
               responsive={responsive}
               swipeable={true}
               draggable={false}
               containerClass="h-full w-full"
            >
               {images.map((image, index) => (
                  <div key={index} className="" onClick={() => clickHandler(image, index)}>
                     {/* <Image
                        className="rounded-3xl"
                        src={image}
                        alt={''}
                        fill={true}
                        style={{ objectFit: "cover" }} /> */}


                     <img src={image} alt="" className={currImg === index ? " w-[90%] rounded-3xl border-4 border-gray-400 aspect-square object-cover" : " w-[90%] rounded-3xl border-4 border-transparent aspect-square object-cover"} />
                  </div>
               ))}
            </Carousel>
            {/* <div>
               <RightArrow></RightArrow>
            </div> */}
         </div>
      </div>
   )
}

