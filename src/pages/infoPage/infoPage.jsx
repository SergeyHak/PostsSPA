import * as S from "./style";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import getPostsUserId from "../../api/getPostsUserId";
import Button from "react-bootstrap/esm/Button"; 
import Header from "../../components/header/header";
import { Pagination } from "../../components/pagination/pagination";
import ContentPage from "../../components/contentPage.jsx/contentPage";
import CommentsWindows from "../../components/commentWindows.jsx/commentWindows";
import { useDispatch } from "react-redux";
import getComments from "../../api/getComments";

export default function InfoPage() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadComment] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [id, setId] = useState();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [usersId, setUsersId] = useState(() => {
    const userIdSaved = localStorage.getItem("userId");
    // const initialValue = JSON.parse(userIdSaved);
    return userIdSaved || "";
  });
  const [resultPerPage] = useState(1);
  const lastLoginIndex = currentPage * resultPerPage;
  const firstLoginIndex = lastLoginIndex - resultPerPage;
  const currentLogin = userPosts.slice(firstLoginIndex, lastLoginIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getPostsUserId({
      userId: userId,
      setUserPosts: setUserPosts,
      isLoading:isLoading,
      setIsLoading:setIsLoading
    });
  }, [userId]);

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
    <>
    <Header/>    
         <ContentPage
         posts={userPosts}
        currentLogin={currentLogin}
        setId={setId}
        setShowComments={setShowComments}
        showComments={showComments}
        setUsersId={setUsersId}
        isLoading={isLoading}
      />
      <S.NavDiv>
      <Pagination
        resultPerPage={resultPerPage}
        totalLogins={userPosts.length}
        paginate={paginate}
      />
      <CommentsWindows
        showComments={showComments}
        setShowComments={setShowComments}
        comments={comments}
        setComments={setComments}
        id={id}
        setId={setId}
        isLoading={isLoadComment}
      />
       <NavLink to="/">
          <Button  variant="success">Назад</Button>
        </NavLink>
      </S.NavDiv>     
    </>
  );
}
