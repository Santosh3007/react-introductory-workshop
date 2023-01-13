import { Button, Card, Elevation, TextArea } from "@blueprintjs/core";
import React, { useState } from "react";
import "./NewPost.css";

const NewPost = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeHeading = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Card interactive={true} elevation={Elevation.TWO} className="card">
      <h1> Create New Post</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="heading"
          value={heading}
          onChange={onChangeHeading}
          placeholder="Heading"
        />
        <TextArea
          placeholder="Content"
          value={content}
          onChange={onChangeContent}
        />
        <Button intent="primary" type="submit">
          Create Post
        </Button>
      </form>
    </Card>
  );
};

export default NewPost;
