import {Container } from "@mui/material"
import '../Styles/WelcomePage.css'

function WelcomePage({height}) {

    

    return (
        <>
        <Container className="welcomeContainer" style={{height}}>
            <h1 className="welcomeHeader">Autoservis Banja Luka</h1>
            <p className="welcomeText">Potreban Vam je provjeren serviser za vašeg VW ili Audi ljubimca? Na pravom ste mjestu!<br/> Sa <b>15</b> godina uspješnog poslovanja u porodičnoj firmi garantujemo kvalitet i posvećenost zanatu.<br/><br/><i style={{fontSize: '20px'}}>Ugovorite vaš prvi servis već danas!</i></p>
            
         </Container>
         <Container className="welcomeContainerBg"></Container> 
        </>
        
    )
}

export default WelcomePage