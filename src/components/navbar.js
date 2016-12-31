import React, { Component } from 'react'
class Navbar extends Component{
  render(){
    return(
      <div>
          <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
              <div className="container topnav">
                  <div className="navbar-header">
                      <a className="navbar-brand topnav" href="#">StarupProject</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <a href="#login">Login</a>
                          </li>
                          <li>
                              <a href="#signup">Signup</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>

      </div>
    )
  }
}
export default Navbar
