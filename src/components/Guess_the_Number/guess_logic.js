import React from 'react';

export default class GuessSession {
  // constructor(){
  //   super();
  //   this.state = {
  //     this.guess_random_num: 0,
  //     this.guess_input_value: 0,
  //     this.guesses_too_small: [],
  //     this.guesses_too_large: [],
  //     this.guess_value: '??'
  //   }
  // }


updateGuessInputVal(e){
  e.preventDefault()
  this.setState({
    guess_input_value : e.target.value
  })
  console.log('this.state.guess_input_value: ',this.state.guess_input_value)
  // update input value in state
}

// focus(){
//   this.inner.focus();
// }
//
// resetGuessApp(){
//   this.setState({
//     guess_random_num : generateRandomNum()
//   })
// }
//
// generateRandomNum(){
//   return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//   let guess_num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//   console.log('guess_num: ',guess_num);
//   // set randomNum to states guess_random_num
// }
//
// checkGuess(e){
//   e.preventDefault();
//   let inputVal = this.state.guess_input_value;
//   if(inputVal.replace(/\s/g,"") == "" || inputVal.length === 0){
//     console.log('no user guess entry');
//     return;
//   }
//   console.log(inputVal);
//   const randomNum = this.state.guess_random_num;
//   let guessesTooSmall = this.state.guesses_too_small;
//   let guessesTooLarge = this.state.guesses_too_large;
//   if(inputVal === randomNum){
//     console.log('correct')
//   } else if(inputVal < randomNum){
//     guessesTooSmall.push(inputVal);
//     console.log('too small');
//   } else if(inputVal > randomNum){
//     guessesTooLarge.push(inputVal);
//     console.log('too large');
//   }
// }
//
}
