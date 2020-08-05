import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../App.css';
import './Quotes.css';

function Quotes() {
  return (
    <div className="content">
        <Carousel id="carousel" showThumbs={false} infiniteLoop useKeyboardArrows autoPlay autoPlaySpeed="5000" showStatus={false} showIndicators={false} swipeable={true}>
            <div>
                <p className="quote">"Washington crossed the Delaware but couldn't wade the Tide."</p>
                <p className="cite-quote">- Fans after Alabama's Rose Bowl win over Washington in 1926</p>
            </div>
            <div>
                <p className="quote">"You miss 100% of the shots you don't take."</p>
                <p className="cite-quote">- Wayne Gretzky</p>
            </div>
            <div>
                <p className="quote">"The game of life is a lot like football. You have to tackle your problems, block your fears, and score your points when you get the opportunity."</p>
                <p className="cite-quote">- Lewis Grizzard</p>
            </div>
            <div>
                <p className="quote">"Research is what I’m doing when I don’t know what I’m doing."</p>
                <p className="cite-quote">- Wernher von Braun</p>
            </div>
            <div>
                <p className="quote">"A ship in port is safe, but that's not what ships are built for."</p>
                <p className="cite-quote">- Grace Hopper</p>
            </div>
            <div>
                <p className="quote">"Sometimes the questions are complicated and the answers are simple."</p>
                <p className="cite-quote">- Dr. Seuss</p>
            </div>
            <div>
                <p className="quote">"What happened yesterday is history. What happens tomorrow is a mystery. What we do today makes a difference."</p>
                <p className="cite-quote">- Nick Saban</p>
            </div>
            <div>
                <p className="quote">"A person who never made a mistake never tried anything new."</p>
                <p className="cite-quote">- Albert Einstein</p>
            </div>
            <div>
                <p className="quote">"The most damaging phrase in the language is: 'It's always been done this way.'"</p>
                <p className="cite-quote">- Grace Hopper</p>
            </div>
            <div>
                <p className="quote">"By failing to prepare you are preparing to fail."</p>
                <p className="cite-quote">- Ben Franklin</p>
            </div>
            <div>
                <p className="quote">“Even if you are on the right track, you'll get run over if you just sit there.”</p>
                <p className="cite-quote">- Will Rogers</p>
            </div>
        </Carousel>
    </div>
  );
}

export default Quotes;
