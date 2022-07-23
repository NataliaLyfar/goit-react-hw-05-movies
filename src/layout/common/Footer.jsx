import styled from "styled-components"
import { Container } from "components/ui/Container";
import { Navigation } from "./Navigation";

const FooterWrapper = styled.footer`
padding-bottom: ${p => p.theme.space[2]}px;
background: ${p => p.theme.colors.background};
background: linear-gradient(90deg, rgba(16,29,26,1) 0%, rgba(28,73,58,1) 33%, rgba(16,57,56,1) 77%, rgba(14,70,54,1) 100%);
box-shadow: 0px 10px 18px -1px #000;
`;
const FooterContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;
const Copyright = styled.p`
margin: 0 auto;
line-height: 1.5;
color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.s};
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: ${p => p.theme.fontSizes.xs};
  };  
`;
const Link = styled.a`
color: ${p => p.theme.colors.accent};
margin-left: ${p => p.theme.space[0]}px;
`;


export const Footer = () => {
  const today = new Date(),
  year = today.getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <Navigation/>
            <Copyright>
              &#169; {year} | All Rights Reserved | Developed by
                <Link
                  href='https://github.com/NataliaLyfar/goit-react-hw-05-movies.git'
                  target="_blank"
                  rel="noreferrer"
                  >
                  Natalia Lyfar
                </Link>
            </Copyright>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};