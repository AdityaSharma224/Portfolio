import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints:{
        values:{
            xs:500,
            sm:600,
            md:900,
            lg:1000,
            xl:1200,
            xxl:1400,
        }
    }
});

const useStyles = makeStyles({
      wrapper: {
        height: '100px',
        top: 0,
        width:'100%',
        position: 'absolute',
        backgroundColor: '#0C0C0F',
        alignSelf: 'center',
      },
      innerWrapper1:{
        gap:60,
        justifyContent:'space-between',
        [theme.breakpoints.down('xl')]:{
          gap:10,
        },
        [theme.breakpoints.down('md')]:{
          width:'100%',
        }
      },
      innerWrapper2:{
        gap:60,
        [theme.breakpoints.down('xl')]:{
          gap:10,
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
