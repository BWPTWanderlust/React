import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage(props) {
  return (
    <div className="expedition-container">
      {props.experience.map(el => {
        return (
          <div>
            <Link to={`/experiences/${el.id}`}>
              <p>Location: {el.location}</p>
            </Link>
            <p>Trip Type: {el.triptype}</p>
            <p>Organizer: {el.organizer}</p>
            <p>Duration: {el.duration}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LandingPage;
