import React from "react";

function FooterSection() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <h3>ADDRESS</h3>
          <p>2507 Parker Boulevard Oakland, CA 76107</p>
        </div>
        <div className="footer-column">
          <h3>PHONES</h3>
          <p>Book a ride: (0481) 123 987 2411</p>
          <p>Office: (0481) 123 987 2412</p>
        </div>
        <div className="footer-column">
          <h3>WORKING HOURS</h3>
          <p>Mon-Sat: 07:00 - 17:00</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1801/1801444.png"
            alt="Taxi Logo"
          />
         
          <p>
            DriverUP has provided car services in Oakland area since 2005. What
            started as a small company has grown into a premier limousine and
            private transportation company.
          </p>
        </div>
        <div className="footer-services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Experiential Tours</li>
            <li>Wedding Limousine</li>
            <li>Corporate Travel</li>
            <li>Airport Transportation</li>
            <li>Nationwide Transportation</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>DriverUP</h3>
          <p>2507 Parker Boulevard, Oakland</p>
          <p>(0481) 123 987 2411</p>
          <p>(0481) 123 987 2412</p>
          <p>contact@autoride.com</p>
          <p>Mon-Sat: 07:00 - 17:00</p>
        </div>
        <div className="footer-subscribe">
          <h3>SUBSCRIBE</h3>
          <input type="email" placeholder="name@flowbite.com" />
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2021 DriverUP Theme by Wael Hassine</p>
        <div className="social-icons">
          <a href="#!">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#!">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#!">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
