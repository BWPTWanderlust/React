import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddExperience from "./AddExperience";
// import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import Search from "./SearchBar";
import Styled from 'styled-components'

const Cards = Styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
`
const Card = Styled.div`
margin: 2rem 6rem;
padding: 1rem;
background-color: #ffc357;
box-shadow: 2px 2px #d88144;
border-radius: 1.5rem;
`

const SearchBox = Styled.div`
margin: 1rem;
color: #084f93;
font-size: 1.5rem;
font-weight: bold;
`

const Button = Styled.div`
margin: 1rem;
padding: .5rem 1rem;
border-radius: 1.5rem;
background-color: #ffc357;
box-shadow: 2px 2px #d88144;
color: #084f93;
font-size: 1.5rem;
font-weight: bold;
`

const Buttons = Styled.div`
display: flex;
justify-content: center;

`

const Landing = Styled.div`

`

function LandingPage(props) {
  return (
    <Landing>
      <SearchBox>
        <Search setSearchExp = { props.setSearchExp } experience = { props.experience }/>
      </SearchBox>
      <Cards>
        {props.searchExp.map(el => {
          return (
            <Card>
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
            </Card>
          );
        })}
      </Cards>
      <Buttons>
        {/* <Button> */}
          <Link to={"/NewUser"}>
            <Button>Sign Up</Button>
          </Link>
        {/* </Button>
        <Button>   */}
          <Link to={"/AddExperience"}>
            <Button>Add Experience</Button>
          </Link>
        {/* </Button> */}
      </Buttons>
    </Landing>
  );
}

export default LandingPage;
