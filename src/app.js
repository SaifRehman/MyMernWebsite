import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ZoneComponent from './components/zonecomponent'
import Navbar from './components/navbar'
import SigninAndSignup from './components/signinAndSignup'

class App extends Component{
  render(){
    return(
      <div>
          <Navbar></Navbar>
          <SigninAndSignup></SigninAndSignup>
    </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
