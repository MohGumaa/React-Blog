import { useState } from "react";
import BlogList from "./BlogList";

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
      author: "Hero",
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
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Hero")}
        title="Hero blog"
      />
    </div>
  );
};

export default Home;
