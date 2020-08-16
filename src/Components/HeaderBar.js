import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeaderBar.css';

function HeaderBar() {
    return (
        <div>
            <h1 id="name">
                <Link to='/' className="link" id="name-style">Amy Weitzman</Link>
                {/* <span className="github-icon-light">
                    <a href="https://github.com/AmyWeitzman/" className="github-icon-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-xs"></i>
                    </a>
                </span> */}
                <h2 id="adjs">Passionate&ensp;<span class="vline">|</span>&ensp;Creative&ensp;<span class="vline">|</span>&ensp;Curious</h2>
            </h1>
            {/* <h3 id="links">
                <a href="./images/Weitzman_Amy.pdf" download className="link">Resume</a>
                <a href="https://github.com/AmyWeitzman/resume/raw/master/Weitzman_Amy.pdf" download className="link">Resume</a>
                <p className="tab">|</p>
                <a href="https://www.linkedin.com/in/amy-weitzman/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
                <p className="tab">|</p>
                <a href="https://github.com/AmyWeitzman" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
            </h3> */}
        </div>
    );
}

export default HeaderBar;