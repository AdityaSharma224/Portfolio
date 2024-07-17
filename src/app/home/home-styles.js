import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

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
        position:'relative',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0C0C0F',
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
        userSelect:'none',
        [theme.breakpoints.down('xs')]:{
            alignItems:'center',
            gap:10
           },
    },
    socialIcons:{
     alignItems:'center',
     gap:30,
    },
    icon: {
        height: 25,
        width: 25,
        cursor: 'pointer',
        animation: '$pulsate 2s infinite ease-in-out',
      },
      // ... other styles
      '@keyframes pulsate': {
        '0%, 100%': {
          transform: 'scale(0.7)',
          opacity: 1,
        },
        '50%': {
          transform: 'scale(0.8)',
          opacity: 0.7,
        },
      },
   
      typeWriter: {
        width: '21ch',
        userSelect:'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderRight: '4px solid #3E261C',
        animation: `$cursor 1s step-start infinite, $text 5s steps(18) alternate infinite`,
      },
      '@keyframes cursor': {
        '0%, 100%': {
          borderColor: '#3E261C',
        },
      },
      '@keyframes text': {
        '0%': {
          width: 0,
        },
        '100%': {
          width: '21.5ch',
        },
      },
      scrollingText: {
        whiteSpace: 'nowrap',
        display: 'inline-block',
        paddingLeft: '100%',
        animation: `$scroll 40s infinite linear`,
        '&:hover': {
          animationPlayState: 'paused',
        },
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 580%)',
      },
      '@keyframes scroll': {
        from: {
          transform: 'translateX(0)',
        },
        to: {
          transform: 'translateX(-100%)',
        },
      },

});

export default useStyles;
