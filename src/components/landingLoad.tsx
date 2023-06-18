import { motion } from "framer-motion";
export default function LandingLoad() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-[20rem] text-gold">
        <div className="flex">
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
            
        </div>
        
    </div>
  );
}