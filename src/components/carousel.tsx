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
   
const design = [
   "/assets/build/desain_1.jpg",
   "/assets/build/desain_2.jpg",
   "/assets/build/desain_3.jpg",
   "/assets/build/desain_4.jpg",
   "/assets/build/desain_1.jpg",
]

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
            <Carousel
               responsive={responsive}
               swipeable={true}
               draggable={false}
               containerClass="h-full w-full"
            >
               {images.map((image, index) => (
                  <div key={index} className="" onClick={() => clickHandler(image, index)}>
                     <img src={image} alt="" className={currImg === index ? " w-[90%] rounded-3xl border-4 border-gray-400 aspect-square object-cover" : " w-[90%] rounded-3xl border-4 border-transparent aspect-square object-cover"} />
                  </div>
               ))}
            </Carousel>
         </div>
      </div>
   )
}

export function CarouselDesign(){
   const [img, setImg] = useState(design[0])
   const [currImg, setCurrImg] = useState(0)
   const clickHandler = (design: any, index: number) => {
      setImg(design)
      setCurrImg(index)
   };

   const refs = useRef([]);
   refs.current = [];

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
            <Carousel
               responsive={responsive}
               swipeable={true}
               draggable={false}
               containerClass="h-full w-full"
            >
               {design.map((image, index) => (
                  <div key={index} className="" onClick={() => clickHandler(image, index)}>
                     <img src={image} alt="" className={currImg === index ? " w-[90%] rounded-3xl border-4 border-gray-400 aspect-square object-cover" : " w-[90%] rounded-3xl border-4 border-transparent aspect-square object-cover"} />
                  </div>
               ))}
            </Carousel>
         </div>
      </div>
   )
}
