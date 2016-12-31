import React, { Component } from 'react'
import Navbar from './navbar'

class Signup extends Component{
  render(){
    return(
  <div>
<div id="signupbox" style={{display:'none', marginTop:50+'px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                  <div className="panel panel-info">
                      <div className="panel-heading">
                          <div className="panel-title">Sign Up</div>
                          <div style={{float:'right', fontSize: 85+'%', position: 'relative', top:-10+'px'}}><a id="signinlink" href="#">Sign In</a></div>
                      </div>
                      <div className="panel-body" >
                          <form id="signupform" className="form-horizontal" role="form">
                              <div id="signupalert" style={{display:'none'}} className="alert alert-danger">
                                  <p>Error:</p>
                                  <span></span>
                              </div>
                              <div className="form-group">
                                  <label for="email" className="col-md-3 control-label">Email</label>
                                  <div className="col-md-9">
                                      <input type="text" className="form-control" name="email" placeholder="Email Address"/>
                                  </div>
                              </div>

                          </form>
                       </div>
                  </div>
       </div>
  </div>
    )
  }
}
export default Signup
