import { motion } from "framer-motion";
export default function Status(
  props: any = { status: "", statusChild:"", isSuccessful: false }
) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-[29.0625rem] w-[47.875rem] items-center justify-center rounded-[25px] bg-white drop-shadow"
      >
        <div className="space-y-2">
          {props.isSuccessful ? (
            <div className="grid">
              <svg
                className="place-self-center"
                width="142"
                height="118"
                viewBox="0 0 142 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M117.032 0.0167236L142 24.9851L49.9367 117.167L0 67.1709L24.9683 42.2026L49.9367 67.1709L117.032 0.0167236ZM117.032 16.5834L49.9367 83.7967L24.9683 59.1242L16.6258 67.1709L49.9367 100.423L125.374 24.9851L117.032 16.5834Z"
                  fill="#B17C3F"
                />
              </svg>
              <p className="w-[45rem] text-center text-[2.6875rem] font-medium text-[#B17C3F] ">
                {props.status}
              </p>
              <p className="w-[45rem] text-center text-2xl font-medium text-gold ">
                {props.statusChild}
              </p>
            </div>
          ) : (
            <div className="grid">
              <svg
                className="place-self-center"
                width="131"
                height="131"
                viewBox="0 0 131 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.625 45.8823L104.513 7L105.501 7.98825L106.35 9.26125C110.477 15.4551 115.791 20.7703 121.983 24.9002L123.267 25.7544L124.25 26.7427L85.3677 65.625L124.25 104.513L123.262 105.496L121.989 106.35C115.795 110.477 110.48 115.791 106.35 121.983L105.496 123.267L104.513 124.25L65.625 85.3677L26.7427 124.25L25.7544 123.262L24.9002 121.989C20.7724 115.795 15.4592 110.48 9.26683 106.35L7.98267 105.496L7 104.513L45.8879 65.625L7 26.7427L7.98825 25.7544L9.26683 24.9002C15.4586 20.7719 20.7719 15.4586 24.9002 9.26683L25.7544 7.98267L26.7427 7L65.625 45.8823Z"
                  stroke="#EC7564"
                  stroke-width="9"
                />
              </svg>

              <p className="w-[45rem] text-center text-[2.6875rem] font-medium text-[#EC7564] ">
                {props.status}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}