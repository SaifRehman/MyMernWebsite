import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import TopBanner from './topbanner'
import LandingPageFirstData from './landingpagefirstData'
import LandingPageSecondData from './landingpagesecondData'
import LandingPageBanner from './landingpagebanner'
import Footer from './footer'
import Signin from './signin'
import Signup from './signup'
class LandingPage extends Component{
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
export default LandingPage
