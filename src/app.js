import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ZoneComponent from './components/zonecomponent'
import Navbar from './components/navbar'
import TopBanner from './components/topbanner'
import LandingPageFirstData from './components/landingpagefirstData'
import LandingPageSecondData from './components/landingpagesecondData'
import LandingPageBanner from './components/landingpagebanner'
import Footer from './components/footer'
import Signin from './components/signin'
import Signup from './components/signup'
import LandingPage from './components/landingpage'

import {Router,Route,IndexRoute,hashHistory} from "react-router"


class App extends Component{
  render(){
    return(
      <div>
    </div>
    )
  }
}
ReactDOM.render(
  < Router  history = {hashHistory}>
  < Route path = "/" component={LandingPage}></Route>
  < Route path = "signin" component={Signin}> </Route>
  </Router>
  ,document.getElementById('root'))
