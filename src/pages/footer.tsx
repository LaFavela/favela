export default function Footer() {
   return (
      <div>
         <section className="block">
            <div className="bg-zinc-900 flex gap-7 pb-36">
               <div>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10 pr-3">
                     Explore
                  </h1>
                  <ul>
                     <li><a className="text-footer" href="#">Single house</a></li>
                     <li><a className="text-footer" href="#">Multi Family</a></li>
                     <li><a className="text-footer" href="#">Townhouse</a></li>
                     <li><a className="text-footer" href="#">Modular Home</a></li>
                     <li><a className="text-footer" href="#">Bungalow</a></li>
                     <li><a className="text-footer" href="#">Ranch Home</a></li>
                     <li><a className="text-footer" href="#">Condos & Co-ops</a></li>
                  </ul>
               </div>
               <div>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">
                     About
                  </h1>
                  <ul>
                     <li><a className="text-footer" href="#">About Us</a></li>
                     <li><a className="text-footer" href="#">Jobs</a></li>
                     <li><a className="text-footer" href="#">Reviews</a></li>
                     <li><a className="text-footer" href="#">Journal</a></li>
                  </ul>
               </div>
               <div>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">
                     Help
                  </h1>
                  <ul>
                     <li><a className="text-footer" href="#">FAQ</a></li>
                     <li><a className="text-footer" href="#">Shipping</a></li>
                     <li><a className="text-footer" href="#">Returns</a></li>
                     <li><a className="text-footer" href="#">Assembly</a></li>
                     <li><a className="text-footer" href="#">Payment Options</a></li>
                     <li><a className="text-footer" href="#">Privacy Policy</a></li>
                     <li><a className="text-footer" href="#">Terms & Conditions</a></li>
                  </ul>
               </div>
               <div>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">We&apos;re here to help</h1>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">Customer Care</h1>
                  <ul>
                     <li><p className="text-footer" >Monday-Friday : 10.00-17.00</p></li>
                     <li>
                        <p className="text-footer" >Phone :
                           <a className="font-poppins font-extralight  text-zinc-300" href="#">+6281392709800</a>
                        </p>
                     </li>
                     <li>
                        <p className="text-footer" >E-mail :
                           <a className="font-poppins font-extralight  text-zinc-300" href="#">laVavela@gmal.com</a>
                        </p>
                     </li>
                  </ul>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">Indonesian Store</h1>
                  <ul>
                     <li><p className="text-footer" >Monday-Friday : 09.00-18.00</p></li>
                     <li><p className="text-footer" >Saturday : 10.00-17.30</p></li>
                     <li><p className="text-footer pb-6" >Sunday : 12.00-17.00</p></li>
                     <li><a className="text-footer" href="https://www.google.com/maps/place/Fakultas+Teknik+Unram/@-8.5871886,116.0972789,15z/data=!4m6!3m5!1s0x2dcdbf7e38d87149:0xe366299f2ddb40da!8m2!3d-8.5871886!4d116.0972789!16s%2Fg%2F11b6dg8b4w">Mataram, Indonesia</a></li>
                  </ul>
               </div>
               <div>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">Join the ride.</h1>
                  <h3 className="text-white font-poppins ml-5 text-xl font-extralight mb-4 ">Sign up for our newsletter</h3>
                  <input type="text" name="E-mail" className="ml-5 px-3 py-3 border shadow rounded-3xl  bg-zinc-900 w-96 font-poppins text-zinc-300 mt-5" placeholder="Enter your email here" required></input>
                  <button className="px-3 py-3 border shadow rounded-3xl bg-zinc-300 static mt-5 mr-10 font-poppins">Subscribe</button>
                  <section className="flex">
                     <div>
                        <input type="checkbox" name="Privacy-policy" className="ml-5 mt-3 h-5 w-5 bg-zinc-900 flex" value="False"></input>
                     </div>
                     <div>
                        <p className="ml-3 mt-3 font-extralight font-poppins text-zinc-300">By signing up, I agree to the privacy policy of La Favela</p>

                     </div>
                  </section>
                  <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-9">Follow us on social media.</h1>
                  <div className="flex">
                     <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/facebook.png" alt="facebook"></img></a>
                     <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/instagram.png" alt="facebook"></img></a>
                     <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/youtube.png" alt="facebook"></img></a>
                     <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/tiktok.png" alt="facebook"></img></a>
                  </div>
               </div>
            </div>
         </section>
         <section className="flex bg-zinc-900 font-poppins m-auto">
            <div className="ml-28"></div>
            <div className="ml-96">
               <p className="text-zinc-300">Copyright</p>
            </div>
            <div>
               <img className="ml-2 mt-1" src="/assets/logo/copyright.png" alt=""></img>
            </div>
            <div>
               <p className="text-zinc-300 ml-2">La Favela. All Right Reserved</p>
            </div>
         </section>
      </div>
   );
}