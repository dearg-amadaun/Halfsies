import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const tabs = [{
  route: "/profile",
  label: "Profile"
}, {
  route: "/comments",
  label: "Comments"
}, {
  route: "/maps",
  label: "Maps"
}, {
  route: "/match",
  label: "Match"
}]


const Navigation = (props) => {
  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
      <div className="container-fluid">
          <a className="navbar-brand" href="/home">Halfsies</a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/profile" className="nav-link">
                profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/comments" className="nav-link">
                comments
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/maps" className="nav-link">
                maps
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/match" className="nav-link">
                match
              </NavLink>
            </NavItem>
          </Nav>
      </div>
    </nav>
  <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
    <Nav className="w-100">
      <div className=" d-flex flex-row justify-content-around w-100">
        {
          tabs.map((tab, index) =>(
            <NavItem key={`tab-${index}`}>
              <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon size="lg" icon={tab.icon}/>
                  <div className="bottom-tab-label">{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))
        }
      </div>
    </Nav>
  </nav>
  </div>
)
};

export default Navigation;