import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import ClientSection from "../components/ClientSection";
import WorkCommitment from "../components/WorkCommitment";
import ServiceItem from "../components/ServiceItem";
import WhyChoseUs from "../components/WhyChoseUs";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import TechnologyWeUse from "../components/TechnologyWeUse";
import OurProjectForClient from "../components/OurProjectForClient/OurProjectForClient";
import ClientReviews from "../components/ClientReviews/ClientReviews";
import ContactSection from "../components/ContactSection/ContactSection";
import SubscribeByEmail from "../components/SubscribeByEmail/SubscribeByEmail";
import PriceingSection from "../components/PriceingSection/PriceingSection";
import FooterSection from "../components/FooterSection/FooterSection";
import AttentionDocumentText from "../components/AttentionDocumentText/AttentionDocumentText";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="author" content="Shekh Parbes" />
        <meta
          name="description"
          content="Transform your digital journey with Goditect, a leading software company in Bangladesh. Our expert team specializes in bespoke software development, crafting innovative solutions to propel your business forward. From cutting-edge applications to robust system integrations, we bring your ideas to life. Explore seamless technology experiences and unparalleled expertise at Goditect. Elevate your business with us."
        />
        <meta
          name="keywords"
          content="software development, custom software, IT solutions, technology services, application development, software engineering, web development, mobile app development, software solutions, digital transformation, Goditect, Bangladesh,Savar Dhaka"
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
      <div className="w-[98%] m-auto md:w-[95%] md:m-auto lg:w-[95%] lg:m-auto">
        <Hero />
        <ClientSection />
        <WorkCommitment />
        <ServiceItem />
        <WhyChoseUs />
        <AttentionDocumentText />
        <OurMission />
        <OurVision />
        <TechnologyWeUse />
        <OurProjectForClient />
        <ClientReviews />
        <PriceingSection />
        <SubscribeByEmail />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default Home;
