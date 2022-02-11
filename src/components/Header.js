import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Журнал
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sta" className="nav-link">
                Статистика
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
