import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';
import BackgroundImg from '../../assets/background-home.png';

const theme = createTheme({
    breakpoints:{
        values:{
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
        backgroundImage:`url(${BackgroundImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        alignItems:'center',
        justifyContent:'center',
    },
    innerWrapper:{
       width:'100%',
       alignItems:'center',
       justifyContent:'center',
       gap:'18em',
       [theme.breakpoints.down('lg')]:{
        gap:'10em',
       },
       [theme.breakpoints.down('md')]:{
        gap:'7em',
       },
    },
    detailsWrapper:{
        gap:30,
    },
    typoWrapper:{
        fontFamily: '"Roboto Mono", monospace',
        [theme.breakpoints.down('xs')]:{
            alignItems:'center',
            gap:10
           },
    },
    socialIcons:{
     alignItems:'center',
     gap:75,
     [theme.breakpoints.down('lg')]:{
        gap:55,
       },
       [theme.breakpoints.down('md')]:{
        gap:55,
       },
       [theme.breakpoints.down('sm')]:{
        gap:55,
       },
       [theme.breakpoints.down('xs')]:{
        gap:55,
        alignSelf:'center'
       },
    },
    icon: {
        height: 40,
        width: 40,
        cursor: 'pointer',
        animation: '$pulsate 2s infinite ease-in-out',
      },
      // ... other styles
      '@keyframes pulsate': {
        '0%, 100%': {
          transform: 'scale(0.7)',
          opacity: 1, // Opacity should be between 0 (transparent) and 1 (opaque)
        },
        '50%': {
          transform: 'scale(0.8)',
          opacity: 0.7,
        },
      },
    image:{
        borderTopLeftRadius:'40%',
        borderTopRightRadius:'40%',
        border:'12px solid #544238',
        height:'600px',
        width:'500px',
        [theme.breakpoints.down('lg')]:{
            height:'400px',
            width:'350px',
        },
        [theme.breakpoints.down('md')]:{
            height:'350px',
            width:'300px',
        },
        [theme.breakpoints.down('sm')]:{
            display:'none',
        },
    },
    leftCloud1: {
        opacity:'0',
        top:'-4em',
        left:'0em',
        height:'25em',
        overflow:'hidden',
        position:'absolute',
        width:'25em',
        animation: `$slideInFromLeft 5s ease-out 3s 1`,
        animationFillMode: 'forwards',
        [theme.breakpoints.down('md')]:{
            height:'18em',
            width:'18em',
            top:'1em',
            left:'2em',
        },
        [theme.breakpoints.down('sm')]:{
            height:'14em',
            width:'14em',
        },
        [theme.breakpoints.down('xs')]:{
            height:'12em',
            width:'12em',
            top:'-3em',
            left:'6em',
        },
      },
      '@keyframes slideInFromLeft': {
        '0%': {
          transform: 'translateX(-100%)',
          opacity:'0',
          overflow:'hidden',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity:'1',
          overflow:'hidden',
        },
      },
      leftCloud2: {
        opacity:'0',
        top:'-3em',
        left:'12em',
        position:'absolute',
        height:'35em',
        width:'35em',
        overflow:'hidden',
        animation: `$slideInFromLeft 5s ease-out 3s 1`,
        animationFillMode: 'forwards',
        [theme.breakpoints.down('lg')]:{
            height:'25em',
            width:'25em',
            top:'3em',
            left:'8em',
        },
        [theme.breakpoints.down('md')]:{
            height:'25em',
            width:'25em',
        },
        [theme.breakpoints.down('sm')]:{
            height:'18em',
            width:'18em',
            top:'3em',
            left:'8em',
        },
        [theme.breakpoints.down('xs')]:{
            height:'18em',
            width:'18em',
            top:'2em',
            left:'9em',
        },
      },
      '@keyframes slideInFromLeft': {
        '0%': {
          transform: 'translateX(-100%)',
          opacity:'0',
          overflow:'hidden',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity:'1',
          overflow:'hidden',

        },
      },
      cloudsRight: {
        // Include the animation here
        opacity:'0',
        position:'absolute',
        top:'1em',
        right:'8em',
        height:'22em',
        overflow:'hidden',
        width:'22em',
        animation: `$slideInFromRight 5s ease-in 3s 1`,
        animationFillMode: 'forwards',
        [theme.breakpoints.up('xl')]:{
            height:'25em',
            width:'25em',
            top:'-3em',
            right:'4em',
        },
        [theme.breakpoints.down('lg')]:{
            height:'25em',
            width:'25em',
        },
        [theme.breakpoints.down('md')]:{
            height:'25em',
            width:'25em',
        },
        [theme.breakpoints.down('sm')]:{
            height:'18em',
            width:'18em',
        },
        [theme.breakpoints.down('xs')]:{
            height:'18em',
            width:'18em',
            right:'7em',
            top:'9em',
        },
      },
      '@keyframes slideInFromRight': {
        '0%': {
          transform: 'translateX(0%)',
          opacity:'0',
          overflow:'hidden',
        },
        '100%': {
          transform: 'translateX(-20%)',
          opacity:'1',
          overflow:'hidden',
        },
      },

});

export default useStyles;
