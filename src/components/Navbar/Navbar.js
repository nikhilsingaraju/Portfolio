import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavItemClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid nav-container">
          <span className="logo" style={{ fontSize: '25px' }}>
            {'< '}
            <Link className="navbar-brand logo-name" to="/" onClick={handleNavItemClick}>
              Nikhil Singaraju
            </Link>
            {'/'}
            <span style={{ marginLeft: '-0.1px' }}>{'>'}</span>
          </span>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={handleToggleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse${isCollapsed ? ' collapse' : ''}`} id="navbarSupportedContent">
            <ul className="navUl">
              <li className="navList">
                <Link
                  className={`navItem ${location.pathname === '/' ? 'activeLi' : ''}`}
                  aria-current="page"
                  to="/"
                  onClick={handleNavItemClick}
                >
                  Home
                </Link>
              </li>
              <li className="navList">
                <Link
                  className={`navItem ${location.pathname === '/skills' ? 'activeLi' : ''}`}
                  aria-current="page"
                  to="/skills"
                  onClick={handleNavItemClick}
                >
                  My Skills
                </Link>
              </li>
              <li className="navList">
                <Link
                  className={`navItem ${location.pathname === '/projects' ? 'activeLi' : ''}`}
                  aria-current="page"
                  to="/projects"
                  onClick={handleNavItemClick}
                >
                  Projects
                </Link>
              </li>
              <li className="navBtn">
                <a href={process.env.PUBLIC_URL + '/doc/Resume-Nikhil-Singaraju.pdf'} download>
                  <button className="btn d-r-btn">Download Resume</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
