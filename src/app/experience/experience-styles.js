import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';

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
        backgroundColor:'#fff',
    },
    wrapper2:{
        backgroundColor:'#fff',
        height:'auto',
        width:'100%',
        alignItems:'center',
    },
    itemStack:{
        padding:'16px 26px',
        [theme.breakpoints.down('xl')]:{
          padding:'10px 20px',
        }
      },
      recommendationWrapper:{
        display:'grid',
        alignItems:'center',
        justifyContent:'center',
        gridTemplateColumns:'repeat(2, 1fr)',
        [theme.breakpoints.down('md')]:{
            gridTemplateColumns:'1fr',
        }
      }
});

export default useStyles;

