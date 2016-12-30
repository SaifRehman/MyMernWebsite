import React, { Component } from 'react'
class Zones extends Component{
  render(){
    return(
      <div>
      {this.props.name}
      <span> zipcode is {this.props.zipcode} </span>
      </div>
    )
  }
}
export default Zones //always capital letter in naming components
