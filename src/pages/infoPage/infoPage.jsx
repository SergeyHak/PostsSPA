import * as S from "./style";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
import Navigation from "../../components/MenuNavigation/Navigation";
import getPostsUserId from "../../api/getPostsUserId";
import Button from "react-bootstrap/esm/Button"; 

export default function InfoPage() {
  // const userId = useSelector((state) => state.userId.userId);
  const userId = localStorage.getItem("userId");
  const [userPosts, setUserPosts] = useState([]);
  console.log(userId);
  useEffect(() => {
    getPostsUserId({
      userId: userId,
      setUserPosts: setUserPosts,
    });
  }, [userId]);
  return (
    <>
      <S.HeaderDiv>        
        <S.HeaderSpan>POSTS-PROJECT</S.HeaderSpan>
      </S.HeaderDiv>
      <S.ContentDiv>
        <S.UserPosts>
        {userPosts?.length > 0 ? (
          <S.InfoDiv>
            {userPosts.map((post) => (
                <S.TitleDiv>
                  <S.PostTitleSpan key={post.title}>
                    -{post.title}-
                  </S.PostTitleSpan>
                  <S.PostBodySpan key={post.body}>"{post.body}"</S.PostBodySpan>
                </S.TitleDiv>
            ))}
          </S.InfoDiv>
        ) : (
          <S.NoPost>
          <p>No posts</p>
        </S.NoPost>
        )}
        <NavLink to="/">
          <Button variant="success">Назад</Button>
        </NavLink>
        </S.UserPosts>
        <Navigation />
      </S.ContentDiv>
    </>
  );
}
