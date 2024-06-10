import React from 'react';
import Stack from '@mui/material/Stack';
import MyImage from '../../assets/myimg.png'
import { Typography } from '@mui/material';
import useStyles from './home-styles';

const HomeComponent = () =>{
    const classes = useStyles();

    return(
        <Stack height={'100vh'} width={'100vw'} sx={{
            backgroundImage:`url(${MyImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:'cover',
            alignItems:'center',
            justifyContent:'center',
        }}>
              <div id='home'></div>
              <Stack flexDirection={'column'} alignSelf={'flex-start'} marginLeft={'25em'}>
                <Typography variant='h2' color={'#fff'}>
                    {'Hello'}
                </Typography>
                <Typography variant='h1' color={'#fff'}>{'I\'m Aditya'}</Typography>
                <Typography variant='h4' color={'#fff'}>{'Web Developer'}</Typography>
              </Stack>
        </Stack>
)};

export default HomeComponent;