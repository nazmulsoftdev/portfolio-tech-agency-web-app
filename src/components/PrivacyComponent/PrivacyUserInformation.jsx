import React, { useEffect } from "react";
import PrivacyTitle from "./PrivacyTitle";
import AOS from "aos";
import "aos/dist/aos.css";
function PrivacyUserInformation() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up-right">
      <PrivacyTitle>I. USER INFORMATION</PrivacyTitle>
      {/* Content */}
      <article className="w-[100%] lg:w-[90%]">
        <div className="flex flex-col space-y-6">
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            When submitting Services Appointment requests Applications, as
            appropriate, the users are required to enter your information, as
            Name, E-mail, Mailing Address, Sex, Age, PIN Code, Phone Number or
            Debit/Credit Card with other information. However, you may visit our
            Website anonymously.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            The aforesaid information shall not be considered as sensitive if
            you provide it voluntarily or, if it is freely available &
            accessible in the public domain, as it is what the Right to
            Information Act, 2005 or, any other law for the time being
            implemented state.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            We make a suitable use of your personal and business information to
            improve the credibility of our Website and enhance Customer
            experience thereof. Any information collected from you may be used
            for improving the Customer Service(s) & Personalising Experience &
            Evolving New Service(s) corresponding to your occupation, interest
            and the likes.
          </p>
          <p className="text-[#3c6382]  text-justify text-[16px] lg:text-[22px]">
            Your information will not be sold, exchanged, transferred, or given
            to any other company for any reason whatsoever, without your
            consent, except for the purpose being expressed for delivering the
            service(s).
          </p>
        </div>
      </article>
    </div>
  );
}

export default PrivacyUserInformation;
