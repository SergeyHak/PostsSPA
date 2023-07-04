import styled from "styled-components";
export const PostTitleSpan = styled.span`
  color: red;
`;
export const PostBodySpan = styled.span`
  color: green;
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const PostDiv = styled.div`
  display: flex;
`;
export const UserAvatar = styled.img`
  height: 80px;
  border-radius: 50%;
  width: 80px;
`;

export const InfoDiv = styled.div`
  width: 800px;
`;
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-left: calc(50% - 470px);
  padding-right: calc(50% - 470px);
  margin-top: 20px;
  @media (max-width: 768px) and (min-width: 320px) {
    padding-left: calc(50% - 330px);
    padding-right: calc(50% - 330px);
    display: flex;
    flex-direction: column-reverse;
  }
  @media (max-width: 436px) and (min-width: 320px) {
    padding-left: calc(50% - 180px);
    padding-right: calc(50% - 1800px);
  }
`;
