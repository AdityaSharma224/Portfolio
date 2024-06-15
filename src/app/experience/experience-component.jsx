import React from 'react';
import Stack from '@mui/material/Stack';
import useStyles from './experience-styles';
import MyAboutImage from '../../assets/about-image.jpg';
import { Typography } from '@mui/material';
import GFGIcon from '../../assets/gfg.png';
import CASTIcon from '../../assets/cast.png';
import CONTLOIcon from '../../assets/contlo.png';

const ExperienceComponent = () =>{
    const classes = useStyles();

    const experiences = [
        {
          icon: <Stack component={'img'} borderRadius={'20px'} src={CASTIcon} height={'70px'} width={'220px'}/>,
          year: '10/2023  -  Present',
          title: 'Software Development Engineer - 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
          icon: <Stack component={'img'} borderRadius={'20px'} src={CONTLOIcon} height={'50px'} width={'120px'}/>,
          year: '07/2023  -  10/2023',
          title: 'Software Developer Engineer Intern',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            icon: <Stack component={'img'} borderRadius={'20px'} src={GFGIcon} height={'50px'} width={'200px'}/>,
            year: '10/2022  -  06/2023',
            title: 'Member of Technical Staff Intern',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
      ];    

    return(
        <Stack className={classes.wrapper} id='experience'>
            <Stack flexDirection={'row'} width='100%' height='100%'>
                <img  className={classes.myImage} src={MyAboutImage} width={'40%'} height={'100%'} alt='myimage'></img>
                <Stack className={classes.aboutWrapper}>
                    <Stack className={classes.experienceWrapper}>
                        <Typography
                            variant='h1' 
                            color='#fff' 
                            fontWeight={700}
                            sx={{ typography:{xs:'h3',sm:'h2',md:'h1',lg:'h1',xl:'h1'}, fontWeight:{xs:700,sm:700,md:700,lg:700,xl:700} }}
                        >
                            {'Experience'}
                        </Typography>
                        <Stack sx={{ height:'100%', width:'100%'}}>
                            <Stack className={classes.list}>
                                {experiences.map((exp, index) => (
                                <Stack className={classes.experienceItem} key={index}>
                                    <Stack className={classes.wrapperA} gap={1} sx={{flexDirection:{xs:'row',sm:'row',md:'row',lg:'row',xl:'row'}}}>
                                        <span style={{marginTop:'-20px'}}>{exp.icon}</span>
                                        <Typography sx={{typography:{xs:'body1'}, fontWeight:{xs:700}}} className={classes.experienceYear}>{exp.year}</Typography>
                                    </Stack>
                                    <Stack className={classes.experienceDetails} flexDirection={'column'}>
                                        <Typography className={classes.title} sx={{typography:{xs:'h6',sm:'h6',md:'h6',lg:'h5',xl:'h5'}}}>{exp.title}</Typography>
                                        <Typography className={classes.description}>{exp.description}</Typography>
                                    </Stack>
                                </Stack>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
)};

export default ExperienceComponent;