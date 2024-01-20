import React, { useEffect } from "react";
import PrivacyTitle from "./PrivacyTitle";
import AOS from "aos";
import "aos/dist/aos.css";

function PrivacyConfident() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up-right">
      {/* Title */}
      <PrivacyTitle>V. CONFIDENTIALITY</PrivacyTitle>
      {/* Content */}
      <article className="w-[100%] lg:w-[90%]">
        <div className="flex flex-col space-y-6">
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            We use your information with Integrity, High Security and
            Confidentiality. We do not share, transfer or sell it to other
            parties except trusted third parties who assist us in operating our
            website, conducting our business, or servicing you, as long as those
            parties agree to keep this information confidential. We may also
            release your information when we believe release is appropriate to
            comply with the law, enforce our site policies, or protect ours or
            others rights, property, or safety.
          </p>
        </div>
      </article>
    </div>
  );
}

export default PrivacyConfident;
