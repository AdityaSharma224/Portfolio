import React, { useEffect, useLayoutEffect } from "react";
import Layout from "./app/layout/layout";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SkillComponent from "./app/skills/skill-component";
import ExperienceComponent from "./app/experience/experience-component";
import ProjectsComponent from "./app/projects/projects-component";
import ArticleComponent from "./app/article/article-component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";

const styles = `
@keyframes rotating-anim {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

::-webkit-scrollbar {
  width: 0 !important;
}

* {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.MuiTypography-root {
  user-select: none;
}

.parent-wrapper {
  max-width: 2400px;
  margin: 0 auto;
}
`;

function App() {
  const { pathname } = useLocation();

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "12px",
            color: "#000",
            backgroundColor: "#fff",
            padding: "6px 12px",
            fontWeight: 600,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={styles} />
      <div className="parent-wrapper">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about-me" element={<ExperienceComponent />} />
          <Route path="/skills" element={<SkillComponent />} />
          <Route path="/articles" element={<ArticleComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
