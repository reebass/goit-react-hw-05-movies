import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: blue;
  }
`;
export const Container = styled.div``;
