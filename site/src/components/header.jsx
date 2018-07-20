import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './header.css';

const Header = ({ siteTitle }) => (
  <nav>
    <div className="logo">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <ul>
        <li>
          <Link
            to="/doc"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            to="/components"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Components
          </Link>
        </li>
        <li>
          <Link
            to="/foobar"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Foobar
          </Link>
        </li>
        <li>
          <a
            href="http://basalt.io"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Basalt
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Site Title',
};

export default Header;
