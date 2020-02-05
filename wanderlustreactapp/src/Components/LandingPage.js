import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddExperience from "./AddExperience";
// import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import Search from "./SearchBar";

function LandingPage(props) {
  return (
    <div className="expedition-container">
      {/* <Search /> */}
      {props.experience.map(el => {
        return (
          <div>
            {/* <Card>
              <CardImg src={el.imgurl} alt="ExperienceImage" width="80px" />
              <CardBody>
                <CardTitle>
                  <Link to={`/Experience/${el.id}`}>
                    Location: {el.location}
                  </Link>
                </CardTitle>
                <CardText>Trip Type: {el.type}</CardText>
                <CardText>Duration: {el.duration}</CardText>
              </CardBody>
            </Card> */}
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
