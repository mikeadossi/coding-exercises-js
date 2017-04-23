import React from 'react';
import './nav.css';

export default class Nav extends React.Component{
  render(){
    return(
      <div id="nav_navBar">
        <button className="nav_link nav_header" onClick={()=>this.props.pageChange("home_page")}>Coding Exercises</button>
        <button className="nav_link" onClick={()=>this.props.pageChange("guess_page")}>guess the number</button>
        <button className="nav_link" onClick={()=>this.props.pageChange("scrab_bag_page")}>scrab bag</button>
        <button className="nav_link" onClick={()=>this.props.pageChange("string_indices_page")}>string indices</button>
      <button className="nav_link incomplete" onClick={()=>this.props.pageChange("fibonnacci_bases_page")}>fibonnacci bases</button>
        <button className="nav_link" onClick={()=>this.props.pageChange("the_disemvowing_page")}>the disemvowing</button>
      <button className="nav_link incomplete" onClick={()=>this.props.pageChange("where_in_the_JSON_page")}>where in the JSON</button>
        <button className="nav_link" onClick={()=>this.props.pageChange("who_wants_a_date_page")}>who wants a date</button>
      <button className="nav_link incomplete" onClick={()=>this.props.pageChange("play_it_again_page")}>play it gain</button>
      <button className="nav_link incomplete" onClick={()=>this.props.pageChange("parents_B_Gone_page")}>parents b gone</button>
      <button className="nav_link incomplete" onClick={()=>this.props.pageChange("resolving_symlinks_page")}>resolving symlinks</button>
        <button className="nav_link" onClick={()=>this.props.pageChange("lairotcaf_page")}>lairotcaf</button>
      <button className="nav_link" onClick={()=>this.props.pageChange("string_me_along_page")}>string me along</button>
    <button className="nav_link" onClick={()=>this.props.pageChange("braille_page")}>braille</button>
      <button className="nav_link" onClick={()=>this.props.pageChange("string_permutations_page")}>string permutations</button>
    <button className="nav_link" onClick={()=>this.props.pageChange("finite_state_gate_page")}>finite state gate</button>
        <a href="https://github.com/mikeadossi/coding-exercises-js" target="_blank"><i className="fa fa-github nav_fontAwesome" aria-hidden="true"></i></a>
      </div>
    )
  }
}
