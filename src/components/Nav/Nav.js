import React from 'react';
import './nav.css';

export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menu_open : 'nav_links display_none',
      menu_styling : 'nav_link hamburgerBtn fa fa-bars'
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.navCloseMenu = this.navCloseMenu.bind(this);
  }

  navCloseMenu(){
    console.log('window.screen.availWidth: ',window.screen.availWidth)
    console.log('window.innerWidth: ',window.innerWidth)
    if(window.innerWidth < 852){
      this.setState({
        menu_styling : 'nav_link hamburgerBtn fa fa-bars',
        menu_open : 'nav_links display_none'
      })
    }
  }

  toggleMenu(){
    console.log('click!')
    let menu = this.state.menu_styling;

    if(menu === 'nav_link hamburgerBtn fa fa-bars'){
      this.setState({
        menu_styling : 'nav_link hamburgerBtn fa fa-close',
        menu_open : 'nav_links display_block'
      })
      console.log('open')
      return
    } else {
      this.setState({
        menu_styling : 'nav_link hamburgerBtn fa fa-bars',
        menu_open : 'nav_links display_none'
      })
      console.log('close')
      return
    }
  }

  render(){
    return(
      <div id="nav_navBar">
      <div className="nav_top">
        <button className="nav_link nav_header" onClick={()=>{this.props.pageChange("home_page"); this.navCloseMenu()}}>Coding Exercises</button>
        <button className={this.state.menu_styling} onClick={this.toggleMenu}></button>
      </div>
      <div className="nav_links" className={this.state.menu_open}>
        <button className="nav_link guess_nav_link" onClick={()=>{this.props.pageChange("guess_page"); this.navCloseMenu()}}>guess the number</button>
      <button className="nav_link" onClick={()=>{this.props.pageChange("scrab_bag_page"); this.navCloseMenu()}}>scrab bag</button>
        <button className="nav_link" onClick={()=>{this.props.pageChange("string_indices_page"); this.navCloseMenu()}}>string indices</button>
      <button className="nav_link incomplete" onClick={()=>{this.props.pageChange("fibonnacci_bases_page"); this.navCloseMenu()}}>fibonnacci bases</button>
        <button className="nav_link" onClick={()=>{this.props.pageChange("the_disemvowing_page"); this.navCloseMenu()}}>the disemvowing</button>
      <button className="nav_link incomplete" onClick={()=>{this.props.pageChange("where_in_the_JSON_page"); this.navCloseMenu()}}>where in the JSON</button>
        <button className="nav_link" onClick={()=>{this.props.pageChange("who_wants_a_date_page"); this.navCloseMenu()}}>who wants a date</button>
      <button className="nav_link incomplete" onClick={()=>{this.props.pageChange("play_it_again_page"); this.navCloseMenu()}}>play it gain</button>
    <button className="nav_link incomplete" onClick={()=>{this.props.pageChange("parens_b_gone_page"); this.navCloseMenu()}}>parens b gone</button>
      <button className="nav_link incomplete" onClick={()=>{this.props.pageChange("resolving_symlinks_page"); this.navCloseMenu()}}>resolving symlinks</button>
        <button className="nav_link" onClick={()=>{this.props.pageChange("lairotcaf_page"); this.navCloseMenu()}}>lairotcaf</button>
      <button className="nav_link" onClick={()=>{this.props.pageChange("string_me_along_page"); this.navCloseMenu()}}>string me along</button>
    <button className="nav_link" onClick={()=>{this.props.pageChange("braille_page"); this.navCloseMenu()}}>braille</button>
      <button className="nav_link" onClick={()=>{this.props.pageChange("string_permutations_page"); this.navCloseMenu()}}>string permutations</button>
    <button className="nav_link" onClick={()=>{this.props.pageChange("finite_state_gate_page"); this.navCloseMenu()}}>finite state gate</button>
        <a href="https://github.com/mikeadossi/coding-exercises-js" target="_blank"><i className="fa fa-github nav_fontAwesome" aria-hidden="true"></i></a>
    </div>
    </div>
    )
  }
}
