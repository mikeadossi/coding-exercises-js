import React from 'react';
import './string_indices.css';

export default class String_Indicies extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      guess_input_value: '',
      guess_random_num: '',
      string_indices_input: '',
      string_indices_pos: 50,
      string_indices_array: []
    }

    this.saveStringIndicesEntries = this.saveStringIndicesEntries.bind(this);
    this.runStringIndexProcess = this.runStringIndexProcess.bind(this);
    this.String_indices_render = String_indices_render.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  saveStringIndicesEntries(e){
    this.setState({
      string_indices_input : e.target.value
    })
  }

  runStringIndexProcess(){
    console.log(this.state.string_indices_input)
    let userInput = this.state.string_indices_input;
    let result = userInput.split(' ')
    let resultArr = []
    resultArr.push(result)
    this.setState({
      string_indices_array : result
    })
    console.log('resultArr: ',resultArr)
    this.refs.ourInput.value = '';
  }

  handleKeyPress(e){
    if(e.key == 'Enter'){
      this.runStringIndexProcess()
    }
  }

  render(){
    let test = this.String_indices_render()
    return(
      <div className="section">
        <div className="header">String Indices</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Write a program that parses the words in a string by providing a numerical index, similar to how you would access an element within an array with a numerical index.</p>
        </div>
        <h2>Enter a String</h2>
      <input onKeyPress={this.handleKeyPress} ref="ourInput" className="string_indices_input appInputStyling" onChange={this.saveStringIndicesEntries} placeholder="one string at a time"/>
      <button className="string_indices_btn appButtonSyling" onClick={this.runStringIndexProcess}>pass in</button>
      <div className="string_indices_results">
        <div className="string_indices_result_div">
          <div>result = [</div>
            {test}
          <div>]</div>
        </div>
      </div>
      </div>
    )}
}

const String_indices_render = function(){
  let resultsArray = this.state.string_indices_array;
  console.log('XXXX: ',resultsArray)
  // let key = resultsArray.length-1
  let displayElements = resultsArray.map((element, index) => {
    return <ShowItems keyz={index} value={element}/>
  })
  console.log('displayElements: ',displayElements)

  return displayElements
}

class ShowItems extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div key={this.props.keyz}>
        <div className="string_indices_values">
          <div className="string_indices_position">{this.props.keyz} : </div>
          <div className="string_indices_array_item">{this.props.value}</div>
        </div>
      </div>
    )
  }
}
