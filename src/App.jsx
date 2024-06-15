import React from "react";
import Layout from "./app/layout/layout";
import { Stack } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      <Layout/>
    </ThemeProvider>
  );
}

export default App;

