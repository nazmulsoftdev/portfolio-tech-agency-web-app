import React, { useEffect } from "react";
import AssetsImage from "../assets/AssetsImage";
import AOS from "aos";
import "aos/dist/aos.css";

function ClientSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="fade-right">
      <div className="mt-5 flex flex-col justify-center items-center space-y-5">
        <h4 className="text-[#DF006B] font-bold  text-[30px] md:text-[40px] lg:text-[45px] xl:lg:text-[45px]">
          Meet Our Clients
        </h4>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-[17px] text-[#3c6382] font-[400] text-center">
            This guys are using our service and they are
            <br /> more than happier ever.
          </p>
        </div>
        {/* big screen */}
        <div className="w-[95%] m-auto grid grid-cols-3 place-content-center place-items-center lg:w-[80%] lg:m-auto lg:grid lg:grid-cols-6 lg:place-content-center lg:place-items-center">
          <div className="w-[130px] ">
            <img
              className="shrink-1 w-full"
              src={AssetsImage.ClientLog.img1}
              alt="logo"
            />
          </div>
          <div className="w-[130px] ">
            <img
              className="w-full"
              src={AssetsImage.ClientLog.img2}
              alt="logo"
            />
          </div>
          <div className="w-[130px] ">
            <img
              className=" w-full"
              src={AssetsImage.ClientLog.img3}
              alt="logo"
            />
          </div>
          <div className="w-[130px] ">
            <img
              className="w-full"
              src={AssetsImage.ClientLog.img4}
              alt="logo"
            />
          </div>
          <div className="w-[130px] ">
            <img
              className="w-full"
              src={AssetsImage.ClientLog.img5}
              alt="logo"
            />
          </div>
          <div className="w-[130px] ">
            <img
              className="w-full"
              src={AssetsImage.ClientLog.img6}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
