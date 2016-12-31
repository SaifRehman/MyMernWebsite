import React, { Component } from 'react'
class TopBanner extends Component{
  render(){
    return(
      <div>
      <a name="about"></a>
      <div className="intro-header">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="intro-message">
                          <h1>StarupProject</h1>
                          <h3>Database for Young Talent</h3>
                          <hr className="intro-divider"/>
                          <ul className="list-inline intro-social-buttons">
                              <li>
                                  <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
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
  </div>
    )
  }
}
export default TopBanner
