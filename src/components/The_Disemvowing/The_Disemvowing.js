import React from 'react';
import './the_disemvowing.css';

export default class The_Disemvowing extends React.Component{
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
      <input className="appInputStyling" placeholder="string w/ spaces"/>
      <button className="appButtonSyling">disemvowel</button>
      <div className="disemvowel_results">
        result
      </div>
      </div>
    )}
}
