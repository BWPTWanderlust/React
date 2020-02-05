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
            <p>
              <img src={el.imgurl} alt="ExperienceImage"></img>
            </p>

            <Link to={`/Experience/${el.id}`}>
              <p>Location: {el.location}</p>
            </Link>
            <p>Trip Type: {el.type}</p>
            <p>Duration: {el.duration}</p>
          </div>
        );
      })}

      <Link to={"/NewUser"}>
        <button>Sign Up</button>
      </Link>

      <Link to={"/AddExperience"}>
        <button>Add Experience</button>
      </Link>
    </div>
  );
}

export default LandingPage;
