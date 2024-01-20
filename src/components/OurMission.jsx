import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
import lottileMissionImage from "../assets/lottie/missionlottie.json";
import AOS from "aos";
import "aos/dist/aos.css";
const LottieStyle = {
  width: 320,
};
function OurMission() {
  useEffect(() => {
    AOS.init();
  }, []);

  const options = {
    animationData: lottileMissionImage,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, LottieStyle);

  return (
    <section className="mt-16" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-10 lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-5">
        {/* Lottie Content */}
        <div className="w-full">{View}</div>
        {/* Content */}
        <div className="w-full flex flex-col space-y-3">
          <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
            Our Mission
          </h3>
          <div>
            <p className="text-[#3c6382] text-[16px] leading-relaxed">
              Our company’s aim is to produce best software development and IT
              <br />
              Solutions for our respected customers.
            </p>
            <p className="text-[#3c6382] text-[16px] leading-relaxed">
              By providing professional services, we deliver your expected
              <br />
              outcomes! Our mission is to support the expansion of your
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
