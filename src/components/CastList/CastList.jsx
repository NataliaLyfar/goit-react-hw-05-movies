import PropTypes from "prop-types";
import styled from "styled-components";
import { CastItem } from "./CastItem";

const List = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Item = styled.li`
margin: ${p => p.theme.space[2]}px;
`;

export const CastList = ({ casts }) => {
  return (
    <List>
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
    </List>
  );
};

CastList.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};