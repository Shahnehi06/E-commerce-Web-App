import React, { useEffect, useState } from 'react'
import { ProductinCart } from '../components/ProductinCart'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {  BsTruck } from 'react-icons/bs'
import { Button, Card, CardContent,  FormLabel,  Paper, Stack, TextField, Typography } from '@mui/material'

export const Cart = () => {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const today = new Date();
    const[cartarr,setcartarr] = useState([])
    useEffect(()=>{
        let temp=[]
        for(let i=localStorage.getItem('cartlength');i>=0;i--)
        {
            temp.push(
                {
                    name:localStorage.getItem(`itemname${i}`),
                    count:localStorage.getItem(`itemcount${i}`),
                    url:localStorage.getItem(`itemurl${i}`),
                    original:localStorage.getItem(`itemoriginalprice${i}`),
                    discount:localStorage.getItem(`itemdiscount${i}`),
                    price:localStorage.getItem(`itemprice${i}`),
                    index:i,
                    dicountprice:localStorage.getItem(`originalprice`)!==null?(parseInt(localStorage.getItem(`itemoriginalprice${i}`).split(',').join(''))-parseInt(localStorage.getItem(`itemprice${i}`).split(',').join("")))*parseInt(localStorage.getItem(`itemcount${i}`)):0
                }
            )
        }
        setcartarr(temp)
    })
  return (
    <>
        <div>
            <div class="bg-secondary border-top p-4 text-white mb-3">
                <h1 class="display-6">Shopping Cart</h1>
            </div>
            <div class="container mb-3">
                <div class="row">
                    <div class="col-md-9">
                        <Paper>
                            <Card>
                                <div class="table-responsive">
                                    <table class="table table-borderless">
                                        <thead class="text-muted">
                                            <tr class="small text-uppercase">
                                                <th scope="col">
                                                    <center>
                                                        Product
                                                    </center>
                                                </th>
                                                <th scope="col">
                                                    <center>
                                                        Product Name
                                                    </center>
                                                </th>
                                                <th scope="col" width="auto">
                                                    <center>
                                                        Quantity
                                                    </center>
                                                </th>
                                                <th scope="col" width="auto">
                                                    <center>
                                                        Price
                                                    </center>
                                                </th>
                                                <th scope="col" width="auto"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartarr.map(i=>(
                                                <ProductinCart delete={()=>{
                                                    if(i.index !== cartarr.length)
                                                    {
                                                        localStorage.removeItem(`itemname${i.index}`);
                                                        localStorage.removeItem(`itemcount${i.index}`);
                                                        localStorage.removeItem(`itemdiscount${i.index}`);
                                                        localStorage.removeItem(`itemurl${i.index}`);
                                                        localStorage.removeItem(`itemoriginalprice${i.index}`);
                                                        localStorage.removeItem(`itemprice${i.index}`);
                                                    }
                                                    else{
                                                        for(let q=i.index;q<cartarr.length;q++){
                                                            localStorage.setItem(`itemname${q}`,localStorage.getItem(`itemname${q+1}`));
                                                            localStorage.setItem(`itemcount${q}`,localStorage.getItem(`itemcount${q+1}`));
                                                            localStorage.setItem(`itemdiscount${q}`,localStorage.getItem(`itemdiscount${q+1}`));
                                                            localStorage.setItem(`itemurl${q}`,localStorage.getItem(`itemurl${q+1}`));
                                                            localStorage.setItem(`itemoriginalprice${q}`,localStorage.getItem(`itemoriginalprice${q+1}`));
                                                            localStorage.setItem(`itemprice${q}`,localStorage.getItem(`itemprice${q+1}`));
                                                        }
                                                        localStorage.removeItem(`itemname${i.index}`);
                                                        localStorage.removeItem(`itemcount${i.index}`);
                                                        localStorage.removeItem(`itemdiscount${i.index}`);
                                                        localStorage.removeItem(`itemurl${i.index}`);
                                                        localStorage.removeItem(`itemoriginalprice${i.index}`);
                                                        localStorage.removeItem(`itemprice${i.index}`);
                                                    }
                                                }}
                                                count={i.count} eachprice={i.price} original={i.original} discount={i.discount}  imagetitle = {i.name} imagesrc={i.url} index={i.index}/>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <hr />
                                <CardContent>
                                    <Stack justifyContent={'space-between'} spacing={2} direction={'row'}>
                                        <Button onClick={()=>{window.location.href='/'}} style={{backgroundColor:'gray'}} variant='contained' startIcon={<FaChevronLeft />}>
                                            Continue shopping
                                        </Button>
                                        <Button onClick={()=>{window.location.href='/checkout'}} color='primary' variant='contained' endIcon={<FaChevronRight />}>
                                            Make Purchase
                                        </Button>
                                    </Stack>
                                </CardContent>    
                            </Card>
                        </Paper>
                        <div class="alert alert-success mt-3">
                            <p class="m-0">
                            <BsTruck /> Free Cash On Delivery within 1-2 weeks
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <Stack spacing={5} >
                            <Card style={{border:'1px solid gray'}}>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <FormLabel>Have coupon?</FormLabel>
                                        <TextField label='Coupon code' size='small'/>
                                    </Stack>
                                    <Button style={{marginTop:'3%',marginLeft:'75%'}} color='primary' variant='contained'>Apply</Button>
                                </CardContent>
                            </Card>
                            <Card style={{border:'1px solid gray'}}>
                                <CardContent>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography style={{color:'black'}} component={Button} disabled>
                                        <strong>
                                            Total price:
                                        </strong>
                                        </Typography>
                                        <Typography style={{color:'black'}} component={Button} disabled>${
                                            cartarr.reduce((acc,i)=>parseInt(acc)+parseInt(i.original!==null?i.original.split(',').join(""):0)*localStorage.getItem(`itemcount${i.index}`),0)
                                        }</Typography>
                                    </Stack>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography style={{color:'GrayText'}} component={Button} disabled>
                                        <strong>
                                            Discount:
                                        </strong>
                                        </Typography>
                                        <Typography style={{color:'GrayText'}} component={Button} disabled>-${
                                            cartarr.reduce((acc,i)=>parseInt(acc)+parseInt(i.dicountprice),0)
                                        }</Typography>
                                    </Stack>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography style={{color:'GrayText'}} component={Button} disabled>
                                        <strong>
                                            Coupon:Examplecode
                                        </strong>
                                        </Typography>
                                        <Typography style={{color:'GrayText'}} component={Button} disabled>-$68</Typography>
                                    </Stack>
                                    <hr/>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography style={{color:'black'}} component={Button} disabled>
                                        <strong>
                                            Total:
                                        </strong>
                                        </Typography>
                                        <Typography style={{color:'black'}} component={Button} disabled>${
                                            cartarr.reduce((acc,i)=>parseInt(acc)+parseInt(i.price)*localStorage.getItem(`itemcount${i.index}`),0)-68
                                        }</Typography>
                                    </Stack>
                                    <hr/>
                                    <Typography style={{color:'black',fontSize:13}} component={Button} disabled>Your Order will be delivered by, </Typography>
                                    <br/>
                                    <center>
                                        <Typography style={{color:'black',fontSize:13}} component={Button} disabled>{today.getDate()+2}-0{today.getUTCMonth()+1}-{today.getUTCFullYear()} ,{dayNames[today.getUTCDay()-6+1]}7:00 p.m.</Typography>
                                    </center>
                                </CardContent>
                            </Card>
                        </Stack>
                    </div>
                </div>
            </div>
            <div class="bg-light border-top p-4">
                <div class="container">
                    <h6>Payment and refund policy</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
