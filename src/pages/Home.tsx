import React from "react";
import NewPost from "../components/NewPost";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import "./Home.css";

const Home = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <div className="home">
      <NewPost />
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Home;
