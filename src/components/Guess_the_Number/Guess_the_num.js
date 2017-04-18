import React from 'react';
import './guess_the_num.css';
import './guess_logic.js';

export default class Guess extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      guess_input_value: '',
      guess_random_num: 10,
      guesses_too_small: [],
      guesses_too_large: []
    }
    this.updateGuessInputVal = this.updateGuessInputVal.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
    // this.focus = this.focus.bind(this)
    // this.resetGuessApp = this.resetGuessApp.bind(this)
    // this.generateRandomNum = this.generateRandomNum.bind(this)
    // this.checkGuess = this.checkGuess.bind(this)
  }

  // const createGuessSession = () => {
  //   const session = new GuessSession()
  //   resetGuessApp()
  // }

  generateRandomNum(){
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let guess_num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log('guess_num: ',guess_num);
    // set randomNum to states guess_random_num
  }

  updateGuessInputVal(e){
    e.preventDefault()
    this.setState({
      guess_input_value : e.target.value
    })
    console.log('this.state.guess_input_value: ',this.state.guess_input_value)
    // update input value in state
  }

  checkGuess(e){
    e.preventDefault();
    let inputVal = this.state.guess_input_value;
    if(inputVal.replace(/\s/g,"") == "" || inputVal.length === 0){
      console.log('guess_input_value === null');
      return;
    }
    console.log(inputVal);
    const randomNum = this.state.guess_random_num;
    let guessesTooSmall = this.state.guesses_too_small;
    let guessesTooLarge = this.state.guesses_too_large;
    if(inputVal = randomNum){
      console.log('correct')
    } else if(inputVal < randomNum){
      guessesTooSmall.push(inputVal);
      console.log('too small');
    } else if(inputVal > randomNum){
      guessesTooLarge.push(inputVal);
      console.log('too large');
    }
  }


  render(){
    return(
      <div className="section">
        <div className="header">Guess the number</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Write a program that generates a number between 1 and 100. Your program will ask the user to guess the generated number. When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit". Keep asking the user to input a number if the number differs from the computer's number (loops!).</p>
      <div className="guessTheNumber_number">{this.props.guess_value}</div>
          <p>There's a number sitting inside the box, type the number you think it is.</p>
          <div>
            <form>
            <input className="guessTheNumber_input" onChange={this.updateGuessInputVal} value={this.state.guess_input_value} placeholder="#"></input>
            <button onClick={this.checkGuess} className="guessTheNumber_button">send</button>
            </form>
          </div>

          <div className="guesses_container">
            <div className="guess_too_small">
              <div>Too Small</div>
              <div>4</div>
            </div>
            <div className="guess_too_large">
              <div>Too Large</div>
              <div>9</div>
            </div>
            <div className="guesses_game_over">
              Correct Guess! 5 Guesses
            </div>
          </div>

        </div>
      </div>
    )}
}
