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
        backgroundColor:'#000',
    },
    innerWrapper:{
       width:'1400px',
       borderRadius:'30px',
       alignItems:'center',
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
       [theme.breakpoints.down('xxs')]:{
        width:'350px',
        marginTop:'-9em',
       },
    },
    titleWrapper:{
      width:'100%',
      alignItems:'center',
      padding:'1.1em',
      justifyContent:'flex-end',
      [theme.breakpoints.down('xs')]:{
        justifyContent:'center'
       },
    },
    title:{
      width:'100%',
      gap:9,
    },
    select:{
      alignSelf:'flex-end',
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
      [theme.breakpoints.down('xs')]:{
        alignSelf:'center'
       },
    },
    tableWrapper:{
      alignItems:'center',
      justifyContent:'center',
      padding:'12px 0'
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
    itemStack:{
      padding:'16px 26px',
      [theme.breakpoints.down('xl')]:{
        padding:'10px 20px',
      }
    },
    

});

export default useStyles;
