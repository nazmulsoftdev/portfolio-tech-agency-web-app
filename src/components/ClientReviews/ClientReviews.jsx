import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { clientReviewData } from "../../../utils/localDb";
import ClientReviewItem from "./ClientReviewItem";
import getWindowSize from "../../../utils/getWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";
function ClientReviews() {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(getWindowSize());

  useEffect(() => {
    setData(clientReviewData);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section className="mt-24 md:mt-28 lg:mt-32" data-aos="fade-up-right">
      <div>
        <div className="flex justify-center items-center mb-10">
          <h3 className="text-[#DF006B] font-bold  text-[30px] md:text-[40px] lg:text-[45px] xl:lg:text-[45px]">
            Our Client Reviews
          </h3>
        </div>
        {/* Slider */}
        <div className="w-full mt-10">
          <div className="w-full  md:w-[90%] md:m-auto lg:w-[80%] lg:m-auto xl:w-[80%] xl:m-auto ">
            <Swiper
              slidesPerView={size.innerWidth >= 700 ? 3 : 1}
              spaceBetween={20}
              freeMode={true}
              pagination={{ el: ".swiper-pagination" }}
              modules={[FreeMode, Pagination]}
              className="bg-white"
              // className={styled.SwiperContainer}
            >
              {data?.map((item) => (
                <SwiperSlide key={item.id} className="bg-white">
                  <ClientReviewItem items={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
