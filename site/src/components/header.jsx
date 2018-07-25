import React from 'react';
import Link from 'gatsby-link'; // eslint-disable-line
import PropTypes from 'prop-types';

import basalt from '../../../images/logos/white-grey.svg';
import './header.css';

const Header = ({ siteTitle }) => (
  <nav className="site-header">
    <div className="brand">
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
    <div>
      <ul>
        <li>
          <Link
            to="/docs"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Getting Started
          </Link>
        </li>
        <li>
          <Link
            to="/docs"
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
            to="/design-system"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Design System
          </Link>
        </li>
        <li>
          <Link
            to="http://www.basalt.io"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img src={basalt} alt="Basalt" style={{ height: '1rem' }} />
          </Link>
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
