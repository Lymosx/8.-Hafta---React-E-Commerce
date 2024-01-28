import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">MADEO</a>
                <div className="container d-flex justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Anasayfa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Ürünler</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">Hakkımızda</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactus">Bizimle İletişime Geçin</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="d-flex">
                    <button type="button" class="btn btn-primary d-flex justify-content-right">
                        Card <span class="badge badge-light">9</span>
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;