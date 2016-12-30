import React, { Component } from 'react'
class Zones extends Component{
  render(){
    return(
      <div>
      {this.props.curr.name}
      <span> zipcode is {this.props.curr.zipcode} </span>
      {this.props.curr.comments}
      </div>
    )
  }
}
export default Zones //always capital letter in naming components
