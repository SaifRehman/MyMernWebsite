import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ZoneComponent from './components/zonecomponent'
class App extends Component{
  render(){
    return(
      <div>
       <nav className="navbar navbar-default">
          <div className="container-fluid">
             <div className="navbar-header">
                <a className="navbar-brand">Project Dubai</a>
             </div>
          </div>
       </nav>
       <div className="container">
          <div id="loginbox" style={{marginTop:50+'px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
             <div className="panel panel-info" >
                <div className="panel-heading">
                   <div className="panel-title">Sign In</div>
                   <div style={{float:"right", fontSize: 80+'%', position:"relative", top:-10+'px'}}><a href="#">Forgot password?</a>
                </div>
             </div>
          </div>
          <div style={{paddingTop:30+'px'}} className="panel-body" >
             <div style={{display:'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>
             <form id="loginform" className="form-horizontal" role="form">
                <div style={{marginBottom: 25+'px'}} className="input-group">
                   <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                   <input id="login-username" type="text" className="form-control" name="username" value="" placeholder="username or email"/>
                </div>
                <div style={{marginBottom: 25+'px'}} className="input-group">
                   <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                   <input id="login-password" type="password" className="form-control" name="password" placeholder="password"/>
                </div>
                <div className="input-group">
                   <div className="checkbox">
                      <label>
                      <input id="login-remember" type="checkbox" name="remember" value="1"/> Remember me
                      </label>
                   </div>
                </div>
                <div style={{marginTop:10+'px'}} className="form-group">
                   <div className="col-sm-12 controls">
                      <a id="btn-login" href="#" className="btn btn-success">Login  </a>
                   </div>
                </div>
                <div className="form-group">
                   <div className="col-md-12 control">
                      <div style={{borderTop: 1+'px' , paddingTop:15+'px', fontSize:85+'%'}} >
                         <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
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
ReactDOM.render(<App />,document.getElementById('root'))
