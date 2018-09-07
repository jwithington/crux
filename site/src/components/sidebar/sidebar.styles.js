import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

export const SidebarStyled = styled.aside`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  width: ${props => (props.sidebarCollapsed ? '50px' : '300px')};
  transition: 0.6s;
  h4:not(:first-child) {
    white-space: nowrap;
    margin: 1.25rem 0 0;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  a {
    white-space: nowrap;
  }
`;

export const SidebarColumn = styled.div`
  position: relative;
  width: calc(100% - 19px);
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f2f3f3;
  padding: ${props => (props.sidebarCollapsed ? '25px' : '2rem')};
  transition: 0.6s;
  > * {
    left: ${props => (props.sidebarCollapsed ? '-300px' : '0')};
    opacity: ${props => (props.sidebarCollapsed ? '0' : '1')};
  }
`;

export const SidebarTrayHandle = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 100%;
  border-left: 1px solid lightgray;
  transition: all 0.3s;
  &:hover {
    border-left: solid 1px #e1c933;
    color: #e1c933;
    cursor: pointer;
  }
`;

export const ToggleChevron = styled(FaChevronLeft)`
  margin-top: 50vh;
  ${props =>
    props.sidebarcollapsed === 'true'
      ? `
    transform: rotate(180deg);
    `
      : ``};
`;
