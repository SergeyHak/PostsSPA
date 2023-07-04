import axios from 'axios';

export default function getPostsUserId({userId,setUserPosts,isLoading,setIsLoading}){
  setIsLoading(!isLoading);
  setTimeout(() => {    
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(function (response) {
      setUserPosts(response.data);
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
  }, 1000);

}