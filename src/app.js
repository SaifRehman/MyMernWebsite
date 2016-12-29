import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import zone from './components/zone'
class App extends Component{
  render(){
    return(
      <div>
        hello React!
        <zone></zone>
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
