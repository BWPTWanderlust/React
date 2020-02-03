import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddExperience from "./AddExperience";

function LandingPage(props) {
  return (
    <div className="expedition-container">
      {props.experience.map(el => {
        return (
          <div>
            <Link to={`/Experience/${el.id}`}>
              <p>Location: {el.location}</p>
            </Link>
            <p>Trip Type: {el.triptype}</p>
            <p>Organizer: {el.organizer}</p>
            <p>Duration: {el.duration}</p>
          </div>
        );
      })}
      <Link to = { '/AddExperience' }>
        <AddExperience/>
      </Link>
    </div>
  );
}

export default LandingPage;
