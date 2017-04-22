import React from 'react';
import './string_permutations.css';

export default class String_permutations extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      permutate_input : ''
    }

    this.getPermutations = this.getPermutations.bind(this)
    this.savePermutationInput = this.savePermutationInput.bind(this)
  }

  getPermutations(e){
    e.preventDefault()
    console.log('click!')
    this.refs.permutate_input.value = ''
    let str = this.state.permutate_input
    let strArrayed = str.split('')
    let accountingArr = [];

    for(let i = 0; i < strArrayed.length; i++){
      accountingArr.push(i)
    }

    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // let possiblePermutations = get factorial of str.arrayed.length

    // make sure to account for any duplication when the same characters show up more than once, for example [1,2,3] might have 6 permutations, and [1,1,2] will have 6 possible permutations as well but there will be duplicates, remove duplicates. Should be straighforward.
    for(let i = 0; i < possiblePermutations; i++){
      if()
    }


  }

  savePermutationInput(e){
    let targetValue = e.target.value
    this.setState({
      permutate_input : targetValue
    })
    console.log('this.state.permutate_input: ',this.state.permutate_input)
  }

  render(){
    return(
      <div className="section">
        <div className="header">String permutations</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
          <p className="instructions">Write a program that prints all of the permutations of the unique characters of an input string.</p>
        </div>
        <div>
          <h2>Let's permutate</h2>
        <input ref="permutate_input" onChange={this.savePermutationInput} className="appInputStyling" placeholder="entire a single string"/>
          <button className="appButtonSyling" onClick={this.getPermutations}>permutate</button>
        </div>
      </div>
    )}
}
