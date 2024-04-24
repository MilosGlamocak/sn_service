import { Container } from '@mui/material'
import '../Styles/ImageGallery.css'
import React, { useEffect, useRef } from 'react'
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from 'react';
import {images} from '../Images/Images'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { Zoom } from "yet-another-react-lightbox/plugins";

function ImageGallery({height}) {
    const [index, setIndex] = useState(0);

    const [open, setOpen] = useState(false)

    const handleClick = (index, e) => {
      setIndex(index)
      setOpen(true)
    };
    const zoomRef =  useRef(null);


  return (
    <Container className='galleryCont'  style={{height: height}}> 
        {/**<h2 className='galleryHeader'>Galerija:</h2> */}
        <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': { width: 0 }}}>
      <ImageList className='imageList' variant="masonry" cols={3} gap={8}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item.src}`}
              src={`${item.src}`}
              alt={item.alt}
              loading="lazy"
              onClick={() => handleClick(index)}
              className='img'
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Lightbox 
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        plugins={[Zoom]}
        animation={{ zoom: 500 }}
        zoom={{
          ref: zoomRef,
          maxZoomPixelRatio: 10,
            /** zoom-in multiplier */
            zoomInMultiplier: 5,
            /** double-tap maximum time delay */
            doubleTapDelay: 300,
            /** double-click maximum time delay */
            doubleClickDelay: 300,
            /** maximum number of zoom-in stops via double-click or double-tap */
            doubleClickMaxStops: 2,
            /** keyboard move distance */
            keyboardMoveDistance: 10,
            /** wheel zoom distance factor */
            wheelZoomDistanceFactor: 300,
            /** pinch zoom distance factor */
            pinchZoomDistanceFactor: 300,
            /** if `true`, enables image zoom via scroll gestures for mouse and trackpad users */
            scrollToZoom: true,
        }}
      />
      
    </Box>
        
    </Container>
  )
}
export default ImageGallery
