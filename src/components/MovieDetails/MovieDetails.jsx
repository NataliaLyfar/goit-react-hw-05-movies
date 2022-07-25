import { Suspense } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Outlet} from 'react-router-dom';
import { breakpoints } from 'styleConfig/breakpoints';
import NoPoster from 'asset/comingSoon.jpg';
import { StarRating } from './StarRating';
import { ExtraMovieInfo } from "./ExtraMovieInfo";


const Wrapper = styled.div`
position: relative;
padding: ${p => p.theme.space[4]}px;
  @media (${breakpoints.tablet}) {
    display: flex;
  };
border-radius: ${p => p.theme.radii.large};
box-shadow: 0px 0px 0px 0px #eead71, inset 0px 10px 27px -8px #141414,
  inset 0px -10px 27px -8px #eead71, 5px 5px 15px 5px rgba(181, 181, 181, 0);
`;
const Poster = styled.img`
display: block;
width: 100%;
max-width: 340px;
border-radius: ${p => p.theme.radii.normal};
`;
const Rating = styled.span`
position: absolute;
top: 0;
right: 0;
  @media (${breakpoints.tablet}){
    top: ${p => p.theme.space[0]}px;
    right: ${p => p.theme.space[0]}px;
  };
`;
const Information = styled.div`
margin-left: 0;
  @media (${breakpoints.tablet}) {
    margin-left: ${p => p.theme.space[4]}px;
  };
  @media (${breakpoints.laptop}) {
    margin-left: ${p => p.theme.space[5]}px;
  };
`;
const MovieTitle = styled.h2`
text-transform: uppercase;
color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.semibold};
  @media ${breakpoints.laptop} {
    font-size: ${p => p.theme.fontSizes.xl};
  };  
`;
const TagTitle = styled.p`
margin-top: ${p => p.theme.space[0]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
@media ${breakpoints.laptop} {
  font-size: ${p => p.theme.fontSizes.xl};
  };   
`;
const InfoBox = styled.div`
margin-top: ${p => p.theme.space[3]}px;
display: flex;
align-items: center;
`;
const SubTitle = styled.h3`
padding-bottom: ${p => p.theme.space[1]}px;
color: ${(p) => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.semibold};
`;
const DataText = styled.p`
padding-bottom: ${p => p.theme.space[1]}px;
color: ${(p) => p.theme.altBG};
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.normal};
 @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.m};
  };
`;
const Overview = styled.div`
margin-top: ${p => p.theme.space[4]}px;
`;


export const MovieDetails = ({
  id,
  posterPath, 
  tagline, 
  overview, 
  country, 
  title, 
  year, 
  rating, 
  genres, 
  runtime, 
  location
}) => {

    return (
    <>
      <Wrapper>
        {posterPath ? 
        <Poster src={`https://themoviedb.org/t/p/w342${posterPath}`} alt="poster"/>
        : <Poster src={NoPoster} alt={title}/>}
          <Rating><StarRating value={rating} id={id}/></Rating>
        <Information>
          <MovieTitle>{title}</MovieTitle>
          {tagline  &&
          <TagTitle>{tagline}</TagTitle>}
          {year &&
          <InfoBox>    
            <SubTitle>Release year: &nbsp;</SubTitle>
            <DataText>{year}</DataText>
          </InfoBox>}
          {country &&
          <InfoBox>    
            <SubTitle>Country: &nbsp;</SubTitle>
            <DataText> {country}</DataText>
          </InfoBox>}
          {genres &&
          <InfoBox>    
            <SubTitle>Genres: &nbsp;</SubTitle>
            <DataText>{genres}</DataText>
          </InfoBox>}
          {runtime > 0 &&
          <InfoBox>
            <SubTitle>Runtime: &nbsp;</SubTitle>
             <DataText>{runtime} min</DataText>
          </InfoBox>}
          <Overview>
            <SubTitle>Overview</SubTitle>
            <DataText>{overview}</DataText>
          </Overview>
        </Information>
      </Wrapper>
      <ExtraMovieInfo location={location} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  tagline: PropTypes.string,
  year: PropTypes.any,
  overview: PropTypes.string,
  genres: PropTypes.string,
  posterPath: PropTypes.string,
  country: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  location: PropTypes.any,
};