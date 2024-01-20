import React, { useEffect } from "react";
import DigitalmarketingImg from "../../assets/banner/marketingImg.png";

import AOS from "aos";
import "aos/dist/aos.css";

const DocumentTextSix = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-14" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-10  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-10">
        {/* Content */}
        <div className="w-full flex flex-col space-y-4">
          <div>
            <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
              Digital Marketing
            </h3>
          </div>
          <div className="w-full">
            <p className="text-[#3c6382] text-[16px] leading-relaxed">
              Ready to take your business to new heights? Partner with Goditect
              for expert digital marketing services. A digital marketing
              campaign is typically delivered via an electronic device, such as
              computer, tablet, phone or other medium, and leverages one or more
              channels, such as social media, search engines, websites, email
              and others, as chosen by the digital marketer based on your goals,
              to raise brand awareness amongst potential and current customers.
              Contact us today to discuss your requirements and receive a free
              consultation. Let’s embark on a journey to digital success
              together!
            </p>
          </div>
        </div>
        {/*  Image  */}
        <div>
          <img
            src={DigitalmarketingImg}
            alt="DigitalmarketingImg.png"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default DocumentTextSix;
