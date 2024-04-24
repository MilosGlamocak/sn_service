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
import ImageGallery from './ImageGallery';

function ComponentContainer2() {

    const [showGallery, setShowGallery] = useState(false)

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

    const [visible, setVisible] = useState(true);

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
        <>
        <Container className='componentContainer2' onWheel={detectMouseScrollUp}>
            <WelcomePage height='25%'/>
            <InfoPage height='20%' />
            {showGallery ?
            (
            <>
            <Container className='showGalleryBtn' onClick={() => setShowGallery(false)}><h3 className='showGalleryBtnText'>Sakrij galeriju</h3></Container>
            <ImageGallery height='17%'/>
            </>) : 
                <Container className='showGalleryBtn' onClick={() => setShowGallery(true)}><h3 className='showGalleryBtnText'>Prikaži galeriju</h3></Container>
            }
            <Reviews height='15%'/>
            <Location height='18%'/>
            <Contact height='17%' /> 
            
        </Container>
        <Button className='scrollButton scrollBtn1' variant='contained' onClick={handleSmoothScrollInfo}>
            <ArrowDownwardIcon className='scrollIcon'/>
        </Button>
        <Button className='scrollButton scrollBtn2' variant='contained' style={{display: visible ? 'flex' : 'none'}} onClick={handleSmoothScrollStart}>
            <ArrowDownwardIcon className='scrollIcon' />
        </Button>
        <div ref={infoRef} className='infoRef'/>
        <div ref={startRef} className='startRef'/>
        </>
        
    )
}

export default ComponentContainer2