import React,{Fragment,useState} from 'react'
import {Paper,TextField ,Grid,Typography,FormLabel,Radio,FormControlLabel,RadioGroup,FormControl,Button} from '@material-ui/core';


function Form(props) {
      
    return (
        
            <Paper >
        <form style={{padding:"26px", height:"550px"}}>
        <TextField
          label="Enter Today Price of TT Bar:"
          name="ttbar"
          fullWidth
          type="number"
          value={props.value.ttbar}
          onChange={props.change}
          />

<FormControl component="fieldset" style={{ marginTop: 15 }}>
      <FormLabel component="legend">21KT or 22KT:</FormLabel>
      <RadioGroup aria-label="gender" name="ktc" value={props.money}>
        <FormControlLabel onClick={props.select}
         value="21" control={<Radio />} label="21KT" />

        <FormControlLabel value="22"
        onClick={props.select}
        control={<Radio />} label="22KT" />
      </RadioGroup>
    </FormControl>

           

<TextField
          label="Enter Weight in Grams:"
          style={{ marginTop: 8 }}
          name="wt"
          type="number"
          fullWidth
          value={props.value.wt}
          onChange={props.change}
          />
          <TextField
          type="number"
          label=" Enter Polish in %:"
          style={{ marginTop: 8 }}
          name="Ppercent"
          onChange={props.change}
          fullWidth
          value={props.value.Ppercent}
          />
          <TextField
          label="Enter Labour Charges in grams:"
          type="number"
          style={{ marginTop: 8 }}
          onChange={props.change}
          name="labourprice"
          fullWidth
          value={props.value.labourprice}
          />
          <TextField
          label="Enter Stone Charges in grams:"
          type="number"
          style={{ marginTop: 8 }}
          onChange={props.change}
          name="Shonecharges"
          fullWidth
          value={props.value.Shonecharges}
          />
                  
         <Button variant="contained" onClick={props.click} style={{ marginTop: 40 }} color="primary">Submit</Button>
         
         <p align="center" style={{ marginTop:20 }}>&copy; Mustafa Haider</p>

                </form>   
    </Paper>


    )            
}

export default Form
