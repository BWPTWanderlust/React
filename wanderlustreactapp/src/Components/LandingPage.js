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
<<<<<<< HEAD
=======
            <p>
              <img src={el.imgurl} alt="ExperienceImage"></img>
            </p>

>>>>>>> cebda5a70025ef608c8bf3a4cc59e4b790a550bc
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
