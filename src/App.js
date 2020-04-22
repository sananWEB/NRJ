import React,{useState} from 'react'
import {Container,makeStyles,CssBaseline,Typography,Grid} from '@material-ui/core';
import Form from "./Form";
import Answers from "./Answer";
import Answers2 from "./Answers2"


const useStyles=makeStyles({
  container:{
    backgroundImage:"url("+process.env.PUBLIC_URL+"bg.jpg)",
    backgroundSize:"cover",
   backgroundPosition:"center",
   maxheight: '100vh',
   width:"100vw",
   padding:"50px"
   
  }
  
})

function App() {
  const classes=useStyles();

  let [value, setvalue] = useState({
    ttbar:"",
    wt:"",
    Ppercent:"",
    labourprice:"",
    Shonecharges:"",
});

let [ktc,ktcn]=useState(null);





const change=(e)=>{
setvalue({
            ...value,
            [e.target.name]:e.target.value
    })
}
const select=(e)=>{
  ktcn(e.target.value)
console.log(e.target.value)  
}

const [btn, setbtn] = useState(false)

const click=()=>{
  setbtn(true)
}

const click2=()=>{
  setbtn(false)

  setvalue({
    ttbar:"",
    wt:"",
    Ppercent:"",
    labourprice:"",
    Shonecharges:"",
});
ktcn(null)
}

  return (
    
    <React.Fragment>
      
    <CssBaseline />
  
    <Container maxWidth="xl" disableGutters className={classes.container} >
        <Grid container spacing={4}>
           <Grid item md={6} sm={12} xs={12}>
           <Form value={value} money={ktc} change={(e)=>change(e)} click={click}
            select={(e)=>select(e)} />
           </Grid>
           <Grid item md={6} sm={12} xs={12}>
           {btn?<Answers money={ktc} value={value} click2={click2}/>:<Answers2/>}
           </Grid>
        </Grid>
        </Container>
    </React.Fragment>
    
  )
}

export default App
