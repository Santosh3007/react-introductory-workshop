import React from "react";
import NewPost from "../components/NewPost";
import PostCard from "../components/PostCard";
import "./Home.css";

const Home = () => {
  const post = { heading: "Hello", content: "World!" };
  return (
    <div className="home">
      <NewPost />
      <PostCard post={post} />
    </div>
  );
};

export default Home;
