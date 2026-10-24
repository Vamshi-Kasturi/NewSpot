import React, { useState } from "react";
import "./Footer.css";
import { assets } from "../../assets/img";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="footer-root">
      <div className="footer-main">
        {/* Brand & Mission */}
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo-link">
            <img src={assets.LogoFooter} alt="NewSpot Brand Logo" />
          </Link>
          <p className="footer-tagline">
            Your trusted daily spot for verified global journalism. Bringing you
            accurate, real-time reporting from politics to technology.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/vamshikasturi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/kasturivamshi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://www.instagram.com/_the_vamshi_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="footer-links-grid">
          <div className="link-column">
            <h6>Categories</h6>
            <ul>
              <li><Link to="/">All News</Link></li>
              <li><Link to="/business">Business</Link></li>
              <li><Link to="/tech">Technology</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/entertainment">Entertainment</Link></li>
              <li><Link to="/health">Health</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/saved">Saved Stories</Link></li>
            </ul>
          </div>

          <div className="link-column">
            <h6>Company</h6>
            <ul>
              <li><a href="#about" onClick={(e) => e.preventDefault()}>About Us</a></li>
              <li><a href="#careers" onClick={(e) => e.preventDefault()}>Careers</a></li>
              <li><a href="#editorial" onClick={(e) => e.preventDefault()}>Editorial Guidelines</a></li>
              <li><a href="#press" onClick={(e) => e.preventDefault()}>Press & Media</a></li>
            </ul>
          </div>

          <div className="link-column newsletter-column">
            <h6>Daily Briefing</h6>
            <p className="newsletter-desc">
              Get the top morning headlines delivered straight to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
              />
              <button type="submit" disabled={subscribed}>
                {subscribed ? (
                  <>
                    <i className="fa-solid fa-check"></i> Subscribed!
                  </>
                ) : (
                  "Join"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* Credit & Copyright */}
      <div className="credit-footer">
        <div className="copy-right">
          <p>&copy; {year} NewSpot Media Inc. All rights reserved.</p>
        </div>
        <div className="author">
          <p>
            Designed & Developed with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/vamshikasturi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vamshi Kasturi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
