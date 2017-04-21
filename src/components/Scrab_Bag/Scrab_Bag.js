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
      userScrabbleWordEntry: '',
      A_presentCount : 9,
      B_presentCount : 2,
      C_presentCount : 2,
      D_presentCount : 4,
      E_presentCount : 12,
      F_presentCount : 2,
      G_presentCount : 3,
      H_presentCount : 2,
      I_presentCount : 9,
      J_presentCount : 1,
      K_presentCount : 1,
      L_presentCount : 4,
      M_presentCount : 2,
      N_presentCount : 6,
      O_presentCount : 8,
      P_presentCount : 2,
      Q_presentCount : 1,
      R_presentCount : 6,
      S_presentCount : 4,
      T_presentCount : 6,
      U_presentCount : 4,
      V_presentCount : 2,
      W_presentCount : 2,
      X_presentCount : 1,
      Y_presentCount : 2,
      Z_presentCount : 1,
      none_presentCount : 2
    }

    this.revealPieces = this.revealPieces.bind(this);
    this.returnScrabblePieces = this.returnScrabblePieces.bind(this);
    this.accountForPieceRemoval = this.accountForPieceRemoval.bind(this);
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

    let targetValue = e.target.value
    if(targetValue.split('').length > 1){
      targetValue = targetValue[targetValue.length-1]
    }
    let userEntry = []
    userEntry.push(targetValue)

    if(targetValue === 'A'){
      let count = this.state.A_presentCount
      count = count-1
      console.log('count: ',count)
      if(count >= 0){
        this.setState({ A_presentCount  : count }); return;
        console.log('BEEN-SET')
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'B'){
      let count = this.state.B_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ B_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'C'){
      let count = this.state.C_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ C_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'D'){
      let count = this.state.D_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ D_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'E'){
      let count = this.state.E_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ E_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'F'){
      let count = this.state.F_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ F_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'G'){
      let count = this.state.G_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ G_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'H'){
      let count = this.state.H_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ H_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'I'){
      let count = this.state.I_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ I_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'J'){
      let count = this.state.J_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ J_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'K'){
      let count = this.state.K_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ K_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'L'){
      let count = this.state.L_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ L_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'M'){
      let count = this.state.M_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ M_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'N'){
      let count = this.state.N_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ N_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'O'){
      let count = this.state.O_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ O_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    } else if(targetValue === 'P'){
      let count = this.state.P_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ P_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'Q'){
      let count = this.state.Q_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ Q_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'R'){
      let count = this.state.R_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ R_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'S'){
      let count = this.state.S_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ S_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'T'){
      let count = this.state.T_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ T_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'U'){
      let count = this.state.U_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ U_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'V'){
      let count = this.state.V_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ V_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'W'){
      let count = this.state.W_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ W_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'X'){
      let count = this.state.X_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ X_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'Y'){
      let count = this.state.Y_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ Y_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === 'Z'){
      let count = this.state.Z_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ Z_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }else if(targetValue === ' '){
      let count = this.state.none_presentCount
      count = count-1
      if(count >= 0){
        this.setState({ none_presentCount  : count }); return;
      } else {
        console.log('no more pieces')
        let string = this.refs.userBtnEntry.value
        string = string.slice(0, -1)
        this.refs.userBtnEntry.value = string
        return
      }
    }

        console.log('this.state.A_presentCount ======+++++++++===> ',this.state.A_presentCount)


    console.log('userEntry: ',userEntry)
    console.log('this.state.userScrabbleWordEntry:>>> ',this.state.userScrabbleWordEntry)
    this.setState({
      userScrabbleWordEntry : userEntry[0]
    })
    console.log()
    console.log('userEntry[0]: ', userEntry[0])
    console.log("totalScrabblePieces.userEntry[0]: ", totalScrabblePieces[userEntry[0]])
    console.log('this.state.userScrabbleWordEntry:>>>>>>> ',this.state.userScrabbleWordEntry)

  }

  render(){
    console.log('this.state.userScrabbleWordEntry => ',this.state.userScrabbleWordEntry)
    const totalScrabblePieces = {
      A : { character: 'A', pieceCount: 9, presentCount: this.state.A_presentCount },
      B : { character: 'B', pieceCount: 2, presentCount: this.state.B_presentCount },
      C : { character: 'C', pieceCount: 2, presentCount: this.state.C_presentCount },
      D : { character: 'D', pieceCount: 4, presentCount: this.state.D_presentCount },
      E : { character: 'E', pieceCount: 12, presentCount: this.state.E_presentCount },
      F : { character: 'F', pieceCount: 2, presentCount: this.state.F_presentCount },
      G : { character: 'G', pieceCount: 3, presentCount: this.state.G_presentCount },
      H : { character: 'H', pieceCount: 2, presentCount: this.state.H_presentCount },
      I : { character: 'I', pieceCount: 9, presentCount: this.state.I_presentCount },
      J : { character: 'J', pieceCount: 1, presentCount: this.state.J_presentCount },
      K : { character: 'K', pieceCount: 1, presentCount: this.state.K_presentCount },
      L : { character: 'L', pieceCount: 4, presentCount: this.state.L_presentCount },
      M : { character: 'M', pieceCount: 2, presentCount: this.state.M_presentCount },
      N : { character: 'N', pieceCount: 6, presentCount: this.state.N_presentCount },
      O : { character: 'O', pieceCount: 8, presentCount: this.state.O_presentCount },
      P : { character: 'P', pieceCount: 2, presentCount: this.state.P_presentCount },
      Q : { character: 'Q', pieceCount: 1, presentCount: this.state.Q_presentCount },
      R : { character: 'R', pieceCount: 6, presentCount: this.state.R_presentCount },
      S : { character: 'S', pieceCount: 4, presentCount: this.state.S_presentCount },
      T : { character: 'T', pieceCount: 6, presentCount: this.state.T_presentCount },
      U : { character: 'U', pieceCount: 4, presentCount: this.state.U_presentCount },
      V : { character: 'V', pieceCount: 2, presentCount: this.state.V_presentCount },
      W : { character: 'W', pieceCount: 2, presentCount: this.state.W_presentCount },
      X : { character: 'X', pieceCount: 1, presentCount: this.state.X_presentCount },
      Y : { character: 'Y', pieceCount: 2, presentCount: this.state.Y_presentCount },
      Z : { character: 'Z', pieceCount: 1, presentCount: this.state.Z_presentCount },
      none : { character: '', pieceCount: 2, presentCount: this.state.none_presentCount}
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
        <p className="instructions">Scrabble has a set number of 100 tiles, all represented below. Create a program that shows how many pieces remain in the set of total tiles after each piece is played.</p>
        </div>
        <div>
          <h2>Take your pick</h2>
        </div>


        <div className={this.state.displayRow}>
          {collection}
        </div>

        <div className={this.state.display_reveal_row}>
          {show_back_collection}
        </div>



        <input ref="userBtnEntry" className="scrabbleBoard" onChange={this.accountForPieceRemoval} placeholder="type the letters you want"/>
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
