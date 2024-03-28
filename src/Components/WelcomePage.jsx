import { Button, Container } from "@mui/material"
import '../Styles/WelcomePage.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function WelcomePage() {

    return (
        <>
        <Container className="welcomeContainer">
            <h1 className="welcomeHeader">Autoservis Banja Luka</h1>
            <p className="welcomeText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis praesentium reprehenderit alias nulla nisi fugit inventore nobis debitis blanditiis eaque sunt laborum omnis accusantium asperiores, ratione dolor ipsa? Nemo, facilis?</p>
            <Container className="welcomeContainerBg"></Container> 
         </Container>
        <Button className="scrollButton" variant="contained">
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        </>
        
    )
}

export default WelcomePage