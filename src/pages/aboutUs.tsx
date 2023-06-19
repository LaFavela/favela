import Footer from "@/components/footer";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useRef} from "react";
import { useFollowPointer } from "../tools/useFollowPointer";


const data = [
  {
    id: 1,
    name: "Muhammad Dzulhi Raihan",
    src: "/assets/profile/raihan.png",
  },
  {
    id: 2,
    name: "Dwimas Nugraha",
    src: "/assets/profile/dwimas2.png",
  },
  {
    id: 3,
    name: "Ramadhani AlQadri",
    src: "/assets/profile/rama.png",
  },
];

export default function AboutUs() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  
  return (
    <ParallaxProvider
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.9 }}
        className="   -z-10 "
      >
        <Parallax 
        
        shouldAlwaysCompleteAnimation={true}
        className="sticky mt-10 top-[10rem] -z-10 flex justify-center items-center">
          <div className=" sticky flex items-center justify-center space-x-[6.7rem] z-10">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.9 }}
              className="space-y-5 z-10"
            >
              <Parallax
                speed={0}
                translateX={[0, -50]}
                opacity={[1, 0]}
                shouldAlwaysCompleteAnimation={true}
                className="space-y-2"
              >
                <svg
                  className="h-[13.125rem] w-[40.875rem]"
                  width="0"
                  height="0"
                  viewBox="0 0 654 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M155.625 3.5C153.042 7.5 149.917 11.25 146.25 14.75C142.583 18.25 138.583 21.3333 134.25 24C129.917 26.6667 125.333 28.7917 120.5 30.375C115.667 31.875 110.833 32.625 106 32.625L81.375 32.875C78.0417 36.875 75.5833 40.75 74 44.5C72.4167 48.25 71.625 52.6667 71.625 57.75V92.75H75.25C78.5833 92.75 82.625 92.8333 87.375 93C92.125 93.0833 96.9167 92.9583 101.75 92.625C106.667 92.2917 111.333 91.5833 115.75 90.5C120.167 89.3333 123.75 87.5417 126.5 85.125L129.5 88.75C126.917 92.6667 123.792 95.9583 120.125 98.625C116.458 101.292 112.458 103.5 108.125 105.25C103.792 106.917 99.2083 108.167 94.375 109C89.5417 109.75 84.7083 110.167 79.875 110.25H71.625V157.875C71.625 168.958 69.25 178.792 64.5 187.375C59.75 196.042 52.8333 203.5 43.75 209.75L39.375 204.875C40.7917 203.292 41.9167 201.5 42.75 199.5C43.5833 197.5 44.2083 195.417 44.625 193.25C45.125 191.083 45.4167 188.917 45.5 186.75C45.6667 184.5 45.75 182.375 45.75 180.375V110.25H21.5L34.75 92.75H45.75V72.25C45.75 68.3333 46.5417 64.5417 48.125 60.875C49.7917 57.125 51.875 53.5833 54.375 50.25C56.875 46.9167 59.625 43.7917 62.625 40.875C65.625 37.9583 68.5417 35.2917 71.375 32.875C67.875 32.875 64.5417 32.875 61.375 32.875C58.2917 32.7917 55.1667 32.75 52 32.75C48.8333 32.75 45.5833 32.75 42.25 32.75C38.9167 32.6667 35.25 32.625 31.25 32.625C28.0833 32.625 25.25 32.9583 22.75 33.625C20.3333 34.2083 18.0833 35.0833 16 36.25C13.9167 37.4167 11.9167 38.875 10 40.625C8.08333 42.375 6.125 44.4167 4.125 46.75L0.5 42.875C3.33333 38.9583 6.70833 34.9583 10.625 30.875C14.5417 26.7083 18.75 22.9167 23.25 19.5C27.8333 16.0833 32.625 13.2917 37.625 11.125C42.7083 8.875 47.8333 7.75 53 7.75H101.375C104.625 7.75 108.625 7.70833 113.375 7.625C118.125 7.54167 122.958 7.29167 127.875 6.875C132.792 6.375 137.458 5.625 141.875 4.625C146.292 3.54167 149.833 2.04167 152.5 0.125L155.625 3.5ZM239.125 172.125C238.125 174.292 236.875 176.333 235.375 178.25C233.875 180.167 232.125 181.875 230.125 183.375C228.208 184.875 226.083 186.083 223.75 187C221.5 187.833 219.125 188.25 216.625 188.25C210.042 188.25 205.292 186.458 202.375 182.875C199.542 179.208 198.125 174.25 198.125 168V165.75C196.625 168.583 194.917 171.417 193 174.25C191.167 177.083 189.042 179.625 186.625 181.875C184.292 184.125 181.667 185.958 178.75 187.375C175.833 188.792 172.583 189.5 169 189.5C163.583 189.5 158.792 188.458 154.625 186.375C150.458 184.292 146.958 181.5 144.125 178C141.292 174.417 139.167 170.25 137.75 165.5C136.333 160.75 135.625 155.708 135.625 150.375C135.625 143.125 136.875 135.917 139.375 128.75C141.958 121.5 145.542 115.042 150.125 109.375C154.792 103.708 160.333 99.125 166.75 95.625C173.25 92.0417 180.458 90.25 188.375 90.25C191.542 90.25 194.708 90.5417 197.875 91.125C201.042 91.7083 204.042 92.6667 206.875 94C209.792 95.25 212.417 96.9167 214.75 99C217.167 101.083 219.125 103.625 220.625 106.625L202 114.5C201 112.917 199.833 111.417 198.5 110C197.25 108.5 195.833 107.208 194.25 106.125C192.75 105.042 191.125 104.167 189.375 103.5C187.625 102.833 185.792 102.5 183.875 102.5C179.542 102.5 175.667 103.833 172.25 106.5C168.917 109.167 166.042 112.458 163.625 116.375C161.292 120.292 159.5 124.458 158.25 128.875C157 133.292 156.375 137.292 156.375 140.875C156.375 144.042 156.667 147.625 157.25 151.625C157.917 155.542 159.042 159.25 160.625 162.75C162.208 166.25 164.292 169.208 166.875 171.625C169.458 174.042 172.708 175.25 176.625 175.25C179.708 175.25 182.375 174.583 184.625 173.25C186.875 171.833 188.792 170.042 190.375 167.875C191.958 165.625 193.25 163.083 194.25 160.25C195.333 157.333 196.125 154.375 196.625 151.375C197.208 148.375 197.583 145.417 197.75 142.5C198 139.5 198.125 136.833 198.125 134.5V125.875L220.875 117.875V168.625C220.875 170.292 221.292 171.833 222.125 173.25C222.958 174.583 224.25 175.25 226 175.25C228.083 175.25 229.958 174.5 231.625 173C233.375 171.417 234.75 169.833 235.75 168.25L239.125 172.125ZM293.5 190.375C292.5 190.375 291.458 190.125 290.375 189.625C289.375 189.208 288.625 188.5 288.125 187.5L256.375 116.125C255.958 115.375 255.458 114.542 254.875 113.625C254.375 112.625 253.75 111.708 253 110.875C252.25 110.042 251.417 109.333 250.5 108.75C249.583 108.167 248.625 107.875 247.625 107.875C246.208 107.875 245 108.417 244 109.5C243 110.5 242.083 111.583 241.25 112.75L238.75 109.375C239.583 106.875 240.75 104.5 242.25 102.25C243.833 99.9167 245.667 97.875 247.75 96.125C249.833 94.375 252.125 92.9583 254.625 91.875C257.125 90.7917 259.75 90.25 262.5 90.25C264.583 90.25 266.458 90.9583 268.125 92.375C269.792 93.7083 271.25 95.375 272.5 97.375C273.833 99.375 274.958 101.458 275.875 103.625C276.875 105.792 277.708 107.625 278.375 109.125C282.375 118.708 286.333 128.208 290.25 137.625C294.25 147.042 298.333 156.417 302.5 165.75L318.125 133.75C318.792 132.583 319.25 131 319.5 129C319.75 127 319.875 125.333 319.875 124C319.875 119.083 318.625 114.833 316.125 111.25C313.625 107.583 310.167 104.667 305.75 102.5L320.125 82.75C324.792 85.0833 328.208 88.25 330.375 92.25C332.625 96.1667 333.75 100.708 333.75 105.875C333.75 108.458 333.417 111.333 332.75 114.5C332.167 117.583 331.292 120.333 330.125 122.75L298.375 187.75C297.125 189.5 295.5 190.375 293.5 190.375ZM436.25 162.625C433.333 166.375 430.125 169.875 426.625 173.125C423.208 176.375 419.458 179.208 415.375 181.625C411.375 184.042 407.125 185.958 402.625 187.375C398.125 188.792 393.458 189.5 388.625 189.5C382.458 189.5 376.792 188.417 371.625 186.25C366.458 184 362 180.958 358.25 177.125C354.5 173.208 351.583 168.625 349.5 163.375C347.417 158.042 346.375 152.333 346.375 146.25C346.375 141.25 347.083 136.333 348.5 131.5C349.917 126.667 351.917 122.125 354.5 117.875C357.083 113.625 360.125 109.708 363.625 106.125C367.208 102.458 371.125 99.3333 375.375 96.75C379.625 94.1667 384.125 92.1667 388.875 90.75C393.625 89.25 398.5 88.5 403.5 88.5C407 88.5 410.292 88.9167 413.375 89.75C416.542 90.5833 419.333 91.9167 421.75 93.75C424.167 95.5 426.083 97.7917 427.5 100.625C428.917 103.375 429.625 106.667 429.625 110.5C429.625 113.667 428.667 117 426.75 120.5C424.917 124 422.458 127.5 419.375 131C416.375 134.5 412.958 137.958 409.125 141.375C405.292 144.708 401.375 147.833 397.375 150.75C393.458 153.583 389.667 156.083 386 158.25C382.333 160.417 379.125 162.083 376.375 163.25C379.458 167.083 383.042 170.208 387.125 172.625C391.208 175.042 395.542 176.25 400.125 176.25C403.042 176.25 406 175.708 409 174.625C412 173.458 414.875 172 417.625 170.25C420.458 168.5 423.125 166.583 425.625 164.5C428.208 162.417 430.5 160.458 432.5 158.625L436.25 162.625ZM406.125 115.125C406.125 113.208 405.792 111.375 405.125 109.625C404.542 107.875 403.667 106.375 402.5 105.125C401.333 103.792 399.917 102.75 398.25 102C396.667 101.167 394.833 100.75 392.75 100.75C389 100.75 385.542 102.083 382.375 104.75C379.208 107.333 376.458 110.542 374.125 114.375C371.875 118.208 370.083 122.292 368.75 126.625C367.5 130.875 366.875 134.625 366.875 137.875C366.875 141.042 367.375 144.292 368.375 147.625C369.375 150.958 370.75 154.167 372.5 157.25C375.833 155.417 379.458 152.875 383.375 149.625C387.292 146.375 390.917 142.833 394.25 139C397.667 135.083 400.5 131.042 402.75 126.875C405 122.708 406.125 118.792 406.125 115.125ZM497.375 172.375C496.375 174.542 495.083 176.583 493.5 178.5C492 180.417 490.292 182.125 488.375 183.625C486.458 185.125 484.333 186.292 482 187.125C479.75 188.042 477.417 188.5 475 188.5C468.5 188.5 463.75 186.708 460.75 183.125C457.833 179.458 456.375 174.5 456.375 168.25V15.75L479.375 7.75V168.875C479.375 170.542 479.75 172.083 480.5 173.5C481.25 174.833 482.583 175.5 484.5 175.5C486.417 175.5 488.208 174.75 489.875 173.25C491.625 171.667 493 170.125 494 168.625L497.375 172.375ZM610.875 172.125C609.875 174.292 608.625 176.333 607.125 178.25C605.625 180.167 603.875 181.875 601.875 183.375C599.958 184.875 597.833 186.083 595.5 187C593.25 187.833 590.875 188.25 588.375 188.25C581.792 188.25 577.042 186.458 574.125 182.875C571.292 179.208 569.875 174.25 569.875 168V165.75C568.375 168.583 566.667 171.417 564.75 174.25C562.917 177.083 560.792 179.625 558.375 181.875C556.042 184.125 553.417 185.958 550.5 187.375C547.583 188.792 544.333 189.5 540.75 189.5C535.333 189.5 530.542 188.458 526.375 186.375C522.208 184.292 518.708 181.5 515.875 178C513.042 174.417 510.917 170.25 509.5 165.5C508.083 160.75 507.375 155.708 507.375 150.375C507.375 143.125 508.625 135.917 511.125 128.75C513.708 121.5 517.292 115.042 521.875 109.375C526.542 103.708 532.083 99.125 538.5 95.625C545 92.0417 552.208 90.25 560.125 90.25C563.292 90.25 566.458 90.5417 569.625 91.125C572.792 91.7083 575.792 92.6667 578.625 94C581.542 95.25 584.167 96.9167 586.5 99C588.917 101.083 590.875 103.625 592.375 106.625L573.75 114.5C572.75 112.917 571.583 111.417 570.25 110C569 108.5 567.583 107.208 566 106.125C564.5 105.042 562.875 104.167 561.125 103.5C559.375 102.833 557.542 102.5 555.625 102.5C551.292 102.5 547.417 103.833 544 106.5C540.667 109.167 537.792 112.458 535.375 116.375C533.042 120.292 531.25 124.458 530 128.875C528.75 133.292 528.125 137.292 528.125 140.875C528.125 144.042 528.417 147.625 529 151.625C529.667 155.542 530.792 159.25 532.375 162.75C533.958 166.25 536.042 169.208 538.625 171.625C541.208 174.042 544.458 175.25 548.375 175.25C551.458 175.25 554.125 174.583 556.375 173.25C558.625 171.833 560.542 170.042 562.125 167.875C563.708 165.625 565 163.083 566 160.25C567.083 157.333 567.875 154.375 568.375 151.375C568.958 148.375 569.333 145.417 569.5 142.5C569.75 139.5 569.875 136.833 569.875 134.5V125.875L592.625 117.875V168.625C592.625 170.292 593.042 171.833 593.875 173.25C594.708 174.583 596 175.25 597.75 175.25C599.833 175.25 601.708 174.5 603.375 173C605.125 171.417 606.5 169.833 607.5 168.25L610.875 172.125ZM653.5 177.5C653.5 179.5 653.083 181.375 652.25 183.125C651.5 184.875 650.458 186.375 649.125 187.625C647.875 188.958 646.333 190 644.5 190.75C642.75 191.5 640.875 191.875 638.875 191.875C636.875 191.875 635 191.5 633.25 190.75C631.583 190 630.083 188.958 628.75 187.625C627.417 186.375 626.375 184.875 625.625 183.125C624.875 181.375 624.5 179.5 624.5 177.5C624.5 175.5 624.875 173.625 625.625 171.875C626.375 170.125 627.417 168.583 628.75 167.25C630.083 165.917 631.583 164.875 633.25 164.125C635 163.292 636.875 162.875 638.875 162.875C640.875 162.875 642.75 163.292 644.5 164.125C646.333 164.875 647.875 165.917 649.125 167.25C650.458 168.583 651.5 170.125 652.25 171.875C653.083 173.625 653.5 175.5 653.5 177.5Z"
                    fill="#B17C3F"
                  />
                </svg>
                <p className="ml-6 w-[48rem] text-[2rem] text-justify font-normal text-[#7D6C57]">
                Website Favela adalah platform yang menyediakan layanan untuk mencari, membeli, dan menjual properti dengan mudah. Favela hadir untuk mempermudah pengguna dalam menemukan properti yang sesuai, bertransaksi dengan aman, dan mendapatkan layanan terbaik dari para desainer dan tukang bangunan.
                </p>
              </Parallax>
            </motion.div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.9 }}
            >
              <Parallax
                speed={0}
                translateX={[0, 50]}
                opacity={[1, 0]}
                shouldAlwaysCompleteAnimation={true}
                className=""
              >
                <div className="relative flex h-[35.25rem] w-[23.875rem] overflow-hidden rounded-xl">
                  <Image
                    src={"/assets/about/image1.jpg"}
                    fill={true}
                    alt={"Image1"}
                    quality={20}
                  />
                </div>
              </Parallax>
            </motion.div>
          </div>
          <div className="fixed ">
            <Parallax
              speed={0}
              opacity={[0, 1, "easeIn"]}
              easing={[0, 0, 0, 0]}
              shouldAlwaysCompleteAnimation={true}
              className=" space-y-[5rem]"
            >
              <div className=" flex w-screen justify-center">
                <p className="text-[4.375rem] font-medium text-gold">
                  Our Vision
                </p>
              </div>
              <div className="flex w-screen justify-center">
                <div>
                  <Parallax className="space-y-28 text-[2rem] font-medium">
                    <Parallax
                    translateY={[200, 0]}
                    opacity={[0, 1]}
                    >
                      <div className="mr-5 flex items-center justify-end space-x-4">
                        <p>Platform terpercaya dan inovatif</p>
                        <svg
                          width="42"
                          height="39"
                          viewBox="0 0 42 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            d="M24 39C33.9411 39 42 30.9411 42 21C42 11.0589 33.9411 3 24 3C14.0589 3 6 11.0589 6 21C6 30.9411 14.0589 39 24 39Z"
                            fill="#B17C3F"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18ZM33 18C33 21.9782 31.4196 25.7936 28.6066 28.6066C25.7936 31.4196 21.9782 33 18 33C14.0218 33 10.2064 31.4196 7.3934 28.6066C4.58035 25.7936 3 21.9782 3 18C3 14.0218 4.58035 10.2064 7.3934 7.3934C10.2064 4.58035 14.0218 3 18 3C21.9782 3 25.7936 4.58035 28.6066 7.3934C31.4196 10.2064 33 14.0218 33 18Z"
                            fill="#B17C3F"
                          />
                        </svg>
                      </div>
                    </Parallax>
                    <Parallax
                    translateY={[1000, 0]}
                    opacity={[0, 1]}
                    >
                      <div className="mr-[3rem] flex items-center justify-end space-x-4">
                        <p>Kolaborasi desainer dan pengguna</p>
                        <svg
                          width="42"
                          height="39"
                          viewBox="0 0 42 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            d="M24 39C33.9411 39 42 30.9411 42 21C42 11.0589 33.9411 3 24 3C14.0589 3 6 11.0589 6 21C6 30.9411 14.0589 39 24 39Z"
                            fill="#B17C3F"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18ZM33 18C33 21.9782 31.4196 25.7936 28.6066 28.6066C25.7936 31.4196 21.9782 33 18 33C14.0218 33 10.2064 31.4196 7.3934 28.6066C4.58035 25.7936 3 21.9782 3 18C3 14.0218 4.58035 10.2064 7.3934 7.3934C10.2064 4.58035 14.0218 3 18 3C21.9782 3 25.7936 4.58035 28.6066 7.3934C31.4196 10.2064 33 14.0218 33 18Z"
                            fill="#B17C3F"
                          />
                        </svg>
                      </div>
                    </Parallax>
                    <Parallax
                    translateY={[2000, 0]}
                    opacity={[0, 1]}
                    >
                      <div className="mr-5 flex items-center justify-end space-x-4">
                        <p>Sumber informasi properti terlengkap</p>
                        <svg
                          width="42"
                          height="39"
                          viewBox="0 0 42 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            d="M24 39C33.9411 39 42 30.9411 42 21C42 11.0589 33.9411 3 24 3C14.0589 3 6 11.0589 6 21C6 30.9411 14.0589 39 24 39Z"
                            fill="#B17C3F"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18ZM33 18C33 21.9782 31.4196 25.7936 28.6066 28.6066C25.7936 31.4196 21.9782 33 18 33C14.0218 33 10.2064 31.4196 7.3934 28.6066C4.58035 25.7936 3 21.9782 3 18C3 14.0218 4.58035 10.2064 7.3934 7.3934C10.2064 4.58035 14.0218 3 18 3C21.9782 3 25.7936 4.58035 28.6066 7.3934C31.4196 10.2064 33 14.0218 33 18Z"
                            fill="#B17C3F"
                          />
                        </svg>
                      </div>
                    </Parallax>
                    
                  </Parallax>
                </div>

                <Parallax speed={0} rotate={[0, 1000]}>
                  <svg
                    width="358"
                    height="358"
                    viewBox="0 0 358 358"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M106.5 179C106.5 198.228 114.138 216.669 127.735 230.265C141.331 243.862 159.772 251.5 179 251.5C198.228 251.5 216.669 243.862 230.265 230.265C243.862 216.669 251.5 198.228 251.5 179C251.5 159.772 243.862 141.331 230.265 127.735C216.669 114.138 198.228 106.5 179 106.5C159.772 106.5 141.331 114.138 127.735 127.735C114.138 141.331 106.5 159.772 106.5 179Z"
                      fill="#F48200"
                      stroke="black"
                      stroke-width="9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M179 55C154.475 55 130.501 62.2725 110.109 75.8978C89.7176 89.5231 73.8243 108.889 64.439 131.547C55.0537 154.205 52.5981 179.138 57.3827 203.191C62.1672 227.245 73.9771 249.339 91.3188 266.681C108.661 284.023 130.755 295.833 154.809 300.617C178.862 305.402 203.795 302.946 226.453 293.561C249.111 284.176 268.477 268.282 282.102 247.891C295.728 227.499 303 203.525 303 179"
                      stroke="black"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M198.029 9.06602C162.811 5.11499 127.235 12.2057 96.2232 29.3574C65.2112 46.5091 40.2956 72.8741 24.9228 104.805C9.55007 136.736 4.47993 172.656 10.4138 207.594C16.3476 242.533 32.9921 274.764 58.045 299.83C83.0978 324.895 115.321 341.556 150.256 347.507C185.192 353.459 221.114 348.407 253.053 333.05C284.992 317.693 311.369 292.791 328.537 261.788C345.704 230.784 352.813 195.213 348.879 159.992"
                      stroke="black"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M223 135V91L267 47V91H311L267 135H223ZM223 135L179 179"
                      stroke="black"
                      stroke-width="15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Parallax>
                <div>
                  <Parallax className="space-y-28 text-[2rem] font-medium">
                    <Parallax
                    translateY={[200, 0]}
                    opacity={[0, 1]}
                    >
                      <div className="ml-5 flex items-center justify-start space-x-4  ">
                        <svg
                          width="42"
                          height="39"
                          viewBox="0 0 42 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            d="M24 39C33.9411 39 42 30.9411 42 21C42 11.0589 33.9411 3 24 3C14.0589 3 6 11.0589 6 21C6 30.9411 14.0589 39 24 39Z"
                            fill="#B17C3F"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18ZM33 18C33 21.9782 31.4196 25.7936 28.6066 28.6066C25.7936 31.4196 21.9782 33 18 33C14.0218 33 10.2064 31.4196 7.3934 28.6066C4.58035 25.7936 3 21.9782 3 18C3 14.0218 4.58035 10.2064 7.3934 7.3934C10.2064 4.58035 14.0218 3 18 3C21.9782 3 25.7936 4.58035 28.6066 7.3934C31.4196 10.2064 33 14.0218 33 18Z"
                            fill="#B17C3F"
                          />
                        </svg>
                        <p>Alat pemasaran efisien untuk penjual</p>
                      </div>
                    </Parallax>
                    <Parallax
                    translateY={[1000, 0]}
                    opacity={[0, 1]}
                    >

                      <div className="ml-[3rem] flex items-center     justify-start space-x-4  ">
                        <svg
                          width="42"
                          height="39"
                          viewBox="0 0 42 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            d="M24 39C33.9411 39 42 30.9411 42 21C42 11.0589 33.9411 3 24 3C14.0589 3 6 11.0589 6 21C6 30.9411 14.0589 39 24 39Z"
                            fill="#B17C3F"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18ZM33 18C33 21.9782 31.4196 25.7936 28.6066 28.6066C25.7936 31.4196 21.9782 33 18 33C14.0218 33 10.2064 31.4196 7.3934 28.6066C4.58035 25.7936 3 21.9782 3 18C3 14.0218 4.58035 10.2064 7.3934 7.3934C10.2064 4.58035 14.0218 3 18 3C21.9782 3 25.7936 4.58035 28.6066 7.3934C31.4196 10.2064 33 14.0218 33 18Z"
                            fill="#B17C3F"
                          />
                        </svg>
                        <p>Layanan penyewaan tukang</p>
                      </div>
                    </Parallax>
                    <Parallax
                    translateY={[2000, 0]}
                    opacity={[0, 1]}
                    >

                      <div className="ml-5 flex items-center justify-start space-x-4  ">
                        <svg
                          width="42"
                          height="39"
                          viewBox="0 0 42 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            d="M24 39C33.9411 39 42 30.9411 42 21C42 11.0589 33.9411 3 24 3C14.0589 3 6 11.0589 6 21C6 30.9411 14.0589 39 24 39Z"
                            fill="#B17C3F"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18ZM33 18C33 21.9782 31.4196 25.7936 28.6066 28.6066C25.7936 31.4196 21.9782 33 18 33C14.0218 33 10.2064 31.4196 7.3934 28.6066C4.58035 25.7936 3 21.9782 3 18C3 14.0218 4.58035 10.2064 7.3934 7.3934C10.2064 4.58035 14.0218 3 18 3C21.9782 3 25.7936 4.58035 28.6066 7.3934C31.4196 10.2064 33 14.0218 33 18Z"
                            fill="#B17C3F"
                          />
                        </svg>
                        <p>Komunitas properti aktif</p>
                      </div>
                    </Parallax>
                  </Parallax>
                </div>
              </div>
            </Parallax>
          </div>
        </Parallax>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        
        <div className="sticky top-0">

          <Parallax
          // opacity={[1,0]}
          className="top-0 ">
            <div
            className="text-[6.25rem] text-white font-semibold bg-[#DF6C4D] w-screen h-[250vh] flex justify-center items-center"
            >
              <div className="h-full">
              <motion.p
                className="mt-[50vh]"
                initial="hidden"
                whileInView="visible"
                exit={{opacity:0}}
                // viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1},
                  hidden: { opacity: 0}
                }} 
                
                >Let's Meet</motion.p>
                <motion.p
                className="mt-[100vh]"
                initial="hidden"
                whileInView="visible"
                exit={{opacity:0}}
                // viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1},
                  hidden: { opacity: 0}
                }} 
                
                >Our Team</motion.p>
              </div>
                
    

            </div>
          </Parallax> 
          <Parallax
          className="w-screen h-[120vh] bg-gradient-to-b from-[#DF6C4D] to-[#e3d0ba]"
          
          >

          </Parallax>
          <Parallax
          
          // opacity={[1,0]}
          className="sticky top-0">
            <div
            className=" bg-[#e3d0ba] -space-x-15 w-screen h-screen flex justify-center items-center "
            >
              <motion.div
              // initial={{x:-1000, opacity:0}}
              // whileInView={{x:0, opacity:1}}
              // transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="flex -space-x-4 ">
                  <div
                  className="flex justify-center items-center text-white text-[2.625rem] font-semibold w-[23.875rem] h-[5.5rem] bg-[#DF6C4D] rounded-[1.5625rem]"
                  >
                    <p>Founder</p>

                  </div>
                  <div className="z-10 self-end mt-[4rem] border-8 border-[#e3d0ba] w-[3.4375rem] h-[3.4375rem] bg-[#DF6C4D] rounded-full">

                  </div>
                  <div
                  className="flex justify-center items-center text-white text-[2.625rem] font-semibold w-[23.875rem] h-[5.5rem] bg-[#DF6C4D] rounded-[1.5625rem]"
                  >
                    <p>Full Stack</p>

                  </div>
                </div>
                <div className="w-[50rem]  text-[#B17C3F] text-[1.75rem] font-semibold">
                  <p>Saya adalah pendiri Website Favela dan saya memiliki keahlian dalam pengembangan fullstack. Saya bertanggung jawab atas segala hal terkait dengan proyek ini, mulai dari ide awal hingga pengembangan penuh. Saya sangat menguasai bagian depan (front-end) dan belakang (back-end) dari website ini. Saya memiliki pemahaman yang mendalam tentang teknologi dan infrastruktur yang digunakan untuk memastikan kinerja dan kehandalan sistem secara menyeluruh</p>
                </div>
                
              
              </motion.div>
              <motion.div
              // initial={{x:500, opacity:0}}
              // whileInView={{x:0, opacity:1}}
              // transition={{ duration: 1, delay: 0.4 }}
              >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={"/assets/profile/dwimas2.png"}
                      // fill={true}
                      height={600}
                      width={600}
                      alt={"Image1"}
                      quality={50}
                    />
                  </div>
                  <p className="text-center text-[#DF6C4D] font-semibold text-[3.125rem]">Muhammad Dwimas <br />Catur Nugraha</p>
              </motion.div>
            </div>
            <div
            className=" bg-[#e3d0ba] -space-x-15 w-screen h-screen flex justify-center items-center "
            >
              <motion.div
              // initial={{x:-1000, opacity:0}}
              // whileInView={{x:0, opacity:1}}
              // transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="flex -space-x-4 ">
                  <div
                  className="flex justify-center items-center text-white text-[2.625rem] font-semibold w-[23.875rem] h-[5.5rem] bg-[#DF6C4D] rounded-[1.5625rem]"
                  >
                    <p>Front-End</p>

                  </div>
                  <div className="z-10 self-end mt-[4rem] border-8 border-[#e3d0ba] w-[3.4375rem] h-[3.4375rem] bg-[#DF6C4D] rounded-full">

                  </div>
                  <div
                  className="flex justify-center items-center text-white text-[2.625rem] font-semibold w-[23.875rem] h-[5.5rem] bg-[#DF6C4D] rounded-[1.5625rem]"
                  >
                    <p>Product Manager</p>

                  </div>
                </div>
                <div className="w-[50rem]  text-[#B17C3F] text-[1.75rem] font-semibold">
                  <p>Saya bertanggung jawab dalam mengembangkan antarmuka pengguna (UI) dan saya juga berperan sebagai manajer produk. Saya sangat terampil dalam merancang tampilan dan fungsionalitas yang menarik bagi pengguna. Selain itu, saya juga memiliki peran sebagai manajer produk yang mengurus perencanaan dan pengelolaan produk secara keseluruhan. Saya bekerja sama dengan tim pengembangan untuk memastikan produk yang dikembangkan sesuai dengan kebutuhan pengguna dan tujuan bisnis yang diinginkan</p>
                </div>
                
              
              </motion.div>
              <motion.div
              // initial={{x:500, opacity:0}}
              // whileInView={{x:0, opacity:1}}
              // transition={{ duration: 1, delay: 0.4 }}
              >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={"/assets/profile/raihan.png"}
                      // fill={true}
                      height={600}
                      width={600}
                      alt={"Image1"}
                      quality={50}
                    />
                  </div>
                  <p className="text-center text-[#DF6C4D] font-semibold text-[3.125rem]">Muhammad  <br />Dzulhi Raihan</p>
              </motion.div>
            </div>
            <div
            className=" bg-[#e3d0ba] -space-x-15 w-screen h-screen flex justify-center items-center "
            >
              <motion.div
              // initial={{x:-1000, opacity:0}}
              // whileInView={{x:0, opacity:1}}
              // transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="flex -space-x-4 ">
                  <div
                  className="flex justify-center items-center text-white text-[2.625rem] font-semibold w-[23.875rem] h-[5.5rem] bg-[#DF6C4D] rounded-[1.5625rem]"
                  >
                    <p>UI/UX</p>

                  </div>
                  <div className="z-10 self-end mt-[4rem] border-8 border-[#e3d0ba] w-[3.4375rem] h-[3.4375rem] bg-[#DF6C4D] rounded-full">

                  </div>
                  <div
                  className="flex justify-center items-center text-white text-[2.625rem] font-semibold w-[23.875rem] h-[5.5rem] bg-[#DF6C4D] rounded-[1.5625rem]"
                  >
                    <p>Front-End</p>

                  </div>
                </div>
                <div className="w-[50rem]  text-[#B17C3F] text-[1.75rem] font-semibold">
                  <p>Saya adalah desainer antarmuka pengguna (UI) dan pengalaman pengguna (UX), serta memiliki keterampilan dalam pengembangan front-end. Saya berfokus pada desain yang menarik dan memikat untuk pengguna. Saya juga memiliki pemahaman yang baik tentang bagaimana pengguna berinteraksi dengan antarmuka dan pengalaman pengguna. Saya terlibat dalam merancang tata letak, ikon, dan elemen visual lainnya yang menciptakan desain yang menarik</p>
                </div>
                
              
              </motion.div>
              <motion.div
              // initial={{x:500, opacity:0}}
              // whileInView={{x:0, opacity:1}}
              // transition={{ duration: 1, delay: 0.4 }}
              >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={"/assets/profile/rama.png"}
                      // fill={true}
                      height={600}
                      width={600}
                      alt={"Image1"}
                      quality={50}
                    />
                  </div>
                  <p className="text-center text-[#DF6C4D] font-semibold text-[3.125rem]">Ramadhani Al-Qadri</p>
              </motion.div>
            </div>
          </Parallax> 
          
        </div>

        
      </motion.div>
    </ParallaxProvider>
    // <div>

    //   {/* <div className="flex justify-center h-[1000rem]">
    //     <div className="flex justify-center mt-[200rem]">
          
    //       <motion.div 
    //       initial={{x:0, scale:1, opacity:0}}
          
    //       transition={{duration:1}}
    //       whileInView={{x:100, scale:10, opacity:1, color:"blue"}}
    //       // viewport={{once:true}}s
    //       className="w-20 h-20 bg-red-500">

    //       </motion.div>
    //     </div>
        
    //   </div> */}
    //   {/* <motion.div
    //     ref={ref}
    //     className="w-[3rem] h-[3rem] border border-5 border-[#DF6C4D] rounded-full "
    //     animate={{ x, y }}
    //     transition={{
    //       type: "spring",
    //       damping: 3,
    //       stiffness: 50,
    //       restDelta: 0.001
    //     }}
    //     /> */}
    // </div>
  );
}
