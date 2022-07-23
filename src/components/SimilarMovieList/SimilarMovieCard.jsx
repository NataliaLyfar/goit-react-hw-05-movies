import styled from 'styled-components';
import NoPoster from 'asset/comingSoon.jpg';


const CardWrapper = styled.div`
position: relative;
border-radius: ${p => p.theme.radii.normal};
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
background: transparent;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 6px ${p => p.theme.colors.accent};
  };
`;
const Poster = styled.img`
width: 250px;
border-radius: ${p => p.theme.radii.normal};
`;
const Rating = styled.span`
position: absolute;
top: ${p => p.theme.space[0]}px;
right: ${p => p.theme.space[0]}px;
display: flex;
align-items: center;
justify-content: center;
width: 36px;
height: 20px;
font-weight: ${p => p.theme.fontWeights.semibold};
font-size: ${p => p.theme.fontSizes.xs};
line-height: 1.17;
text-transform: uppercase;
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.primary};
border-radius: 5px;
`;

export const SimilarMovieCard = ({ vote_average, title, poster_path }) => {
return (
    <CardWrapper>
      <Rating>{vote_average}</Rating>
      {poster_path ? 
        <Poster src={`https://themoviedb.org/t/p/w342${poster_path}`} alt="poster"/>
        : <Poster src={NoPoster} alt={title}/>}   
    </CardWrapper>
  );
};

