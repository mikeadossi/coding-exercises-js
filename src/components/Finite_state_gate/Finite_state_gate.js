import React from 'react';
import './finite_state_gate.css';

export default class Finite_state_gate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      finite_state_meter : '',
      finite_state_status : 'Gate: OPEN',
      finite_state_fill : 0
    }

    this.finiteStateAction = this.finiteStateAction.bind(this);
  }

  finiteStateAction(){
    console.log('click!')
    let fill = this.state.finite_state_fill;
    let status = this.state.finite_state_status;
    let newStatus;


    if(status = 'Gate: OPEN'){
      this.setState({
        finite_state_status : 'CLOSING'
      })
      let that = this;
      let run;

      // setTImeout runs once and is nonblocking when used in a for loop, so rather than writing a setTimeout inside a for loop write your loop inside the setTimeout call.
      run = function(){
        setTimeout(function(){
          fill += 10;
          that.setState({
            finite_state_fill : fill
          });
          if(fill < 100){
            run();
          }
          console.log('set')
        }, 1000)
      }

      run();
      console.log('fill: ',fill)

      this.setState({
        finite_state_status : 'Gate: CLOSED'
      })
      return
    }

  }

  render(){
    let percentage = this.state.finite_state_fill + '%';
    return(
      <div className="section">
        <div className="header">Finite State Gate</div>
        <div className="content_container">
          <h2 className="description">Description</h2>
        <p className="instructions">You just installed a new remote controlled gate, and you're having a blast playing with the remote clicker. If the gate is OPEN or CLOSED, clicking the remote will cause it to move, until it completes the cycle of opening or closing.</p>
        <p>If the gate is currently opening or closing, clicking the remote will make it stop where it is. When clicked again, the gate will go in the opposite direction, until the cycle is complete or the remote is clicked again.</p>
        </div>
        <div>
          <h2>Have a Go</h2>
          <div className="finite_state_meter">
            <div className="finite_state_meter_progress" style={{width:percentage}}></div>
          </div>
        <div className="finite_state_message">{this.state.finite_state_status}</div>
      <button className="finiteGate_Btn" onClick={this.finiteStateAction}>Go</button>
        </div>
      </div>
    )}
}
