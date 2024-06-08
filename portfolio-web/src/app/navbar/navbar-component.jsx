import React,  {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import useStyles from './navbar-styles';
import Stack from '@mui/material/Stack';

const NavbarComponent = () =>{

    const [isVisible, setIsVisible] = useState(true);
    const classes = useStyles({isVisible});


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
            <Stack className={classes.itemWrapper} gap={7}>
                <Link activeClass='active' to="home" spy={true} smooth={true} duration={500} className={classes.item}>Home</Link>
                <Link activeClass='active' to="about" spy={true} smooth={true} duration={500} className={classes.item}>About</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} duration={500} className={classes.item}>Skills</Link>
                <Link activeClass='active' to="articles" spy={true} smooth={true} duration={500} className={classes.item}>Articles</Link>
                <Link activeClass='active' to="projects" spy={true} smooth={true} duration={500} className={classes.item}>Projects</Link>
            </Stack>       
        </Stack>
)};

export default NavbarComponent;