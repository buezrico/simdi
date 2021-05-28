import { useEffect, useState } from "react";
import { Anchor } from "antd";
const NavbarComp = () => {
  const [nav, setNav] = useState(false);
  const { Link } = Anchor;

  return (
    <nav className="navbar text-primary">
      <div className="container inner">
        <div className="social-icons">
          <a href="https://www.instagram.com/simdi_j/">
            <i className="fab fa-instagram"></i>
          </a>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
        </div>

        <button className="btn rounded-circle btn-outline-primary py-1">
          <i className="fas fa-bars" id="menu" onClick={() => setNav(!nav)}></i>
        </button>

        <button className="btn rounded-0 btn-outline-primary boke-me px-md-4">
          <Anchor affix={false} showInkInFixed={false}>
            <Link href="#contact" title="Book Me" />
          </Anchor>
        </button>

        <div className="menu" style={{ top: nav ? "10%" : "" }}>
          <div className="container menu-wrapper">
            <div className="menu-items">
              <div className="navitem home-link">
                <a className="nav-link">
                  <Anchor
                    onClick={() => setNav(!nav)}
                    affix={false}
                    showInkInFixed={false}
                  >
                    <Link href="#home" title="Home" />
                  </Anchor>
                </a>
              </div>
              <div className="navitem gallery-link">
                <a className="nav-link">
                  <Anchor
                    onClick={() => setNav(!nav)}
                    affix={false}
                    showInkInFixed={false}
                  >
                    <Link href="#gallery" title="Gallery" />
                  </Anchor>
                </a>
              </div>
              <div className="navitem about-link">
                <a className="nav-link">
                  <Anchor
                    onClick={() => setNav(!nav)}
                    affix={false}
                    showInkInFixed={false}
                  >
                    <Link href="#about" title="About Me" />
                  </Anchor>
                </a>
              </div>
              <div className="navitem contact-link">
                <a className="nav-link">
                  <Anchor
                    onClick={() => setNav(!nav)}
                    affix={false}
                    showInkInFixed={false}
                  >
                    <Link href="#contact" title="Get In Touch" />
                  </Anchor>
                </a>
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
