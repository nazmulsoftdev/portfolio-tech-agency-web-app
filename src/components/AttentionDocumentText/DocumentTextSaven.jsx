import React, { useEffect } from "react";
import EcomImg from "../../assets/banner/ecomBanner.png";

import AOS from "aos";
import "aos/dist/aos.css";

const DocumentTextSaven = () => {
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
              Ecommerce Solutions
            </h3>
          </div>
          <div className="w-full">
            <p className="text-[#3c6382] text-[16px] leading-relaxed">
              Ecommerce solutions from Goditect encompass every grain in the
              sand to ensure traffic and sales are always meeting your growth
              targets. We offer Ecommerce services for designing, developing,
              hosting, marketing and analytics, across industry verticals around
              the globe. Our solutions and services can be customized to meet
              the unique demands of our clients. On the front end, you can
              depend on us to deliver exceptional and strong designs for your
              online store, effective shopping cart and secure Payment Getaway
              integration, all the while creating user journeys that convert
              traffic into sales. At the backend, we have the expertise to drive
              relevant traffic with Ecommerce SEO & PPC Campaigns.
            </p>
          </div>
        </div>
        {/*  Image  */}
        <div>
          <img src={EcomImg} alt="EcomImg.png" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default DocumentTextSaven;
