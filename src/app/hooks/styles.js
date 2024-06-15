import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';
 import BackgroundImg from '../../assets/background-about.png';

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
    container:{
        position: 'relative',
        width: '100vw',
        overflow: 'hidden',
      },
      scrollingText:{
        display: 'inline-block',
        transition: 'transform 0.5s cubic-bezier(0.23, 0.36, 0.28, 0.83)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      },
     scrollingTextContent:{
        color: '#fff',
        fontSize: '120px',
        whiteSpace: 'nowrap',
        transition: 'transform 0.5s cubic-bezier(0.23, 0.36, 0.28, 0.83)',
        lineHeight: '1em',
        margin: '50px 0',
      }
      

});

export default useStyles;
