import React, { useEffect } from "react";
import WebsiteImg from "../../assets/banner/websiteImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
const DocumentTextThree = () => {
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
              Website development
            </h3>
          </div>
          <div>
            <p className="text-[#3c6382] text-[16px] leading-relaxed text-left">
              We specialize in creating custom websites that are designed to
              meet the specific needs of your business. Whether you’re looking
              to increase sales, attract new customers, or simply improve your
              online presence, we can help. We offer a variety of website
              development services that are designed to get you results. From
              custom website design and development to SEO and social media
              marketing, we have the tools and experience to help you achieve
              your goals. Contact us today to learn more about our services and
              how we can help you take your business to the next level!
            </p>
          </div>
        </div>
        {/*  Image  */}
        <div className="w-full">
          <img src={WebsiteImg} alt="WebsiteImg.png" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default DocumentTextThree;
