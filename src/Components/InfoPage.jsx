import React, { useRef, useState } from "react"
import '../Styles/InfoPage.css'
import { Container, Grid, item , Button} from "@mui/material"
import CarRepairIcon from '@mui/icons-material/CarRepair';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { FaOilCan } from "react-icons/fa";
import BuildIcon from '@mui/icons-material/Build';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BoltIcon from '@mui/icons-material/Bolt';
import Icon from '@mdi/react';
import { mdiCarBrakeFluidLevel } from '@mdi/js';
import AcUnitIcon from '@mui/icons-material/AcUnit';




function InfoPage({height}) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleOnMouseMove = (index, e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setHoveredCard({ index, x, y });
    };

    const cards = [
        { text: 'Zamjena ulja i filtera', icon: <FaOilCan className="infoIcon faOilCanIcon"/>, class: 'oil', background: require('../Images/mali_servis.jpg') },
        { text: 'Veliki servis', icon: <CarRepairIcon className="infoIcon carRepairIcon"/>, class: 'bigService', background: require('../Images/veliki_servis.jpg') },
        { text: 'Autodijagnostika', icon: <BoltIcon className="infoIcon boltIcon"/>, class: 'diagnostics', background: require('../Images/autodijagnostika.jpg') },
        { text: 'Kočioni sistem', icon: <img src={require('../Images/disc-brake-128.png')} alt="Disk Brake" className="infoIcon discBrakeIcon"/>, class: 'brakes', background: require('../Images/disk_brembo.jpg') },
        { text: 'Najsavremenija mašinska zamjena ulja u kočnicama', icon: 
        <Icon path={mdiCarBrakeFluidLevel} size={1.2} color={'white'} className="infoIcon brakeFluidIcon"/>, class: 'brakes', background: require('../Images/brake_fluid_machine.jpg') },
        { text: 'Punjenje klima uređaja', icon: 
        <AcUnitIcon className="infoIcon acUnitIcon"/>, class: 'brakes', background: require('../Images/car_ac.jpg') },
      ];

return (
<>
    <Container className="infoContainer" style={{height: height}}>
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