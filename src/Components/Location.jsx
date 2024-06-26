import '../Styles/Location.css'
import Container from '@mui/material/Container';
import React from 'react';


function Location({height}) {


    return (
        <Container className='locationContainer' style={{height: height}}>
            
            <Container className='mapContainer'>
            <h2 className='mapHeading'>Pronađite nas na ovoj adresi:</h2>
            <a href='https://www.google.com/maps/place/SN+SERVICE+BANJALUKA/@44.8207749,17.1968437,17z/data=!3m1!4b1!4m6!3m5!1s0x475e031b213270cb:0x69b306bbf08e03e6!8m2!3d44.8207749!4d17.1994186!16s%2Fg%2F11mwgmbwbl?entry=ttu' target='blank' className='addressText'>Jovana Bijelića 23, Banja Luka 78000</a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4002.2781316220007!2d17.197381043561382!3d44.82079034252259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e031b213270cb%3A0x69b306bbf08e03e6!2sSN%20SERVICE%20BANJALUKA!5e0!3m2!1ssr!2sba!4v1712477655406!5m2!1ssr!2sba"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
            </Container>
            
        </Container>
    )
}

export default Location