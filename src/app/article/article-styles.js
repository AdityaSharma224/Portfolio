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
       width:'1400px',
       height:'800px',
       marginTop:'4em',
       borderRadius:'30px',
       alignItems:'center',
       backgroundColor:'#544238',
       [theme.breakpoints.down('xl')]:{
        width:'1200px',
        height:'700px',
        marginTop:'3em',
       },
       [theme.breakpoints.down('lg')]:{
        width:'1000px',
        height:'600px',
        marginTop:'3em',
       },
       [theme.breakpoints.down('md')]:{
        width:'800px',
        height:'600px',
        marginTop:'2em',
       },
       [theme.breakpoints.down('sm')]:{
        width:'400px',
        height:'700px',
        marginTop:'1em',
       },
       [theme.breakpoints.down('xs')]:{
        width:'400px',
        height:'600px',
        marginTop:'-9em',
       },
    },
    titleWrapper:{
      width:'100%',
      alignItems:'center',
      padding:'1.1em',
      gap:'2em',
    },
    title:{
      width:'100%',
      gap:9,
    },
    select:{
      '& .MuiInputBase-input':{
        border:'2px solid #fff',
        backgroundColor:'#fff',
      },
      '&:focus': {
        borderRadius: 4,
        borderColor: '#fff',
      },
      '&:MuiInputLabel-root.Mui-focused':{
        color:'#fff',
      },
      '& .MuiSelect-icon':{
        color:'#000'
      },
    },
    tableWrapper:{
      backgroundColor:'#fff',
      width:'100%',
      height:'100%',      
    },
    table:{
      fontSize:'18px',
      [theme.breakpoints.down('md')]:{
       
       },
       [theme.breakpoints.down('xs')]:{
        fontSize:'14px',
        whiteSpace:'wrap'
       },
    },

});

export default useStyles;
