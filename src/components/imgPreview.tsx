import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface typeIMG {
  src: string;
  visible: boolean;
  onClose: (value: boolean) => void;
  setShowIMG: (value: boolean) => void;
}
export default function IMGPreview(props: typeIMG) {
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.setShowIMG(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div ref={wrapperRef}>
      <AnimatePresence>

      {props.visible && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{  opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.25 }}>

          <div className=" fixed left-1/2 top-1/2 flex h-[90vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded-[1rem] bg-[#0000009d] z-50">
            <div className="">
              <Image
                src={props.src}
                // width={720}
                // height={720}
                //   width={100%}
                //   height={100%}
                //   layout="fill"
                fill={true}
                alt="preview image"
                objectFit="contain"
                className="rounded-[1rem] p-10"
              ></Image>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
