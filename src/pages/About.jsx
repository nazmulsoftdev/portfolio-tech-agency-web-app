import React, { useEffect } from "react";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import AttentionDocumentText from "../components/AttentionDocumentText/AttentionDocumentText";
import WorkCommitment from "../components/WorkCommitment";
import TechnologyWeUse from "../components/TechnologyWeUse";
import OurProjectForClient from "../components/OurProjectForClient/OurProjectForClient";
import SubscribeByEmail from "../components/SubscribeByEmail/SubscribeByEmail";
import FooterSection from "../components/FooterSection/FooterSection";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
function About() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="author" content="Shekh Parbes" />
        <meta
          name="description"
          content="Catalyze your digital success with Goditect, a cutting-edge software company dedicated to transforming visions into powerful, scalable solutions. Based in Bangladesh, we bring a unique blend of innovation and expertise to every project. From custom software development to seamless integrations, our team crafts solutions that empower businesses to thrive in the ever-evolving tech landscape. Elevate your digital presence with tailored software solutions from Goditect, where innovation meets excellence in every line of code."
        />
        <meta
          name="keywords"
          content="Digital marketing,Digital,marketing,Wordpress solution,Wordpress,Graphics design,Graphics, design,App development,Web development,Web, design,service,pricing,best service,hearing,reasonable pricing,Solution,Vision,CMS,digital marketing agency in savar, savar agency,best it in savar,service in savar,service global,ecommerce development,android app,hybrid application,single page application,react js application,react native application,ecommerce service,custom app development,custom web application,software development, custom software, IT solutions, software services, technology company, software engineering, application development, digital solutions, Goditect, Bangladesh"
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
      <section className="mt-[140px]">
        <div className="w-[98%] m-auto md:w-[95%] md:m-auto lg:w-[95%] lg:m-auto">
          <WorkCommitment />
          <OurMission />
          <OurVision />
          <AttentionDocumentText />
          <TechnologyWeUse />
          <OurProjectForClient />
          <SubscribeByEmail />
        </div>
        <FooterSection />
      </section>
    </div>
  );
}

export default About;
