import React from 'react';
import Stack from '@mui/material/Stack';
import Myimage from '../../assets/myimg.jpg';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import useStyles from './home-styles';
import LinkedInImage from '../../assets/linkedin.svg';
import GithubImage from '../../assets/github.svg';
import LeetcodeImage from '../../assets/leetcode.svg';

const HomeComponent = () =>{
    const classes = useStyles();
    return(
        <Stack className={classes.wrapper} id='home'>
            <Stack className={classes.innerWrapper} flexDirection={'row'}>
                <Stack className={classes.detailsWrapper} >
                    <Stack className={classes.typoWrapper}>
                        <Typography  sx={{ typography: { xs: 'h3', sm: 'h4', md: 'h2' } }} color={'#fff'}>{'Hello'}</Typography>
                        <Typography sx={{ typography: { xs: 'h2', sm: 'h2', md: 'h1'}, fontWeight:{xs: 700, sm: 700, md: 700, lg:700, xl:700} }} color={'#fff'}>{'I\'m Aditya'}</Typography>
                        <Typography sx={{ typography: { xs: 'h4', sm: 'h5', md: 'h4' } }} color={'#fff'}>{'Software Engineer'}</Typography>
                    </Stack>
                    <Stack className={classes.socialIcons} flexDirection={'row'}>
                       <Link href="https://www.linkedin.com/in/adityasharma13064" target="_blank"><Stack component={'img'} src={LinkedInImage} className={classes.icon}/></Link>
                       <Link href="https://github.com/AdityaSharma224" target="_blank"><Stack component={'img'} src={GithubImage} className={classes.icon}/></Link>
                       <Link href="https://leetcode.com/u/sharmaaditya224" target="_blank"><Stack component={'img'} src={LeetcodeImage} className={classes.icon}/></Link>
                    </Stack>
                </Stack>
                <img className={classes.image} src={Myimage} alt='aditya'></img>
            </Stack>
        </Stack>
)};

export default HomeComponent;