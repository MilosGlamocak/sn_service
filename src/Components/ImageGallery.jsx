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

function ImageGallery({height}) {
    const [index, setIndex] = useState(0);

    const [zoomed, setZoomed] = useState(false)

    const [open, setOpen] = useState(false)

    const handleClick = (index, e) => {
      setIndex(index)
      setOpen(true)
    };

    const handleZoom = () => {
      setZoomed(!zoomed)
    }

  return (
    <Container className='galleryCont'  style={{height: height}}> 
        <h2 className='galleryHeader'>Galerija:</h2>
        <Box sx={{ width: '100%', height: '85%', overflowY: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': { width: 0 }}}>
      <ImageList className='imageList' variant="masonry" cols={4} gap={8}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item.src}`}
              src={`${item.src}`}
              alt={item.alt}
              loading="lazy"
              onClick={() => handleClick(index)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Lightbox 
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </Box>
        
    </Container>
  )
}
export default ImageGallery
