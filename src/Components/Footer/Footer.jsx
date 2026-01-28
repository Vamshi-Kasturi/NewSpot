import React from "react";
import "./Footer.css";
import { assets } from "../../assets/img";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div className="footer-main">
          <div className="footer-logo">
            <img src={assets.LogoFooter} alt="Logo" />
            <p>
              Your daily spot for truth. We bring you the latest,
              <br /> most accurate news from around the globe,
              <br /> covering everything from politics to pop culture.
            </p>
            <div className="icons">
              <Link target="_blank"  to="https://www.linkedin.com/in/vamshikasturi/">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link target="_blank" to="https://github.com/kasturivamshi">
                <i className="fa-brands fa-square-github"></i>
              </Link>
              <Link target="_blank" to="https://www.instagram.com/_the_vamshi_/">
                <i className="fa-brands fa-square-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="footer-link">
            <div className="company-links link-divs">
              <h6>Company</h6>
              <ul>
                <li>
                  <Link target="_blank" to="#">About Us</Link>
                </li>
                <li>
                  <Link target="_blank" to="#">Careers</Link>
                </li>
                <li>
                  <Link target="_blank" to="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="category-links link-divs">
              <h6>Category</h6>
              <ul>
                <li>
                  <Link to="/"> All News </Link>
                </li>
                <li>
                  <Link  to="/"> Business </Link>
                </li>
                <li>
                  <Link  to="/"> Sports </Link>
                </li>
                <li>
                  <Link  to="/"> Entertainment </Link>
                </li>
                <li>
                  <Link  to="/"> Health </Link>
                </li>
                <li>
                  <Link  to="/"> Science </Link>
                </li>
                <li>
                  <Link  to="/"> Technology </Link>
                </li>
              </ul>
            </div>
            <div className="Support-links link-divs">
              <h6>Support</h6>
              <ul>
                <li>
                  <Link target="_blank" to="#"> Privacy Policy </Link>
                </li>
                <li>
                  <Link target="_blank" to="#"> Terms of Service</Link>
                </li>
                <li>
                  <Link target="_blank" to="#"> Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="credit-footer">
          <div className="copy-right">
            <p> &copy; {year} NewSpot | All Rights Reserved. </p>
          </div>
          <div className="author">
            <p>
              Made with ❤️ by <Link target="_blank" to="https://www.linkedin.com/in/vamshi-kasturi/">Vamshi Kasturi</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
