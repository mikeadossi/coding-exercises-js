import React from 'react'
import Nav from 'components/Nav/Nav';
import Home from 'components/Home/Home';
import Guess from 'components/Guess_the_Number/Guess_the_num';
import Scrab_Bag from 'components/Scrab_Bag/Scrab_Bag';
import String_Indices from 'components/String_Indices/String_Indices';
import The_Disemvowing from 'components/The_Disemvowing/The_Disemvowing';
import Who_wants_a_date from 'components/Who_wants_a_date/Who_wants_a_date';
import Lairotcaf from 'components/Lairotcaf/Lairotcaf';
import String_me_along from 'components/String_me_along/String_me_along';
import Braille from 'components/Braille/Braille';
import String_permutations from 'components/String_permutations/String_permutations';
import Finite_state_gate from 'components/Finite_state_gate/Finite_state_gate';

export default class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      home: { program:<Home /> },
      guess: { program:<Guess /> },
      scrab_bag: { program:<Scrab_Bag /> },
      string_indices: { program:<String_Indices /> },
      the_disemvowing: { program:<The_Disemvowing /> },
      who_wants_a_date: { program:<Who_wants_a_date /> }, 
      lairotcaf: { program:<Lairotcaf /> },
      string_me_along: {program: <String_me_along /> },
      braille: { program: <Braille /> },
      string_permutations: { program: <String_permutations /> },
      finite_state_gate: { program: <Finite_state_gate /> }
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
            {this.props.pageName == "the_disemvowing_page" ? this.state.the_disemvowing.program : null }
            {this.props.pageName == "who_wants_a_date_page" ? this.state.who_wants_a_date.program : null }
            {this.props.pageName == "lairotcaf_page" ? this.state.lairotcaf.program : null }
            {this.props.pageName == "string_me_along_page" ? this.state.string_me_along.program : null }
            {this.props.pageName == "braille_page" ? this.state.braille.program : null }
            {this.props.pageName == "string_permutations_page" ? this.state.string_permutations.program : null }
            {this.props.pageName == "finite_state_gate_page" ? this.state.finite_state_gate.program : null }
          </div>
        </div>
    )
  };
};
