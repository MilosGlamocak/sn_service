import '../Styles/ComponentContainer2.css';
import React from 'react';
import WelcomePage from './WelcomePage';
import { Container, Button } from "@mui/material"
import InfoPage from './InfoPage';
import Reviews from './Reviews';
import Location from './Location';
import Contact from './Contact';
import { useRef, useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ComponentContainer2() {

    const infoRef = useRef(null)
    const locationRef = useRef(null)
    const contactRef = useRef(null)
    const reviewsRef = useRef(null)
    const startRef = useRef(null)

    function handleSmoothScrollInfo() {
        infoRef.current.scrollIntoView({behavior: 'smooth'})
    }
    function handleSmoothScrollLocation() {
        locationRef.current.scrollIntoView({behavior: 'smooth'})
    }
    function handleSmoothScrollContact() {
        contactRef.current.scrollIntoView({behavior: 'smooth'})
    }
    function handleSmoothScrollReviews() {
        reviewsRef.current.scrollIntoView({behavior: 'smooth'})
    }
    function handleSmoothScrollStart() {
        startRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const [visible, setVisible] = useState(false);

    function detectMouseScrollUp(e) {
        setVisible(e.deltaY < 0);
    }

    useEffect(() => {
        window.onscroll = (e) => {
            if (window.scrollY <= 10) {
                    setVisible(false)
            }
        }
    }, [visible])
    
    return ( 
        <Container className='componentContainer2' onWheel={detectMouseScrollUp}>
            <WelcomePage height='25%'/>
            <InfoPage height='20%' />
            <Reviews height='20%'/>
            <Location height='20%'/>
            <Contact height='17%' /> 
        </Container>
    )
}

export default ComponentContainer2