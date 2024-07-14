import React from "react";
import Layout from "./app/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkillComponent from "./app/skills/skill-component";
import ExperienceComponent from "./app/experience/experience-component";
import ProjectsComponent from "./app/projects/projects-component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {GlobalStyles} from "@mui/material";

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
`;

function App() {
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "12px",
            color: "#000",
            backgroundColor: "#D3D3D3",
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
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about-me" element={<ExperienceComponent />} />
        <Route path="/skills" element={<SkillComponent />} />
        <Route path="/projects" element={<ProjectsComponent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
