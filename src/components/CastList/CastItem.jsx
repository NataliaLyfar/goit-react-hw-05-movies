import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 150px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
padding-bottom: ${p => p.theme.space[2]}px;
`;
const Photo = styled.img`
border-radius: ${p => p.theme.radii.small};
width: 100%;
`;
const Title = styled.h4`
margin-top: ${p => p.theme.space[0]}px;
color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.s};
`;
const Subtitle = styled.p`
margin-top: ${p => p.theme.space[0]}px;
font-size: ${p => p.theme.fontSizes.xs};
font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const CastItem = ({name, character, profile_path}) => {
  return (
    <Wrapper>
      <Photo src={`https://themoviedb.org/t/p/w185${profile_path}`} alt={name} />
      <Title>{name}</Title>
      <Subtitle>{character}</Subtitle>
    </Wrapper>
  );   
};

