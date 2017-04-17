import React from 'react';
import './guess_the_num.css';

export default class Guess extends React.Component{
  render(){
    return(
      <div className="section">
        <div className="header">Guess the number</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Write a program that generates a number between 1 and 100. Your program will ask the user to guess the generated number. When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit". Keep asking the user to input a number if the number differs from the computer's number (loops!).</p>
          <div className="guessTheNumber_number">10</div>
          <p>There's a number sitting inside the box, type the number you think it is.</p>
          <div>
            <input className="guessTheNumber_input" placeholder="take a guess"></input>
            <button className="guessTheNumber_button">send</button>
          </div>
        </div>
      </div>
    )}
}
