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
      content: {
        position: 'relative',
        '& h2': {
          color: '#fff',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          '&:nth-of-type(1)': {
            color: 'transparent',
            WebkitTextStroke: '2px #8338ec',
          },
          '&:nth-of-type(2)': {
            color: '#c19bf5',
            animation: '$animate 4s ease-in-out infinite',
          },
        },
      
      },
      '@keyframes animate': {
        '0%, 100%': {
          clipPath: 'polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
        },
        '50%': {
          clipPath: 'polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
        },
      },
      bar:{
       backgroundColor:'#D3D3D3',
       borderRadius:'5px',
       cursor:'pointer',
       '&:hover':{
        backgroundColor:'#FFA500',
       }
      }

});

export default useStyles;

