import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddExperience from "./AddExperience";
import Search from "./SearchBar";

function LandingPage(props) {
  return (
    <div className="expedition-container">
      {/* <Search /> */}
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
      <Link to={"/AddExperience"}>
        <button>Add Experience</button>
      </Link>
    </div>
  );
}

export default LandingPage;
