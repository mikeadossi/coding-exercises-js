import React from 'react';
import './braille.css';

export default class Braille extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      braille_english_input : '',
      braille_english_translated : '',
      topArr : '',
      midArr : '',
      baseArr : ''
    }

    this.translateToBraille = this.translateToBraille.bind(this);
    this.saveEnglishToBrailleUserInput = this.saveEnglishToBrailleUserInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderEnglishToBraille = this.renderEnglishToBraille.bind(this);
  }

  translateToBraille(e){
    e.preventDefault()
    this.refs.english_to_brail_input.value = '';
    let str = this.state.braille_english_input

    this.setState({
      braille_english_translated: str
    })

    const brailleCharacters = {
      A: {
        line1: ['. ','o '],
        line2: ['o ','o '],
        line3: ['o ','o ']
      },
      B: {
        line1: ['. ','o '],
        line2: ['. ','o '],
        line3: ['o ','o ']
      },
      C: {
        line1: ['. ','. '],
        line2: ['o ','o '],
        line3: ['o ','o ']
      },
      D: {
        line1: ['. ','o '],
        line2: ['o ','. '],
        line3: ['o ','o ']
      },
      E:{
        line1: ['. ','o '],
        line2: ['o ','. '],
        line3: ['o ','o ']
      },
      F: {
        line1: ['. ','o '],
        line2: ['. ','o '],
        line3: ['o ','o ']
      },
      G: {
        line1: ['. ','. '],
        line2: ['. ','. '],
        line3: ['o ','o ']
      },
      H: {
        line1: ['. ','o '],
        line2: ['. ','. '],
        line3: ['o ','o ']
      },
      I: {
        line1: ['o ','. '],
        line2: ['. ','o '],
        line3: ['o ','o ']
      },
      J: {
        line1: ['o ','. '],
        line2: ['. ','. '],
        line3: ['o ','o ']
      },
      K: {
        line1: ['. ','o '],
        line2: ['o ','o '],
        line3: ['. ','o ']
      },
      L: {
        line1: ['. ','o '],
        line2: ['. ','o '],
        line3: ['. ','o ']
      },
      M: {
        line1: ['. ','. '],
        line2: ['o ','o '],
        line3: ['. ','o ']
      },
      N: {
        line1: ['. ','. '],
        line2: ['o ','. '],
        line3: ['. ','o ']
      },
      O: {
        line1: ['. ','o '],
        line2: ['o ','. '],
        line3: ['. ','o ']
      },
      P: {
        line1: ['. ','. '],
        line2: ['. ','o '],
        line3: ['. ','o ']
      },
      Q: {
        line1: ['. ','. '],
        line2: ['. ','. '],
        line3: ['. ','o ']
      },
      R: {
        line1: ['. ','o '],
        line2: ['. ','. '],
        line3: ['. ','o ']
      },
      S: {
        line1: ['o ','. '],
        line2: ['. ','o '],
        line3: ['. ','o ']
      },
      T: {
        line1: ['o ','. '],
        line2: ['. ','. '],
        line3: ['. ','o ']
      },
      U: {
        line1: ['. ','o '],
        line2: ['o ','o '],
        line3: ['. ','. ']
      },
      V: {
        line1: ['. ','o '],
        line2: ['. ','o '],
        line3: ['. ','. ']
      },
      W: {
        line1: ['o ','. '],
        line2: ['. ','. '],
        line3: ['o ','. ']
      },
      X: {
        line1: ['. ','. '],
        line2: ['o ','o '],
        line3: ['. ','. ']
      },
      Y: {
        line1: ['. ','. '],
        line2: ['o ','. '],
        line3: ['. ','. ']
      },
      Z: {
        line1: ['. ','o '],
        line2: ['o ','. '],
        line3: ['. ','. ']
      }
    }

    let arr = str.split("") //[['. ','0'],['. ','0'],['0','0']]
    console.log('arr: ',arr)
    let numOfChar = arr.length
    let line = ['line1', 'line2', 'line3']
    let topArr = [];
    let midArr = [];
    let baseArr = [];

    for(let i = 0; i < numOfChar; i++){
        topArr.push(brailleCharacters[arr[i]][line[0]])
        topArr.push(['\xa0\xa0\xa0\xa0\xa0\xa0\xa0']) // create some padding
        midArr.push(brailleCharacters[arr[i]][line[1]])
        midArr.push(['\xa0\xa0\xa0\xa0\xa0\xa0\xa0'])
        baseArr.push(brailleCharacters[arr[i]][line[2]])
        baseArr.push(['\xa0\xa0\xa0\xa0\xa0\xa0\xa0'])
    }

    this.setState({
      topArr : topArr,
      midArr : midArr,
      baseArr : baseArr
    })

    this.renderEnglishToBraille()
  }

  renderEnglishToBraille(){
    // let userInput = this.state.braille_english_translated
    // return userInput
    return <ShowBrailleTranslation topArr_content={this.state.topArr} midArr_content={this.state.midArr} baseArr_content={this.state.baseArr} />
  }

  saveEnglishToBrailleUserInput(e){
    let targetValue = e.target.value
    this.setState({
      braille_english_input : e.target.value
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
        <button className="appButtonSyling" onClick={this.translateToBraille}>to braille!</button>
        </div>
        <div className="english_to_braille_result_header">Braille</div>
        <div className="english_to_braille_div">
          <div className="english_to_braille_result_content">{this.renderEnglishToBraille()}</div>
        </div>
      </div>
    )}
}

class ShowBrailleTranslation extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div key={this.props.keys} className="braile_translation_container">
        <div className="braille_topArr_div braille_div">{this.props.topArr_content}</div>
        <div className="braille_midArr_div braille_div">{this.props.midArr_content}</div>
        <div className="braille_baseArr_div braille_div">{this.props.baseArr_content}</div>
      </div>
    )
  }
}
