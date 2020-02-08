import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./Components/LandingPage";
import Experience from "./Components/Experience";
import AddExperience from "./Components/AddExperience";
import EditExperience from "./Components/EditExperience";
import NewUser from "./Components/NewUser";
import logo from "./WanderlustLogo_BLUE.png"

function App() {
  const [experience, setExperience] = useState([]);
  const [searchExp, setSearchExp] = useState([...experience]);

  const logoStyle = {
    width: '25rem',
    height: 'auto',
  }

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

  const updateExps = () => {
    axios
      .get("https://bewanderlust.herokuapp.com/api/exps")
      .then(res => {
        setExperience(res.data);
        setSearchExp(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src = { logo } alt = 'wanderlust logo' style = { logoStyle } />
        {/* <h1>Wanderlust</h1> */}
      </header>
      <Route exact path="/">
        <LandingPage
          experience={experience}
          setExperience={setExperience}
          searchExp = { searchExp }
          setSearchExp = { setSearchExp }
          update={updateExps}
        />
      </Route>

      <Route
        path="/Experience/:id"
        render={props => <Experience {...props} experience={experience} />}
      />

      <Route path="/AddExperience">
        <AddExperience
          experience={experience}
          setExperience={setExperience}
          searchExp = { searchExp }
          setSearchExp = { setSearchExp }
          update={updateExps}
        />
      </Route>

      <Route path="/EditExperience/:id">
        <EditExperience 
          experience={experience}
          setExperience={setExperience}
          searchExp = { searchExp }
          setSearchExp = { setSearchExp }
          update={updateExps}
        />
      </Route>

      <Route path="/NewUser">
        <NewUser />
      </Route>
    </div>
  );
}

export default App;
