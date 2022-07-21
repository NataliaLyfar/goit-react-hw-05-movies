import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { toast } from 'react-toastify';
import * as API from 'services/movieApi';
import { CastItem } from "./CastItem";

const CastsList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Item = styled.li`
margin: ${p => p.theme.space[2]}px;
`;

const Cast = () => {
const [casts, setCast] = useState([]);
const { movieId } = useParams();

useEffect(() => {
  (async () => {
    try {
      const {...data} = await API.getMovieCast(movieId);
      setCast(data.data.cast);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      };
    })();
}, [movieId]);

  return (
    <CastsList>
      {casts.length > 0 ? (
        casts.filter(item => item.profile_path).map((item) => (
          <Item key={item.id}>
            <CastItem {...item} />
          </Item>
        ))
      ) : (
        <div>
          <p>Sorry, no cast available</p>
        </div>
      )}
    </CastsList>
  );
};

export default Cast;