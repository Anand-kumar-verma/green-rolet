import React from "react";

const RolletIFrame = () => {
  return (
    <iframe
      src="http://localhost:3000/index.html"
      title="Iframe Example"
      width={500}
      height={500}
    //   style={{maxWidth:'500px',maxHeight:'500px'}}
    ></iframe>
  );
};

export default RolletIFrame;
