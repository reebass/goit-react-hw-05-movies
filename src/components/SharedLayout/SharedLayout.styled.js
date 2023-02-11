import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  border-bottom: 1px solid black;
  background-color: #c7c7c7;
`;

export const NavList = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledLink = styled(NavLink)`
  flex-basis: 50%;
  height: 100%;
  margin: 0;
  padding: 10px 15px;

  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  color: #123c4a;

  transition: color 300ms ease, background-color 300ms ease;

  &.active {
    background-color: #f5f5f5;
  }

  &:hover {
    background-color: #ed9547;
    color: #f5f5f5;
  }

  :first-child {
    border-right: 2px solid #123c4a;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  margin: 0 auto;
  padding: 30px 15px;
  background-color: #123c4a;
`;
