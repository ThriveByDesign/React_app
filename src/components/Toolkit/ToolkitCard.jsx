import React from "react";
import "./Toolkit.css";
function ToolkitCard({ name, imgUrl }) {
  return (
    <div className="toolkit border">
      <div className="toolkit-name">
        <h4>{name}</h4>
      </div>
      <div className="toolkit-img">
        <img src={imgUrl} alt="" className="img-fluid"/>
      </div>
    </div>
  );
}

export default ToolkitCard;
