import { motion } from "framer-motion";
export default function PageLoad() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white text-[20rem] text-gold">
      <motion.div
        initial={{ rotate: -360 }}
        whileInView={{ rotate: 3000 }}
        transition={{ duration: 7 }}
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
            stroke-opacity="0.36"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
