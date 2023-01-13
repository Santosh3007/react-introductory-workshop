import { Card, Elevation, Button } from "@blueprintjs/core";
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    axios
      .get("https://mocki.io/v1/fb8c09ce-5796-41e1-b0be-ad046f6c87db")
      .then((response) => {
        if (
          response.data.username === username &&
          response.data.password === password
        ) {
          console.log("Logged in");
        }
      });
    e.preventDefault();
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <Card interactive={true} elevation={Elevation.TWO} className="card">
        <h1> Login </h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={onChangeUsername}
            placeholder="Username"
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <Button intent="primary" type="submit">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
