import React, { Component } from 'react'
class LandingPageBanner extends Component{
  render(){
    return(
    <div>
    	<a  name="contact"></a>
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Connect to Start Bootstrap:</h2>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-inline banner-social-buttons">
                            <li>
                                <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default LandingPageBanner
