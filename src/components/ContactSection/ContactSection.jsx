import React, { useEffect } from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
function ContactSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up-right">
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default ContactSection;
