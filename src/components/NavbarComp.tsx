const NavbarComp = () => {
  return (
    <nav className="navbar text-primary">
      <div className="container">
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
        </div>

        <button className="btn rounded-circle btn-outline-primary py-1">
          <i className="fas fa-bars"></i>
        </button>

        <button className="btn rounded-0 btn-outline-primary">Book Me</button>
      </div>
    </nav>
  );
};

export default NavbarComp;
