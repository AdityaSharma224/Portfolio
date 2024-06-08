import React from 'react';
import Stack from '@mui/material/Stack';
import HomeComponent from '../home/home-component';
import AboutComponent from '../about/about-component';
import SkillComponent from '../skills/skill-component';
import ArticleComponent from '../article/article-component';
import ProjectsComponent from '../projects/projects-component';
import NavbarComponent from '../navbar/navbar-component';

const Layout = () =>{
    return(
        <Stack margin={0} padding={0} overflow={'hidden'}>
            <NavbarComponent/>
            <HomeComponent/>
            <AboutComponent/>
            <SkillComponent/>
            <ArticleComponent/>
            <ProjectsComponent/>
        </Stack>
)};

export default Layout;