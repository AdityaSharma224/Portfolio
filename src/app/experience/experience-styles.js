import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints:{
        values:{
            xxs:400,
            xs:500,
            sm:600,
            md:1000,
            lg:1300,
            xl:1400,
        }
    }
});

const useStyles = makeStyles({
    wrapper:{
        height:'100vh',
        width:'100vw',
        backgroundColor:'#FFFFFF',
        alignItems:'flex-start',
        [theme.breakpoints.down('lg')]:{
            width:'100vw',
            height:'100vh',
        },
        [theme.breakpoints.down('xs')]:{
            height:'100vh',
        },
    },
});

export default useStyles;

