import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MiTienda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link to="productos/frutas" className="nav-link">Frutas</Link>
        </li>
        <li className="nav-item">
        <Link to="productos/lacteos" className="nav-link">Lacteos</Link>
        </li>
        <li className="nav-item">
        <Link to="productos/frutossecos" className="nav-link">Frutos Secos</Link>
        </li>
        <li className="nav-item" className="nav-link"><CartWidget/></li>        
        
        
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar
