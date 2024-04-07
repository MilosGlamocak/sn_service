import { Container } from "@mui/material"
import '../Styles/ComponentContainer.css'
import InfoPage from "./InfoPage"
import Contact from "./Contact"
import Location from "./Location"
import Reviews from "./Reviews"

function ComponentContainer() {
    return (
        <Container className="componentContainer">
{       //     <Container className="componentContainerBg"/>
}            <InfoPage height='25%'/>
            <Location height='25%'/>
            <Contact height='20%'/>
            
        </Container>
    )
}

export default ComponentContainer