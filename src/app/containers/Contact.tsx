import React from "react";
import SideSection from "../components/SideSection";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <SideSection
      title="Contact"
      description="We're eager to connect and discuss innovative solutions for traceability and recycling. Reach out through our contact form, or join us for coffee at our Bucharest office. Your input is invaluable to driving change in these critical sectors."
      reverseWrap={false}
    >
      <ContactForm />
    </SideSection>
  );
};

export default Contact;
