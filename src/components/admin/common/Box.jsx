import React from "react";
import "./box.css";
const Box = ({ children, bg, padding, radius, bottom, hover }) => {
  return (
    <div
      style={{
        backgroundColor: bg,
        padding: padding,
        borderRadius: radius,
        marginBottom: bottom ? bottom : "1.6rem",
      }}
      className={hover ? "ui_box_hove" : "ui_box"}
    >
      {children}
    </div>
  );
};

export default Box;
