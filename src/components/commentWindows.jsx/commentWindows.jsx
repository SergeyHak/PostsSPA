import * as S from "./style";
import Loader from "../loader/loader";

export default function CommentsWindows({
  showComments,
  setShowComments,
  comments,
  setComments,
  id,
  setId,
  isLoading
}) {
  console.log(comments);
  return (
    <S.ModalDiv style={{ display: showComments ? "block" : "none" }}>
      <S.ModalContent>
        <S.ModalHeader>
          <S.Close
            onClick={(e) => {
              setShowComments(!showComments);
              setComments('')
              setId('')
            }}
          >
            X
          </S.Close>
          <h2>Комментарии к посту № {id}</h2>
        </S.ModalHeader>
        <S.CommentContentDiv>
          {comments?.length > 0 ? (comments.map((comment) => (
                <S.CommentDiv>
                  <S.UserNameSpan key={comment.name}>
                    <S.NameSpan>Имя:</S.NameSpan>
                    {comment.name}
                  </S.UserNameSpan>
                  <S.EmailSpan key={comment.email}>
                    <S.NameSpan>Email:</S.NameSpan> {comment.email}
                  </S.EmailSpan>
                  <S.CommentSpan key={comment.body}>
                    <S.NameSpan>Комментарий:</S.NameSpan> {comment.body}
                  </S.CommentSpan>
                </S.CommentDiv>
              ))):( <Loader isLoading={isLoading}/>)}
        </S.CommentContentDiv>
      </S.ModalContent>
    </S.ModalDiv>
  );
}
