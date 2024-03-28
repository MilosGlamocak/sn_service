import { Button, Container } from "@mui/material"
import '../Styles/WelcomePage.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function WelcomePage() {

    return (
        <>
        <Container className="welcomeContainer">
            
         </Container>
        <Button className="scrollButton" variant="contained">
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        </>
        
    )
}

export default WelcomePage