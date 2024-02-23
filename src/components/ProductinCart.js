import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BsCart3, BsDashLg, BsFillTrashFill, BsPlusLg } from 'react-icons/bs'
import { GoHeartFill } from 'react-icons/go'

export const ProductinCart = (props) => {
    const[display,setdisplay] = useState('');
  const [number, setNumber] = useState(+props.count);
  const [price,setprice] = useState(props.eachprice !==undefined ?+props.eachprice.split(',').join('')*+props.count : 0)
  const [key,setkey] = useState(props.index);
  useEffect(()=>{
      setprice(props.eachprice !==undefined?number*+props.eachprice.split(',').join(''):0)
    })
useEffect(()=>{
    localStorage.setItem(`itemcount${props.index}`,number)
})
useEffect(()=>{
    if(!props.imagetitle){
        setdisplay('none')
    }
    else{
        setdisplay('')
    }
})
  return (
    <>
    <tr style={{display:display}} className='border-top'>
        <td>
            <div class="row mt-2">
                <div class="col d-md-block">
                    <center>
                        <a class="text-decoration-none" href="/product/detail" title={props.imagetitle}>
                            <img src={props.imagesrc} width="80" alt="..." />
                        </a>
                    </center>
                </div>
            </div>
        </td>
        <td>
            <div className="row mt-5">
                <div class="col">
                    <center>
                        <a class="text-decoration-none" href="/product/detail">{props.imagetitle}</a>
                    </center>
                </div>
            </div>
        </td>
        <td>
            <div class="input-group input-group-sm mt-5">
                <table>
                    <tr>
                        <td>
                            <center>
                                <TextField  size='small' style={{width:120}}
                                    onChange={(e)=>{
                                    setNumber(e.target.value)
                                }}
                                inputProps={{
                                    style:{textAlign:'center'}
                                }} 
                                InputProps={{
                                    startAdornment:(<Typography component={IconButton}
                                    onClick={()=>{
                                        let temp=number;
                                        temp--;
                                        setNumber(temp <= 0 ? 0 : temp);
                                    }}
                                    ><BsDashLg/></Typography>),
                                    endAdornment:(<Typography component={IconButton}
                                    onClick={()=>{
                                        let temp = number;
                                        temp++;
                                        setNumber(temp)
                                    }}                          
                                    ><BsPlusLg/></Typography>)
                                }} 
                                value={number} />
                            </center>
                        </td>
                    </tr>
                </table>
            </div>
        </td>
        <td>
            <div className='mt-5'>
                <center>
                    <label class="price">${price}</label>
                    <small class="d-block text-muted">${props.eachprice} each</small>
                    <del class="small text-muted me-2">${props.original}</del>
                    <span class="rounded p-1 bg-warning  me-2 small">{props.discount}</span>
                </center>
            </div>
        </td>
        <td>
            <center>
                <div className="mt-5">
                    <Button startIcon={<BsCart3 />} color="error" variant="contained"
                        onClick={()=>{
                            localStorage.setItem('buynowproductname',localStorage.getItem(`itemname${props.index}`))
                            localStorage.setItem('buynowproductcount',localStorage.getItem(`itemcount${props.index}`))
                            localStorage.setItem('buynowproductprice',localStorage.getItem(`itemprice${props.index}`))
                            window.location.href = '/checkout';
                        }}
                    >
                        Buy now
                    </Button>
                </div>
            </center>
        </td>
        <td class="text-end">
            <center>    
                {/* <div className="d-grid justify-content-between mt-5"> */}
                    <Stack spacing={2} className='mt-5'>
                        <Typography color={'white'} style={{backgroundColor:'#0d6efd'}} component={Button}>
                            <GoHeartFill size={20}/>
                        </Typography>
                        <Typography color={'white'} onClick={props.delete} style={{backgroundColor:'#D32F2F'}} component={Button}>
                            <BsFillTrashFill size={20}/>
                        </Typography>
                    </Stack>
                {/* </div> */}
            </center>
        </td>
    </tr>
    </>
  )
}
