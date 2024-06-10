import React,  {useState, useEffect, useRef} from 'react';
import { Link } from 'react-scroll';
import useStyles from './navbar-styles';
import Stack from '@mui/material/Stack';

const NavbarComponent = () =>{

    const classes = useStyles();
    const cursorRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

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

    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        const cursorWidth = cursorRef.current.offsetWidth;
        const cursorHeight = cursorRef.current.offsetHeight;
        cursorRef.current.style.left = `${x - cursorWidth}px`;
        cursorRef.current.style.top = `${y - cursorHeight}px`;
      };

    window.addEventListener('mousemove', editCursor);
        return () => {
            window.removeEventListener('scroll', handleScroll);
              window.removeEventListener('mousemove', editCursor);
        };
    }, []);
    return(
        <Stack  className={classes.wrapper} top={isVisible ? '0' : '-100px'}> 
            <Stack className={classes.itemWrapper} flexDirection={'row'} justifyContent={'center'}>
                <span><Link activeClass='active' to="home" spy={true} smooth={true} duration={500} className={classes.item}>Home</Link></span>
                <span><Link activeClass='active' to="about" spy={true} smooth={true} duration={500} className={classes.item}>About</Link></span>
                <span><Link activeClass='active' to="skills" spy={true} smooth={true} duration={500} className={classes.item}>Skills</Link></span>
                <span><Link activeClass='active' to="articles" spy={true} smooth={true} duration={500} className={classes.item}>Articles</Link></span>
                <span><Link activeClass='active' to="projects" spy={true} smooth={true} duration={500} className={classes.item}>Projects</Link></span>
                <div className={classes.cursor} ref={cursorRef}></div>
            </Stack>       
        </Stack>
)};

export default NavbarComponent;