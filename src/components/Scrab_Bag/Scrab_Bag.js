import React from 'react';
import './scrab_bag.css';

export default class Scrab_Bag extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      scrabble_pieces: [],
      user_picked_scrabble_pieces: [],
      scrabbleCollection: [],
      pieceSideUp: 'front',
      displayRow: 'display-scrabble-row',
      display_reveal_row: 'hide',
      revealPieces: 'revealScrabble',
      returnPieces: 'hide',
      userScrabbleWordEntry: ''
    }

    this.revealPieces = this.revealPieces.bind(this);
    this.returnScrabblePieces = this.returnScrabblePieces.bind(this);
    this.accountForPieceRemoval = this.accountForPieceRemoval.bind(this);
    // this.PopulateScrabblePieces = PopulateScrabblePieces.bind(this);
  }

  revealPieces(e){
    e.preventDefault()
    this.setState({
      displayRow : 'hide',
      display_reveal_row : 'display-scrabble-row',
      revealPieces : 'hide',
      returnPieces : 'returnScrabble',
    })
    console.log('this.state.displayRow: ', this.state.displayRow)
    console.log('this.state.display_reveal_row: ', this.state.display_reveal_row)
    console.log('this.state.returnPieces: ', this.state.returnPieces)
    console.log('this.state.revealPieces: ', this.state.revealPieces)
  }

  returnScrabblePieces(e){
    e.preventDefault()
    this.setState({
      displayRow : 'display-scrabble-row',
      display_reveal_row : 'hide',
      revealPieces : 'revealScrabble',
      returnPieces : 'hide'
    })
  }

  accountForPieceRemoval(e){
    e.preventDefault()
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
    console.log('accounted for')
    let targetValue = e.target.value
    let userEntry = []
    userEntry.push(targetValue)

    this.setState({
      userScrabbleWordEntry : userEntry
    })
    console.log('userEntry[0]: ', userEntry[0])
    console.log("totalScrabblePieces.userEntry[0]: ", totalScrabblePieces[userEntry[0]])
    console.log('this.state.userScrabbleWordEntry: ',this.state.userScrabbleWordEntry)

    // for(let i = 0; i < userEntry.length; i++){
    //   if( totalScrabblePieces[userEntry[i]].presentCount > 0 ){
    //     totalScrabblePieces[userEntry[i]].presentCount--
    //   } else {
    //     console.log('letter cannot be used')
    //     return
    //   }
    // }
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
      return new ScrabblePieceElement( totalScrabblePieces[piece].character, totalScrabblePieces[piece].pieceCount, totalScrabblePieces[piece].presentCount, totalScrabblePieces[piece].character )
    })
    let show_back_collection = Object.keys(totalScrabblePieces).map( piece => {
      return new ScrabblePiece_Back_Element( totalScrabblePieces[piece].character, totalScrabblePieces[piece].presentCount, totalScrabblePieces[piece].character )
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


        <div className={this.state.displayRow}>
          {collection}
        </div>

        <div className={this.state.display_reveal_row}>
          {show_back_collection}
        </div>



        <input className="scrabbleBoard" onChange={this.accountForPieceRemoval}placeholder="type the letters you want"/>
        <div className="scrabbleBase"></div>
      <button className={this.state.revealPieces} onClick={this.revealPieces}>reveal all at once</button>
    <button className={this.state.returnPieces} onClick={this.returnScrabblePieces}>return</button>

      </div>
    )}
}

class ScrabblePieceElement{
  constructor(char, pCount, presCount, key){

    return(
      <div className="scrabblePieceContainer" key={key}>
        <div className="flip-container">
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

class ScrabblePiece_Back_Element{
  constructor(char, presCount, key){

    return(
      <div className="scrabblePieceContainer" key={key}>
        <div className="flip-container">
          <div className="">
            <div className="front front_as_rear">
              <div className="back-original">{char}</div>
              <div className="back-count">{presCount}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
