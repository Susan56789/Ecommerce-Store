import  {makeStyles}  from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    //cart items
    root: {
      maxWidth:'100%'
    },
    media:{
         height:'100px',
        width:'100%',
        paddingTop:'56.25%',
        
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
        textDecoration:'none'
    },
    
  
  //products style
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  }));