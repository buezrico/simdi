import { useEffect, useState } from "react";
import { Anchor } from "antd";
const NavbarComp = () => {
  const [nav, setNav] = useState(false);
  const { Link } = Anchor;

  return (
    <nav className="navbar text-primary">
      <div className="container inner">
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <a href="https://www.instagram.com/simdi_j/">
            <i className="fab fa-instagram"></i>
          </a>
          <i className="fab fa-twitter"></i>
        </div>

        <button
          className="btn rounded btn-outline-primary py-1 menubtn"
          onClick={() => setNav(!nav)}
        >
          <i className="fas fa-bars" id="menu"></i>
        </button>

        <button className="btn rounded  book-me">
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
                    <Link
                      href="#contact"
                      title="Get In Touch"
                      className="navLink"
                    />
                  </Anchor>
                </a>
              </div>
              <div className="close navitem" onClick={() => setNav(!nav)}>
                <button className="btn btn-primary text-light px-3 py-1">
                  <i className="fas fa-times"></i>
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
