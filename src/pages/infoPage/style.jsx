import styled from "styled-components";

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-left: calc(50% - 470px);
  padding-right: calc(50% - 470px);
  margin-top: 20px;
`;
export const InfoDiv = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(111 90 131);
  height: 40px;
`;
export const HeaderSpan = styled.span`
  display: flex;
  align-items: center;
  color: rgb(250, 250, 250);
`;
export const PostDiv = styled.div`
  display: flex;
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const PostTitleSpan = styled.span`
  color: red;
`;
export const PostBodySpan = styled.span`
  color: green;
`;
export const UserPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NoPost = styled.div`
  width: 800px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextDiv = styled.div``;
export const TextSpan = styled.span``;
