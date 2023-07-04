import axios from 'axios';

export default function getComments({id,setComments,setIsLoading,isLoading}){
  setIsLoading(!isLoading);
  setTimeout(() => {    
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(function (response) {
      setComments(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
  }, 1000);
}

