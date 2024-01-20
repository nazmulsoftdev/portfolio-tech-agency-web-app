import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
import lottileVisionImage from "../assets/lottie/visionlottie.json";
import AOS from "aos";
import "aos/dist/aos.css";
const LottieStyle = {
  width: 320,
};
function OurVision() {
  const options = {
    animationData: lottileVisionImage,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, LottieStyle);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="mt-16" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-10  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center ">
        {/* Content */}
        <div className="w-full flex flex-col space-y-2">
          <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
            Our Vision
          </h3>
          <div>
            <p className="text-[#3c6382] text-[16px] text-left leading-relaxed">
              Our vision is to be your trusted business partner to set new
              standards
              <br />
              for excellence in this industry
            </p>
            <p className="text-[#3c6382] text-[16px] text-left leading-relaxed">
              We want to create digital solutions for you. In this IT field,
              <br /> we want to build strong relationships with our customers by
              <br />
              providing the best solution to all your needs
            </p>
          </div>
        </div>
        {/* Lottie Content  */}
        <div className="mb-5 w-full ">{View}</div>
      </div>
    </section>
  );
}

export default OurVision;
