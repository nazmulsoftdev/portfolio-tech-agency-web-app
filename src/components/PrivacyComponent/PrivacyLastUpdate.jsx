import React, { useEffect } from "react";
import PrivacyTitle from "./PrivacyTitle";
import AOS from "aos";
import "aos/dist/aos.css";
function PrivacyLastUpdate() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up-right">
      {/* Title */}
      <PrivacyTitle>Last Modified Date: 22nd November, 2022</PrivacyTitle>
      {/* Content */}
      <article className="w-[100%] lg:w-[90%]">
        <div className="flex flex-col space-y-6">
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            At Goditect, we always value your privacy and keep your information
            secure and confidential. This online privacy policy applies only to
            information collected through our website and not to information
            collected offline. By using our website “www.goditect.com”, you
            agree with our Privacy Policy. Please read the following 'Questions
            and Answers' to know more it.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            Here, the terms "We" / "Us" / "Our"/”Company” individually and
            collectively refer to Eminenture and the terms "You" /"Your" /
            "Yourself" refer to the users.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            This policy complies with the Information Technology Act, 2000,
            which is pertaining to the collection, use, storage and transfer of
            sensitive personal data or information. Therefore, the rules drafted
            herein and the amended provisions regarding electronic documents/
            records in various statutes come under it. It does not need any
            physical, electronic or digital signature.
          </p>
        </div>
      </article>
    </div>
  );
}

export default PrivacyLastUpdate;
