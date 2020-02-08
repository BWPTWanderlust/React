import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddExperience = props => {
  // BLAIR'S CODE STARTS

  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const [exp, setExp] = useState({
    type: "",
    location: "",
    duration: "",
    description: "",
    title: ""
  });

  const handleChanges = e => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axios
      .post(
        `https://bewanderlust.herokuapp.com/api/exps/org/${localStorage.getItem(
          "id"
        )}`,
        exp
      )
      .then(res => {
        setExp(res.data);
        props.update();
      })
      .then(history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input
          placeholder="Title"
          name="title"
          onChange={handleChanges}
          id="title"
          ref={register({ required: true })}
        />
        {errors.title && "Title is Required"}
      </p>
      <p>
        <input
          placeholder="Trip Type"
          id="type"
          type="text"
          onChange={handleChanges}
          name="type"
          ref={register({ required: true })}
        />

        {errors.type && "Required field"}
      </p>
      <p>
        <input
          placeholder="Location"
          name="location"
          onChange={handleChanges}
          id="location"
          ref={register({ required: true })}
        />
        {errors.location && "Location is Required"}
      </p>
      <p>
        <input
          placeholder = "Latitude"
          name = "lat"
          onChange = { handleChanges }
          id = "lat"
          ref = { register({ required: false }) }
          value = { exp.lat }
        />
        { errors.lat }
      </p>
      <p>
        <input
          placeholder = "Longitude"
          name = "long"
          onChange = { handleChanges }
          id="location"
          ref = { register({ required: false }) }
          value = { exp.long }
        />
        { errors.long }
      </p>
      <p>
        <input
          placeholder="Duration"
          name="duration"
          onChange={handleChanges}
          id="duration"
          ref={register({ required: true })}
        />
        {errors.duration && "Duration is Required"}
      </p>
      <p>
        <input
          placeholder="Description"
          name="description"
          onChange={handleChanges}
          id="description"
          ref={register({ required: true })}
        />
        {errors.description && "Description is Required"}
      </p>
      <p>
        <input
          placeholder="Image URL"
          name="imgurl"
          onChange={handleChanges}
          id="imgurl"
          ref={register({ required: true })}
        />
        {errors.imgurl && "Image URL is Required"}
      </p>
      <input type="submit" />
    </form>
  );
};

export default AddExperience;