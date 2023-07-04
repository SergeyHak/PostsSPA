import getPosts from "../../api/getPosts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "../../components/pagination/pagination";
import getComments from "../../api/getComments";
import Header from "../../components/header/header";
import CommentsWindows from "../../components/commentWindows.jsx/commentWindows";
import ContentPage from "../../components/contentPage.jsx/contentPage";

export default function MainPage() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [id, setId] = useState();
  const [usersId, setUsersId] = useState(() => {
    const userIdSaved = localStorage.getItem("userId");
    // const initialValue = JSON.parse(userIdSaved);
    return userIdSaved || "";
  });
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultPerPage] = useState(10);
  const lastLoginIndex = currentPage * resultPerPage;
  const firstLoginIndex = lastLoginIndex - resultPerPage;
  const currentLogin = posts.slice(firstLoginIndex, lastLoginIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    <>
      <Header />
      <ContentPage
        posts={posts}
        currentLogin={currentLogin}
        setId={setId}
        setShowComments={setShowComments}
        showComments={showComments}
        setUsersId={setUsersId}
        isLoading={isLoading}
      />
     
      <Pagination
        resultPerPage={resultPerPage}
        totalLogins={posts.length}
        paginate={paginate}
      />
      <CommentsWindows
        showComments={showComments}
        setShowComments={setShowComments}
        comments={comments}
        setComments={setComments}
        id={id}
        setId={setId}
        isLoading={isLoading}
      />
    </>
  );
}
