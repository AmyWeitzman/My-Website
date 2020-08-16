import React from 'react';
import '../App.css';
import './About.css';

function About() {
  return (
    <div className="content">
     
      <img src={require("../images/pic_of_me.jpg")} alt="Amy Weitzman" id="my-pic"/>
      <p id="bio">
        <span id="hello-world">Hello world!</span> My name is Amy and I am a student at the University of California, Irvine, majoring in Computer Science. On campus, I am involved with a variety of clubs, including Women in Information and Computer Sciences (WICS), ACM, and Astronomy Club. I have also done research in Biomedical Engineering with UC Irvine's Department of Ophthalmology. I interned at Siemens PLM Software as a Software Engineer Intern and the Department of Defense as a Data Specialist Intern. My technological interests include software development, virtual reality, machine learning, and security. My hobbies include programming side projects, listening to music, playing sports, and exploring astronomy.
      </p>
    </div>
  );
}

export default About;
