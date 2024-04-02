import { Container } from '@mui/material'
import { useState } from 'react';
import '../Styles/Contact.css'

function Contact() {

    const [hoveredCard, setHoveredCard] = useState(null);

    const handleOnMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setHoveredCard({x, y });
    };
    return (
        <Container className='contactContainer'>
            <Container
                    className='form'
                    onMouseMove={(e) => handleOnMouseMove( e)}
                        style={
                        hoveredCard ? {
                            "--mouse-x": `${hoveredCard.x}px`,
                            "--mouse-y": `${hoveredCard.y}px`
                        }
                        : {}
                    }
                    >
                        <Container className="formBorder"></Container>
                        <Container className={`formContent`}>
                        </Container>

                        
                </Container>
        </Container>
    )
}

export default Contact