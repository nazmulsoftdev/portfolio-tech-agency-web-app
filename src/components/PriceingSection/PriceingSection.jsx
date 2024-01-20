import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import PricingHeader from "./PricingHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import PriceingSelectModal from "./PriceingSelectModal";
import PriceCardOne from "./PriceCardOne";
import PriceCardTwo from "./PriceCardTwo";
import PriceCardThree from "./PriceCardThree";
function PriceingSection() {
  const [open, setOpen] = useState(false);

  //  open modal handler

  const openModalHandler = () => {
    setOpen(true);
  };

  // close modal handler

  const closeModalHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="mt-24 md:mt-28 lg:mt-32" data-aos="flip-left">
        <PricingHeader />
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* <!-- Pricing Card One --> */}
               <PriceCardOne/>
              {/* <!-- Pricing Card Two--> */}
               <PriceCardTwo/>
              {/* <!-- Pricing Card Three--> */}
              <PriceCardThree/>
            </div>
          </div>
        </section>
      </div>
      <PriceingSelectModal open={open} closeModalHandler={closeModalHandler} />
    </>
  );
}

export default PriceingSection;
