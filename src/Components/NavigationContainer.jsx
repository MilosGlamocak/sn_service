import { Container } from "@mui/material";
import React, { useRef } from "react";
import '../Styles/NavigationContainer.css'

function NavigationContainer() {

  const contactRef = useRef(null)

  function handleScrollContact() {
    contactRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const locationRef = useRef(null)

  function handleScrollLocation() {
    locationRef.current.scrollIntoView({behavior: 'smooth'})
  }

  return ( 
    <>
    <Container className="topNav">
        <h1 className="siteName">SN Service</h1>
        <Container className="nav rightNav">
          <Container className="linkDiv" onClick={handleScrollContact}><h3>Kontakt</h3></Container>
          <Container className="linkDiv" onClick={handleScrollLocation}><h3>Lokacija</h3></Container>
        </Container>

        
    </Container>
    <div className="contactRef" ref={contactRef}></div>
    <div className="locationRef" ref={locationRef}></div>
    </>
    
  )
}

export default NavigationContainer;
