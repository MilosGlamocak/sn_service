import { Container, Button } from "@mui/material"
import '../Styles/ComponentContainer.css'
import InfoPage from "./InfoPage"
import Contact from "./Contact"
import Location from "./Location"
import Reviews from "./Reviews"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef, useState } from "react"

function ComponentContainer() {
    const infoRef = useRef(null)

    function handleSmoothScrollInfo() {
        infoRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const locationRef = useRef(null)

    function handleSmoothScrollLocation() {
        locationRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const contactRef = useRef(null)

    function handleSmoothScrollContact() {
        contactRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const reviewsRef = useRef(null)

    function handleSmoothScrollReviews() {
        reviewsRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const startRef = useRef(null)

    function handleSmoothScrollStart() {
        startRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const [visible, setVisible] = useState(false)

    function detectMouseScrollUp(e) {
        e.deltaY < 0 ? setVisible(true) : setVisible(false)
        visible && setTimeout(() => {
            setVisible(false)
        }, 2500)
    }

    return (
        <>
        <Container className="componentContainer" onWheel={detectMouseScrollUp}>
            <div className="centerLine c1"/>
            <div className="centerLine c2"/>
            <div className="centerLine c3"/>
            <div className="centerLine c4"/>
{       //     <Container className="componentContainerBg"/>
}            <InfoPage height='25%'/>
            <Reviews height='25%'/>
            <Location height='25%'/>
            <Contact height='25%'/>
        <Button className="scrollButton" variant="contained" onClick={handleSmoothScrollInfo}>
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        <div ref={infoRef} style={{position: "absolute", top: '-3.5%', transform: 'translate(0 -50%)'}}></div>
        <Button className="scrollButton4" variant="contained" onClick={handleSmoothScrollReviews}>
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        <div ref={reviewsRef} style={{position: "absolute", top: '30%', transform: 'translate(0 -50%)'}}></div>
        <Button className="scrollButton2" variant="contained" onClick={handleSmoothScrollLocation}>
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        <div ref={locationRef} style={{position: "absolute", top: '52%', transform: 'translate(0 -50%)'}}></div>
        <Button className="scrollButton3" variant="contained" onClick={handleSmoothScrollContact}>
            <ArrowDownwardIcon className="icon arrowIcon"/>
        </Button>
        <div ref={contactRef} style={{position: "absolute", top: '90%', transform: 'translate(0 -50%)'}}></div>
        
        <div ref={startRef} style={{position: "absolute", top: '-50%', transform: 'translate(0 -50%)'}}></div>
            
        </Container>
        <Button className="scrollButton6" variant="contained" onClick={handleSmoothScrollStart} style={{scale: visible ? '1' : '0'}}>
        <ArrowDownwardIcon className="icon arrowIcon"/>
    </Button>
        </>
        
    )
}

export default ComponentContainer