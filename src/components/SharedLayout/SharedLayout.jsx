import { Header, StyledLink, Container, NavList } from "./SharedLayout.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
  return (
    <>
      <Header>
          <NavList>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </NavList>
      </Header>
      <Container>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
