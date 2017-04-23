import React from 'react';
import './braille.css';

export default class Braille extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      braille_engligh_input : '',
      braille_engligh_translated : ''
    }

    this.translateToBraille = this.translateToBraille.bind(this);
    this.saveEnglishToBrailleUserInput = this.saveEnglishToBrailleUserInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderEnglishToBraille = this.renderEnglishToBraille.bind(this);
  }

  translateToBraille(e){
    e.preventDefault()
    let targetValue = this.state.braille_engligh_input
    this.refs.english_to_brail_input.value = '';
    let str = this.state.braille_engligh_input
    this.renderEnglishToBraille()
    this.setState({
      braille_engligh_translated: this.state.braille_engligh_input
    })
  }

  renderEnglishToBraille(){
    let userInput = this.state.braille_engligh_translated
    return userInput
  }

  saveEnglishToBrailleUserInput(e){
    let targetValue = e.target.value
    this.setState({
      braille_engligh_input : e.target.value
    })
  }

  handleClick(e){
    if(e.key == 'Enter'){
      this.translateToBraille(e)
    }
  }

  render(){
    return(
      <div className="section">
        <div className="header">Braille</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Write a program which converts a string of Braille characters to standard English letters (you can ignore any special characters, including spaces). </p>
        </div>
        <div>
          <h2>Translate!</h2>
        <input onKeyPress={this.handleClick} onChange={this.saveEnglishToBrailleUserInput} ref="english_to_brail_input" className="appInputStyling" placeholder="english to braille"/>
          <button className="appButtonSyling" onClick={this.translateToBraille}>translate</button>
        </div>
        <div className="engligh_to_brail_braille_div">
          <div className="english_to_braille_result_header">Braille</div>
        {this.renderEnglishToBraille()}
        </div>
      </div>
    )}
}
