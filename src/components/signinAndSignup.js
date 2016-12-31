import React, { Component } from 'react'
class SigninAndSignup extends Component{
  render(){
    return(
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
                                  <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
      Sign Up Here
      </a>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
              <div id="signupbox" style={{display:'none', marginTop:50+'px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                  <div className="panel panel-info">
                      <div className="panel-heading">
                          <div className="panel-title">Sign Up</div>
                          <div style={{float:'right', fontSize: 85+'%', position: 'relative', top:-10+'px'}}><a id="signinlink" href="#" onClick=$('#signupbox').hide(); $('#loginbox').show()>Sign In</a></div>
                      </div>
                      <div className="panel-body">
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
                              <div className="form-group">
                                  <label for="firstname" className="col-md-3 control-label">First Name</label>
                                  <div className="col-md-9">
                                      <input type="text" className="form-control" name="firstname" placeholder="First Name"/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label for="lastname" className="col-md-3 control-label">Last Name</label>
                                  <div className="col-md-9">
                                      <input type="text" className="form-control" name="lastname" placeholder="Last Name"/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label for="password" className="col-md-3 control-label">Password</label>
                                  <div className="col-md-9">
                                      <input type="password" className="form-control" name="passwd" placeholder="Password"/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label for="icode" className="col-md-3 control-label">Invitation Code</label>
                                  <div className="col-md-9">
                                      <input type="text" className="form-control" name="icode" placeholder=""/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <div className="col-md-offset-3 col-md-9">
                                      <button id="btn-signup" type="button" className="btn btn-info"><i className="icon-hand-right"></i> &nbsp Sign Up</button>
                                      <span style={{marginLeft:8+'px'}}>or</span>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default SigninAndSignup //always capital letter in naming components