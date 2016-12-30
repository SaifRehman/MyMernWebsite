import React, { Component } from 'react'
import Zones from './zone'
class ZoneComponent extends Component{
  constructor(){
  super()
  this.state={
      list:[
        {name:'zone1',zipcode:'10012',comments:10},
        {name:'zone2',zipcode:'10013',comments:20},
        {name:'zone3',zipcode:'10014',comments:30},
        {name:'zone4',zipcode:'10015',comments:40},
        {name:'zone6',zipcode:'10016',comments:50}
      ]
    }
  }
  render(){
    const listItems = this.state.list.map((zone,i) =>{
      return(
        <li><Zones curr={zone}/></li>
      )

    }) // function call back
    return(
      <div>
      <ol>
        {listItems}
      </ol>
      </div>
    )
  }
}
export default ZoneComponent
