import React, { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import lottileSupport from "../assets/lottie/supportlottie.json";
import { IoIosCheckmarkCircleOutline as MarkIcon } from "react-icons/io";
import { whyChooseContent } from "../../utils/localDb";
import AOS from "aos";
import "aos/dist/aos.css";
const LottieStyle = {
  width: "100%",
};
function WhyChoseUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(whyChooseContent);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const options = {
    animationData: lottileSupport,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, LottieStyle);

  return (
    <section className="mt-20" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center gap-y-5 md:grid md:grid-cols-1 md:place-content-center md:place-items-center md:gap-y-0  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-16">
        {/* Lottie Content  */}
        <div className="w-full">{View}</div>
        {/* Content */}
        <div className="w-full h-full  flex flex-col  items-start space-y-3">
          <div>
            <h3 className="text-[#DF006B] font-bold  text-[30px] md:text-[40px] lg:text-[45px] xl:lg:text-[45px]">
              Why choose us?
            </h3>
          </div>
          <div className="mb-3">
            <p className="text-[#3c6382] text-[16px] leading-normal">
              At Goditect, you will get all your needed
              <br />
              services with top-notch quality and at reasonable pricing.
            </p>
          </div>
          {/* Content */}
          <div>
            {data?.map((item) => {
              const { id, title, content } = item || {};
              return (
                <div key={id} className="flex items-center space-x-3 mb-3">
                  <div>
                    <MarkIcon color="#0a3d62" size={30} />
                  </div>
                  <div>
                    <h3 className="text-[25px] text-[#044072] font-bold">
                      {title}
                    </h3>
                    <p className="text-[#3c6382] text-[15px] text-left leading-normal">
                      {content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoseUs;
