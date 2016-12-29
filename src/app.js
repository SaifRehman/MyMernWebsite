import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Zones from './components/zone'
class App extends Component{
  render(){
    return(
      <div>
        hello React!
        <Zones></Zones>
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
