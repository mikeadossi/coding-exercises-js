import React from 'react';
import './where_in_the_JSON.css';

export default class Where_in_the_JSON extends React.Component{
  render(){
    return(
      <div className="section">
        <div className="header">Where in the JSON?</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">You will be given a JSON object, and you will print out the search path that leads to the value "4chan". You are allowed to use any JSON parsing libraries that you want to.</p>
        </div>
        <h2>Enter a json object</h2>
        <div>
          <input className="where_in_input"></input>
        <button className="where_in_btn">calculate</button>
        </div>
        <div className="where_in_results">
          result
        </div>
      </div>
    )}
}
