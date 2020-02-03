import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Experience from "./Components/Experience";

function App() {
  const data = [
    {
      id: 0,
      triptype: "Skydiving",
      location: "San Diego, CA",
      duration: "7 days",
      organizer: "Buzz 'Falling With Style' PacChute",
      private: true,
      picture:
        "https://cdn.thecrazytourist.com/wp-content/uploads/2018/07/ccimage-shutterstock_95925931.jpg"
    },
    {
      id: 1,
      triptype: "Hiking",
      location: "Boone, NC",
      duration: "3 days",
      organizer: "Wyn 'These Boots Were Made For Walking' Dingpath",
      private: true,
      picture:
        "https://www.romanticasheville.com/sites/default/files/images/basic_page/appalachian-trail.jpg"
    },
    {
      id: 2,
      triptype: "Surfing",
      location: "Encinitas, CA",
      duration: "2 days",
      organizer: "Crush 'Like, Wooooah!' Init",
      private: false,
      picture:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2Fimage%2F2016%2F11%2Fmain%2Fdream0910_19.jpg%3Fitok%3DKNdU2FQG&w=400&q=85"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanderlust</h1>
      </header>
      <Route exact path="/">
        <LandingPage experience={data} />
      </Route>

      <Route path="/experiences/:id">
        <Experience />
      </Route>
    </div>
  );
}

export default App;
