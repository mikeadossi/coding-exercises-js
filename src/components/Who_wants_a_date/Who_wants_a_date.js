import React from 'react';
import './who_wants_a_date.css';

export default class Who_wants_a_date extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      date_input_val: ''
    }

    this.storeDate = this.storeDate.bind(this);
    this.convertDate = this.convertDate.bind(this);
  }

  storeDate(e){
    e.preventDefault()
    this.setState({
      date_input_val : e.target.value
    })
  }

  convertDate(e){
    console.log('converted')
    e.preventDefault()
    this.refs.user_date_entry.value = '';
    let userDateEntry = this.state.date_input_val;
    console.log('userDateEntry: ',userDateEntry)
    let month;
    let year;
    let day;
    let date;
    let decade = 20;

    let currentYear = new Date().getFullYear()
    let lastDigitsCurrentYear = currentYear % 100

    if(userDateEntry.indexOf("/") > -1){
      console.log('string has forward slash')
      let removeSlashes = userDateEntry.split('/')
      if(removeSlashes[2] > lastDigitsCurrentYear){
        decade = '19'
      }
      date = decade+removeSlashes[2]+'-'+removeSlashes[0]+'-'+removeSlashes[1]
      return date
    }

    if(userDateEntry.indexOf("+") > -1){
      let stringPlusesRemoved = userDateEntry.split('+')
      if(stringPlusesRemoved[2] > lastDigitsCurrentYear){
        decade = '19'
      }
      date = decade+stringPlusesRemoved[1]+'-'+stringPlusesRemoved[0]+'-'+stringPlusesRemoved[2]
      return date
    }

    if(userDateEntry.indexOf("*") > -1){
      let stringStarsRemoved = userDateEntry.split('*')
      if(stringStarsRemoved[2] > lastDigitsCurrentYear){
        decade = '19'
      }
      date = stringStarsRemoved[2]+'-'+stringStarsRemoved[1]+'-'+stringStarsRemoved[0]
      return date
    }

    if(userDateEntry.indexOf(",") > -1){
      let stringCommasRemoved = userDateEntry.split(' ')
      console.log('stringCommasRemoved IS ',stringCommasRemoved)
      if(stringCommasRemoved.length === 2){
        console.log('stringCommasRemoved *******> ',stringCommasRemoved)
        stringCommasRemoved.splice(1,1,(stringCommasRemoved[1].split(','))[0],(stringCommasRemoved[1].split(','))[1])
        console.log('stringCommasRemoved ***> ',stringCommasRemoved)
      } else {
        stringCommasRemoved.splice(1,1,stringCommasRemoved[1].substr(0,2))
        console.log('stringCommasRemoved @@> ',stringCommasRemoved)
      }

      var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

      let position = '';
      for(let i = 0; i < months.length; i++){
        if( stringCommasRemoved[0] === months[i] ){
          position = i
        }
      }

      stringCommasRemoved.splice(0,1,position+1)
      console.log('stringCommasRemoved => ',stringCommasRemoved)
      if(stringCommasRemoved[0] < 10){
        stringCommasRemoved.splice(0,1,'0'+stringCommasRemoved[0])
      }
      if(stringCommasRemoved[2].split('').length > 2  && stringCommasRemoved[2] > lastDigitsCurrentYear){
        console.log("stringCommasRemoved[2].split('').length > 2 : ",stringCommasRemoved[2].split('').length > 2)
        decade = ''
      }
      if(stringCommasRemoved[2].split('').length === 2 && stringCommasRemoved[2] > lastDigitsCurrentYear){
        console.log("stringCommasRemoved[2].split('').length > 2 : ",stringCommasRemoved[2].split('').length > 2)
        console.log('AA')
        decade = '19'
      }
      if(userDateEntry[2].length > 2 ){
        console.log('userDateEntry: ',userDateEntry)
        decade = ''
      }

      console.log('stringCommasRemoved[2]: ',stringCommasRemoved[2])
      date = decade+stringCommasRemoved[2]+'-'+stringCommasRemoved[0]+'-'+stringCommasRemoved[1]
      console.log(date)
      return date
    }


  }

  render(){
    return(
      <div className="section">
        <div className="header">Who wants a date!</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">According to ISO 8601 standard, the best way to format a date is: yyyy-mm-dd. Dates can be written as follows: </p>
      <ul className="app_code">
        <li>yyyy-mm-dd</li>
        <li>mm/dd/yy</li>
        <li>mm+yy+dd</li>
        <li>dd*mm*yyyy</li>
        <li>(month in words) dd, yy</li>
        <li>(month in words) dd, yyyy</li>
      </ul>
        <p>Given the 6 formats for stating dates above, write a program which could convert each date in a imaginary database to all look like yyyy-mm-dd. </p>
          </div>
          <h2>Enter a Date</h2>
        <input ref="user_date_entry" className="appInputStyling" onChange={this.storeDate}></input>
      <button className="appButtonSyling" onClick={this.convertDate}>Submit</button>
        </div>
    )}

}
