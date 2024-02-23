import React, {  useEffect, useState } from 'react'
import { MdKeyboardVoice} from "react-icons/md";
import { FaSearch } from 'react-icons/fa'
import { SiGooglelens } from "react-icons/si";
import { FormControl } from '@mui/base';
import { Autocomplete, Grid, IconButton, Stack, TextField } from '@mui/material';
export const Search = (props) => {
  
const [text,SetText] = useState('');
const [data,Setdata] = useState([]);
const [initialdata,Setinitialdata] = useState([]);
useEffect(()=>{
  (async()=>{
    await fetch('http://localhost:8000/productname').then(
      res=>{
        return res.json()
      }
    ).then(i=>{
      Setdata(i);
    })
  })()
},[])
  return (
    <>
          <FormControl style={{width:"100%"}}>
          <Stack direction={'row'}>
              <Autocomplete         
                id="combo-box-demo"
                options={initialdata}
                fullWidth
                renderInput={(params) => 
                <TextField {...params} 
                fullWidth id={props.id} name="search" type="text" variant='outlined' size='small' color='primary'
                placeholder='Search products,categories etc...' value={text}
                // onKeyDown={()=>{window.location.href='/sf'}}
                onClick={()=>{
                  let randum = Math.floor((Math.random(data.length)*100+800)*3);
                  let temparr = [];
                  data.slice(randum,randum+7).forEach(
                    i=>{
                      temparr.push({
                        label:i.Product_Name
                      })
                    }
                  )
                  Setinitialdata(temparr)
                  
                }}
                onKeyUp={(e)=>{
                  let temparr=[];
                  data.forEach(
                    i=>{
                      temparr.push(i.Product_Name)
                    }
                    )
                    let myarr = temparr.filter(i=>{return i.toLowerCase().substring(0,e.target.value.length) === e.target.value.toLowerCase()}).filter((value,index,arr)=>{return arr.indexOf(value) === index});
                    
                    Setinitialdata(myarr)
                  if(e.key === 'Enter'){
                    window.location.href = `/shoppinglist/${e.target.value.split(' ').join('').split(',').join('').toLowerCase()}`;
                  }

                }}
                onChange={(e)=>{
                  
                  SetText(e.target.value);
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment:(
                  <IconButton color='primary'>
                    <FaSearch  size={13}/>
                  </IconButton>),
                  endAdornment:(
                    <Grid spacing={1} direction={'row'}>
                      <IconButton color='primary' size='small' onClick={()=>{console.log("")}}>
                      <MdKeyboardVoice size={17} />
                      </IconButton>
                      <IconButton size='small' color='primary' onClick={()=>{}}>
                        <SiGooglelens size={15}/>
                      </IconButton>
                    </Grid>
                  )
                }}
                />
              }
              />
            </Stack>
          </FormControl>
    </>
  );
}
