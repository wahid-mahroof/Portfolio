import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome In My Feed</span>
            <div className="flex space -x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm a </h1>
              {/*<span className="text-red-700 font-bold">Developer</span>*/}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backspeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              hello im wahid from jammu and kashmir dist poonch im a web
              developer in javascript language and this my portfolio if anyone
              interested work with me then please contact me on this portfolio
              and other detail in my portfolio so go and register in my
              portfolio and contact with me and happy to work together thankyew
              have a nice day.
            </p>
            <br />
            {/*social media icons */}
            <div className="flex justify-between  items-center flex-col md:flex-row space-y-6 md:space-y-0">
              <div className="space-y-1">
                <h1 className="font-bold text-center">Available On</h1>
                <ul className="flex space-x-6">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <IoLogoFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://in.linkedin.com/" target="_blank">
                      <RxLinkedinLogo className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/k/" target="_blank">
                      <BsTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <ul className="flex space-x-8">
                  <li>
                    {" "}
                    <SiMongodb className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                  </li>
                  <li>
                    {" "}
                    <SiExpress className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                  </li>
                  <li>
                    <FaReact className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                  </li>
                  <li>
                    {" "}
                    <RiNodejsLine className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] "
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
