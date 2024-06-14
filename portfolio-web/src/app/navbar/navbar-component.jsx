import React,  {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import useStyles from './navbar-styles';
import Stack from '@mui/material/Stack';
import MenuImg from '../../assets/menu.png';
import { Typography } from '@mui/material';


const NavbarComponent = () =>{

    const classes = useStyles();
    const [isVisible, setIsVisible] = useState(true);
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
      setExpanded(!isExpanded);
    };
  

    useEffect(() => {
        let timeout;
        const handleScroll = () => {
            setIsVisible(false);

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsVisible(true);
            }, 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);             
        };
    }, []);
    return(
        <Stack className={classes.wrapper} top={isVisible ? '0' : '-100px'}> 
            <Stack className={classes.itemWrapper} flexDirection={'row'} justifyContent={'center'}>
                <span><Link activeClass='active' to="home" spy={true} smooth={true} duration={500} className={classes.item}>Home</Link></span>
                <span><Link activeClass='active' to="about" spy={true} smooth={true} duration={500} className={classes.item}>About</Link></span>
                <span><Link activeClass='active' to="skills" spy={true} smooth={true} duration={500} className={classes.item}>Skills</Link></span>
                <span><Link activeClass='active' to="articles" spy={true} smooth={true} duration={500} className={classes.item}>Articles</Link></span>
                <span><Link activeClass='active' to="projects" spy={true} smooth={true} duration={500} className={classes.item}>Projects</Link></span>
            </Stack>
            <Stack className={classes.menu} flexDirection={'row'} onClick={toggleExpansion}>
        <img src={MenuImg} height={'30px'} width={'30px'} className={classes.img}></img>
        <Typography variant='h6' color={'#fff'} className={classes.img}>
          {isExpanded ? 'v' : '>'}
        </Typography>
      </Stack>
      <Stack  className={`${classes.expand} ${isExpanded ? 'expanded' : ''}`}>
        {/* Your expandable component content here */}
        <Stack height={'100px'} width={'300px'} sx={{backgroundColor:'#000'}}></Stack>
      </Stack>
        </Stack>
)};

export default NavbarComponent;