import React from 'react';
import './fibonnacci_bases.css';

export default class Fibonnacci_Bases extends React.Component{
  render(){
    return(
      <div className="section">
        <div className="header">Fibonnacci Bases</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Binary (base 2) numbers use 1 and 0 to represent the powers of two that can be summed to yield a base 10 (or decimal) result. Write a program that converts from decimal to base Fibonacci and from Fibonacci to decimal.</p>
        </div>
        <div className="fib_element">
          <input className="fib_to_fibonnacci_btn appInputStyling" placeholder="enter decimal"/>
        <button className="fib_btn appButtonSyling">convert to fibonnacci</button>
        </div>
        <div className="fib_to_fibonnacci_result">answer</div>
        <div className="fib_element">
          <input className="fib_to_decimal_btn appInputStyling" placeholder="enter Fibonacci #"/>
        <button className="fib_btn appButtonSyling">convert to decimal</button>
        </div>
        <div className="fib_to_decimal_result">answer</div>
      </div>
    )}
}
