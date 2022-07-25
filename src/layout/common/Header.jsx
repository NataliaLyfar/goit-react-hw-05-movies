import styled from "styled-components"
import { Container } from "components/ui/Container";
import { Navigation } from "./Navigation";

const HeaderWrapper = styled.header`
position: fixed;
width: 100%;
z-index: 100;
display: flex;
align-items: center;
background: ${p => p.theme.colors.background};
background: linear-gradient(90deg, rgba(16,29,26,1) 0%, rgba(28,73,58,1) 33%, rgba(16,57,56,1) 77%, rgba(14,70,54,1) 100%);
box-shadow: 0px 10px 18px -1px #000;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Navigation/>
      </Container>
    </HeaderWrapper>
  );
};