import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditExperience from "./EditExperience";
import LandingPage from "./LandingPage";

function Experience(props) {
  // console.log("Experience props", props);
  // console.log("Props.experience console log", props.experience);

  const item = props.experience.find(
    thing => thing.id === Number(props.match.params.id)
  );

  // const [current, setCurrent] = useState([]);

  // useEffect(() => {
  //   let id = props.match.params.id;
  //   let thisExperience = props.experience.find(expcard => {
  //     return expcard.id == id;
  //   });
  //   setCurrent(thisExperience);
  // }, [props.experience]);

  return (
    <div>
      <p>
        <img src={item.imgurl} alt="Experience"></img>
      </p>

      <p>Location: {item.location}</p>
      <p>Trip Type: {item.type}</p>
      <p>Duration: {item.duration}</p>
    </div>
    // <div>

    //    {current && (
    //     <div>
    //       <h1>{current.location}</h1>
    //       <p>
    //         Location: {current.location}
    //         Trip Type: {current.triptype}
    //         Organizer: {current.organizer}
    //         Duration: {current.duration}
    //       </p>
    //     </div>
    //   )} */
    // </div>
  );
}

export default Experience;
