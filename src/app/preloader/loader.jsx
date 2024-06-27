import React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { gsap } from 'gsap';

const PreloaderContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#88513A',
  overflow: 'hidden',
  zIndex: 100,
  borderBottom:'14px solid #3E261C',
}));

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '2em',
  overflow: 'hidden',
  color: 'white',
  opacity: 0,
});

// Styled Typography with responsive breakpoints
const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  // Default styles
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.4rem', // for extra-small screens
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem', // for small screens
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem', // for medium screens
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem', // for large screens
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '4rem', // for extra-large screens
  },
}));

const Preloader = () => {
  React.useEffect(() => {
    const tl = gsap.timeline();

    tl.to('body', {
      overflow: 'hidden',
    })
      .to('.preloader .text-container', {
        duration: 0,
        opacity: 1,
        ease: 'Power3.easeOut',
      })
      .from('.preloader .text-container h2', {
        duration: 1.5,
        delay: 1,
        y: 90,
        skewY: 10,
        stagger: 0.4,
        ease: 'Power3.easeOut',
      })
      .to('.preloader .text-container h2', {
        duration: 1.2,
        y: 100,
        skewY: -10,
        stagger: 0.2,
        ease: 'Power3.easeOut',
      })
      .to('.preloader', {
        duration: 1.5,
        height: '0vh',
        ease: 'Power3.easeOut',
      })
      .to('body', {
        overflow: 'auto',
      }, '-=2')
      .to('.preloader', {
        display: 'none',
      });
  }, []);

  return (
    <PreloaderContainer className="preloader">
      <TextContainer className="text-container">
        {/* Use TypographyStyled instead of Typography */}
        <TypographyStyled variant="h2">Crafted</TypographyStyled>
        <TypographyStyled variant="h2">By</TypographyStyled>
        <TypographyStyled variant="h2">Aditya</TypographyStyled>
        <TypographyStyled variant="h2" fontWeight={400}>🤗</TypographyStyled>
      </TextContainer>
    </PreloaderContainer>
  );
};

export default Preloader;
