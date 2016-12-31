import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ZoneComponent from './components/zonecomponent'
import Navbar from './components/navbar'
import SigninAndSignup from './components/signinAndSignup'
import TopBanner from './components/topbanner'
import LandingPageFirstData from './components/landingpagefirstData'
import LandingPageSecondData from './components/landingpagesecondData'
import LandingPageBanner from './components/landingpagebanner'
import Footer from './components/footer'



class App extends Component{
  render(){
    return(
      <div>
          <Navbar/>
          <TopBanner/>
          <LandingPageFirstData/>
          <LandingPageSecondData/>
          <LandingPageBanner/>
          <Footer/>
    </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
