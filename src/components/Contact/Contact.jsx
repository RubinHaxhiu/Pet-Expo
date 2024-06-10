import React from "react";
import "../Contact/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact-us" className="contact-us">
      <h1 className="contact-title">Contact us</h1>

      <div className="contact-us-content">
        
        <div className="contact-us-container">
          <div className="contact-icons">
            <FaLocationDot className="icon"></FaLocationDot>
            <h2>636 Joey Groves Suite 673</h2>
          </div>

          <div className="contact-icons">
            <FaPhone className="icon"></FaPhone>
            <h2>+1-770-220-9958</h2>
          </div>

          <div className="contact-icons">
            <FaEnvelope className="icon"></FaEnvelope>
            <h2>test@test.test</h2>
          </div>
          
        </div>

      </div>

    </div>
  );
};

export default Contact;
