import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Nav = () => (
  <nav className="navbar navbar-default navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/" className="navbar-brand"><img className="img-responsive" src={logo} alt="Logo"/></Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><Link className="active" to="/">Select League</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav;