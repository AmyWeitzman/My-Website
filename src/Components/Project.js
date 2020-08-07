import React from 'react';
import '../App.css';
import './Project.css';
import { name as nameMM, longText as longMM, shortText as shortMM, dates as datesMM, techUsed as techMM, link as linkMM} from "../projects/MurderMysteries";
import { name as nameJ, longText as longJ, shortText as shortJ, dates as datesJ, techUsed as techJ, link as linkJ} from "../projects/Jeopardy";
import { name as nameHH, longText as longHH, shortText as shortHH, dates as datesHH, techUsed as techHH, link as linkHH} from "../projects/HouseHunt";
import { name as nameRL, longText as longRL, shortText as shortRL, dates as datesRL, techUsed as techRL, link as linkRL} from "../projects/ReaLife";
import { name as nameVFT, longText as longVFT, shortText as shortVFT, dates as datesVFT, techUsed as techVFT, link as linkVFT} from "../projects/VisFuncTest";
import { name as nameWiki, longText as longWiki, shortText as shortWiki, dates as datesWiki, techUsed as techWiki, link as linkWiki} from "../projects/WikiRaces";

var projectInfo = {
    "MurderMysteries": {
        name: nameMM,
        longText: longMM,
        shortText: shortMM,
        dates: datesMM,
        techUsed: techMM,
        link: linkMM,
    },
    "Jeopardy": {
        name: nameJ,
        longText: longJ,
        shortText: shortJ,
        dates: datesJ,
        techUsed: techJ,
        link: linkJ,
    },
    "HouseHunt": {
        name: nameHH,
        longText: longHH,
        shortText: shortHH,
        dates: datesHH,
        techUsed: techHH,
        link: linkHH,
    },
    "RealLife": {
        name: nameRL,
        longText: longRL,
        shortText: shortRL,
        dates: datesRL,
        techUsed: techRL,
        link: linkRL,
    },
    "VisFuncTest": {
        name: nameVFT,
        longText: longVFT,
        shortText: shortVFT,
        dates: datesVFT,
        techUsed: techVFT,
        link: linkVFT,
    },
    "WikiRaces": {
        name: nameWiki,
        longText: longWiki,
        shortText: shortWiki,
        dates: datesWiki,
        techUsed: techWiki,
        link: linkWiki,
    }
};

function toggleShow(name, textLong, textShort) {
    var button = document.getElementById("button-"+name);
    var text = document.getElementById("text-"+name);
  
    if (button.innerText === "Read more") {
        button.innerHTML = "Read less"; 
        text.innerHTML = textLong;
    } else {
        button.innerHTML = "Read more"; 
        text.innerHTML = textShort;
    }
  } 

  function Project(props) {
    var projectDetails = projectInfo[props.name];
    return (
      <div className="project" onClick={(e) => {
            toggleShow(props.name, projectDetails.longText, projectDetails.shortText)
        }}>
        <br></br>
        <h2>
            <span className="project-name">{projectDetails.name}</span>
            <span className="github-icon" style={{visibility: projectDetails.link !== '' ? 'visible' : 'hidden'}}>
                <a href={projectDetails.link} className="github-icon-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x rotate-y"></i>
                </a>
            </span>
            <span className="project-dates">{projectDetails.dates}</span>
        </h2>
        <h2 className="project-tech">{projectDetails.techUsed}</h2>
        <p className="project-text" id={"text-"+props.name}>{projectDetails.shortText}</p>
        <div className="button-style">
        <button className="show-button" id={"button-"+props.name}>Read more</button>
        </div>
      </div>
    );
  }
  
  export default Project;
