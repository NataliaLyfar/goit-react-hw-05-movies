import NoPoster from 'asset/comingSoon.jpg';
import styled from 'styled-components';


const CardWrapper = styled.div`
border-radius: ${p => p.theme.radii.normal};
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
background: transparent;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0px 0px 8px 6px ${p => p.theme.colors.accent};
  };
`;
const Poster = styled.img`
width: 180px;
border-radius: ${p => p.theme.radii.normal};
`;


export const SwiperCard = ({title, poster_path}) => {
return (
    <CardWrapper>
      {poster_path ? 
        <Poster src={`https://themoviedb.org/t/p/w342${poster_path}`} alt="poster"/>
        : <Poster src={NoPoster} alt={title}/>}    
    </CardWrapper>
  );
};