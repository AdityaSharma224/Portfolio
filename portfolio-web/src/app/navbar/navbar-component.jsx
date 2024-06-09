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
        const linkElements = document.querySelectorAll('item');

    const animateit = (e) => {
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = e.target;

      const move = 25;
      const xMove = x / width * (move * 2) - move;
      const yMove = y / height * (move * 2) - move;

      // Apply the transform to the cursor
      cursorRef.current.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)`;
    };

    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        const cursorWidth = cursorRef.current.offsetWidth;
        const cursorHeight = cursorRef.current.offsetHeight;
        cursorRef.current.style.left = `${x - cursorWidth}px`;
        cursorRef.current.style.top = `${y - cursorHeight}px`;
      };

    linkElements.forEach((link) => {
      link.addEventListener('mousemove', animateit);
      link.addEventListener('mouseleave', animateit);
    });

    window.addEventListener('mousemove', editCursor);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            linkElements.forEach((link) => {
                link.removeEventListener('mousemove', animateit);
                link.removeEventListener('mouseleave', animateit);
              });
        
              window.removeEventListener('mousemove', editCursor);
        };
    }, []);
    return(
        <Stack  className={classes.wrapper} top={isVisible ? '0' : '-100px'}> 
            <Stack className={classes.itemWrapper} flexDirection={'row'} justifyContent={'center'} gap={8}>
                <span><Link activeClass='active' to="home" spy={true} smooth={true} duration={500} className={classes.item}>Home</Link></span>
                <span><Link activeClass='active' to="about" spy={true} smooth={true} duration={500} className={classes.item}>About</Link></span>
                <span><Link activeClass='active' to="skills" spy={true} smooth={true} duration={500} className={classes.item}>Skills</Link></span>
                <span><Link activeClass='active' to="articles" spy={true} smooth={true} duration={500} className={classes.item}>Articles</Link></span>
                <span><Link activeClass='active' to="projects" spy={true} smooth={true} duration={500} className={classes.item}>Projects</Link></span>
            </Stack>       
            <div className={classes.cursor} ref={cursorRef}></div>
        </Stack>
)};

export default NavbarComponent;