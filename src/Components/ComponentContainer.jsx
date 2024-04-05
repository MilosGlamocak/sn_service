import { Container } from "@mui/material"
import '../Styles/ComponentContainer.css'
import InfoPage from "./InfoPage"
import Contact from "./Contact"
import Location from "./Location"

function ComponentContainer() {
    return (
        <Container className="componentContainer">
{       //     <Container className="componentContainerBg"/>
}            <InfoPage/>
            <Contact/>
            <Location/>
        </Container>
    )
}

export default ComponentContainer