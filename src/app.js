import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ZoneComponent from './components/zonecomponent'
import Navbar from './components/navbar'
import SigninAndSignup from './components/signinAndSignup'
import TopBanner from './components/topbanner'
import LandingPageFirstData from './components/landingpagefirstData'
import LandingPageSecondData from './components/landingpagesecondData'
import LandingPageBanner from './components/landingpagebanner'



class App extends Component{
  render(){
    return(
      <div>
          <Navbar></Navbar>
          <TopBanner></TopBanner>
          <LandingPageFirstData/>
          <LandingPageSecondData/>
          <LandingPageBanner/>
    </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
