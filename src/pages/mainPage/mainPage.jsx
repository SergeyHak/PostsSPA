import getPosts from "../../api/getPosts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { setUserId } from "../../store/slices/userId";
import * as S from "./style";
import { Pagination } from "../../components/pagination/pagination";
import avatar from "../../pictures/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import getComments from "../../api/getComments";
import Navigation from "../../components/MenuNavigation/Navigation";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function MainPage() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(posts);
  const [id, setId] = useState();
  const [usersId, setUsersId] = useState(() => {
    const userIdSaved = localStorage.getItem("userId");
    // const initialValue = JSON.parse(userIdSaved);
    return userIdSaved || "";
  });
  console.log(usersId);
  // console.log(id);
  const [comments, setComments] = useState([]);
  console.log(comments);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultPerPage] = useState(10);
  const lastLoginIndex = currentPage * resultPerPage;
  const firstLoginIndex = lastLoginIndex - resultPerPage;
  const currentLogin = posts.slice(firstLoginIndex, lastLoginIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(posts);
  useEffect(() => {
    getPosts({
      setPosts: setPosts,
      setIsLoading: setIsLoading,
      isLoading: isLoading,
    });
  }, []);

  useEffect(() => {
    getComments({
      id: id,
      setComments: setComments,
      setIsLoading: setIsLoading,
      isLoading: isLoading,
    });
  }, [id]);

  useEffect(() => {
    localStorage.setItem("userId", usersId);
  }, [dispatch, usersId]);
 
  return (
    <div>
      <S.HeaderDiv>
        <S.HeaderSpan>POSTS-PROJECT</S.HeaderSpan>
      </S.HeaderDiv>
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
                  {comments?.length > 0 ? (
                    <div>
                      {comments.map((comment) => (
                        <span key={comment.body}>{comment.body}</span>
                      ))}
                    </div>
                  ) : null}
                  <Button
                    variant="success"
                    key={post.id}
                    onClick={(e) => {
                      setId(post.id);
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
          <S.NoPost>
            <S.LoaderDiv style={{ display: isLoading ? "block" : "" }}>
              <S.LoaderSpan>Loading...</S.LoaderSpan>
              <FontAwesomeIcon
                icon={faFan}
                beat
                size="2xl"
                style={{ color: "#266fed" }}
              />
            </S.LoaderDiv>
          </S.NoPost>
        )}
        <Navigation />
      </S.ContentDiv>
      <Pagination
        resultPerPage={resultPerPage}
        totalLogins={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
