import React from "react";
import { Link } from "react-router-dom";
import Search from "./SearchBar";
import Styled from "styled-components";

const Cards = Styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
`;
const Card = Styled.div`
margin: 2rem 6rem;
padding: 1rem;
background-color: #ffc357;
box-shadow: 2px 2px #d88144;
border-radius: 1.5rem;
`;

const SearchBox = Styled.div`
margin: 1rem;
color: #084f93;
font-size: 1.5rem;
font-weight: bold;
`;

const Button = Styled.div`
margin: 1rem;
padding: .5rem 1rem;
border-radius: 1.5rem;
background-color: #ffc357;
box-shadow: 2px 2px #d88144;
color: #084f93;
font-size: 1.5rem;
font-weight: bold;
`;

const Buttons = Styled.div`
display: flex;
justify-content: center;

`;

const Landing = Styled.div`

`;

function LandingPage(props) {

  return (
    <Landing>
      <SearchBox>
        <Search
          setSearchExp={props.setSearchExp}
          experience={props.experience}
        />
      </SearchBox>
      <Buttons>
        <Link to={"/NewUser"}>
          <Button>Sign Up Organizer</Button>
        </Link>
        <Link to={"/AddExperience"}>
          <Button>Add Experience</Button>
        </Link>
      </Buttons>
      <Cards>
        {props.searchExp.map(el => {
          return (
            <Card>
              <p>
                <img src={el.imgurl} width="200px" alt="ExperienceImage"></img>
              </p>

              <Link to={`/Experience/${el.id}`}>
                <p>Location: {el.location}</p>
              </Link>
              <p>Trip Type: {el.type}</p>
              <p>Duration: {el.duration}</p>
            </Card>
          );
        })}
      </Cards>
    </Landing>
  );
}

export default LandingPage;
