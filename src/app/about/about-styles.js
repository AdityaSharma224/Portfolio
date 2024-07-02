import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints:{
        values:{
            xs:500,
            sm:600,
            md:900,
            lg:1200,
            xl:1400,
        }
    }
});

const useStyles = makeStyles({
    wrapper:{
        height:'100px',
        width:'100px',
        cursor:'pointer',
        backgroundColor:'#EEC09B',
        alignSelf:'center',
        userSelect:'none',
        position:'fixed',
        bottom:15,
        borderRadius:'50%', 
        transition: 'top 0.3s ease-in-out',
        justifyContent:'center',
        border:'2px solid #3E261C',
        zIndex:2,
        [theme.breakpoints.down('md')]:{
            width:'100px',
            height:'100px',
        },
        [theme.breakpoints.down('sm')]:{
            width:'100px',
            height:'100px',
        },
        [theme.breakpoints.down('xs')]:{
            width:'80px',
            height:'80px'
        },
    },
      downMenu:{
        height:'650px',
        width:'850px',
        alignSelf:'center',
        position:'fixed',
        bottom:120,
        borderRadius:'20px',
        border:'2px solid #362922',
        backgroundColor:'#E2B894',
        justifyContent:'flex-start',
        padding:'1.5em',
        border:'2px solid #3E261C',
        userSelect:'none',
        zIndex:10,
        [theme.breakpoints.down('sm')]:{
            width:'390px',
            height:'550px',
        },
        [theme.breakpoints.down('xs')]:{
            width:'390px',
            height:'550px'
        },
        
      },
      
});

export default useStyles;
