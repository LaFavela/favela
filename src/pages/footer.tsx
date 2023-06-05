import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="pb-28 pt-28 justify-center items-center flex flex-col">
        <div className="flex items-center justify-center gap-20 border-b-2 pb-9 w-[67rem]">
          <div>
            <p className=" text-[1.5rem] font-medium text-[#B17C3F] pb-4">
              Contact Us
            </p>
            <Link href={"https://wa.me/6281392709800"} className="flex">
              <span className="mt-1 pr-4">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7428 10.9666L10.5482 8.06205C10.3972 7.9248 10.1988 7.8516 9.99482 7.8579C9.79086 7.86421 9.59732 7.94952 9.45508 8.09584L7.57448 10.0299C7.12182 9.94343 6.21177 9.65973 5.27501 8.72532C4.33825 7.78778 4.05455 6.87538 3.97046 6.42586L5.90293 4.54447C6.04942 4.40233 6.13487 4.20876 6.14117 4.00474C6.14748 3.80071 6.07416 3.60224 5.93672 3.45132L3.03291 0.257525C2.89542 0.106131 2.70432 0.0143001 2.50021 0.00153386C2.2961 -0.0112323 2.09505 0.0560725 1.93976 0.189154L0.234412 1.65167C0.0985433 1.78803 0.0174476 1.96951 0.00650858 2.1617C-0.00527953 2.35817 -0.23004 7.01212 3.3787 10.6224C6.52691 13.7699 10.4704 14.0001 11.5565 14.0001C11.7153 14.0001 11.8127 13.9954 11.8386 13.9938C12.0308 13.9831 12.2122 13.9016 12.3479 13.7651L13.8096 12.059C13.9432 11.9042 14.011 11.7033 13.9985 11.4992C13.9861 11.2951 13.8943 11.104 13.7428 10.9666Z"
                    fill="#B17C3F"
                  />
                </svg>
              </span>
              <span className="text-[#9ca3af] text-[0.75rem] pb-2">+6281392709800</span>
            </Link>

            <Link href={"#"} className="flex">
              <span className="mt-1 pr-3">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 1.75C17.5 0.7875 16.7125 0 15.75 0H1.75C0.7875 0 0 0.7875 0 1.75V12.25C0 13.2125 0.7875 14 1.75 14H15.75C16.7125 14 17.5 13.2125 17.5 12.25V1.75ZM15.75 1.75L8.75 6.125L1.75 1.75H15.75ZM15.75 12.25H1.75V3.5L8.75 7.875L15.75 3.5V12.25Z"
                    fill="#B17C3F"
                  />
                </svg>
              </span>
              <span className="text-[#9ca3af] text-[0.75rem] pb-3 mt-[0.03125rem] ">favelapapela@unram.ac.id</span>
            </Link>
            <div className="flex flex-row gap-5">
              <div>
                <Link href={"https://www.facebook.com/DzulhiRaihan/"}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.0834 15.4998C30.0834 7.44984 23.5501 0.916504 15.5001 0.916504C7.45008 0.916504 0.916748 7.44984 0.916748 15.4998C0.916748 22.5582 5.93341 28.4353 12.5834 29.7915V19.8748H9.66675V15.4998H12.5834V11.854C12.5834 9.03942 14.873 6.74984 17.6876 6.74984H21.3334V11.1248H18.4167C17.6147 11.1248 16.9584 11.7811 16.9584 12.5832V15.4998H21.3334V19.8748H16.9584V30.0103C24.323 29.2811 30.0834 23.0686 30.0834 15.4998Z"
                      fill="#B17C3F"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <Link href={"https://www.instagram.com/bukanrehan__/"}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.37508 0.916504H21.6251C26.2917 0.916504 30.0834 4.70817 30.0834 9.37484V21.6248C30.0834 23.8681 29.1923 26.0195 27.606 27.6058C26.0198 29.192 23.8684 30.0832 21.6251 30.0832H9.37508C4.70842 30.0832 0.916748 26.2915 0.916748 21.6248V9.37484C0.916748 7.13155 1.80789 4.98014 3.39414 3.39389C4.98038 1.80765 7.13179 0.916504 9.37508 0.916504ZM9.08342 3.83317C7.69103 3.83317 6.35567 4.38629 5.3711 5.37086C4.38654 6.35543 3.83341 7.69078 3.83341 9.08317V21.9165C3.83341 24.8186 6.18133 27.1665 9.08342 27.1665H21.9167C23.3091 27.1665 24.6445 26.6134 25.6291 25.6288C26.6136 24.6443 27.1667 23.3089 27.1667 21.9165V9.08317C27.1667 6.18109 24.8188 3.83317 21.9167 3.83317H9.08342ZM23.1563 6.02067C23.6398 6.02067 24.1035 6.21273 24.4453 6.55459C24.7872 6.89645 24.9792 7.36012 24.9792 7.84359C24.9792 8.32705 24.7872 8.79072 24.4453 9.13258C24.1035 9.47445 23.6398 9.6665 23.1563 9.6665C22.6729 9.6665 22.2092 9.47445 21.8673 9.13258C21.5255 8.79072 21.3334 8.32705 21.3334 7.84359C21.3334 7.36012 21.5255 6.89645 21.8673 6.55459C22.2092 6.21273 22.6729 6.02067 23.1563 6.02067ZM15.5001 8.20817C17.434 8.20817 19.2886 8.9764 20.6561 10.3439C22.0235 11.7113 22.7917 13.566 22.7917 15.4998C22.7917 17.4337 22.0235 19.2884 20.6561 20.6558C19.2886 22.0233 17.434 22.7915 15.5001 22.7915C13.5662 22.7915 11.7115 22.0233 10.3441 20.6558C8.97664 19.2884 8.20842 17.4337 8.20842 15.4998C8.20842 13.566 8.97664 11.7113 10.3441 10.3439C11.7115 8.9764 13.5662 8.20817 15.5001 8.20817ZM15.5001 11.1248C14.3398 11.1248 13.227 11.5858 12.4065 12.4062C11.586 13.2267 11.1251 14.3395 11.1251 15.4998C11.1251 16.6602 11.586 17.773 12.4065 18.5934C13.227 19.4139 14.3398 19.8748 15.5001 19.8748C16.6604 19.8748 17.7732 19.4139 18.5937 18.5934C19.4141 17.773 19.8751 16.6602 19.8751 15.4998C19.8751 14.3395 19.4141 13.2267 18.5937 12.4062C17.7732 11.5858 16.6604 11.1248 15.5001 11.1248Z"
                      fill="#B17C3F"
                    />
                  </svg>
                </Link>
              </div>
              <div className="mt-[0.03125rem]">
                <Link href={"https://twitter.com/home"}>
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 31 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.7542 3.75016C29.6313 4.26058 28.4208 4.596 27.1667 4.75641C28.45 3.9835 29.4417 2.7585 29.9084 1.28558C28.6979 2.01475 27.3563 2.52516 25.9417 2.81683C24.7896 1.56266 23.1709 0.833496 21.3334 0.833496C17.9063 0.833496 15.1063 3.6335 15.1063 7.08975C15.1063 7.58558 15.1646 8.06683 15.2667 8.51891C10.075 8.25641 5.4521 5.76266 2.37502 1.98558C1.83543 2.90433 1.52918 3.9835 1.52918 5.121C1.52918 7.29391 2.62293 9.21891 4.3146 10.3127C3.27918 10.3127 2.31668 10.021 1.47085 9.5835V9.62725C1.47085 12.6606 3.62918 15.1981 6.48752 15.7668C5.56983 16.018 4.60641 16.0529 3.67293 15.8689C4.06903 17.1121 4.84476 18.1999 5.89108 18.9794C6.93741 19.7589 8.20171 20.191 9.50627 20.2147C7.29489 21.9654 4.55376 22.9117 1.73335 22.8981C1.23752 22.8981 0.741683 22.8689 0.24585 22.8106C3.01668 24.5897 6.31252 25.6252 9.84168 25.6252C21.3334 25.6252 27.6479 16.0877 27.6479 7.81891C27.6479 7.54183 27.6479 7.27933 27.6333 7.00225C28.8583 6.12725 29.9083 5.01891 30.7542 3.75016Z"
                      fill="#B17C3F"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-[1.5rem] font-medium text-[#B17C3F]">
              Website Link
            </p>
            <Link href={"./"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">Home</p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">Category</p>
            </Link>
            <Link href={"./build"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">Build</p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">About Us</p>
            </Link>
          </div>
          <div>
            <p className=" text-[1.5rem] font-medium text-[#B17C3F]">
              Our Service
            </p>
            <Link href={"./"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">Home</p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">Category</p>
            </Link> 
            <Link href={"./browse"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">Build</p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#9ca3af] text-[0.75rem] pb-2">About Us</p>
            </Link>
          </div>
        </div>
        <p className="text-[#9ca3af] text-[0.75rem] pt-2">Copyrighted © 2022 by Favela Corp.</p>
      </div>
    </div>
  );
}
