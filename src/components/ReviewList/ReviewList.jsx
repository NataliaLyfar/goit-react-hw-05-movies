import PropTypes from "prop-types";
import styled from "styled-components";
import { ReviewItem } from "./ReviewItem";

const List = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;
const Notification = styled.p`
padding: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
font-family: ${p => p.theme.fonts.accent};
font-style: italic;
margin: 0 auto;
`;

export const ReviewList = ({ reviews }) => {
return (
  <List>
    {reviews.length > 0 ? (
    reviews.map((item) => (
      <li key={item.id}>
        <ReviewItem {...item}/>
      </li>
      ))
    ) : <Notification>No Reviews</Notification>
    }
  </List>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      avatar: PropTypes.string,
      content: PropTypes.string,
      updated_at: PropTypes.string,
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
      }),
    }),
  ),
};
