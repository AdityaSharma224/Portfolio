import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';
 import BackgroundImg from '../../assets/background-home.png';

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
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('lg')]:{
            width:'100vw',
            height:'100vh',
        },
        [theme.breakpoints.down('xs')]:{
            height:'100vh',
        },
    },
    myImage:{
        width:'40%',
        height:'135%',
        [theme.breakpoints.down('md')]:{
            display:'none',
            height:'0%',
            width:'0%',
        },
    },
    aboutWrapper:{
        width:'60%',
        height:'100%',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
           width:'100%',
        },
    },
    experienceWrapper:{
        alignItems:'center',
        width:'800px',
        height:'100%',
        [theme.breakpoints.down('lg')]:{
            width:'600px',
        },
        [theme.breakpoints.down('md')]:{
            width:'600px',
        },
        [theme.breakpoints.down('sm')]:{
            width:'500px',

        },
        [theme.breakpoints.down('xs')]:{
            width:'400px',
        },
        [theme.breakpoints.down('xxs')]:{
            width:'350px',
        },
    },
   
   
    icon: {
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
  cardWrapper:{
         maxWidth: 700,
         minWidth: 700,
         height: 'fit-content',
         borderRadius: "20px",
         [theme.breakpoints.down('lg')]:{
            maxWidth:500,
            minWidth:500,
            height: 'fit-content',
        },
        [theme.breakpoints.down('md')]:{
            maxWidth:500,
            minWidth:500,
            height: 'fit-content',
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth:350,
            minWidth:350,
            height: 'fit-content',
        },
        [theme.breakpoints.down('xs')]:{
            maxWidth:320,
            minWidth:320,
            height: 'fit-content',
        },
      },
      companyIcon:{
        height:'80px',
        width:'280px',
        [theme.breakpoints.down('lg')]:{
            height:'60px',
            width:'180px',
        },
        [theme.breakpoints.down('md')]:{
            
        },
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            height:'50px',
            width:'140px',
        },
        [theme.breakpoints.down('xxs')]:{
           
        },
      },
      content: {
        position: 'relative',
        marginTop:'8em',
        '& h2': {
          color: '#fff',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          '&:nth-of-type(1)': {
            color: 'transparent',
            WebkitTextStroke: '2px #8338ec',
          },
          '&:nth-of-type(2)': {
            color: '#c19bf5',
            animation: '$animate 4s ease-in-out infinite',
          },
        },
        [theme.breakpoints.down('sm')]:{
          marginTop:'4em',
        },
        [theme.breakpoints.down('xs')]:{
          marginTop:'4em',
        },
      },
      '@keyframes animate': {
        '0%, 100%': {
          clipPath: 'polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
        },
        '50%': {
          clipPath: 'polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
        },
      },

});

export default useStyles;

