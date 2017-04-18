import React from 'react'
import Nav from 'components/Nav/Nav';
import Home from 'components/Home/Home';
import Guess from 'components/Guess_the_Number/Guess_the_num';
import Scrab_Bag from 'components/Scrab_Bag/Scrab_Bag';
import String_indices from 'components/String_indices/String_indices';
import Fibonnacci_Bases from 'components/Fibonnacci_Bases/Fibonnacci_Bases';
import The_Disembowing from 'components/The_Disembowing/The_Disembowing';
import Where_in_the_JSON from 'components/Where_in_the_JSON/Where_in_the_JSON';
import Who_wants_a_date from 'components/Who_wants_a_date/Who_wants_a_date';
import Play_it_again from 'components/Play_it_again/Play_it_again';
import Parents_B_Gone from 'components/Parents_B_Gone/Parents_B_Gone';
import Resolving_Symlinks from 'components/Resolving_Symlinks/Resolving_Symlinks';
import Lairotcaf from 'components/Lairotcaf/Lairotcaf';
import String_me_along from 'components/String_me_along/String_me_along';
import Braille from 'components/Braille/Braille';
import String_permutations from 'components/String_permutations/String_permutations';
import Finite_State_Gate from 'components/Finite_State_Gate/Finite_State_Gate';

export default class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      home: { program:<Home /> },
      guess: { program:<Guess /> },
      scrab_bag: { program:<Scrab_Bag /> },
      string_indices: { program:<String_indices /> },
      fibonnacci_bases: { program:<Fibonnacci_Bases /> },
      the_disembowing: { program:<The_Disembowing /> },
      where_in_the_JSON: { program:<Where_in_the_JSON /> },
      who_wants_a_date: { program:<Who_wants_a_date /> },
      play_it_again: { program:<Play_it_again /> },
      parents_B_Gone: { program:<Parents_B_Gone /> },
      resolving_Symlinks: { program:<Resolving_Symlinks /> },
      lairotcaf: {program:<Lairotcaf /> },
      string_me_along: {program: <String_me_along /> },
      braille: { program: <Braille /> },
      string_permutations: { program: <String_permutations /> },
      finite_State_Gate: { program: <Finite_State_Gate /> }
    }
  }


  render(){
    return(
        <div id="content_page" className="rows">
          <div id="scrab_bagContainer" className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {this.props.pageName == "home_page" ? this.state.home.program : null }
            {this.props.pageName == "guess_page" ? this.state.guess.program : null }
            {this.props.pageName == "scrab_bag_page" ? this.state.scrab_bag.program : null }
            {this.props.pageName == "string_indices_page" ? this.state.string_indices.program : null }
            {this.props.pageName == "fibonnacci_bases_page" ? this.state.fibonnacci_bases.program : null }
            {this.props.pageName == "the_disembowing_page" ? this.state.the_disembowing.program : null }
            {this.props.pageName == "where_in_the_JSON_page" ? this.state.where_in_the_JSON.program : null }
            {this.props.pageName == "who_wants_a_date_page" ? this.state.who_wants_a_date.program : null }
            {this.props.pageName == "play_it_again_page" ? this.state.play_it_again.program : null }
            {this.props.pageName == "parents_B_Gone_page" ? this.state.parents_B_Gone.program : null }
            {this.props.pageName == "resolving_Symlinkas_page" ? this.state.resolving_Symlinkas.program : null }
            {this.props.pageName == "lairotcaf_page" ? this.state.Lairotcaf.program : null }
            {this.props.pageName == "string_me_along_page" ? this.state.string_me_along.program : null }
            {this.props.pageName == "braille_page" ? this.state.braille.program : null }
            {this.props.pageName == "string_permutations_page" ? this.state.string_permutations.program : null }
            {this.props.pageName == "finite_State_page" ? this.state.finite_State.program : null }
          </div>
        </div>
    )
  };
};
