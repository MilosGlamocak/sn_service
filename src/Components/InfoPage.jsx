import React, { useState } from "react"
import '../Styles/InfoPage.css'
import { Container, Grid, item } from "@mui/material"
import CarRepairIcon from '@mui/icons-material/CarRepair';
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

return (
<>
    <Container className="infoContainer">
        <Grid
            container
            columns={{ xs: 3, sm: 2, md: 40 }}
            columnGap={{xs: 0, sm: 0, md: 24}}
            rowGap={{xs: 1, md: 8}}
            className="infoGrid"
        >
        {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={1} sm={1} md={7} key={index}>
                <Container
                    className='infoDiv'
                    onMouseMove={(e) => handleOnMouseMove(index, e)}
                        style={
                        hoveredCard && hoveredCard.index === index ? {
                            "--mouse-x": `${hoveredCard.x}px`,
                            "--mouse-y": `${hoveredCard.y}px`
                        }
                        : {}
                    }
                    >
                        <CarRepairIcon className="infoIcon carRepairIcon"/>
                        <p className="infoIconText">Redovni servisi</p>
                </Container>
            </Grid>
            ))}
        </Grid>
    </Container>
    <Container className="infoMechanics">
        {/* Add your other components here */}
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