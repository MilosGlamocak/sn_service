import '../Styles/Reviews.css';
import { Container } from "@mui/material"
import React from 'react';

function Reviews({height}) {
    return (
        <Container className='reviewsContainer' style={{height: height}}>
            <h2 className='reviewsHeader'>Ocjene klijenata:</h2>
            <Container className='reviews'>
            <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25394467' frameborder='0' width='100%' height='150%'></iframe>
            </Container>
        </Container>
    )

}

export default Reviews