import React from "react"
import '../Styles/InfoPage.css'
import { Container } from "@mui/material"
import CarRepairIcon from '@mui/icons-material/CarRepair';


function InfoPage() {
return (
    <Container className="infoContainer">
        
        <Container className="infoIcons">
            <CarRepairIcon className="infoIcon carRepairIcon"/>
        </Container>
        <Container className="infoIconText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, repellendus.</Container>
        <Container className="infoMechanics"></Container>
    </Container>
)
}

export default InfoPage