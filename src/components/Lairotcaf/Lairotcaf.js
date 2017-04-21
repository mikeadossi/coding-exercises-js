import React from 'react';
import './lairotcaf.css';

export default class Lairotcaf extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      lairotcaf_input : '',
      lairotcaf_result : '',
      result_background_color : 'lairotcaf_result_grey',
      lairotcaf_input_stored : ''
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.saveLairotcafInput = this.saveLairotcafInput.bind(this)
    this.getLairotcaf = this.getLairotcaf.bind(this)
  }

  saveLairotcafInput(e){
    e.preventDefault()
    let targetValue = e.target.value
    this.setState({
      lairotcaf_input : targetValue
    })
  }

  handleKeyPress(e){
    if(e.key == 'Enter'){
      this.getLairotcaf(e)
    }
  }

  getLairotcaf(e){
    e.preventDefault();

    let num = this.state.lairotcaf_input
    this.refs.lairotcaf_input.value = '';

    if (num === '' || !/\S/.test(num)){
      this.setState({
        result_background_color : 'lairotcaf_result_grey',
        lairotcaf_input : '',
        lairotcaf_result : '',
        lairotcaf_input_stored : ''
      })
      return
    }

    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]
    let greatestPrimeFactor;
    let primeArrayPosition;
    for(let i = 0; i < primes.length; i++){
    	if(num % primes[i] === 0){
      	greatestPrimeFactor = primes[i]
        primeArrayPosition = i
      } else {
      	i = primes.length+1;
      }
    } // 7
    let factorial = [greatestPrimeFactor];
    for(let y = greatestPrimeFactor-1; y > 0 ; y--){
    	if(num % y === 0){
      	factorial.push(y)
      } else { return 'not a perfect factorial'
        y = -1
      }
    }
    let largestCalc = factorial.reduce((a,b) => {return a*b})
    for(let x = greatestPrimeFactor+1; x < primes[primeArrayPosition+1]; x++){
    	if(num % (x * largestCalc) === 0 ){
      	factorial.unshift(x)
      } else {
      	x = primes[primeArrayPosition+1]+1
      }
    }
    largestCalc = factorial.reduce((a,b) => {return a*b})
    if (largestCalc != num){
      let lairotcaf_input = this.state.lairotcaf_input
      this.setState({
        lairotcaf_result : 'X',
        result_background_color : 'lairotcaf_result_red',
        lairotcaf_input_stored : lairotcaf_input,
        lairotcaf_input : ''
      })
      return
    }

    factorial = factorial[0]+'!'
    let lairotcaf_input = this.state.lairotcaf_input
    this.setState({
      lairotcaf_result : factorial,
      result_background_color : 'lairotcaf_result_limegreen',
      lairotcaf_input_stored : lairotcaf_input,
      lairotcaf_input : ''
    })

  }


  render(){
    return(
      <div className="section">
        <div className="header">Lairotcaf</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Disemvoweling means removing the vowels (a, e, i, o, u) from text.</p>
        <p> The factorial operator (!) describes the product of an integer and all the integers below it.</p>
        <p>4! -> 4 * 3 * 2 * 1 -> 24</p>
        <p>Write a function that does the reverse of this for any positive integer.</p>
        </div>
        <h2>Give it a try</h2>
      <input ref="lairotcaf_input" onKeyPress={this.handleKeyPress} className="appInputStyling" placeholder="120" onChange={this.saveLairotcafInput}></input>
      <button className="appButtonSyling" onClick={this.getLairotcaf}>factor</button>
      <div className="lairotcaf_result_div" className={this.state.result_background_color}>{this.state.lairotcaf_result}</div>
    <div className="display_lairotcaf_entry">{this.state.lairotcaf_input_stored}</div>
      </div>
    )}
}
