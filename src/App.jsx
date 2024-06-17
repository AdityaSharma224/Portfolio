import React from "react";
import Layout from "./app/layout/layout";
import { Stack } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
`;

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily:'"Roboto Mono",monospace'
      },
    },
  });
  return ( 
    <ThemeProvider theme={theme}>
            <GlobalStyles styles={styles} />
      <Layout/>
    </ThemeProvider>
  );
}

export default App;

