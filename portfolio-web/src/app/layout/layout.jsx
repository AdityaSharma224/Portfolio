import React, {useEffect, useRef} from 'react';
import Stack from '@mui/material/Stack';
import HomeComponent from '../home/home-component';
import AboutComponent from '../about/about-component';
import SkillComponent from '../skills/skill-component';
import ArticleComponent from '../article/article-component';
import ProjectsComponent from '../projects/projects-component';
import NavbarComponent from '../navbar/navbar-component';
import useStyles from './layout-styles';

const Layout = () =>{
    const classes = useStyles();
    const cursorRef = useRef(null);

    useEffect(() => {
    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        const cursorWidth = cursorRef.current.offsetWidth/2;
        const cursorHeight = cursorRef.current.offsetHeight/2;
        cursorRef.current.style.left = `${x - cursorWidth}px`;
        cursorRef.current.style.top = `${y - cursorHeight}px`;
      };
    window.addEventListener('mousemove', editCursor);
        return () => {
              window.removeEventListener('mousemove', editCursor);
        };
    }, []);
    return(
        <Stack margin={0} padding={0} overflow={'hidden'}>
            <NavbarComponent/>
            <HomeComponent/>
            <AboutComponent/>
            <SkillComponent/>
            <ArticleComponent/>
            <ProjectsComponent/>
            <div className={classes.cursor} ref={cursorRef}></div>
        </Stack>
)};

export default Layout;