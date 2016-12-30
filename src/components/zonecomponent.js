import React, { Component } from 'react'
import Zones from './zone'
class ZoneComponent extends Component{
  render(){
    return(
      <div>
      <ol>
      <li><Zones name="zone 1" zipcode="9"/></li>
      <li><Zones name="zone 2" zipcode="8"/></li>
      <li><Zones name="zone 3" zipcode="7"/></li>
      <li><Zones name="zone 4" zipcode="6"/></li>
      <li><Zones name="zone 5" zipcode="5"/></li>
      <li><Zones name="zone 6" zipcode="4"/></li>
      <li><Zones name="zone 7" zipcode="3"/></li>
      <li><Zones name="zone 8" zipcode="2"/></li>
      <li><Zones name="zone 9" zipcode="1"/></li>
      <li><Zones name="zone 10" zipcode="99"/></li>
      </ol>
      </div>
    )
  }
}
export default ZoneComponent
