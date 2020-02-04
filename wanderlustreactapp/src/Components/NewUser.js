import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewUser = () => {
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
    // e.preventDefault();
    // console.log("User object", user);
    axios
      .post("https://bewanderlust.herokuapp.com/api/auth/register/user", user)
      .then(res => {
        setUser(res.data);
        console.log("res", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        onChange={handleChanges}
        value={user.username}
      />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={user.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={user.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChanges}
        value={user.password}
      />
      {/* <label htmlFor="organizer">Organizer</label>
      <input
        id="organizer"
        name="organizer"
        type="checkbox"
        onChange={handleChanges}
        value={user.organizer}
      /> */}
      <button type="submit" onClick={() => console.log("Submitted")}>
        Register
      </button>
      {/* <button type="submit">Login</button> */}
    </form>
  );
};

export default NewUser;
