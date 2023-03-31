import React from "react";
import ToolkitCard from "./ToolkitCard";
function Toolkit() {
  return (
    <div className="container-fluid toolkit-mt">
        {/* Container-fluid p */}
      <div className="toolkit-window">
       
  
       
        <ToolkitCard name={"python"} imgUrl={"./NYC.png"} />
        <ToolkitCard name={"python"} imgUrl={"./NYC.png"} />
        <ToolkitCard name={"python"} imgUrl={"./NYC.png"} />
        <ToolkitCard name={"python"} imgUrl={"./NYC.png"} />
        <ToolkitCard name={"python"} imgUrl={"./NYC.png"} />
        <ToolkitCard name={"python"} imgUrl={"./NYC.png"} />
      </div>
    </div>
  );
}

export default Toolkit;
