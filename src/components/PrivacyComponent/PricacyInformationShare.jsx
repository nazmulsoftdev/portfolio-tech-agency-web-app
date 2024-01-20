import React, { useEffect } from "react";
import PrivacyTitle from "./PrivacyTitle";
import AOS from "aos";
import "aos/dist/aos.css";
function PricacyInformationShare() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up-right">
      <PrivacyTitle>II. INFORMATION SHARING</PrivacyTitle>
      {/* Content */}
      <article className="w-[100%] lg:w-[90%]">
        <div className="flex flex-col space-y-6">
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            In a few critical circumstances, we share the personal identifiable
            information with the third party provided that the data subject has
            granted permission prior. These critical cases can be the case when
            any government agency or authority essentially requires it to comply
            with the law. The purpose can be the verification of identity,
            prevention, detection, investigation including cyber incidents, or
            for prosecution and punishment of offences. We disclose it in a good
            faith of law or the judiciary system.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            We share such sensitive information with the esteemed group of
            companies or officers or employees that coincide with the terms and
            condition of our privacy policy, practices & GDPR compliance for
            taking appropriate security measures.
          </p>
        </div>
      </article>
    </div>
  );
}

export default PricacyInformationShare;
