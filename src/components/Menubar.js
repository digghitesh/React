import React, { Component } from 'react';
import $ from 'jquery';

import ReactDOM from 'react-dom';

import LoadComponent from '../utils/LoadComponent';

class Menubar extends Component {
  componentDidMount() {
    var $li = $('#MainMenu li').click(function() {
      $li.removeClass('selected');
      $(this).addClass('selected');
    });
  }

  loadPage(compName) {
    ReactDOM.render(
      <LoadComponent name={compName} />,
      document.getElementById('MainContentDiv')
    );
  }

  render() {
    return (
      <div>
        <nav className="main-menu" id="MainMenu">
          <ul>
            <li className="selected">
              <a href="#">
                <i className="fa fa-home fa-2x" />
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.loadPage('Books')}>
                <i className="fa fa-book fa-2x" />
                <span className="nav-text">Books</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-list fa-2x" />
                <span className="nav-text">Queries1</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-table fa-2x" />
                <span className="nav-text">Queries2</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-folder-open fa-2x" />
                <span className="nav-text">Test1</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.loadPage('Reports')}>
                <i className="fa fa-bar-chart-o fa-2x" />
                <span className="nav-text">Test2</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-bookmark fa-2x" />
                <span className="nav-text">Bookmark</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menubar;
