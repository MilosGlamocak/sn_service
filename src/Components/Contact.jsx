import { Button, Container, TextField, colors } from '@mui/material'
import { inputLabelClasses } from "@mui/material/InputLabel";
import SendIcon from '@mui/icons-material/Send';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRef, useState } from 'react';
import '../Styles/Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {

    const [hoveredCard, setHoveredCard] = useState(null);
    const [clicked, setClicked] = useState(false);
    const [message, setMessage] = useState({})
    const formRef = useRef(null)

    const handleOnMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setHoveredCard({x, y});
    };

    function handleMessageChange(e) {
        setMessage((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const templateParams = {
        email_from: message.email, // Pass the email field value to the template variable 'email_from'
        message: message.message // Pass the message field value to the template variable 'message'
    };

    function handleSendEmail(e) {
        setClicked(true)
        setTimeout(()=> setClicked(false), 1000);
        console.log(message)

        emailjs.send('service_m9kewli', 'template_sf69xjy', message, 'JW3MS5isagNt2qIp4')
    }

    const inputFields = [
        {label: 'Vaš email:', className: 'textField emailInput', rows: 1, id: 'email', formName: 'email_from'},
        {label: 'Poruka:', className: 'textField MessageInput', rows: 8, id: 'message', formName: 'message'}, 
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
                <Container className='leftSide'>
                    <Container className='phoneDiv contactDiv'>
                        <LocalPhoneIcon className='contactIcon phone'/>
                        <p className='contactText'>+387 66/656-963</p>
                    </Container>
                    <Container className='emailDiv contactDiv'>
                        <EmailIcon className='contactIcon email'/>
                        <p className='contactText'>snservice_banjaluka@gmail.com</p>
                    </Container>
                    <Container className='instagramDiv contactDiv'>
                        <InstagramIcon className='contactIcon instagram'/>
                        <p className='contactText'>@snservice_banjaluka</p>
                    </Container>
                </Container>
            <Container className='rightSide'>
            <Container ref={formRef} className={`formContentRight`}>
                
                {inputFields.map((field, index) => {
                    return (
                <TextField className={field.className} variant='filled' 
                key={index}
                name={field.formName}
                id={field.id}
                label={field.label}
                multiline
                rows={field.rows}
                onChange={handleMessageChange}
                InputLabelProps={{
                    sx: {
                        color: "white",
                        [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white"
                        }
                        }}}
                        InputProps={{ // Set input text color here
                            sx: {
                                color: "white",
                            }
                        }}
                />
                )
                })}
                <SendIcon className={`${clicked ? 'clicked' : 'sendIcon'}`} onClick={handleSendEmail} type='submit'/>
                </Container>
            </Container>
                </Container>
                <Container className="formBorder"></Container>
                </Container>
        </Container>
    )
}

export default Contact