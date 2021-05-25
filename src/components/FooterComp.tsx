const FooterComp = () => {
  return (
    <footer>
      <div className="container inner">
        <div className="wrapper">
          <div className="left">
            <div className="contact mb-5">
              <h6 className="mb-3">Contact</h6>
              <div className="address mb-3">
                <i className="fas fa-map-marker"></i>
                <small>
                  239 Ikwerre Road, Mile 4, Rumueme, Port Harcourt, Rivers
                  State, Nigeria.
                </small>
              </div>
              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <small>+234 810 916 9579</small>
              </div>
              <div className="email">
                <i className="fas fa-envelope"></i>
                <small>simdi@gmail.com</small>
              </div>
            </div>
            <div className="socia mb-3">
              <h6 className="mb-3">Stay Connected</h6>

              <div className="icons">
                <div className="icon">
                  <i className="fab fa-facebook-f"></i>
                  <small>facebook</small>
                </div>
                <div className="icon">
                  <i className="fab fa-instagram"></i>
                  <small>instagram</small>
                </div>
                <div className="icon">
                  <i className="fab fa-twitter"></i>
                  <small>twitter</small>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h6>Leave a Message</h6>
            <form>
              <div className="form row ">
                <div className="form-group col-12 mb-3">
                  <input
                    className="form-control"
                    // value="Full Name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-12 mb-3">
                  <input
                    className="form-control"
                    // value="Full Name"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group col-12 mb-3">
                  <input
                    className="form-control"
                    // value="Full Name"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-12 mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                  />
                </div>

                <div className="send-button ">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="copy-right mt-5 text-center">
          <small>Simdi &copy; 2021 </small>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
