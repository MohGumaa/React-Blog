import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   setTimeout(()=> {
    fetch("http://127.0.0.1:8000/blogs")
    .then((res) => {
      // console.log(res)
      if (!res.ok) {
        throw Error('Could not fetch the data from server');
      }
      return res.json()
    })
    .then((data) => {
      setBlogs(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(error => {
      setIsLoading(false);
      setError(error.message);
    })
    ;
   }, 1000) 
  }, [blogs]);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <h4>Loading...</h4>}
      { blogs && <BlogList blogs={blogs} title="All Blogs" s/>}
    </div>
  );
};

export default Home;