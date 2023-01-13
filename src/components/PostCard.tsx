import React from "react";
import { Card, Elevation } from "@blueprintjs/core";
import { Post } from "../interfaces";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Card interactive={true} elevation={Elevation.TWO} className="card">
      <h3>{post.heading}</h3>
      <p>{post.content}</p>
    </Card>
  );
};

export default PostCard;
