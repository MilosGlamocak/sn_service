import React, { useRef, useState } from "react"
import '../Styles/InfoPage.css'
import { Container, Grid, item } from "@mui/material"
import CarRepairIcon from '@mui/icons-material/CarRepair';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { FaOilCan } from "react-icons/fa";
import BuildIcon from '@mui/icons-material/Build';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BoltIcon from '@mui/icons-material/Bolt';



function InfoPage() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleOnMouseMove = (index, e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setHoveredCard({ index, x, y });
    };


    const cards = [
        { text: 'Zamjena ulja i filtera', icon: <FaOilCan className="infoIcon faOilCanIcon"/>, class: 'oil', background: 'https://images.unsplash.com/photo-1642075223291-f9ec545889fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { text: 'Veliki servis', icon: <CarRepairIcon className="infoIcon carRepairIcon"/>, class: 'bigService', background: `https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` },
        { text: 'Autodijagnostika', icon: <BoltIcon className="infoIcon boltIcon"/>, class: 'diagnostics', background: `https://images.unsplash.com/photo-1584202756061-a01bb5f601cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` },
        { text: 'Kočioni sistem', icon: <img src={require('../Images/disc-brake-128.png')} alt="Disk Brake" className="infoIcon discBrakeIcon"/>, class: 'brakes', background: `https://images.unsplash.com/photo-1696494561430-de087dd0bd69?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` },
      ];

return (
<>
    <Container className="infoContainer">
        <p className="ponudaHeader">U servisu vršimo usluge:</p>
        <Grid
            container
            columns={{ xs: 2, sm: 2, md: 20 }}
            columnGap={{xs: 0, sm: 0, md: 24}}
            rowGap={{xs: 1, md: 8}}
            className="infoGrid"
        >
        {cards.map((field, index) => (
            <Grid item xs={1} sm={1} md={7} key={index}>
                <Container
                    className='card'
                    onMouseMove={(e) => handleOnMouseMove(index, e)}
                        style={
                        hoveredCard && hoveredCard.index === index ? {
                            "--mouse-x": `${hoveredCard.x}px`,
                            "--mouse-y": `${hoveredCard.y}px`
                        }
                        : {}
                    }
                    >
                        <Container className="cardBorder"></Container>
                        <Container className={`cardContent ${field.class}`}>
                        {field.icon}
                            <p className="infoIconText">{field.text}</p>
                        </Container>
                        <Container className="cardBg" style={{ backgroundImage: `url(${field.background})` }}></Container>

                        
                </Container>
            </Grid>
            ))}
        </Grid>
    </Container>
</>
);
}

export default InfoPage;

/**<Container className="infoIcons">
            <CarRepairIcon className="infoIcon carRepairIcon"/>
            <BuildIcon className="infoIcon buildIcon"/>
            <MiscellaneousServicesIcon className="infoIcon miscIcon" />
            <BoltIcon className="infoIcon boltIcon" />
        </Container>
        <Container className="infoIconText">
            <p>Redovni servisi</p>
            <p>Tuning</p>
            <p>Mehanicki kvarovi</p>
            <p>Autoelektrika</p>
        </Container>
        <Container style={{maxWidth:'50%'}} /*ovo je samo jer justify content ne radi u infoContaineru/> */