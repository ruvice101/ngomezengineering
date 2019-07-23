import React, { Component } from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.jpg';

import './navigation.sass';


class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );
  };

  render() {
    return (
      <>
        <nav
          className="navbar menu is-transparent is-hidden-desktop"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Logo | Ngomez Engineering" style={{ width: '12em', height: "auto" }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            <ul className={`navbar-menu ${this.state.navBarActiveClass} stacked-nav`}>
              {
                ROUTES.map((item, i) => (
                  <li>
                    <Link className="is-active" to={item.path} key={i}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
        <nav 
          role="navigation"
          className="sidenav is-hidden-touch">
          <ul>
            <li>
              <Link to="/" className="navbar-item" title="Logo">
                <img 
                  src={logo}
                 alt="Logo | Ngomez Engineering" />
              </Link>
            </li>
            {
              ROUTES.map((item, i) => (
                <li>
                  <Link className="navbar-item" to={item.path} key={i}>
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </>
    );
  }
}

const ROUTES = [
  {
    name: "Acceuil",
    path: '/'
  },
  {
    name: "Mission",
    path: '/mission'
  },
  {
    name: "Métiers",
    path: '/metiers'
  },
  {
    name: "Formations",
    path: '/formations'
  },
  {
    name: "Nous contacter",
    path: '/contact'
  }
]

export default Navigation;