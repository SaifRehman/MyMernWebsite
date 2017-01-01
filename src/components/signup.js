import React, { Component } from 'react'
import Navbar from './navbar'
class Signup extends Component{
  render(){
    return(
  <div>
  <Navbar/>
  <div className="intro-header">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="intro-message">

                  <div style={{marginTop:-100+ 'px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                      <div className="panel panel-info">
                          <div className="panel-heading">
                              <div className="panel-title">Sign up</div>
                          </div>
                      </div>
                      <div style={{paddingTop:10+ 'px'}} className="panel-body">
                          <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>
                          <form id="loginform" className="form-horizontal" role="form">
                              <div style={{marginBottom: 25+ 'px'}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                  <input id="login-email" type="text" className="form-control" name="email" value="" placeholder="Email" />
                              </div>
                              <div style={{marginBottom: 25+ 'px'}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                  <input id="first-name" type="text" className="form-control" name="firstname" placeholder="First Name" />
                              </div>
                              <div style={{marginBottom: 25+ 'px'}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                  <input id="last-name" type="text" className="form-control" name="lastname" placeholder="Last Name" />
                              </div>
                              <div style={{marginBottom: 25+ 'px'}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                  <input id="university" type="text" className="form-control" name="university" placeholder="University" />
                              </div>
                              <div style={{marginBottom: 25+ 'px'}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-asterisk"></i></span>
                                  <input id="password" type="text" className="form-control" name="password" placeholder="Password" />
                              </div>

                              <div style={{marginTop:10+ 'px'}} className="form-group">
                                  <div className="col-sm-12 controls">
                                      <a id="btn-login" href="#" className="btn btn-success">Sign up</a>
                                  </div>
                              </div>
                              <div className="form-group">

                              </div>
                          </form>
                      </div>
                  </div>
           </div>
           </div>
           </div>
           </div>
           </div>
  </div>
    )
  }
}
export default Signup
