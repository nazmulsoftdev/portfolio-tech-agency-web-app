import React, { useEffect } from "react";
import PrivacyTitle from "./PrivacyTitle";
import AOS from "aos";
import "aos/dist/aos.css";
function PrivacySecurity() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up-right">
      {/* Title */}
      <PrivacyTitle>III. SECURITY</PrivacyTitle>
      {/* Content */}
      <article className="w-[100%] lg:w-[90%]">
        <div className="flex flex-col space-y-6">
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            We practice all security measure to ensure no unauthorized access,
            alteration, disclosure or destruction of vital data. These can be
            internal reviews of our data collection, storage and processing
            practices and security measures, like encryption and firewall
            settings.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            Our highly secured server creates an invulnerable layer of security
            around our database, which denies unauthorized access using wrong
            password. The password authentication rings an alarm to inform about
            the malicious attempt.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            We take all security measures to shield your database from hackers.
            Although, the frequently evolving IT security techniques & devices
            may challenge to keep it up and robust yet, we overcome this
            challenge by upgrading this security and come up with patches in
            time.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            We work on a variety of security procedures to safeguard your
            information. Your information is sensitive and transmitted through
            secure server and then encrypted into our database to be only
            accessed by those authorized with special access rights to our
            systems, and are required to keep the information confidential.
            Certainly, whatever information we collect from you remains
            consistent with the Privacy Policy, even if we revise it over time.
          </p>
        </div>
      </article>
    </div>
  );
}

export default PrivacySecurity;
