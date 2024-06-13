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
    icon:{
        height:40,
        width:40,
        cursor:'pointer',
    },
    image:{
        borderTopLeftRadius:'40%',
        borderTopRightRadius:'40%',
        border:'20px solid #544238',
        height:'600px',
        width:'500px',
        [theme.breakpoints.down('lg')]:{
            height:'400px',
            width:'300px',
        },
        [theme.breakpoints.down('md')]:{
            height:'350px',
            width:'300px',
        },
        [theme.breakpoints.down('sm')]:{
            display:'none',
        },
    },
   
    typo2:{

    },
    typo3:{

    }
});

export default useStyles;
