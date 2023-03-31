import React from "react";
import './About.css'
function About() {
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center">About</h1>
      <div className="about gap-4 p-4">
           
          <div className="about-img-container m-auto">
            <img src="./NYC.png" alt="" className="img-fluid rounded " />
          </div>
        
        <div>
          <h1>title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi
            impedit pariatur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Delectus necessitatibus quo tempora.
          </p>
        </div>
 
      </div>
    </div>
  );
}

export default About;
