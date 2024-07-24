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
    itemStack:{
        padding:'16px 26px',
        [theme.breakpoints.down('xl')]:{
          padding:'10px 20px',
        }
      },
});

export default useStyles;

