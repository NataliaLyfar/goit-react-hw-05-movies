import PropTypes from "prop-types";
import Iframe from "react-iframe";
import styled from "styled-components";


const List = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;
const Item = styled.li`
margin: ${p => p.theme.space[2]}px;
`;
const Notification = styled.p`
padding: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
font-family: ${p => p.theme.fonts.accent};
font-style: italic;
`;

export const TrailerList = ({ trailers }) => {
return (
    <List>
      {trailers.length > 0 ? (
        trailers.map((item) => (
          <Item key={item.id}>
            <Iframe
              url={`https://www.youtube.com/embed/${item.key}`}
              width="100%"
              height="250px"
              allowFullScreen
            />
          </Item>
        ))
      ) : (
        <Notification>No trailer</Notification>
      )}
    </List>
  );   
};

TrailerList.propTypes = {
  trailers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string,
    }),   
  ),
};