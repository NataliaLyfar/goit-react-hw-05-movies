import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";


const LinkToHome = styled(Link)`
display: inline-flex;
margin: ${p => p.theme.space[1]}px 0;
border-radius: ${p => p.theme.radii.normal};
background-color: transparent;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
outline: none;
border: none;
  svg {
    color: ${p => p.theme.colors.accent};
    width: 35px;
    height: 35px;
  };
  &:hover, &:focus {
    cursor: pointer;
    svg{
      color: ${p => p.theme.colors.tertiary};
    };
  };
`;

export const BackLink = ({to}) => {
return (
    <LinkToHome to={to}><TiArrowBack/></LinkToHome>
  );
};