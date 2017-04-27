import React from 'react';
import './parens_b_gone.css';

export default class Parens_B_Gone extends React.Component{
  render(){
    return(
      <div className="section">
        <div className="header">Parens b gone</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
          <p className="instructions">((( 7 ))) is an expression that contains too many parentheses. How many is "too many" parentheses? If you can strip the expression of one set of parentheses, and the same expression still contains parentheses, it has too many parentheses.</p>
          <h2>Give it a try</h2>
        <input className="appInputStyling" />
        <button className="appButtonSyling">remove parens</button>
        </div>
      </div>
    )}
}
