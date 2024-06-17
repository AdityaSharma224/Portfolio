import { makeStyles } from '@mui/styles';
 import { createTheme } from '@mui/material';
 import BackgroundImg from '../../assets/background-about.png';

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
        height:'132vh',
        width:'100vw',
        backgroundImage:`url(${BackgroundImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('lg')]:{
            width:'100vw',
            height:'120vh',
        },
        [theme.breakpoints.down('xs')]:{
            height:'145vh',
        },
    },
    myImage:{
        width:'40%',
        height:'100%',
        [theme.breakpoints.down('md')]:{
            display:'none',
            height:'0%',
            width:'0%',
        },
    },
    aboutWrapper:{
        width:'60%',
        height:'100%',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
           width:'100%',
        },
    },
    experienceWrapper:{
        marginTop:'8em',
        gap:'6em',
        alignItems:'center',
        width:'800px',
        height:'100%',
        [theme.breakpoints.down('lg')]:{
            width:'600px',
            marginTop:'2em',
            gap:'2em',
        },
        [theme.breakpoints.down('md')]:{
            width:'600px',
            marginTop:'2em',
            gap:'2em',
        },
        [theme.breakpoints.down('sm')]:{
            width:'500px',
            marginTop:'2em',
            gap:'1em',

        },
        [theme.breakpoints.down('xs')]:{
            width:'400px',
            marginTop:'2em',
            gap:'2em',
        },
        [theme.breakpoints.down('xxs')]:{
            width:'350px',
            marginTop:'2em',
            gap:'2em',
        },
    },
    list:{
        borderLeft: '4px solid #fff',
        paddingLeft: '20px',
        [theme.breakpoints.down('xs')]:{
           backgroundColor:'#544238',
           borderLeft: 'none',
           borderRadius:'20px',
           padding:'10px'
        },
    },
    cLogo:{
        height:'70px',
        width:'220px',
        [theme.breakpoints.down('xxs')]:{
           height:'50px',
           width:'160px',
         },
    },
    experienceItem:{
        alignItems: 'flex-start',
        position: 'relative',
        gap:'0.7em',
        '&::before': {
            content: '""',
            width: '25px',
            height: '35px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            position: 'relative',
            left: '-34px',
            top: 0,
            [theme.breakpoints.down('xs')]:{
                backgroundColor:'#fff',
                width:0,
             },
          },
    },
    wrapperA:{
        justifyContent:'space-between',
        width:'100%',
        [theme.breakpoints.down('xs')]:{
           flexDirection:'row',
           alignItems:'center',
           justifyContent:'space-between',
        },
    },
    experienceYear:{
        width: '180px',
        color:'#fff',
        textAlign:'end',
        [theme.breakpoints.down('xs')]:{
            marginLeft:'10px',
         },
    },
    experienceDetails:{
        height:'100%',
        gap:20,
        padding:'20px 0px',
    },
    title:{
        color:'#fff',
    },
    description:{
        color:'#fff',
    },

    
});

export default useStyles;
