import React, { Component } from 'react';

import Menubar from './components/Menubar';

class MainPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <nav
              className="navbar navbar-expand navbar-light fixed-top"
              style={{ backgroundColor: '#f2f2f2' }}
            >
              <a className="navbar-brand" href="#">
                Logo
              </a>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    User Name
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-user" /> User Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-power-off" /> Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className="row"
          style={{ backgroundColor: '#dc1431', marginTop: '36px' }}
        >
          &nbsp;
        </div>
        <div className="row">
          <Menubar />
          <div
            className="col-sm border"
            style={{
              marginTop: '10px',
              paddingLeft: '70px'
            }}
          >
            <div className="border" id="MainContentDiv">
              This is my Work Div
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
