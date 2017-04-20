import React from 'react';
import './where_in_the_JSON.css';

export default class Where_in_the_JSON extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      //
    }

  }


  render(){
    return(
      <div className="section">
        <div className="header">Where in the JSON?</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">Given a JSON object, print out the search path that leads to the value "4chan". You are allowed to use any JSON parsing libraries that you want to.</p>
        </div>
        <h2>Enter a json object</h2>
        <div>
          <textarea className="where_in_input" ref='where_in_input'>
          </textarea>
        <button className="where_in_btn">calculate</button>
        </div>
        <div className="where_in_results">
          result
        </div>
      </div>
    )}
}
