import React, { useEffect } from "react";
import PrivacyIcon from "../../assets/icons/privacy.png";
import AOS from "aos";
import "aos/dist/aos.css";
function PrivacyBanner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="fade-up-right">
      <div className="w-full h-[350px] bg-gradient-to-b from-[#1e272e] to-[#0a3d62] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-2">
          <img src={PrivacyIcon} alt="privacy.png" className="w-[100px]" />
          <p className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
            Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyBanner;
