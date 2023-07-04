import * as S from "./style";
import avatar from "../../pictures/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../../components/menuNavigation/Navigation";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loader from "../../components/loader/loader";

 function ContentPage({
  posts,
  currentLogin,
  setId,
  setShowComments,
  showComments,
  setUsersId,
  isLoading,
}) {
  return (
    <S.ContentDiv>
      {posts?.length > 0 ? (
        <S.InfoDiv>
          {currentLogin.map((post) => (
            <S.PostDiv>
              <S.TitleDiv>
                <S.PostTitleSpan key={post.title}>
                  -{post.title}-
                </S.PostTitleSpan>
                <S.PostBodySpan key={post.body}>"{post.body}"</S.PostBodySpan>
                <Button
                  variant="success"
                  key={post.id}
                  onClick={(e) => {
                    setId(post.id);
                    setShowComments(!showComments);
                  }}
                >
                  {
                    <FontAwesomeIcon
                      icon={faComments}
                      style={{ color: "#b0b4ba" }}
                    />
                  }
                  Comments
                </Button>
              </S.TitleDiv>
              <div>
                <Link to="/infoPage">
                  <S.UserAvatar
                    key={post.userId}
                    src={avatar}
                    alt="avatar"
                    onMouseOver={(e) => {
                      setUsersId(post.userId);
                    }}
                  />
                </Link>
              </div>
            </S.PostDiv>
          ))}
        </S.InfoDiv>
      ) : (
        <Loader isLoading={isLoading} />
      )}
      <Navigation />
    </S.ContentDiv>
  );
}
export default ContentPage