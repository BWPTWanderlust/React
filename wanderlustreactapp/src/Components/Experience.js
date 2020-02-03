import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditExperience from "./EditExperience";

function Experience(props) {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
    let thisExperience = props.data.find(data => {
      return data.id == id;
    });
    setCurrent(thisExperience);
  }, [props.data]);

  return (
    <div>
      {current && (
        <div>
          <h1>{current.location}</h1>
          <p>
            Location: {current.location}
            Trip Type: {current.triptype}
            Organizer: {current.organizer}
            Duration: {current.duration}
          </p>
        </div>
      )}
    </div>
  );
}

export default Experience;
