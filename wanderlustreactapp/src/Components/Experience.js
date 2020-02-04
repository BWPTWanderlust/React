import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditExperience from "./EditExperience";

function Experience(props) {
  console.log(props);

  const item = props.experience.find(
    thing => thing.id === Number(props.match.params.id)
  );

  // const [current, setCurrent] = useState([]);

  // useEffect(() => {
  //   let id = props.match.params.id;
  //   let thisExperience = props.expcard.find(expcard => {
  //     return expcard.id == id;
  //   });
  //   setCurrent(thisExperience);
  // }, [props.expcard]);

  return (
    <div>
      <p>Location: {item.location}</p>
      <p>Trip Type: {item.triptype}</p>
      <p>Organizer: {item.organizer}</p>
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
