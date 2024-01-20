import React, { useEffect } from "react";
import PrivacyBanner from "../components/PrivacyComponent/PrivacyBanner";
import PrivacyLastUpdate from "../components/PrivacyComponent/PrivacyLastUpdate";
import PrivacyUserInformation from "../components/PrivacyComponent/PrivacyUserInformation";
import PricacyInformationShare from "../components/PrivacyComponent/PricacyInformationShare";
import PrivacySecurity from "../components/PrivacyComponent/PrivacySecurity";
import PrivacyCookie from "../components/PrivacyComponent/PrivacyCookie";
import PrivacyConfident from "../components/PrivacyComponent/PrivacyConfident";
import SubscribeByEmail from "../components/SubscribeByEmail/SubscribeByEmail";
import ContactSection from "../components/ContactSection/ContactSection";
import FooterSection from "../components/FooterSection/FooterSection";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
function PrivacyPage() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Privacy</title>
        <meta name="author" content="Shekh Parbes" />
        <meta
          name="description"
          content="Explore our commitment to your data privacy at Goditect. Our Privacy Policy outlines how we secure, manage, and protect your information. Committed to transparency, we prioritize the confidentiality and integrity of your data. Trust Goditect for reliable software solutions with a steadfast dedication to user privacy. Learn more about our privacy practices and how we safeguard your digital trust."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, software company privacy, user data, information security, GDPR compliance, data privacy, software services, Goditect, privacy statement"
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
      <section className="mt-[100px]">
        <PrivacyBanner />
        <div className="w-[98%] m-auto md:w-[95%] md:m-auto lg:w-[95%] lg:m-auto">
          <div className="w-full grid grid-cols-1 gap-5">
            <PrivacyLastUpdate />
            <PrivacyUserInformation />
            <PricacyInformationShare />
            <PrivacySecurity />
            <PrivacyCookie />
            <PrivacyConfident />
          </div>
          <SubscribeByEmail />
          <ContactSection />
        </div>
        <FooterSection />
      </section>
    </div>
  );
}

export default PrivacyPage;
