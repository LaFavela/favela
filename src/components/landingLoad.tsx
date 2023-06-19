import { motion } from "framer-motion";
export default function LandingLoad() {
  return (
    <motion.div 
    initial={{opacity:1}}
    animate={{opacity:0,transitionEnd: {display: "none",}}}
    transition={{delay:6}}
    className="z-50 absolute w-full h-full bg-white flex justify-center items-center text-[20rem] text-gold">
        <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{duration:6}}
        className="flex">
            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7, delay:0.3}}
            className="font-['Redressed'] font">F</motion.p>
            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7, delay:0.6}}
            className="font-['Redressed'] font">a</motion.p>
            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7, delay:0.9}}
            className="font-['Redressed'] font">v</motion.p>
            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7, delay:1.2}}
            className="font-['Redressed'] font">e</motion.p>
            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7, delay:1.5}}
            className="font-['Redressed'] font">l</motion.p>
            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7, delay:1.8}}
            className="font-['Redressed'] font">a</motion.p>
            
        </motion.div>
        
    </motion.div>
  );
}