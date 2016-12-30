import React, { Component } from 'react'
class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
         <div className="container-fluid">
            <div className="navbar-header">
               <a className="navbar-brand">Project Dubai</a>
            </div>
         </div>
      </nav>
    )
  }
}
export default Navbar //always capital letter in naming components
