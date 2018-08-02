import styled from 'styled-components';

export const Details = styled.details`
  padding: 7px 0;
  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
  margin-bottom: 10px;
  summary {
    font-weight: bold;
    font-size: 125%;
  }
  &:hover {
    cursor: pointer;
  }
`;