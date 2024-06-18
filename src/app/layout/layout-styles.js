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
    cursor: {
        position: 'fixed',
        padding:'6.8em',
        backgroundColor: '#fff',
        borderRadius: '50%',
        mixBlendMode:'difference',
        transition: 'transform 0.3s ease',
        pointerEvents:'none',
        zIndex:10,
        [theme.breakpoints.down('xs')]:{
          display:'none',
       },
      },
      hideCursor:{
        display:'none',
      }
});

export default useStyles;
