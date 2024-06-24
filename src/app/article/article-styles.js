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
        height:'80vh',
        width:'100vw',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
        backgroundSize:'cover',
    },
    innerWrapper:{
       width:'1400px',
       borderRadius:'30px',
       alignItems:'center',
       backgroundColor:'#544238',
       [theme.breakpoints.down('xl')]:{
        width:'1200px',
        marginTop:'3em',
       },
       [theme.breakpoints.down('lg')]:{
        width:'1000px',
        marginTop:'3em',
       },
       [theme.breakpoints.down('md')]:{
        width:'800px',
        marginTop:'2em',
       },
       [theme.breakpoints.down('sm')]:{
        width:'400px',
        marginTop:'1em',
       },
       [theme.breakpoints.down('xs')]:{
        width:'400px',
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
      alignItems:'center',
      justifyContent:'center',
      padding:'15px 0'

    }
    

});

export default useStyles;
