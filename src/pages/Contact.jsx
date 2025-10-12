import "./Contact.css";
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="generalcontact">
      <div className="generalcontact1">
        <div className="contact1">
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <div className="contact2">
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>

      <form>
        <div className="aboutform">
          <input type="text" value={name} placeholder="Your Name" />
          <input type="email" value={email} placeholder="Your Email" />
          <input type="text" value={phone} placeholder="Your Phone" />
        </div>

        <textarea placeholder="Your Message"/>
        <button className="formbutton">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;
