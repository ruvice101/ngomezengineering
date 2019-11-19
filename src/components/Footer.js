import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <>
        <div className="columns">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.3456634704316!2d11.522916579103997!3d3.8770738844034733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7d5ad59fc3%3A0xda42fdef787e5587!2sRue+Joseph+Essono+Balla%2C+Yaounde!5e0!3m2!1sen!2scm!4v1563923750266!5m2!1sen!2scm"
            className="column is-12" height="450" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <footer className="footer has-background-black has-text-white-ter">
          <div className="content has-text-centered">
            <img
              src={logo}
              alt="Ngomez Engineering Logo"
              style={{ maxWidth: 360, height: "auto" }}
            />
          </div>
          <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Acceuil
                      </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/mission">
                          Mission
                      </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/metiers">
                          Métiers
                      </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/formations">
                          Formations
                      </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Nous Contacter
                      </Link>
                      </li>
                      <li>
                        <a
                          className="navbar-item"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Espace Administrateur
                      </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                      </Link>
                      </li>
                      <li>
                        <a className="navbar-item" href="https://goo.gl/maps/xcaDnaUtHnMvmVPa7" target="__blank">
                          Rue Joseph Balla ESSONO, ETOA MEKI
                      </a>
                      </li>
                      <li>
                        <a className="navbar-item" href="tel:+237670142970">
                          (+237) 670 142 970 - 697 862 315
                      </a>
                      </li>
                      <li>
                        <a className="navbar-item" href="mailto:contact@ngomezengineering.com">
                          contact@ngomezengineering.com
                      </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4 social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="has-text-centered" style={{ fontSize: 14 }}>
              Copyright © 2019 Ngomez Engineering | Développé par <a
                style={{
                  color: "#339999", fontSize: 14
                }}
                href="https://www.bogital.com" target="__blank">Bogital Cameroun</a>
            </p>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
