import React from 'react';
import './guess_the_num.css';

export default class Guess extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      guess_input_value: '',
      guess_random_num: '',
      guesses_too_small: [],
      guesses_too_large: [],
      guess_mystery_num: '?',
      num_of_guesses: 0,
      disableInputElement: '',
      guess_the_number_btn_styling: 'guessTheNumber_button',
      guess_too_small_styling: 'hideGuessElement',
      guess_too_large_styling: 'hideGuessElement',
      correct_guess_styling: 'hideGuessElement'
    }

    this.updateGuessInputVal = this.updateGuessInputVal.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
    this.ShowLessThanArray = ShowLessThanArray.bind(this);
    this.ShowMoreThanArray = ShowMoreThanArray.bind(this);
    // this.focus = this.focus.bind(this)
    // this.resetGuessApp = this.resetGuessApp.bind(this)
    // this.checkGuess = this.checkGuess.bind(this)
  }

  // const createGuessSession = () => {
  //   const session = new GuessSession()
  //   resetGuessApp()
  // }

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
    let currentNumOfGuesses = this.state.num_of_guesses+1
    if(inputVal == randomNum){
      console.log('correct')
      this.setState({
        num_of_guesses : currentNumOfGuesses,
        guess_mystery_num : randomNum,
        disableInputElement : 'disabled',
        correct_guess_styling: 'guesses_game_over',
        guess_the_number_btn_styling: 'hideGuessElement',
        guess_too_small_styling: 'hideGuessElement',
        guess_too_large_styling: 'hideGuessElement',
      })
    } else if(inputVal < randomNum){
      guessesTooSmall.push(inputVal);
      console.log('too small');
      console.log('this.state.guesses_too_large: ',this.state.guesses_too_small)
      let currentNumOfGuesses = this.state.num_of_guesses+1
      this.setState({
        num_of_guesses : currentNumOfGuesses,
        guess_too_small_styling: 'guess_too_small'
      })
      ShowLessThanArray();
    } else if(inputVal > randomNum){
      guessesTooLarge.push(inputVal);
      console.log('too large');
      console.log('this.state.guesses_too_large: ',this.state.guesses_too_large);
      let currentNumOfGuesses = this.state.num_of_guesses+1
      this.setState({
        num_of_guesses : currentNumOfGuesses,
        guess_too_large_styling: 'guess_too_large'
      })
      ShowMoreThanArray();
    }
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    this.setState({
      guess_random_num : randomNum
    })
    console.log('randomNum: ',randomNum)
    console.log('this.state.guess_random_num: ',this.state.guess_random_num)
  }


  render(){

    return(
      <div className="section">
        <div className="header">Guess the number</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Write a program that generates a number between 1 and 100. Your program will ask the user to guess the generated number. When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit". Keep asking the user to input a number if the number differs from the computer's number (loops!).</p>
      <div className="guessTheNumber_number">{this.state.guess_mystery_num}</div>
          <p>There's a number sitting inside the box, type the number you think it is.</p>
          <div>
            <form>
            <input className="guessTheNumber_input" disabled={this.state.disableInputElement} onChange={this.updateGuessInputVal} value={this.state.guess_input_value} placeholder="#"></input>
          <button onClick={this.checkGuess} className={this.state.guess_the_number_btn_styling}>send</button>
            </form>
          </div>

          <div className="guesses_container">
            <div className="guess_too_small" className={this.state.guess_too_small_styling}>
              <div>Too Small</div>
              {this.ShowLessThanArray()}
            </div>
            <div className="guess_too_large" className={this.state.guess_too_large_styling}>
              <div>Too Large</div>
              {this.ShowMoreThanArray()}
            </div>
            <div className="guesses_game_over" className={this.state.correct_guess_styling}>
              Correct Guess! {this.state.num_of_guesses} Guesses
            </div>
          </div>

        </div>
      </div>
    )}
}

const ShowLessThanArray = function(){
  let key = this.state.guesses_too_small.length-1
  let lessThanArray = this.state.guesses_too_small
  let displayLessThanArray = lessThanArray.map((key) => (<div className="guess_less_than_div_element" key={key}>{this.state.guesses_too_small}</div>))
  console.log('displayArray: ',this.state.guesses_too_small[key])
  return(
    displayLessThanArray
  )
}

const ShowMoreThanArray = function(){
  let key = this.state.guesses_too_large.length-1
  let moreThanArray = this.state.guesses_too_large
  moreThanArray = moreThanArray.sort()
  let displayMoreThanArray = moreThanArray.map(() => (<div className="guess_more_than_div_element" key={key}> {this.state.guesses_too_large}</div>))
  return(
    displayMoreThanArray
  )
}
