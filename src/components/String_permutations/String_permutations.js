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
    // this is sparta
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
