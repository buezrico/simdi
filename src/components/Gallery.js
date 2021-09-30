import React from "react";
import GalleryCompNew from "./GalleryCompNew";

const getData = () => {
  let data = [
    {
      img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
      height: "500",
      about: "Went to swimming",
    },
    {
      img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
      height: "700",
      about: "Went to swimming",
    },
    {
      img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
      height: "250",
      about: "Went to swimming",
    },
    {
      img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
      height: "500",
      about: "Went to swimming",
    },
    {
      img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
      height: "250",
      about: "Went to swimming",
    },
    {
      img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
      height: "600",
      about: "Went to swimming",
    },
    {
      img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
      height: "400",
      about: "Went to swimming",
    },
  ];
  return data;
};

console.log(data);
function Gallery() {
  let images = getData();
  return (
    <div>
      <GalleryCompNew imgarr={images} />
    </div>
  );
}

export default Gallery;
