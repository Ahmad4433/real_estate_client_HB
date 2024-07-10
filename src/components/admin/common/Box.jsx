import React from "react";
import "./box.css";
const Box = ({ children, bg, padding, radius, bottom }) => {
  return (
    <div
      style={{
        backgroundColor: bg,
        padding: padding,
        borderRadius: radius,
        marginBottom: bottom ? bottom : "1.6rem",
      }}
      className="ui_box"
    >
      {children}
    </div>
  );
};

export default Box;
