import React from 'react';
import './home.css';

export default class Home extends React.Component{
  render(){
    return(
      <div className="section home_container">
        <div className="home_centered">
          <div>
            <div className="home_title_top">15</div>
            <div className="home_title">Coding</div>
            <div className="home_title">Exercises</div>
          </div>
          <div className="home_content_container">
            <p>A collection of small exercises, puzzles, and coding problems in JavaScript.</p>
          </div>
        </div>
      </div>
    )}
}
