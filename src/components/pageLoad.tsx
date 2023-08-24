import { motion } from "framer-motion";
export default function PageLoad() {
  return (
    <motion.div 
    initial={{opacity:1}}
    animate={{opacity:0,transitionEnd: {display: "none",}}}
    transition={{delay:1}}
    
    className="absolute z-50 bg-white flex h-screen w-full items-center justify-center  text-[20rem] text-gold">
      <motion.div
        initial={{ rotate: -360 }}
        animate={{ rotate: 1500 }}
        transition={{ duration: 2 }}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 75C12.5 109.519 40.4813 137.5 75 137.5C109.519 137.5 137.5 109.519 137.5 75C137.5 40.4813 109.519 12.5 75 12.5"
            stroke="#B17C3F"
            strokeOpacity="0.36"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
