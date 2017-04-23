import React from 'react';
import './string_me_along.css';

export default class String_me_along extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      string_along_input : '',
      string_along_result : '',
      display_string_along_input : ''
    }

    this.returnStringAlong = this.returnStringAlong.bind(this);
    this.saveStringAlongInput = this.saveStringAlongInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  returnStringAlong(){
    this.refs.string_along_input.value = ''

    let str = this.state.string_along_input
    let arr = str.split('');
    let newArray = [];

    for(let i = 0; i < arr.length; i++){
    	if(newArray.length < 1){
      	newArray.push(arr[i])
      	if(arr[i] !== arr[i+1]){
      		newArray.splice(newArray.length-1,1)
        }
      } else if(newArray.length >= 1){
      	newArray.push(arr[i])
      	 if(arr[i] !== arr[i+1] && arr[i] !== newArray[newArray.length-1]){
      			newArray.splice(newArray.length-1,1)
     		 }
      }
    }

    if(newArray.length < 1){
      newArray.push('contains no matching characters')
    }

    let result = newArray.join('')

    this.setState({
      string_along_result : result,
      display_string_along_input : str
    })

  }

  saveStringAlongInput(e){
    let targetValue = e.target.value
    this.setState({
      string_along_input : targetValue
    })
  }

  handleClick(e){
    if(e.key === 'Enter'){
      this.returnStringAlong()
    }
  }

  render(){
    return(
      <div className="section">
        <div className="header">String me along</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
          <p className="instructions">Given an input string, print the longest substring that contains a maximum of two unique characters. If there are multiple substrings that qualify as 'longest', print substring that is furthest to the right.</p>
        </div>
        <h2>Give it a try</h2>
      <input ref="string_along_input" onKeyPress={this.handleClick} onChange={this.saveStringAlongInput} className="appInputStyling" placeholder="ghhiiii"/>
    <button className="appButtonSyling" onClick={this.returnStringAlong}>string along</button>
        <div className="string_along_result_div">
          <div className="render_string_along_div">{this.state.display_string_along_input} : {this.state.string_along_result}</div>
        </div>
      </div>
    )}
}
