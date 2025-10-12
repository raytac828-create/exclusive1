import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.png";
import i8 from "../assets/i8.png";
import i9 from "../assets/i9.png";
import "./About.css";
import { BadgeDollarSign } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Store } from "lucide-react";
import { Wallet } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
function About() {
  return (
    <div className="about1">
      <div className="about2">
        <div className="about3">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="about4">
          <img src={i6} className=""></img>
        </div>
      </div>
      <div className="about5">
        <div className="about6">
          <Store className="badge" />
          <h4>10.5k </h4>
          <p>Sallers active our site</p>
        </div>
        <div className="about6">
          <BadgeDollarSign className="badge" />
          <h4>33k</h4>
          <p>Monthly Produduct Sale</p>
        </div>
        <div className="about6">
          <ShoppingBag className="badge" />
          <h4>45.5k</h4>
          <p>Customer active in our site</p>
        </div>
        <div className="about6">
          <Wallet className="badge" />
          <h4>25k</h4>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
      <div className="about7">
        <div className="about8">
          <img src={i7} className="" />

          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className="about9">
            <Twitter className="abouticon"  strokeWidth={1}/>
            <Instagram className="abouticon" strokeWidth={1}/>
            <Linkedin className="abouticon" strokeWidth={1}/>
          </div>
        </div>
        <div className="about8">
          <img src={i8} className="" />
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <div className="about9">
            <Twitter className="abouticon" strokeWidth={1}/>
            <Instagram className="abouticon" strokeWidth={1}/>
            <Linkedin className="abouticon" strokeWidth={1}/>
          </div>
        </div>
        <div className="about8">
          <img src={i9} className="" />
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <div className="about9">
            <Twitter className="abouticon" strokeWidth={1}/>
            <Instagram className="abouticon" strokeWidth={1}/>
            <Linkedin className="abouticon" strokeWidth={1}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
