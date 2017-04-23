import React from 'react';
import './string_permutations.css';

export default class String_permutations extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      permutate_input : '',
      permutation_result : []
    }

    this.getPermutations = this.getPermutations.bind(this); this.savePermutationInput = this.savePermutationInput.bind(this);
    this.renderPermutations = this.renderPermutations.bind(this);
  }

  getPermutations(){
    this.refs.permutate_input.value = ''

    let str = this.state.permutate_input

    // js implementation of Heaps algorithm sourced from https://gist.github.com/dsernst/2570de0dc7d44a8cbbd0
    let swap = function(array, pos1, pos2){
      let temp = array[pos1];
      array[pos1] = array[pos2];
      array[pos2] = temp;
    };

    const heapsPermute = function(array, output, n){
      n = n || array.length;
      if (n === 1) {
        output(array);
      } else {
        for (let i = 1; i <= n; i += 1) {
          heapsPermute(array, output, n - 1);
          if (n % 2) {
            var j = 1;
          } else {
            var j = i;
          }
          swap(array, j - 1, n - 1);
        }
      }
    };

    let resultArr = [];
    let print = function(input){
      input = JSON.stringify(input)
      resultArr.push(input)
      return input
    }

    let result = heapsPermute(str, print)

    this.setState({
      permutation_result : resultArr
    })

  }

  renderPermutations(){
    let resultArr = this.state.permutation_result
    let displayElements = resultArr.map((element, index) => {
      return <ShowPermutations keyz={index} value={element}/>
    })

    return displayElements
  }

  savePermutationInput(e){
    let str= e.target.value

    if(typeof str === 'string'){
      str = str.replace(/[[\]]/g,"")
      str = str.replace(/['"]+/g, "")
      if(str.indexOf(',') > -1){
        str = str.split(',')
      } else if (str.indexOf(' ' > -1)){
        str = str.split(' ')
      }
    }

    this.setState({
      permutate_input : str
    })
  }

  render(){
    return(
      <div className="section">
        <div className="header">String permutations</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
          <p className="instructions">Write a program that prints all of the permutations of an input string.</p>
        </div>
        <div>
          <h2>Let's permutate</h2>
        <input ref="permutate_input" onChange={this.savePermutationInput} className="appInputStyling" placeholder="entire a single string"/>
      <button className="appButtonSyling" onClick={this.getPermutations}>permutate</button>
        </div>
        <div className="string_permutations_result_div">
          <div className="permutations_result_header">Permutations</div>
          {this.renderPermutations()}
        </div>
      </div>
    )}
}

class ShowPermutations extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div key={this.props.keyz}>
        <div className="permutations_values">
        <div className="permutations_array_item">{this.props.value}</div>
        </div>
      </div>
    )
  }
}
