import React,{Fragment} from 'react'
import {Paper,Typography,Button} from '@material-ui/core';


function Answers(props) {
    var pg=props.value.ttbar/116.64;

    if(props.money==22){
        var tfktc=(pg*12.15)-2000;
     }
    if(props.money==21){
         var tfktc=(pg*12.15)-3000;
     }

     var  grosswt=parseFloat(props.value.wt*props.value.Ppercent/100)+parseFloat(props.value.wt);

     var Price=parseFloat(grosswt/12.15*tfktc)+parseFloat(props.value.labourprice)+parseFloat(props.value.Shonecharges);
    return (
        
            <Paper style={{padding:"26px", maxheight:"550px"}} >
                    <Typography variant="h6">Today TT Bar Price is <b>{props.value.ttbar}</b></Typography>
                    <Typography variant="h6">GOLD PER GRAM Price is :<b>{pg}</b></Typography>
                    <Typography variant="h6">24 KT = <b>{pg*12.15}</b></Typography>
                    <Typography variant="h6">22 KT = <b>{pg*12.15 - (2000)}</b></Typography>
                    <Typography variant="h6">21 KT =<b>{pg*12.15 - (3000)}</b></Typography>
                    <Typography variant="h6">Jewellery Weight is:<b>{props.value.wt}</b></Typography>
                    <Typography variant="h6">Polish %: <b>{props.value.Ppercent}</b> </Typography>
                    <Typography variant="h6">Labour price:<b>{(grosswt/12.15)*props.value.labourprice}</b> </Typography>
                    <Typography variant="h6">Stone Charges:<b>{props.value.Shonecharges}</b></Typography>
            <Typography variant="h6">Total Weight in grams with Polish is:<b> {grosswt}</b></Typography>
    <Typography variant="h6">Total Price PKR <b>{Price}</b> and Weight is: <b>{grosswt/12.15}</b></Typography>
    <Button variant="contained" onClick={props.click2} style={{ marginTop: 40,marginBotton:40 }} color="primary">Clear</Button>
    
                </Paper>

    )            
}

export default Answers;