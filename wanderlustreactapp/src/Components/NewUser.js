import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import axios from "axios";

const NewUser = () => {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    email: ""
  });

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axios
      .post("https://bewanderlust.herokuapp.com/api/auth/register/user", user)
      .then(res => {
        localStorage.setItem("id", res.data.id);
        setUser(res.data);
      })
      .then(history.push("/"))
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={handleChanges}
          value={user.username}
          ref={register({
            required: "Required",
            message: "Username required"
          })}
        />
        {errors.username && errors.username.message}
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={user.name}
          ref={register({
            required: "Required",
            pattern: {
              message: "Name required"
            }
          })}
        />
        {errors.name && errors.name.message}
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChanges}
          value={user.email}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />
        <p>{errors.email && errors.email.message}</p>
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChanges}
          value={user.password}
          ref={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </p>
      <p>
        <button type="submit" onClick={() => console.log("Submitted")}>
          Register
        </button>
      </p>
    </form>
  );
};

export default NewUser;
