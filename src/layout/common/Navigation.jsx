import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiFilmSpool } from 'react-icons/gi';
import { breakpoints } from "styleConfig/breakpoints";

const Menu = styled.nav`
width: 335px;
  @media (${breakpoints.tablet}) {
    width: 100%;
  };
display: flex;
align-items: center;
justify-content: space-between; 
`;
const Logo = styled(NavLink)`
padding: ${p => p.theme.space[2]}px;
display: flex;
align-items: center;
color: ${p => p.theme.colors.accent};
font-family: ${p => p.theme.fonts.accent};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
  };
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  };
  &:hover {
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  };
`;
const Nav = styled.div`
display: flex;

flex-direction: column;
  @media (${breakpoints.tablet}) {
    flex-direction: row;
  };
`;
const Link = styled(NavLink)`
padding: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.white};
font-family: ${p => p.theme.fonts.accent};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
    padding: ${p => p.theme.space[3]}px;
  };
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.xxl};
    padding: ${p => p.theme.space[4]}px;
  };
  &.active {
    color: ${p => p.theme.colors.accent}
  };
  &:hover {
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  };
`;

export const Navigation = () => {
  return (
      <Menu>
        <Logo to="/">
          <GiFilmSpool/>
          MovieSearcher
        </Logo>
        <Nav>
          <Link  to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Menu>
  );
};