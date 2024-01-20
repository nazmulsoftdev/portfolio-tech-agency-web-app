import React, { useEffect } from "react";
import ServiceItem from "../components/ServiceItem";
import WhyChoseUs from "../components/WhyChoseUs";
import TechnologyWeUse from "../components/TechnologyWeUse";
import SubscribeByEmail from "../components/SubscribeByEmail/SubscribeByEmail";
import FooterSection from "../components/FooterSection/FooterSection";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
function Service() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Service</title>
        <meta name="author" content="Shekh Parbes" />
        <meta
          name="description"
          content="Unlock the power of innovative software solutions with Goditect. We specialize in creating cutting-edge software tailored to meet your unique business needs. Our expert team of developers leverages the latest technologies to deliver seamless and scalable solutions, ranging from custom software development and application modernization to robust system integration. Transform your digital landscape with Goditect and stay ahead in the rapidly evolving tech world."
        />
        <meta
          name="keywords"
          content="service solutions,it, service, solutions,technologies,businesses,Our Solutions,Digital Marketing,Wordpress & CMS,Graphics Design,Frontend,Backend,Mobile App,development services,
backend app,frontend services,online purchases,SEO,SMM,engaging designs,savar agency,Goditect,quality,We Innovate,Applying,Serve Technology,React application,Node js application,single page application,custom web application,hybrid application,react native application,cheap pricing,cheap price application,cheap price web application,cheap price service,
long tearm service,quality service,ecommerce service"
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
      <section className="mt-[180px]">
        <div className="w-[98%] m-auto md:w-[95%] md:m-auto lg:w-[95%] lg:m-auto">
          <ServiceItem />
          <WhyChoseUs />
          <TechnologyWeUse />
          <SubscribeByEmail />
        </div>
        <FooterSection />
      </section>
    </div>
  );
}

export default Service;
