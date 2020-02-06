import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./Components/LandingPage";
import Experience from "./Components/Experience";
import AddExperience from "./Components/AddExperience";
import EditExperience from "./Components/EditExperience";
import NewUser from "./Components/NewUser";

function App() {
  const [experience, setExperience] = useState([]);
  const [searchExp, setSearchExp] = useState([...experience]);
  useEffect(() => {
    axios
      .get("https://bewanderlust.herokuapp.com/api/exps")
      .then(res => {
        setExperience(res.data);
        setSearchExp(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanderlust</h1>
      </header>
      <Route exact path="/">
        <LandingPage
          experience={experience}
          setSearchExp={setSearchExp}
          searchExp={searchExp}
        />
      </Route>

      <Route
        path="/Experience/:id"
        render={props => <Experience {...props} experience={experience} />}
      />

      <Route path="/AddExperience">
        <AddExperience experience={experience} setExperience={setExperience} />
      </Route>

      <Route path="/EditExperience/:id">
        <EditExperience />
      </Route>

      <Route path="/NewUser">
        <NewUser />
      </Route>
    </div>
  );
}

export default App;
