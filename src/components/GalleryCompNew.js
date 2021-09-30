import React from "react";
import Column from "./Column";

function GalleryCompNew({ imgarr }) {
  // console.log(imgarr);

  // let threshold = 1280;
  // let current = 0;

  // let sum = 0;
  // imgarr.forEach((img) => {
  //   sum += img.height;
  // });

  // console.log(sum);

  return (
    <div className="gallery">
      {/* {imgarr.map((img, i) => {})} */}
      <Column />
    </div>
  );
}

export default GalleryCompNew;
