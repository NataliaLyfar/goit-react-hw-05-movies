import PropTypes from 'prop-types';
import styled from "styled-components";

const LoaderBox = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const Loader = ({children}) => {
  return <LoaderBox role='alert'>{children}</LoaderBox>
};

Loader.propTypes = {
  children: PropTypes.any,
};