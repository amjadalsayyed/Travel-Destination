import "./Footer.css";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <p>created with love by Amjad Al-Sayyed :)</p>
      <div className="socials">
        <h4>My Socials :</h4>
        <div className="icons-contanier">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
