import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.button`
margin: 0 auto;
padding: ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
border-radius: ${p => p.theme.radii.large};
background: rgb(16,29,26);
background: linear-gradient(90deg, rgba(16,29,26,1) 0%, rgba(28,73,58,1) 33%, rgba(16,57,56,1) 77%, rgba(14,70,54,1) 100%);
display: flex;
align-items: center;
justify-content: center;
color: ${p => p.theme.colors.accent};
border: 0;
text-decoration: none;
cursor: pointer;
font-family: inherit;
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.space[5]}px;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.semibold};
width: 150px;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    width: 30px;
    height: 30px;
    margin-left: ${p => p.theme.space[1]}px;
  };
  &:hover,
  &:focus {
    outline: none;
    background: #D5D8A8;
    color: ${p => p.theme.colors.secondary};
    box-shadow: 0 2px 8px rgba(210, 105, 30, 0.7), inset 0 1px rgba(81, 50, 50, 0.3),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(117, 49, 49, 0.25),
      inset 0 -15px 30px rgba(210, 105, 30, 0.7);
  };
`;

export const Button = ({onClick, children, icon}) => {
  return <StyledButton type="button" onClick={onClick}>{children}{icon}</StyledButton>
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
 };