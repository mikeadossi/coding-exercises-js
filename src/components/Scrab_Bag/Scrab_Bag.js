import React from 'react';
import './scrab_bag.css';

export default class Scrab_Bag extends React.Component{
  render(){
    return(
      <div className="section">
        <div className="header">Scrab-Bag</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
          <p className="instructions">Scrabble has a set number of 100 tiles. This number does not change between games, nor does the frequency of each letter. Frequency and point value of each tile. Represent each tile by the letter that appears on it, and blank tiles by underscores (_). Input: An uppercase string with the tiles that have already been played. E.g., if 14 tiles have been played, you would be given an input like this:</p>
        </div>
        <div>
          <h2>Take your pick</h2>
          <p>Click a piece or pieces to take or type letters in input below</p>
        <div className="scrabblePieceContainer">
          <div className="scrabblePiece">A</div>
          <div className="scrabblePiece">B</div>
          <div className="scrabblePiece">C</div>
          <div className="scrabblePiece">D</div>
          <div className="scrabblePiece">E</div>
          <div className="scrabblePiece">G</div>
          <div className="scrabblePiece">H</div>
          <div className="scrabblePiece">I</div>
          <div className="scrabblePiece">J</div>
          <div className="scrabblePiece">K</div>
          <div className="scrabblePiece">L</div>
          <div className="scrabblePiece">M</div>
          <div className="scrabblePiece">N</div>
          <div className="scrabblePiece">O</div>
          <div className="scrabblePiece">P</div>
          <div className="scrabblePiece">Q</div>
          <div className="scrabblePiece">R</div>
          <div className="scrabblePiece">S</div>
          <div className="scrabblePiece">T</div>
          <div className="scrabblePiece">U</div>
          <div className="scrabblePiece">V</div>
          <div className="scrabblePiece">W</div>
          <div className="scrabblePiece">X</div>
          <div className="scrabblePiece">Y</div>
          <div className="scrabblePiece">Z</div>
          <div className="scrabblePiece">_</div>
        </div>








         <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
              <span className="name">A</span>
            <div className="back-original-count">*</div>
            </div>
            <div className="back">
              <div className="back-original">A</div>
            <div className="back-count">9</div>
            </div>
          </div>
        </div>









        </div>
        <input className="scrabbleBoard" placeholder="type the letters you want"/>
        <div className="scrabbleBase"></div>
      <button className="revealScrabble">reveal</button>
      </div>
    )}
}
