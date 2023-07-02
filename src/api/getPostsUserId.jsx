import axios from 'axios';

export default function getPostsUserId({userId,setUserPosts}){
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(function (response) {
      setUserPosts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
}