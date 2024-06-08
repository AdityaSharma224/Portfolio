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
        flexDirection:'row',
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
        }
    },
    itemWrapper:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:'5em',
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
        borderRadius:'15px',
        border:'1px solid #fff',
        '&::before':{
            top:0,
            left:0,
            width:0,
            height:'100%',
            borderLeft:'3px solid transparent',
            borderRight:'3px solid #FF8E53',
            transition:'width 0.5s ease-in-out',
            },
            '&:hover':{
                border:'1px solid #fff',
            },
        [theme.breakpoints.down('sm')]:{
           fontSize:'14px'
        }
    }
});

export default useStyles;