import { Container } from "@mui/material";
import React from "react";
import '../Styles/NavigationContainer.css'

//treba ponuda, kontakt, lokacija, tako nesto u top nav

function NavigationContainer() {
  return (
    
    <Container className="topNav">
        <Container className=" nav leftNav"></Container>
        <h1 className="siteName">SN Service</h1>
        <Container className="nav rightNav"></Container>
    </Container>
  )
}

export default NavigationContainer;
