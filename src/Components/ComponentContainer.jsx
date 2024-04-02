import { Container } from "@mui/material"
import '../Styles/ComponentContainer.css'
import InfoPage from "./InfoPage"

function ComponentContainer() {
    return (
        <Container className="componentContainer">
            <InfoPage/>
        </Container>
    )
}

export default ComponentContainer