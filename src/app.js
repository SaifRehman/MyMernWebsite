import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ZoneComponent from './components/zonecomponent'
class App extends Component{
  render(){
    return(
      <div>
        <ZoneComponent></ZoneComponent>
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))
