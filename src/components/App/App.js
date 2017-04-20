import React from 'react';
import './app.css';
import Nav from 'components/Nav/Nav';
import Guess from 'components/Guess_the_Number/Guess_the_num';
import Scrab_Bag from 'components/Scrab_Bag/Scrab_Bag';
import String_Indices from 'components/String_Indices/String_Indices';
import Fibonnacci_Bases from 'components/Fibonnacci_Bases/Fibonnacci_Bases';
import The_Disemvowing from 'components/The_Disemvowing/The_Disemvowing';
import Where_in_the_JSON from 'components/Where_in_the_JSON/Where_in_the_JSON';
import Who_wants_a_date from 'components/Who_wants_a_date/Who_wants_a_date';
import Play_it_again from 'components/Play_it_again/Play_it_again';
import Parents_B_Gone from 'components/Parents_B_Gone/Parents_B_Gone';
import Resolving_symlinks from 'components/Resolving_Symlinks/Resolving_Symlinks';
import Lairotcaf from 'components/Lairotcaf/Lairotcaf';
import String_me_along from 'components/String_me_along/String_me_along';
import Braille from 'components/Braille/Braille';
import String_permutations from 'components/String_permutations/String_permutations';
import Finite_state_gate from 'components/Finite_state_gate/Finite_state_gate';
import Content from 'components/Contents/Contents';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentPage: "who_wants_a_date_page",
      guess_random_num: 0,
      guess_input_value: 0,
      guesses_too_small: [],
      guesses_too_large: [],
      guess_value: '??'
    }
  }

  pageChange(pageName){
    this.setState({
      currentPage: pageName
    })
  }

  render(){
    return(
      <div id="app_container">
        <Nav pageChange={this.pageChange.bind(this)} />
      <div id="app_contents">
          <Content pageName={this.state.currentPage}/>
        </div>
      </div>
    )
  }
}
