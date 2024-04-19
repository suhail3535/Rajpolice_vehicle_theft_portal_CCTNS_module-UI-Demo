import React from "react";
import "./navbar.css";
import ncrb from "../../images/ncrb.jpg";
import cctns from "../../images/channels4_profile.jpg";
import ashok from "../../images/ashok.jpg";
import Bar from "./Bar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="main_nav_cont">
        <div className="nav_cont">
          <div className=" first_logo_div">
            <Link to={"/"}>
              <img
                style={{ height: "50px", marginTop: "6px" }}
                src={cctns}
                alt=""
              />
            </Link>

            <div className="details">
              <p className="crime1">सी सी टी एन एस</p>
              <p className="crime">
                क्राइम एण्ड क्रिमिनल ट्रैकिंग नेटवर्क एण्ड सिस्टम
              </p>
            </div>
          </div>
          <div className="logo_div_second">
            <div>
              <img className="" src={ncrb} alt="" />
              <img className="" src={ashok} alt="" />
            </div>
          </div>
        </div>
        <div className="ruler_bar">
          <botton>मुख्य पृष्ठ   |</botton>
          <botton>शिकायत   |</botton>
          <botton>नागरिक सेवाएँ   |</botton>
          <botton>खोज स्थिति   |</botton>
          <botton>नागरिक जानकारी   |</botton>
          <botton>देखें प्राथमिकी   |</botton>
          <botton>स्थल का मानचित्र   |</botton>
          <botton>अक्सर पूछे जाने वाले प्रश्न   |</botton>
          <botton>नागरिक की प्रतिक्रिया   |</botton>
          <botton>सिटीजन टिप   |</botton>
          <botton>हमसे संपर्क करें   |</botton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
