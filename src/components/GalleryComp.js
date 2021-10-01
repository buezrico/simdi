const GalleryComp = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="container inner">
        <div className="title ">
          <p className="text-dark styled-text">Gallery</p>
        </div>

        <div className="images">
          <div className="image-set">
            <div className="image">
              <img src="images/img43.webp" alt="" loading="lazy" />
            </div>

            <div className="image">
              <img src="images/img48.webp" alt="" loading="lazy" />
            </div>
            <div className="image">
              <img src="images/img1.webp" alt="" loading="lazy" />
            </div>
            <div className="image">
              <img src="images/img24.webp" alt="" loading="lazy" />
            </div>
          </div>

          <div className="image-set">
            <div className="image">
              <img src="images/img2.webp" alt="" loading="lazy" />
            </div>
            <div className="image">
              <img src="images/img45.webp" alt="" loading="lazy" />
            </div>
            <div className="image">
              <img src="images/img39.webp" alt="" loading="lazy" />
            </div>
            <div className="image">
              <img src="images/img36.webp" alt="" loading="lazy" />
            </div>
          </div>

          <div className="image-set">
            <div className="image">
              <img src="images/img29.webp" alt="" loading="lazy" />
            </div>
            <div className="image">
              <img src="images/img10.webp" alt="" loading="lazy" />
            </div>

            <div className="image">
              <img src="images/img31.webp" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComp;
