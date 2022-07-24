import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import { breakpoints } from 'styleConfig/breakpoints';


const ListExtraData = styled.ul`
display: flex;
align-items: center;
margin-top: ${p => p.theme.space[4]}px;
`;
const StyledLink = styled(NavLink)`
padding: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.white};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
  @media (${breakpoints.tablet}) {
    padding: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.xl};
  };
  &.active {
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  };
  &:hover:not(.active), &:focus:not(.active){
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  };
`;

export const ExtraMovieInfo = ({location}) => (
    <ListExtraData>
        <li>
          <StyledLink to="cast" state={{from: location}}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{from: location}}>Reviews</StyledLink>
        </li>
        <li>
          <StyledLink to="trailer" state={{from: location}}>Trailer</StyledLink>
        </li>
        <li>
          <StyledLink to="similar" state={{from: location}}>Similar</StyledLink>
        </li>
    </ListExtraData>
);