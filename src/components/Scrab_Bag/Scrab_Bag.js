import React from 'react';
import './scrab_bag.css';

export default class Scrab_Bag extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      scrabble_pieces: [],
      user_picked_scrabble_pieces: [],
      scrabbleCollection: []
    }

    // this.PopulateScrabblePieces = PopulateScrabblePieces.bind(this);
  }


  render(){
    const totalScrabblePieces = {
      A : { character: 'A', pieceCount: 9, presentCount: 9 },
      B : { character: 'B', pieceCount: 2, presentCount: 2},
      C : { character: 'C', pieceCount: 2, presentCount: 2},
      D : { character: 'D', pieceCount: 4, presentCount: 4},
      E : { character: 'E', pieceCount: 12, presentCount: 12},
      F : { character: 'F', pieceCount: 2, presentCount: 2},
      G : { character: 'G', pieceCount: 3, presentCount: 3},
      H : { character: 'H', pieceCount: 2, presentCount: 2},
      I : { character: 'I', pieceCount: 9, presentCount: 9},
      J : { character: 'J', pieceCount: 1, presentCount: 1},
      K : { character: 'K', pieceCount: 1, presentCount: 1},
      L : { character: 'L', pieceCount: 4, presentCount: 4},
      M : { character: 'M', pieceCount: 2, presentCount: 2},
      N : { character: 'N', pieceCount: 6, presentCount: 6},
      O : { character: 'O', pieceCount: 8, presentCount: 8},
      P : { character: 'P', pieceCount: 2, presentCount: 2},
      Q : { character: 'Q', pieceCount: 1, presentCount: 1},
      R : { character: 'R', pieceCount: 6, presentCount: 6},
      S : { character: 'S', pieceCount: 4, presentCount: 4},
      T : { character: 'T', pieceCount: 6, presentCount: 6},
      U : { character: 'U', pieceCount: 4, presentCount: 4},
      V : { character: 'V', pieceCount: 2, presentCount: 2},
      W : { character: 'W', pieceCount: 2, presentCount: 2},
      X : { character: 'X', pieceCount: 1, presentCount: 1},
      Y : { character: 'Y', pieceCount: 2, presentCount: 2},
      Z : { character: 'Z', pieceCount: 1, presentCount: 1},
      none : { character: '', pieceCount: 2, presentCount: 2}
    }
    let collection = Object.keys(totalScrabblePieces).map( piece => {
      return new ScrabblePieceElement( totalScrabblePieces[piece].character,totalScrabblePieces[piece].pieceCount,totalScrabblePieces[piece].presentCount )
    })
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
        </div>


        <div>
          {collection}
        </div>

      }

        <input className="scrabbleBoard" placeholder="type the letters you want"/>
        <div className="scrabbleBase"></div>
        <button className="revealScrabble">reveal</button>
        <button className="returnScrabble">return</button>

      </div>
    )}
}

class ScrabblePieceElement{
  constructor(char, pCount, presCount){

    return(
      <div className="scrabblePieceContainer">
        <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
              <span className="name">{char}</span>
              <div className="back-original-count">{pCount}</div>
            </div>
            <div className="back">
              <div className="back-original">{char}</div>
              <div className="back-count">{presCount}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



// const PopulateScrabblePieces = function(){
//   // totalScrabblePieces.A.pieceCount => 9
//   let scrabbleCollection = this.state.scrabbleCollection;
//   for(let i = 0; i < totalScrabblePieces.length; i++){
//     let newPiece = new ScrabblePieceElement(totalScrabblePieces.i.character, totalScrabblePieces.i.pieceCount, totalScrabblePieces.i.presentCount);
//     scrabbleCollection.push( newPiece )
//     this.setState({
//       scrabbleCollection : scrabbleCollection
//     })
//
//     let collection = this.totalScrabblePieces.map( peice => {
//       return new ScrabblePieceElement( peice.character,peice.count,peice.presentCount )
//     })
//
//     return(
//       <div>
//         {collection}
//       </div>
//     )
//   }
//
//
// }


{/*
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
*/}
