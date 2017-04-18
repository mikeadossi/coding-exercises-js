import React from 'react';
import './scrab_bag.css';

export default class Scrab_Bag extends React.Component{
  render(){
    return(
      <div className="section">
        <div className="header">Scrab-Bag</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
          <p className="instructions">Scrabble has a set number of 100 tiles. This number does not change between games, nor does the frequency of each letter. Frequency and point value of each tile. Represent each tile by the letter that appears on it, and blank tiles by underscores (_). Input: An uppercase string with the tiles that have already been played. E.g., if 14 tiles have been played, you would be given an input like this:</p>
        </div>
      </div>
    )}
}
