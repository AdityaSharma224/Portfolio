import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, styled } from '@mui/material';
import Python from '../../assets/python.png'; // Example icon for Mercury
import ReactImg from '../../assets/react.png'; // Example icon for Venus
import JS from '../../assets/js.png';
import NodeJs from '../../assets/node.png';
import html5 from '../../assets/html.png';
import Aster from '../../assets/pngegg.png';
import CSS from '../../assets/css.png';
import NEXTComet from '../../assets/nextComet.png';
import CPPComet from '../../assets/cppComet.png'; 
import Code from '../../assets/code.png'
import { createTheme } from '@mui/material';

const theme = createTheme({
   breakpoints:{
       values:{
           xxs:400,
           xs:500,
           sm:600,
           md:1000,
           lg:1300,
           xl:1400,
       }
   }
});



  
  const SolarSystem = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'rgb(11, 7, 7)',
    overflow: 'hidden',
  });
  
  const OrbitWithIcon = styled(Box)(({ theme, color, size, duration ,icon}) => ({
    position: 'absolute',
    border: '0.2px solid #D3D3D3',
    borderRadius: '50%',
    color: 'white',
    width: size,
    height: size,
    animation: `${duration} linear infinite`,
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '70px',
      height: '70px',
      transform: 'translateX(-50%)',
      top: '-32px',
      left: '50%',
      borderRadius: '50%',
      background: color,
      backgroundImage: `url(${icon})`,
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
      [theme.breakpoints.down('md')]:{
       width: '50px',
       height: '50px',
      },
    },
    [theme.breakpoints.down('xl')]: {
        width: 'calc(' + size + ' * 0.9)',
        height: 'calc(' + size + ' * 0.9)',
      },
      [theme.breakpoints.down('lg')]: {
        width: 'calc(' + size + ' * 0.8)',
        height: 'calc(' + size + ' * 0.8)',
      },
      [theme.breakpoints.down('md')]: {
        width: 'calc(' + size + ' * 0.7)',
        height: 'calc(' + size + ' * 0.7)',
        '&::before': {
          width: '50px',
          height: '50px',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: 'calc(' + size + ' * 0.6)',
        height: 'calc(' + size + ' * 0.6)',
      },
      [theme.breakpoints.down('xs')]: {
        width: 'calc(' + size + ' * 1.5)',
        height: 'calc(' + size + ' * 1.5)',
      },
      [theme.breakpoints.down('xxs')]: {
        width: 'calc(' + size + ' * 0.6)',
        height: 'calc(' + size + ' * 0.6)',
      },
    
  }));
  
  const Sun = styled(Box)({
    width: '90px',
    height: '90px',
    background: 'yellow',
    backgroundImage: `url(${Code})`,
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    borderRadius: '50%',
    boxShadow: '0 0 20px yellow, 0 0 60px rgb(255, 81, 0)',
    [theme.breakpoints.down('md')]:{
        width: '70px',
        height: '70px',
       },
  });

const SkillComponent = () =>{
    return(
        <Stack height={'100vh'} width={'100vw'} sx={{backgroundColor:'#fff'}} id='skills'>
                <SolarSystem>
                <Box sx={{
          position: 'absolute',
          top: { xxs: '3em', xs: '3em', sm: '10em' }, 
          left: { xxs: '1em', xs: '2em', sm: '18em' },
        }}>
          <img src={NEXTComet} height={'180px'} width={'180px'} />
        </Box>
        <Box sx={{
          position: 'absolute',
          top: { xxs: '15em', xs: '4em', sm: '22em' }, 
          right: { xxs: '1em', xs: '-1em', sm: '12em' },
        }}>
          <img src={CPPComet} height={'160px'} width={'160px'} />
        </Box>
                    <Sun />
                    <img src={Aster} height={'320px'} width={'320px'} style={{position:'absolute', userSelect:'none'}}/>

                    <OrbitWithIcon color="blue" size="220px" duration="rotating-anim 5s" icon={ReactImg} />
                    <OrbitWithIcon color="" size="350px" duration="rotating-anim 8.5s" icon={Python} />
                    <OrbitWithIcon color="" size="450px" duration="rotating-anim 10s" icon={JS} />
                    <OrbitWithIcon color="white" size="550px" duration="rotating-anim 14.5s" icon={NodeJs} />
                    <OrbitWithIcon color="" size="650px" duration="rotating-anim 16s" icon={html5} />
                    <OrbitWithIcon color="" size="750px" duration="rotating-anim 19s" icon={CSS} />
                    <img src={Aster} height={'980px'} width={'980px'} style={{position:'absolute'}}/>
                </SolarSystem>

        </Stack>
)};

export default SkillComponent;