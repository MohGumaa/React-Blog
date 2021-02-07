import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "Blog content Body Post One",
      author: "Mohamed",
      id: 1
    },
    {
      title: "Post Tow",
      body: "Blog content Body Post Two",
      author: "Ali",
      id: 2
    },
    {
      title: "Post Three",
      body: "Blog content Body Post Three",
      author: "Hero",
      id: 3
    }
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Writen By {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
