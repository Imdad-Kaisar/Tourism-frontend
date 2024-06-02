import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Footer from "../footer/Footer";

const Result = () => {
  return (
    <p> Your message has been successfully sent!!</p>
  );
};

function Contact(props) {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tgq2a2g', 'template_fefgecc', e.target, {
        publicKey: 'e8-gSG1oCk6OqYWTP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          showResult(true); // Show the success message
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="footer-right">
      <p>Contact Us</p>

      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button >Send</button>
        <div className="row">
          {result ? <Result /> : null}
        </div>
      </form>
    </div>
  );
}

export default Contact;
