import React from 'react';
import '../App.css';
import './Home.css';

function Home() {
  return (
    <div className="content">
      <h2 id="welcome-message" className="centered">Welcome to my website!</h2>
      <h3 className="home-page-text centered">Here you will find everything <span id="purple">Amy Weitzman</span></h3>
      <h6 className="centered">Well, almost everything</h6>
   </div>
  );
}

export default Home;
