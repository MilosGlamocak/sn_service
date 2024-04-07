import { Button, Container } from "@mui/material"
import '../Styles/WelcomePage.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef } from "react";

function WelcomePage({height}) {

    const infoRef = useRef(null)

    function handleSmoothScrollInfo() {
        infoRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
        <Container className="welcomeContainer" style={{height}}>
            <h1 className="welcomeHeader">Autoservis Banja Luka</h1>
            <p className="welcomeText">Potreban vam je provjeren serviser za vašeg VW ili Audi ljubimca? Na pravom ste mjestu!<br/> Sa <b>15</b> godina uspješnog poslovanja u porodičnoj firmi garantujemo kvalitetom i posvećenosti zanatu.<br/><br/><i style={{fontSize: '20px'}}>Ugovorite vaš prvi servis već danas!</i></p>
            
         </Container>
         <Container className="welcomeContainerBg"></Container> 
        <Button className="scrollButton" variant="contained" onClick={handleSmoothScrollInfo}>
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        <div ref={infoRef} style={{position: "absolute", top: '90%', transform: 'translate(0 -50%)'}}></div>
        </>
        
    )
}

export default WelcomePage