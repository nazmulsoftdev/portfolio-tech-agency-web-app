import React, { useEffect } from "react";
import AssetsImage from "../../assets/AssetsImage";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroLottie from "./HeroLottie";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="mt-[100px] md:mt-[50px] lg:mt-[80px] xl:mt-[85px]"
      data-aos="fade-up-right"
    >
      <div className=" grid grid-cols-1 place-content-center place-items-center  md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-0  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center ">
        {/* Hero Content */}
        {/* Digital Solutions Agency for Growth Business =>  font-bold text-[30px] md:text-[40px]  lg:text-[48px]*/}

        <div className="w-full flex flex-col space-y-4">
          <div className="highLighTextSmScreen md:highLightTextLgScreen lg:highLightTextLgScreen xl:highLightTextLgScreen">
            <p className="select-none font-bold bigFont text-[#1D1B1B] text-[30px] md:text-[48px] lg:text-[55px] xl:text-[55px]">
              Building Digital
            </p>
            <p className="select-none font-bold text-[#EF0178]  text-[30px] md:text-[48px] lg:text-[55px] xl:text-[55px]">
              Products & Delivering
            </p>
            <p className="select-none font-bold text-[#EF0178] text-[30px] md:text-[48px] lg:text-[55px] xl:text-[55px]">
              Experience
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <div>
              <p className="text-[16px] text-[#3c6382] font-[400] ">
                We help build and manage a team of world-class
              </p>
              <p className="text-[16px] text-[#3c6382] font-[400]">
                developers to bring your vision to life
              </p>
            </div>
          </div>
          <div>
            <Link to="/price">
              <Button gradientDuoTone="purpleToBlue" className="px-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        {/* Hero Lottie Section */}
        <div className="w-full ">
          <HeroLottie />
        </div>
      </div>
    </section>
  );
}

export default Hero;
