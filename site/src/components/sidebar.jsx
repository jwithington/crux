import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInputWrapper } from '@basalt/bedrock-atoms';
import { FaChevronLeft } from 'react-icons/fa';
import LinkList from './link-list';

const TypeToFilter = styled.div`
  > .eyebrow {
    margin-top: 0;
    font-weight: bold;
  }
  margin-bottom: 2rem;
`;

const SidebarStyled = styled.aside`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 325px;
  position: relative;
  background-color: #f2f3f3;
  transition: 0.6s;
  h4 {
    margin: 1.25rem 0 0;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  ${props =>
    props.sidebarCollapsed
      ? `
    max-width: 50px;
    `
      : ``};
`;

const SidebarColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  //transition: 0.6s;
  * {
    left: 0;
    transition: left 0.6s;
    ${props =>
      props.sidebarCollapsed
        ? `
    left: -500px;
    `
        : ``};
  }
`;

const SidebarColumn2 = SidebarColumn.extend`
  position: absolute;
  padding: 0;
  right: -20px;
  height: 100%;
  border-left: 1px solid lightgray;
  &:hover {
    transition: 0.6s;
    border-left: solid 3px #e1c933;
    color: #e1c933;
    cursor: pointer;
  }
`;

const ToggleChevron = styled(FaChevronLeft)`
  //transition: 0.1s;
  margin-top: 50vh;
  ${props =>
    props.sidebarCollapsed
      ? `
    transform: rotate(180deg);
    `
      : ``};
`;

const resourcesLinks = [
  {
    title: 'Resources',
    id: 'resources',
    isHeading: true,
  },
  {
    title: 'Logo Downloads',
    id: 'logo-downloads',
    path: `/resources/logo-downloads`,
  },
  {
    title: 'Logo Usage',
    id: 'logo-usage',
    path: '/resources/logo-usage',
  },
  {
    title: 'Photography Guidelines',
    id: 'photography-guidelines',
    path: '/resources/photography-guidelines',
  },
  {
    title: 'Brand Descriptors',
    id: 'brand-descriptors',
    path: '/resources/brand-descriptors',
  },
  {
    title: 'Sketch Assets',
    id: 'sketch-assets',
    path: '/resources/sketch-assets',
  },
];

const perceptualPatternsLinks = [
  {
    title: 'Visual Language',
    id: 'visual',
    isHeading: true,
  },
  {
    title: 'Animations',
    id: 'AnimationsPage',
    path: `/visual-language/animations`,
  },
  {
    title: 'Breakpoints',
    id: 'BreakpointsPage',
    path: '/visual-language/breakpoints',
  },
  {
    title: 'Colors',
    id: 'ColorsPage',
    path: `/visual-language/colors`,
  },
  {
    title: 'Spacings',
    id: 'SpacingPage',
    path: '/visual-language/spacings',
  },
  {
    title: 'Typography',
    id: 'TypographyPage',
    path: '/visual-language/typography',
  },
  {
    title: 'Icons',
    id: 'IconsPage',
    path: '/visual-language/icons',
  },
];

const aboutLinks = [
  {
    title: 'About',
    id: 'heading',
    isHeading: true,
  },
  {
    path: '/about',
    title: 'Get Started',
    id: 'about',
  },
  {
    path: '/about/release-notes',
    title: 'Release Notes',
    id: 'release-notes',
  },
  {
    path: '/about/feature-requests',
    title: 'Feature Requests and Bugs',
    id: 'feature-requests',
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = {
      sidebarCollapsed: props.isInitiallyCollapsed,
      filterTerm: '',
      items: [],
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      items: [
        ...perceptualPatternsLinks,
        {
          title: 'Patterns',
          id: 'patterns',
          isHeading: true,
        },
        ...props.patterns,
        ...resourcesLinks,
        ...aboutLinks,
      ],
    };
  }

  handleToggleClick() {
    this.setState(prevState => ({
      sidebarCollapsed: !prevState.sidebarCollapsed,
    }));
  }

  render() {
    const isCollapsed = this.state.sidebarCollapsed;
    const items =
      this.state.filterTerm === ''
        ? this.state.items
        : this.state.items.filter(item => {
            if (item.isHeading) return true;
            return (
              item.title
                .toLowerCase()
                .search(this.state.filterTerm.toLowerCase()) !== -1
            );
          });

    return (
      <SidebarStyled sidebarCollapsed={isCollapsed}>
        <SidebarColumn sidebarCollapsed={isCollapsed}>
          <TypeToFilter>
            <h4 className="eyebrow">Filter List</h4>
            <TextInputWrapper>
              <input
                type="text"
                className="type-to-filter"
                placeholder="Type to filter..."
                value={this.state.filterTerm}
                onChange={event =>
                  this.setState({ filterTerm: event.target.value })
                }
              />
            </TextInputWrapper>
          </TypeToFilter>
          <LinkList items={items} basePath="/patterns/components/" />
        </SidebarColumn>
        <SidebarColumn2 onClick={this.handleToggleClick}>
          <ToggleChevron sidebarCollapsed={isCollapsed} />
        </SidebarColumn2>
      </SidebarStyled>
    );
  }
}

Sidebar.defaultProps = {
  patterns: [],
  isInitiallyCollapsed: false,
};

Sidebar.propTypes = {
  isInitiallyCollapsed: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  patterns: PropTypes.arrayOf(
    // @todo pull in definition from `pattern-meta.schema.json`
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

export default Sidebar;
