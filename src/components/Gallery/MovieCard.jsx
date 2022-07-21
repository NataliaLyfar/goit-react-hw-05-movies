import NoPoster from 'asset/comingSoon.jpg';
import styled from 'styled-components';

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
width: 100%;
height: 440px;
border-radius: ${p => p.theme.radii.normal};
`;
const MovieInfo = styled.div`
padding: ${p => p.theme.space[2]}px;
`;
const Title = styled.p`
color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.xs};
text-transform: uppercase;
margin-bottom: ${p => p.theme.space[1]}px;
`;
const Genres = styled.div`
color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.xs};
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

export const MovieCard = ({rating, title, posterPath, genres, year}) => {
return (
    <CardWrapper>
      <Rating>{rating}</Rating>
      {posterPath ? 
        <Poster src={`https://themoviedb.org/t/p/w342${posterPath}`} alt="poster"/>
        : <Poster src={NoPoster} alt={title}/>}
      <MovieInfo>
        <Title>{title}</Title>
        <Genres><span>{genres}</span><span> | {year}</span></Genres> 
      </MovieInfo>    
    </CardWrapper>
  );
};