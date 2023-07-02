import axios from 'axios';

export default function getComments({id,setComments}){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(function (response) {
      setComments(response.data);
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
}