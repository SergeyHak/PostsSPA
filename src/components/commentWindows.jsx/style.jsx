import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
`;

export const ModalContent = styled.div`
  border: 2px solid red;
  padding: 15px;
  max-width: 900px;
  margin: 20px auto 0;
  margin-top: 120px;
  background-color: #fff;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid silver;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Close = styled.span`
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: -15px;
  font-size: 30px;
  color: red;
`;
export const CommentContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  max-height: 550px;
`;
export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NameSpan = styled.span`
  color: #98b8a6;
  margin-right: 5px;
`;
export const UserNameSpan = styled.span`
  color: #7f8662;
`;
export const EmailSpan = styled.span`
  color: #1be974;
`;
export const CommentSpan = styled.span`
  color: #cf6e48;
`;
