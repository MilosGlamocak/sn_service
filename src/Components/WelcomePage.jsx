import { Button, Container } from "@mui/material"
import '../Styles/WelcomePage.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef } from "react";

function WelcomePage() {

    const moreRef = useRef(null)

    function handleSmoothScrollMore() {
        moreRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
        <Container className="welcomeContainer">
            <h1 className="welcomeHeader">Autoservis Banja Luka</h1>
            <p className="welcomeText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis praesentium reprehenderit alias nulla nisi fugit inventore nobis debitis blanditiis eaque sunt laborum omnis accusantium asperiores, ratione dolor ipsa? Nemo, facilis?</p>
            
         </Container>
         <Container className="welcomeContainerBg"></Container> 
        <Button className="scrollButton" variant="contained" onClick={handleSmoothScrollMore}>
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        <div ref={moreRef} style={{position: "absolute", top: '90%', transform: 'translate(0 -50%)'}}></div>
        </>
        
    )
}

export default WelcomePage