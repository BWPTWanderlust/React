import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewUser = () => {
  return <div>Form page - Wanderlust</div>;
};

    const { register, errors, handleSubmit } = useForm();
  const [user, setUser] = useState({});

  const onSubmit = data => {
    const user = data;
    axios
      .post("https://reqres.in/api/users/2", user)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="username">Password</label>
      <input
        id="username"
        type="text"
        name="username"
        onChange={handleChanges}
        value={data.username}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="text"
        onChange={handleChanges}
        value={data.password}
      />
      <label htmlFor="organizer">Organizer</label>
      <input
        id="organizer"
        name="checkbox"
        onChange={handleChanges}
        value={data.organizer}
      />
      <button type="submit">New User</button>
      <button type="submit">Login</button>
    </form>
  )

export default NewUser;
