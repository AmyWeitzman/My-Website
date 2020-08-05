import React from 'react';
import '../App.css';

import Project from "./Project";

function Projects() {
  return (
    <div className="content">
        <Project name="VisFuncTest"></Project>
        <br></br>
        <Project name="RealLife"></Project>
        <br></br>
        <Project name="HouseHunt"></Project>
        <br></br>
        <Project name="Jeopardy"></Project>
        <br></br>
        <Project name="MurderMysteries"></Project>
    </div>
  );
}

export default Projects;
