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
    accordian:{
      boxShadow: '0 2px rgba(0, 0, 0, 0.2)',
    }
});

export default useStyles;
