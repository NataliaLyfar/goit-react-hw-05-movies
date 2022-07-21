import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h3`
padding-bottom: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.semibold};
font-family: ${p => p.theme.fonts.accent};
font-style: italic;
color: ${p => p.theme.colors.white};
`;

export const Title = ({children}) => {
    return <StyledTitle>{children}</StyledTitle>
};

Title.propTypes = {
  children: PropTypes.string,
};