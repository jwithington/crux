import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const generateLinkItems = items =>
  items.map(item => {
    if (item.isHeading) {
      return (
        <li key={item.id}>
          <h4>
            <Link to={item.path}>{item.name}</Link>
          </h4>
        </li>
      );
    }
    return (
      <li key={item.id}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });

const LinkList = ({ items }) => (
  <nav className="link-list">
    <ul>{generateLinkItems(items)}</ul>
  </nav>
);

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinkList;