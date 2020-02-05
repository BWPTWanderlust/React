import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditExperience from "./EditExperience";
import LandingPage from "./LandingPage";

function Experience(props) {
  const item = props.experience.find(
    thing => thing.id === Number(props.match.params.id)
  );

  return (
    <div>
      <p>
        <img src={item.imgurl} alt="Experience"></img>
      </p>

      <p>Location: {item.location}</p>
      <p>Trip Type: {item.type}</p>
      <p>Duration: {item.duration}</p>
      <Link to = { '/EditExperience/:id' }>
          <button>Edit Experience</button>
      </Link> 
    </div>
  );
}

export default Experience;
