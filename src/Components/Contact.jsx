import { Button, Container, TextField, colors } from '@mui/material'
import { inputLabelClasses } from "@mui/material/InputLabel";
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import '../Styles/Contact.css'

function Contact() {

    const [hoveredCard, setHoveredCard] = useState(null);
    const [clicked, setClicked] = useState(false)

    const handleOnMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setHoveredCard({x, y });
    };

    function handleSendEmail(e) {
        setClicked(true)
        setTimeout(()=> setClicked(false), 1000)
    }

    const inputFields = [
        {label: 'Vaš email:', className: 'textField emailInput', rows: 1},
        {label: 'Poruka:', className: 'textField MessageInput', rows: 6}, 
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
                <Container className='formContent'>
                <Container className='leftSide'></Container>
            <Container className='rightSide'>
            <Container className={`formContentRight`}>
                {inputFields.map((field) => {
                    return (
                <TextField className={field.className} variant='filled' label={field.label}
                multiline
                rows={field.rows}

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
                <SendIcon className={`${clicked ? 'clicked' : 'sendIcon'}`} onClick={handleSendEmail}/>
                </Container>
            </Container>
                </Container>
            
                <Container className="formBorder"></Container>
                
                </Container>
        </Container>
    )
}

export default Contact