import React, {useEffect,useState, useRef} from 'react';
import Stack from '@mui/material/Stack';
import HomeComponent from '../home/home-component';
import ExperienceComponent from '../experience/experience-component';
import SkillComponent from '../skills/skill-component';
import ArticleComponent from '../article/article-component';
import ProjectsComponent from '../projects/projects-component';
import NavbarComponent from '../navbar/navbar-component';
import useStyles from './layout-styles';

const Layout = () =>{
    const classes = useStyles();
    const cursorRef = useRef(null);
    const skillsRef = useRef(null);
    const [isSkillsVisible, setIsSkillsVisible] = useState(false);

    useEffect(() => {
        const editCursor = (e) => {
            if (!isSkillsVisible) {
                const { clientX: x, clientY: y } = e;
                const cursorWidth = cursorRef.current.offsetWidth / 2;
                const cursorHeight = cursorRef.current.offsetHeight / 2;
                cursorRef.current.style.left = `${x - cursorWidth}px`;
                cursorRef.current.style.top = `${y - cursorHeight}px`;
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSkillsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        window.addEventListener('mousemove', editCursor);
        return () => {
            window.removeEventListener('mousemove', editCursor);
            observer.disconnect();
        };
    }, [isSkillsVisible]);
    return(
        <Stack margin={0} padding={0} overflow={'hidden'}>
            <NavbarComponent/>
            <HomeComponent/>
            <ExperienceComponent/>
            <div ref={skillsRef}>
                <SkillComponent />
            </div>
            <ArticleComponent />
            <ProjectsComponent />
            <div className={`${classes.cursor} ${isSkillsVisible ? classes.hideCursor : ''}`} ref={cursorRef}></div>
        </Stack>
)};

export default Layout;