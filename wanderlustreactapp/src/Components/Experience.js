import React from "react";
import { Link } from "react-router-dom";


function Experience(props) {
  const item = props.experience.find(
    thing => thing.id === Number(props.match.params.id)
  );

  const id = props.match.params.id

  return (
    <div>
      <p>
        <img src={item.imgurl} alt="Experience"></img>
      </p>

      <p>Location: {item.location}</p>
      <p>Trip Type: {item.type}</p>
      <p>Duration: {item.duration}</p>
      <Link to = { `/EditExperience/${id}`}>
          <button>Edit Experience</button>
      </Link> 
    </div>
  );
}

export default Experience;
