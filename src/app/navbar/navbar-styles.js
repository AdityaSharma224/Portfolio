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
        backgroundColor:'#3E261C',
        alignSelf:'center',
        position:'fixed',
        marginTop:10,
        borderRadius:'30px', 
        transition: 'top 0.3s ease-in-out',
        justifyContent:'center',
        border:'5px solid #EEC09B',
        zIndex:2,
        [theme.breakpoints.down('md')]:{
            width:'200px',
            height:'50px',
        },
        [theme.breakpoints.down('sm')]:{
            width:'100px',
            height:'50px',
        },
        [theme.breakpoints.down('xs')]:{
            width:'100px',
            height:'50px',
        },
    },
    
    itemWrapper:{
        gap:'2em',
        [theme.breakpoints.down('md')]:{
            gap:'0.9em',
        },
        [theme.breakpoints.down('sm')]:{
           display:'none'
        },
        [theme.breakpoints.down('xs')]:{
            display:'none',
         },
    },
    item:{
        color:'#fff',
        userSelect:'none',
        fontSize:'20px',
        padding:'8px 12px',
        fontWeight:500,
        cursor:'pointer',
        position:'relative',
        overflow:'hidden',
        fontFamily:'"Roboto Mono",monospace',
        borderRadius:'10px',
        transition: 'all 0.3s ease',
          [theme.breakpoints.down('sm')]:{
            display:'none',
         },
         [theme.breakpoints.down('md')]:{
            display:'none',
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
        gap:12,
        width:'100%',
        alignItems:'center',
        [theme.breakpoints.up('xs')]:{
            display:'none',
        },
      },
      img:{
        marginLeft:12,
        [theme.breakpoints.up('md')]:{
            display:'none',
         },
      },
      arrow:{
        [theme.breakpoints.up('md')]:{
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
        border:'2px solid #362922',
        backgroundColor:'#3E261C',
        alignItems:'center',
        gap:'1.3em',
        justifyContent:'center',
        [theme.breakpoints.up('md')]:{
            display:'none',
        },
      },
      menuItem:{
        width:'100%',
        userSelect:'none',
        fontSize:'18px',
        textAlign:'center',
        fontFamily:'"Roboto Mono",monospace',
        color:'#fff',
        fontWeight:500,
        curosr:'pointer',
        [theme.breakpoints.up('md')]:{
            display:'none',
         },
      }
});

export default useStyles;
