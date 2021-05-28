import { useEffect, useState } from "react";
import { gsap } from "gsap";

const NavbarComp = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="navbar text-primary">
      <div className="container">
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
        </div>

        <button className="btn rounded-circle btn-outline-primary py-1">
          <i className="fas fa-bars" id="menu" onClick={() => setNav(!nav)}></i>
        </button>

        <button className="btn rounded-0 btn-outline-primary px-md-4">
          Book Me
        </button>

        <div className="menu" style={{ top: nav ? "10%" : "" }}>
          <div className="container menu-wrapper">
            <div className="menu-items">
              <div className="navitem home-link">
                <a className="nav-link">Home</a>
              </div>
              <div className="navitem gallery-link">
                <a className="nav-link">Gallery</a>
              </div>
              <div className="navitem about-link">
                <a className="nav-link">About Me</a>
              </div>
              <div className="navitem contact-link">
                <a className="nav-link">Contact Me</a>
              </div>
              <div className="close navitem d-flex">
                <button className="btn rounded-circle btn-primary text-light px-3 py-1">
                  <i className="fas fa-times" onClick={() => setNav(!nav)}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
