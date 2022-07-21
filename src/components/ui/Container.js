import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";

export const Container = styled.div`
position: relative;
margin: 0 auto;
padding: 0 ${p => p.theme.space[2]}px;
@media (${breakpoints.mobile}) {
    max-width: 400px;
  };
@media (${breakpoints.tablet}) {
    padding: 0 ${p => p.theme.space[4]}px;
    min-width: 768px;
};
@media (${breakpoints.laptop}) {
    min-width: 1200px;
};
`;