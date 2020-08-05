import React from 'react';
//import TagCloud from 'react-tag-cloud';
import '../App.css';
import './Hobbies.css';

function Hobbies() {
  return (
    <div className="content">
        <br></br>
        <div id="hobby-container">
            <img src={require("../images/hobby-cloud.PNG")} alt="Hobbies" id="hobby-cloud"/>
        </div>
    </div>
  );
}

export default Hobbies;
