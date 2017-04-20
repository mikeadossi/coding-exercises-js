import React from 'react';
import './the_disemvowing.css';

export default class The_Disemvowing extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      disemvowing_input_value: '',
      disemvowing_array: []
    }

    this.returnDisemvoweledString = this.returnDisemvoweledString.bind(this)
    this.disemvowelAndSave = this.disemvowelAndSave.bind(this)
    this.DisemvoweledStrings = DisemvoweledStrings.bind(this)
  }

  disemvowelAndSave(e){
    e.preventDefault()
    let targetValue = e.target.value

    this.setState({
      disemvowing_input_value : targetValue
    })
    console.log('targetValue: ', targetValue)
  }

  returnDisemvoweledString(){
    console.log('click!')
    let targetValue = this.state.disemvowing_input_value
    targetValue = targetValue.replace(/\s/g, "")
    let disemvowing_array = this.state.disemvowing_array
    disemvowing_array.push(targetValue)
    this.setState({
      disemvowing_array : disemvowing_array
    })
    console.log('this.state.disemvowing_array: ', this.state.disemvowing_array)
    this.DisemvoweledStrings()
    this.refs.disemvowel_input.value = '';
  }


  render(){
    return(
      <div className="section">
        <div className="header">The Disemvowing</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Disemvoweling means removing the vowels (a, e, i, o, u) from text.</p>
        <p> Write a program that takes a string and returns a new string with all the spaces removed.</p>
        </div>
        <h2>Enter a String</h2>
      <input className="appInputStyling" placeholder="string w/ spaces" onChange={this.disemvowelAndSave} ref="disemvowel_input"/>
    <button className="appButtonSyling" onClick={this.returnDisemvoweledString}>disemvowel</button>
      <div className="disemvowel_results">
        <div className="disemvowel_results_div">str.replace(/\s/g, "")</div>
      {this.DisemvoweledStrings()}
      </div>
      </div>
    )}
}

const DisemvoweledStrings = function(){
  console.log('working')
  let disemvowing_array = this.state.disemvowing_array
  console.log('disemvowing_array: ',disemvowing_array)
  let displayContent = disemvowing_array.map((element, index) => {
    return(
      <div className="returned_disemvoweled_string" key={index}>
        {element}
      </div>
    )
  })
  return displayContent
}
