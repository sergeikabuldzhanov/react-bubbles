import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  function handleInput(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  function login(event) {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, form)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        props.history.push('/bubbles')
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <>
      <form onSubmit={login} className="login">
        <label htmlFor="username">
          Username
          <input value = {form.username}type="text" name="username" onChange={handleInput} />
        </label>
        <label htmlFor="password">
          Password
          <input value = {form.password}type="password" name="password" onChange={handleInput} />
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;
