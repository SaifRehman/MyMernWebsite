import React, { Component } from 'react'
import Zones from './zone'
class ZoneComponent extends Component{
  render(){
    return(
      <div>
      <ol>
      <li><Zones name="zone 1"/></li>
      <li><Zones name="zone 2"/></li>
      <li><Zones name="zone 3"/></li>
      <li><Zones name="zone 4"/></li>
      <li><Zones name="zone 5"/></li>
      </ol>
      </div>
    )
  }
}
export default ZoneComponent
