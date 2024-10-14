import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h3 className="logo">DishDeliver</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita provident temporibus autem
            unde aut officiis praesentium quod quis, iusto quibusdam deserunt porro incidunt repudiandae quas ea
            doloribus modi ratione.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=61553754974414"><img src={assets.facebook_icon} alt="" /></a>
          
           <a href="https://www.linkedin.com/in/vibhuyadav0061/"> <img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 6377340061</li>
            <a href="https://vibhuyadav.netlify.app/">vibhuyadav.netlify.app</a>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Vibhu yadav - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
