import { Container, TextField, colors } from '@mui/material'
import { inputLabelClasses } from "@mui/material/InputLabel";
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

    function handleSendEmail(e) {
        console.log(e)
    }

    const inputFields = [
        {label: 'Vaš email:', className: 'textField emailInput'},
        {label: 'Poruka:', className: 'textField MessageInput'}, 
    ]


    return (
        <Container className='contactContainer'>
            <h2 className='contactHeader'>Kontaktirajte nas!</h2>
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
                            {inputFields.map((field) => {
                                return (
                            <TextField className={field.className} variant='filled' label={field.label}
                            sx={{ input: { color: 'white'} }}
                            InputLabelProps={{
                                sx: {
                                  color: "white",
                                  [`&.${inputLabelClasses.shrink}`]: {
                                    // set the color of the label when shrinked (usually when the TextField is focused)
                                    color: "white"
                                  }}}}
                            />
                            )
                            
                            })}
                            
                        </Container>

                        
                </Container>
        </Container>
    )
}

export default Contact