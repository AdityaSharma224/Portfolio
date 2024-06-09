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
    wrapper:{
        height:'80px',
        width:'800px',
        backgroundColor:'#000',
        alignSelf:'center',
        position:'fixed',
        marginTop:10,
        borderRadius:'30px', 
        transition: 'top 0.3s ease-in-out',
        justifyContent:'center',
        [theme.breakpoints.down('md')]:{
            width:'600px',
            height:'60px',
        },
        [theme.breakpoints.down('sm')]:{
            width:'500px',
            height:'50px',
        },
        [theme.breakpoints.down('xs')]:{
           display:'none',
        },
    },
    
    itemWrapper:{
        [theme.breakpoints.down('md')]:{
            gap:'3em',
        },
        [theme.breakpoints.down('sm')]:{
           gap:'2em'
        }
    },
    item:{
        color:'#fff',
        fontSize:'18px',
        padding:'8px 12px',
        fontWeight:500,
        cursor:'pointer',
        position:'relative',
        overflow:'hidden',
        border:'2px solid #fff',
        borderRadius:'20px',
        transition: 'all 0.3s ease',
        '&:hover ~ $cursor': {
            transform: 'translate(-50%, -50%) scale(8)',
          },
          [theme.breakpoints.down('sm')]:{
            fontSize:'14px'
         },
    },
    cursor: {
        position: 'fixed',
        height:'40px',
        width:'40px',
        marginTop:'-10px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        mixBlendMode:'difference',
        transition: 'transform 0.3s ease',
      }
});

export default useStyles;
