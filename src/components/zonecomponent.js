import React, { Component } from 'react'
import Zones from './zone'
class ZoneComponent extends Component{
  render(){
    const firstZone = {name:'zone1',zipcode:'10012',comments:10};
    const secondZone = {name:'zone2',zipcode:'10013',comments:20};
    const thirdZone = {name:'zone3',zipcode:'10014',comments:30};
    const fourthZone = {name:'zone4',zipcode:'10015',comments:40};
    return(
      <div>
      <ol>
      <li><Zones curr={firstZone}/></li>
      <li><Zones curr={secondZone}/></li>
      <li><Zones curr={thirdZone}/></li>
      <li><Zones curr={fourthZone}/></li>
      </ol>
      </div>
    )
  }
}
export default ZoneComponent
