import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';

 const theme = createTheme({
     breakpoints:{
         values:{
             xs:480,
             sm:600,
             md:900,
             lg:1200,
             xl:1400,
         }
     }
 });
 

const useStyles = makeStyles({
    wrapper: {
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      },
});

export default useStyles;
