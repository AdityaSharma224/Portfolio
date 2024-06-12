import React from 'react';
import Stack from '@mui/material/Stack';
import Myimage from '../../assets/myimg.jpg';
import { Typography } from '@mui/material';
import useStyles from './home-styles';

const HomeComponent = () =>{
    const classes = useStyles();

    return(
        <Stack className={classes.wrapper} id='home'>
            <Stack className={classes.innerWrapper} flexDirection={'row'}>
                <Stack classname={classes.detailsWrapper} marginLeft={15}>
                    <Typography variant='h2' color={'#fff'}>
                        {'Hello'}
                    </Typography>
                    <Typography variant='h1' color={'#fff'} fontWeight={700}>{'I\'m Aditya'}</Typography>
                    <Typography variant='h4' color={'#fff'}>{'Software Engineer'}</Typography>
                </Stack>
                <Stack sx={{borderTopLeftRadius:'40%', borderTopRightRadius:'40%', border:'20px solid #544238'}}>
                    <img className={classes.myImage} style={{borderTopLeftRadius:'40%', borderTopRightRadius:'40%'}} src={Myimage} height={'500px'} width={'400px'}></img>
                </Stack>
            </Stack>
        </Stack>
)};

export default HomeComponent;