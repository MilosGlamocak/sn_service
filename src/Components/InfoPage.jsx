import React from "react"
import '../Styles/InfoPage.css'
import { Container } from "@mui/material"
import CarRepairIcon from '@mui/icons-material/CarRepair';
import BuildIcon from '@mui/icons-material/Build';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BoltIcon from '@mui/icons-material/Bolt';


function InfoPage() {

    const infoIconText = [{
        className: 'infoIconText',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, repellendus.'
    }]
return (
    <Container className="infoContainer">
        
        <Container className="infoIcons">
            <CarRepairIcon className="infoIcon carRepairIcon"/>
            <BuildIcon className="infoIcon buildIcon"/>
            <MiscellaneousServicesIcon className="infoIcon miscIcon" />
            <BoltIcon className="infoIcon boltIcon" />
        </Container>
        <Container className="infoIconText">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></Container>
        <Container className="infoMechanics"></Container>
    </Container>
)
}

export default InfoPage