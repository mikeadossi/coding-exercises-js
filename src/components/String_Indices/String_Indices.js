import React from 'react';
import './string_indices.css';

export default class String_Indicies extends React.Component{

  render(){
    return(
      <div className="section">
        <div className="header">String Indices</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Write a program that parses the words in a string by providing a numerical index, similar to how you would access an element within an array with a numerical index.</p>
        </div>
        <h2>Enter a String</h2>
        <input className="string_indices_input appInputStyling" placeholder="one string at a time"/>
      <button className="string_indices_btn appButtonSyling">pass in</button>
      <div className="string_indices_results">
       result
      </div>
      </div>
    )}
}
