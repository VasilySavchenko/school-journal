import React from 'react';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                href="/
              "
                className="nav-link"
              >
                Журнал
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/statistics
              "
                className="nav-link"
              >
                Статистика
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
