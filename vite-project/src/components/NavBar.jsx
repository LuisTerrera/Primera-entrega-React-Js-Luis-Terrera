import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Bolivar Vip</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div classNames="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorìa
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Hogar</a></li>
              <li><a className="dropdown-item" href="#">Limpieza</a></li>
              <li><a className="dropdown-item" href="#">Bazar</a></li>
            </ul>
        </ul>
      </div>
      <button className="btn btn-secondary">
      <CartWidget/>
      </button>
    </div>
  </nav>
  </div>
  )
}

export default NavBar