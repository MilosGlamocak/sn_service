import { Container } from "@mui/material";
import React from "react";
import '../Styles/NavigationContainer.css'

//treba ponuda, kontakt, lokacija, tako nesto u top nav

function NavigationContainer() {
  return (
    
    <Container className="topNav">
        <h1 className="siteName">SN Service</h1>
        <Container className="nav rightNav">
          <Container className="linkDiv" onClick={() => console.log(true)}><h3>Info</h3></Container>
          <Container className="linkDiv"><h3>Kontakt</h3></Container>
          <Container className="linkDiv"><h3>Lokacija</h3></Container>
        </Container>
    </Container>
  )
}

export default NavigationContainer;
