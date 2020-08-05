import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './NavBar.css';

function NavBar() {
    return (
        <div id="nav-container">
            <nav id="nav-bar">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    <li> <Link to='/projects'>Projects</Link></li>
                    <li> <Link to='/hobbies'>Hobbies</Link></li>
                    <li> <Link to='/blog'>Blog</Link></li>
                    <li> <Link to='/facts'>Fun Facts</Link></li>
                    <li> <Link to='/quotes'>Quotes</Link></li>
                    <li> <Link to='/contact'>Connect</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;