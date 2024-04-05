import { Container } from "@mui/material"
import '../Styles/ComponentContainer.css'
import InfoPage from "./InfoPage"
import Contact from "./Contact"

function ComponentContainer() {
    return (
        <Container className="componentContainer">
            <Container className="componentContainerBg"/>
            <InfoPage/>
            <Contact/>
        </Container>
    )
}

export default ComponentContainer