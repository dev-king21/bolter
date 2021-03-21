import React from 'react';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
import {NavLink, withRouter} from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <div>
          <div className="mx-3 my-5">
            <div className = "row">
              <div className = "col-md-3">
                <img src={require("assets/images/logo-blue.png")} style = {{height:'90px',width:'auto',marginLeft:'110px'}} alt="Bolter logo" title="Bolter"/>
              </div>
              <div className = "col-md-2">
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.home"/></span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.howitworks"/></span>
                  </NavLink>                  
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.aboutus"/></span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.blog"/></span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.contactus"/></span>
                  </NavLink>
                </div>
              </div>
              <div className = "col-md-2">
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.faqs"/></span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.documentation"/></span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.terms"/></span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.workatbolter"/></span>
                  </NavLink>
                </div>
              </div>
              <div className = "col-md-2">
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.legal"/></span>
                  </NavLink>
                </div>
                <div>
                  <NavLink className="prepend-icon" to="/home">
                    <span className="nav-text"><IntlMessages id="sidebar.impressum"/></span>
                  </NavLink>
                </div>
                <div>
                  <Button variant="contained" className="my-button bg-white border my-border mt-4"
                      style={{color:'rgba(81, 168, 219, 0.7)'}}
                  >
                          Become a Bolter
                  </Button>
                </div>
              </div>
              <div className = "col-md-3">
                <div>
                  Follow us
                </div>
                <div className = "mt-2">
                  <img src={require("assets/images/symbols/linkedin.png")} alt="linkedin logo" title="Bolter" style = {{height:'40px',width:'auto',marginRight:'20px'}}/>
                  <img src={require("assets/images/symbols/instagram.png")} alt="instagram logo" title="Bolter" style = {{height:'40px',width:'auto',marginRight:'20px'}}/>
                  <img src={require("assets/images/symbols/facebook.png")} alt="facebook logo" title="Bolter" style = {{height:'40px',width:'auto',marginRight:'20px'}}/>
                </div>
                
              </div>
              
 
 
              
            </div>
          </div>
        </div>
        <div className = "text-center py-2" style={{backgroundColor:'#2B5485' , color:'white'}}>
            © 2021 Bolter
        </div>
      </div>      
    );
  }
;

export default Footer;
