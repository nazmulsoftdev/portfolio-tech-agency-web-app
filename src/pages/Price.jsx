import React, { useEffect } from "react";
import PriceingSection from "../components/PriceingSection/PriceingSection";
import FooterSection from "../components/FooterSection/FooterSection";
import SubscribeByEmail from "../components/SubscribeByEmail/SubscribeByEmail";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
function Price() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Price</title>
        <meta name="author" content="Shekh Parbes" />
        <meta
          name="description"
          content="Explore transparent and competitive pricing for our premium software solutions at Goditect. Our pricing model is designed to offer flexibility and affordability, ensuring that you get the most value for your investment. Whether you're a startup or an established enterprise, our clear and comprehensive pricing plans cater to your specific needs. Unlock the full potential of our software services without hidden costs. Discover a cost-effective partnership with Goditect and take your business to new heights with our budget-friendly software solutions."
        />
        <meta
          name="keywords"
          content="Software pricing,
          Custom software costs,
          Affordable software solutions,
          Transparent pricing models,
          Competitive software rates,
          Budget-friendly software development,
          Pricing plans for software services"
        />
      </Helmet>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          top: 0,
          left: 0,
          zIndex: 20,
          right: 0,
          height: "2px",
          backgroundColor: "#EF0178",
          position: "fixed",
          transformOrigin: "0%",
        }}
      ></motion.div>
      <section className="mt-[150px]">
        <div className="w-[98%] m-auto md:w-[95%] md:m-auto lg:w-[95%] lg:m-auto">
          <PriceingSection />
          <SubscribeByEmail />
        </div>
        <FooterSection />
      </section>
    </div>
  );
}

export default Price;
