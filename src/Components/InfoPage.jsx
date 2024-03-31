import React, { useState } from "react"
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
        { text: 'Ulje i filteri', icon: <FaOilCan className="infoIcon faOilCanIcon"/> },
        { text: 'Veliki servis', icon: <CarRepairIcon className="infoIcon carRepairIcon"/> },
        { text: 'Autodijagnostika', icon: <BoltIcon className="infoIcon boltIcon"/> },
        { text: 'Kočioni sistem', icon: <img src={require('../Images/disc-brake-128.png')} alt="Disk Brake" className="infoIcon discBrakeIcon"/> },
      ];

return (
<>
    <Container className="infoContainer">
        <p className="ponudaHeader">Iz ponude izdvajamo:</p>
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
                        <Container className="cardContent">
                            {field.icon}
                            <p className="infoIconText">{field.text}</p>
                        </Container>
                        
                </Container>
            </Grid>
            ))}
        </Grid>
    </Container>
    <Container className="infoMechanics">
        <Container className="mechanicText"></Container>
        <Container className="mechanicImg"></Container>
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