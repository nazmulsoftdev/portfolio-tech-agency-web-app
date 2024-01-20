import React, { useEffect } from "react";
import PrivacyTitle from "./PrivacyTitle";
import AOS from "aos";
import "aos/dist/aos.css";
function PrivacyCookie() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up-right">
      {/* Title */}
      <PrivacyTitle>IV. COOKIES</PrivacyTitle>
      {/* Content */}
      <article className="w-[100%] lg:w-[90%]">
        <div className="flex flex-col space-y-6">
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            Cookies are small files that a Website or its Service Provider
            transfers to your computer through your Web browser. These
            automatically collect limited information about your browser or
            internet connection, tapping on your IP address when you visit our
            website. However, this IP address does not disclose your personal
            identity.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            It enables the Websites or Service Provider Systems to recognize
            your browser and capture and remembers certain information. We use
            cookies to compile cumulative data about our Website traffic and
            Website interaction so that we can offer better Website experiences
            in the future.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            The cookies are effective in showing ways to improve the
            responsiveness of the sites for our users. We collect the unique
            browsing information of every user to get deep with his web
            experience & interests on the basis of the identified computer ID.
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

export default PrivacyCookie;
