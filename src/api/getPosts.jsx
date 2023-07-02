import axios from "axios";

export default function getPosts({ setPosts, setIsLoading, isLoading }) {
  setIsLoading(!isLoading);
  setTimeout(() => {    
  axios
    .get("https://jsonplaceholder.typicode.com/posts",{
      timeout:5000
    })  

    .then(function (response) {
      setPosts(response.data);
    })

    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      setIsLoading("");
    });
  }, 1000);

}
