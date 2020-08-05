import React from 'react';
import '../App.css';
import './Facts.css';

function Facts() {
    return (
      <div  id="tbl-container">
          <br></br>
          <table id="facts-table">
              <thead>
                <tr>
                    <td className="fav-td"><hr className="line"></hr></td>
                    <td className="tbl-title fav-td">Favorites</td>
                    <td className="fav-td"><hr className="line"></hr></td>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td className="left-side fav-td">
                        <p className="fact"><span className="fact-name">Colors</span>
                        <img src={require("../images/purple.png")} alt="the color purple" className="lg-logo logo"></img>
                        <img src={require("../images/olive.png")} alt="the color olive" className="sm-logo logo"></img>
                        <img src={require("../images/gray.png")} alt="the color gray" className="md-logo logo"></img>
                        </p>
                    </td>
                    <td className="right-side fav-td">
                        <p className="fact"><span className="fact-name">Sports</span>
                        <img src={require("../images/football.png")} alt="football" className="md-logo logo"></img>
                        <div className="tooltip">
                            <img src={require("../images/bama_logo.png")} alt="Alabama Crimson Tide football" className="md-logo logo"></img>
                            <span className="tooltiptext">Alabama Crimson Tide</span>
                        </div>
                        <div className="tooltip">
                            <img src={require("../images/niners-logo.png")} alt="San Francisco 49ers football" className="lg-logo logo"></img>
                            <span className="tooltiptext">San Francisco 49ers</span>
                        </div>
                        </p>
                    </td>
                    <td className="right-side fav-td">
                        <p className="fact"><span className="fact-name">Music</span>
                            <span className="color-blue">EDM</span>,
                            <span className="color-red"> pop</span>, 
                            <span className="color-gold"> oldies</span>
                        </p>
                    </td>
              </tr>
              <tr>
                    <td className="left-side fav-td">
                        <p className="fact"><span className="fact-name">Programming</span>
                            <img src={require("../images/python.png")} alt="Python logo" className="md-logo logo"></img>
                            <img src={require("../images/react.png")} alt="React logo" className="lg-logo logo"></img>
                        </p>
                    </td>
                    <td className="left-side fav-td" colSpan="2" id="pad-right">
                        <p className="fact"><span className="fact-name">TV Shows</span>
                            <img src={require("../images/friends.png")} alt="Friends TV Show" id="friends-logo" className="xl-logo logo"></img>
                            <img src={require("../images/himym.png")} alt="How I Met Your Mother TV Show" id="himym-logo" className="lg-logo logo"></img>
                            <img src={require("../images/big-bang-theory.jpg")} alt="Big Bang Theory TV Show" id="big-bang-logo" className="lg-logo logo"></img>
                            <img src={require("../images/seinfeld.png")} alt="Seinfeld TV Show" className="lg-logo logo"></img>
                        </p>
                    </td>
                </tr>
                <tr id="pad-top">
                    <td className="left-side fav-td">
                        <p className="fact"><span className="fact-name">Food</span>
                        <img src={require("../images/pizza.png")} alt="Pizza" className="md-logo logo"></img>
                        <img src={require("../images/chinese-food.png")} alt="Chinese food" className="lg-logo logo"></img>
                        <img src={require("../images/pancakes.png")} alt="Pancakes" className="lg-logo logo"></img>
                        </p>
                    </td>
                    <td className="right-side fav-td">
                        <p className="fact"><span className="fact-name">Ice Cream:</span>
                        <img src={require("../images/oreo.png")} alt="Cookies 'n' Creme" className="lg-logo logo"></img>
                        <img src={require("../images/brownie.png")} alt="Brownie" className="lg-logo logo"></img>
                        </p>
                    </td>
                    <td className="right-side fav-td">
                        <p className="fact"><span className="fact-name">Candy:</span>
                        <img src={require("../images/snickers.png")} alt="Snickers" className="lg-logo logo"></img>
                        <img src={require("../images/reeses.png")} alt="Reeses" className="lg-logo logo"></img>
                        </p>
                    </td>   
                </tr>
                </tbody>
          </table>
          <br></br>
          <hr className="line"></hr>
          <table id="fun-facts">
              <thead>
                    <tr>
                        <td className="tbl-title fav-td"><span class="vert-line">*</span> Fun Facts <span class="vert-line">*</span></td>
                    </tr>
              </thead>
              <tbody>
                  <tr>
                    <td className="fact-td">
                        <p className="fact">I broke my arm on the first day of kindergarten</p>
                    </td>
                  </tr>
                  <tr>
                      <td className="fact-td">
                        <p className="fact">I have a freckles in the shape of the Big Dipper constellation</p>
                      </td>
                  </tr>
                  <tr>
                      <td className="fact-td">
                        <p className="fact">I have gone swimming with sharks</p>
                      </td>
                  </tr>
                  <tr>
                      <td className="fact-td">
                      <p className="fact">I competed in UCI annual Battle of the Brains student vs faculty trivia competition</p>
                      </td>
                  </tr>
                  <tr>
                      <td className="fact-td">
                        <p className="fact">I can solve a Rubik's Cube (slowly)</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    );
  }

export default Facts;
