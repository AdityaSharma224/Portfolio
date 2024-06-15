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
        height:'60px',
        width:'800px',
        backgroundColor:'#544238',
        alignSelf:'center',
        position:'fixed',
        marginTop:10,
        borderRadius:'30px', 
        transition: 'top 0.3s ease-in-out',
        justifyContent:'center',
        zIndex:2,
        [theme.breakpoints.down('md')]:{
            width:'600px',
            height:'60px',
        },
        [theme.breakpoints.down('sm')]:{
            width:'500px',
            height:'50px',
        },
        [theme.breakpoints.down('xs')]:{
            width:'100px',
            height:'50px',
        },
    },
    
    itemWrapper:{
        gap:'4em',
        [theme.breakpoints.down('md')]:{
            gap:'1em',
        },
        [theme.breakpoints.down('sm')]:{
           gap:'1em'
        },
        [theme.breakpoints.down('xs')]:{
            display:'none',
         },
    },
    item:{
        color:'#fff',
        fontSize:'22px',
        padding:'8px 12px',
        fontWeight:500,
        cursor:'pointer',
        position:'relative',
        overflow:'hidden',
        borderRadius:'10px',
        transition: 'all 0.3s ease',
          [theme.breakpoints.down('sm')]:{
            fontSize:'14px'
         },
         [theme.breakpoints.down('xs')]:{
            display:'none',
         },
    },
    cursor: {
        position: 'fixed',
        padding:'1.8em',
        marginTop:'20px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        mixBlendMode:'difference',
        transition: 'transform 0.3s ease',
        [theme.breakpoints.down('xs')]:{
            display:'none',
         },
      },
      menu:{
        gap:19,
        width:'100%',
        alignItems:'center',
        [theme.breakpoints.up('xs')]:{
            display:'none',
        },
      },
      img:{
        marginLeft:12,
        [theme.breakpoints.up('xs')]:{
            display:'none',
         },
      },
      arrow:{
        [theme.breakpoints.up('xs')]:{
            display:'none',
         },
      },
      downMenu:{
        height:'250px',
        width:'150px',
        alignSelf:'center',
        position:'fixed',
        marginTop:'20em',
        borderRadius:'20px',
        backgroundColor:'#544238',
        alignItems:'center',
        gap:'1.3em',
        justifyContent:'center',
        [theme.breakpoints.up('xs')]:{
            display:'none',
        },
      },
      menuItem:{
        width:'100%',
        textAlign:'center',
        color:'#fff',
        fontWeight:600,
        curosr:'pointer',
        [theme.breakpoints.up('xs')]:{
            display:'none',
         },
      }
});

export default useStyles;
