import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";

export const Section = styled.section`
padding: ${p => p.theme.space[11]}px 0 ${p => p.theme.space[5]}px;
  @media (${breakpoints.tablet}){
    padding-top: ${p => p.theme.space[9]}px;
};
  @media (${breakpoints.laptop}){
    padding-top: ${p => p.theme.space[10]}px;
}
`;