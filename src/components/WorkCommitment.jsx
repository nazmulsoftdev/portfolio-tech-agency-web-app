import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
import lottileWorkImage from "../assets/lottie/lottiework.json";
import { IoIosCheckmarkCircleOutline as MarkIcon } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
const LottieStyle = {
  width: "100%",
  height: 500,
};
function WorkCommitment() {
  useEffect(() => {
    AOS.init();
  }, []);

  const options = {
    animationData: lottileWorkImage,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, LottieStyle);

  return (
    <section className="mt-10 md:mt-16 lg:mt-16" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center gap-y-3 md:grid md:grid-cols-1 md:place-content-center md:place-items-center md:gap-y-0  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-y-0">
        {/* Lottie Content  */}
        <div className="w-full  flex justify-start items-start">{View}</div>
        {/* Content */}
        <div className="w-full flex flex-col space-y-4 ">
          <div className="highLighTextSmScreen md:highLightTextLgScreen lg:highLightTextLgScreen xl:highLightTextLgScreen">
            <h3 className="select-none text-[#1D1B1B] text-[30px] font-bold md:text-[40px] lg:text-[48px]">
              Turning dreams into
            </h3>
            <h3 className="text-[#EF0178] text-[30px] font-bold md:text-[40px] lg:text-[48px]">
              Digital reality your vision
            </h3>
            <h3 className="text-[#EF0178] text-[30px] font-bold md:text-[40px] lg:text-[48px]">
              Our solution
            </h3>
          </div>
          <div>
            <p className="text-[#3c6382]  text-[16px] leading-normal">
              We are always ready to provide you with
              <br />
              the best service at reasonable pricing
              <br /> We look forward to hearing from you
            </p>
          </div>
          {/* Service and solution text content */}
          <div className="mt-5">
            <ul className="flex flex-col space-y-3">
              <li className="flex space-x-2 items-center">
                <MarkIcon
                  color="white"
                  size={20}
                  className="bg-[#0a3d62] rounded-full hover:bg-[#55efc4]"
                />
                <p className="text-[#3c6382]  text-[16px] font-[400] ">
                  Digital marketing
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <MarkIcon
                  color="white"
                  size={20}
                  className="bg-[#0a3d62] rounded-full hover:bg-[#55efc4]"
                />
                <p className="text-[#3c6382]  text-[16px] font-[400]">
                  Wordpress solution
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <MarkIcon
                  color="white"
                  size={20}
                  className="bg-[#0a3d62] rounded-full hover:bg-[#55efc4]"
                />
                <p className="text-[#3c6382]  text-[16px] font-[400]">
                  Graphics design
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <MarkIcon
                  color="white"
                  size={20}
                  className="bg-[#0a3d62] rounded-full hover:bg-[#55efc4]"
                />
                <p className="text-[#3c6382]  text-[16px] font-[400]">
                  Web design
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <MarkIcon
                  color="white"
                  size={20}
                  className="bg-[#0a3d62] rounded-full hover:bg-[#55efc4]"
                />
                <p className="text-[#3c6382]  text-[16px] font-[400]">
                  Web development
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <MarkIcon
                  color="white"
                  size={20}
                  className="bg-[#0a3d62] rounded-full hover:bg-[#55efc4]"
                />
                <p className="text-[#3c6382]  text-[16px] font-[400]">
                  App development
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkCommitment;
