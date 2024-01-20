import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import FooterSection from "../components/FooterSection/FooterSection";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
function Contact() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="author" content="Shekh Parbes" />
        <meta
          name="description"
          content="Connect with Goditect Your Gateway to Exceptional Software Solutions. Reach out to our dedicated team through our contact page for inquiries, collaborations, or support. Whether you're seeking custom software development, IT solutions, or expert guidance, we're here to elevate your digital journey. Embrace innovation with Goditect  your partner in shaping the future of technology. Contact us today for a seamless integration of ideas and expertise"
        />
        <meta
          name="keywords"
          content="contact us, software company, IT solutions, software development, technology services, business inquiries, collaboration, support, Goditect, get in touch, 01790323963, 01935-615775, Goditect Savar"
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
          <ContactSection />
        </div>
        <FooterSection />
      </section>
    </div>
  );
}

export default Contact;
