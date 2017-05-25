import React from 'react';

const NavItems = () => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="">Disabled</a>
      </li>
    </ul>
  </div>
);

export default NavItems;
