import React, { Component } from 'react'
import Navbar from './navbar'
class Signin extends Component{
  functionSample()
  {
    console.log('signup!');
  }
  render(){
    return(
      <div>
      <Navbar/>
      <div className="container">
          <div id="loginbox" style={{marginTop:50+ 'px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-info">
                  <div className="panel-heading">
                      <div className="panel-title">Sign In</div>
                      <div style={{float: "right", fontSize: 80+ '%', position: "relative", top:-10+ 'px'}}><a href="#">Forgot password?</a>
                      </div>
                  </div>
              </div>
              <div style={{paddingTop:10+ 'px'}} className="panel-body">
                  <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>
                  <form id="loginform" className="form-horizontal" role="form">
                      <div style={{marginBottom: 25+ 'px'}} className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input id="login-username" type="text" className="form-control" name="username" value="" placeholder="username or email" />
                      </div>
                      <div style={{marginBottom: 25+ 'px'}} className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                          <input id="login-password" type="password" className="form-control" name="password" placeholder="password" />
                      </div>
                      <div className="input-group">
                          <div className="checkbox">
                              <label>
                                  <input id="login-remember" type="checkbox" name="remember" value="1" /> Remember me
                              </label>
                          </div>
                      </div>
                      <div style={{marginTop:10+ 'px'}} className="form-group">
                          <div className="col-sm-12 controls">
                              <a id="btn-login" href="#" className="btn btn-success">Login  </a>
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="col-md-12 control">
                              <div style={{borderTop: 1+ 'px' + 'solid #'+999 , paddingTop:15+ 'px', fontSize:85+ '%'}}>
                                  <a href="#" onClick={this.functionSample.bind(this)}>
      Sign Up Here
      </a>
                              </div>
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
export default Signin //always capital letter in naming components
