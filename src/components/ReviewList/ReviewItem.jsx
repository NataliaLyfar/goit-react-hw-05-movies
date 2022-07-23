import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";
import { getAvatarLink } from "utils/getAvatarLink";

const Wrapper = styled.div`
padding: 0 ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
margin: 0 ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
`;
const Author = styled.div`
display: flex;
align-items: center;
`;
const Avatar = styled.img`
width: 45px;
height: 45px;
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.theme.colors.black};
`;
const NoAvatar = styled.div`
width: 45px;
height: 45px;
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.theme.colors.shadow};
`;
const AuthorName = styled.span`
margin-left: ${p => p.theme.space[4]}px;
text-transform: uppercase;
color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.bold};
`;
const UpdatedDateAt = styled.span`
margin-left: ${p => p.theme.space[2]}px;
text-transform: uppercase;
color: ${p => p.theme.colors.shadow};
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.normal};
`;
const Text = styled.p`
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.normal};
line-height: 1.8;
@media (${breakpoints.laptop}) {
  font-size: ${p => p.theme.fontSizes.m};
};
`;

export const ReviewItem = ({
  author, 
  content, 
  author_details, 
  updated_at
}) => {
  
  const avatar = author_details.avatar_path;
  const date = updated_at.slice(0,10);
  return (
    <Wrapper>
      <Author>
      {avatar ? <Avatar src={getAvatarLink(avatar)} /> : <NoAvatar />}
        <AuthorName>{author}</AuthorName>
        <UpdatedDateAt>{date}</UpdatedDateAt>
      </Author>
      <Text>{content}</Text>
    </Wrapper>
  );
};