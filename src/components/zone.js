import React, { Component } from 'react'
class Zones extends Component{
  render(){
    return(
      <div>
      <span style={{color:'blue'}}>{this.props.curr.name}</span>
      <span style = {{color:'red'}}> zipcode is</span> <span style = {{color:"green"}}>{this.props.curr.zipcode} </span>
      <span style={{color:"purple"}}>{this.props.curr.comments}</span>
      </div>
    )
  }
}
export default Zones //always capital letter in naming components
