import React from 'react';
import './home.css';

export default class Home extends React.Component{
  render(){
    return(
      <div className="section home_container">
        <div className="home_centered">
          <div className="home_header">15 Coding Exercises</div>
          <div className="home_content_container">
            <p>A collection of small exercises, puzzles, and coding problems in JavaScript.</p>
          </div>
        </div>
      </div>
    )}
}
