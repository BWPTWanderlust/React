import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";
import "../App.css";

const Cards = Styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-content: space-between;
    padding: 1rem;
`;

const Card = Styled.div`
    margin: auto;
    padding: 1rem;
    background-color: #ffc357;
    box-shadow: 2px 2px #d88144;
    border-radius: 1.5rem;
`;

const Button = Styled.div`
    margin: auto;
    padding: .5rem 1rem;
    border-radius: 1.5rem;
    background-color: #ffc357;
    box-shadow: 2px 2px #d88144;
    color: #084f93;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Space = Styled.div`
    margin: .5rem;
`;

const EditExperience = props => {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { id } = useParams();
  console.log("Handle Submit", handleSubmit);
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
    console.log("Edit experience", exp);
    let valuesToSend = {};
    Object.keys(exp).forEach((val, index) => {
      if (exp[val] !== "") {
        valuesToSend[val] = exp[val];
      }
    });
    axios
      .put(`https://bewanderlust.herokuapp.com/api/exps/${id}`, valuesToSend)
      .then(res => {
        setExp(res.data);
        console.log("res: ", res);
        props.update();
      })
      .then(history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <Cards>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <input
              placeholder="Title"
              name="title"
              onChange={handleChanges}
              id="title"
              ref={register({ required: false })}
              value={exp.title}
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
              ref={register({ required: false })}
              value={exp.type}
            />

            {errors.type && "Required field"}
          </p>
          <p>
            <input
              placeholder="Location"
              name="location"
              onChange={handleChanges}
              id="location"
              ref={register({ required: false })}
              value={exp.location}
            />
            {errors.location && "Location is Required"}
          </p>
          <p>
            <input
              placeholder="Latitude"
              name="lat"
              onChange={handleChanges}
              id="lat"
              ref={register({ required: false })}
              value={exp.lat}
            />
            {errors.lat}
          </p>
          <p>
            <input
              placeholder="Longitude"
              name="long"
              onChange={handleChanges}
              id="location"
              ref={register({ required: false })}
              value={exp.long}
            />
            {errors.long}
          </p>
          <p>
            <input
              placeholder="Duration"
              name="duration"
              onChange={handleChanges}
              id="duration"
              ref={register({ required: false })}
              value={exp.duration}
            />
            {errors.duration && "Duration is Required"}
          </p>
          <p>
            <textarea
              placeholder="Description"
              name="description"
              onChange={handleChanges}
              id="description"
              ref={register({ required: false })}
              value={exp.description}
            />
            {errors.description && "Description is Required"}
          </p>
          <p>
            <input
              placeholder="Image URL"
              name="imgurl"
              onChange={handleChanges}
              id="imgurl"
              ref={register({ required: false })}
              value={exp.imgurl}
            />
            {errors.imgurl && "Image URL is Required"}
          </p>
        </form>
      </Card>
      <Space></Space>
      <Button onClick={onSubmit}>Update</Button>
    </Cards>
  );
};

export default EditExperience;
