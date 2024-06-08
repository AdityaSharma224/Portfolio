import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    wrapper:{
        height:'70px',
        width:'800px',
        backgroundColor:'#000',
        alignSelf:'center',
        position:'fixed',
        marginTop:10,
        borderRadius:'30px', 
        transition: 'top 0.3s ease-in-out',
        flexDirection:'row',
        justifyContent:'center',
    },
    itemWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
    item:{
        color:'#fff',
        padding:'8px 15px',
        fontSize:'18px',
        fontWeight:500,
        cursor:'pointer'
    }
});

export default useStyles;