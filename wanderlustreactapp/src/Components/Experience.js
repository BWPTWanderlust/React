import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Cards = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;
const Card = Styled.div`
    margin: 2rem 6rem;
    padding: 1rem;
    background-color: #ffc357;
    box-shadow: 2px 2px #d88144;
    border-radius: 1.5rem;
`;

const Button = Styled.div`
    margin: 1rem;
    padding: .5rem 1rem;
    border-radius: 1.5rem;
    background-color: #ffc357;
    box-shadow: 2px 2px #d88144;
    color: #084f93;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Buttons = Styled.div`
    display: flex;
    justify-content: center;
`;

function Experience(props) {
  const item = props.experience.find(
    thing => thing.id === Number(props.match.params.id)
  );

  const id = props.match.params.id;

  return (
    <div>
      <Cards>
        <Card>
          <p>
            <img src={item.imgurl} alt="Experience"></img>
          </p>
          <p>Title: { item.title }</p>
          <p>Trip Type: {item.type}</p>
          <p>Location: {item.location}</p>
          <p>Latitude: { item.lat }</p>
          <p>Longitude: { item.long }</p>
          <p>Duration: {item.duration}</p>
          <p>Description: { item.description }</p>
        </Card>
      </Cards>
      <Buttons>
        <Link to={`/EditExperience/${id}`}>
          <Button>Edit Experience</Button>
        </Link>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
      </Buttons>
    </div>
  );
}

export default Experience;