import React, { useEffect, useState } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, CircularProgress, Grid, IconButton, Paper, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { BsHeart } from 'react-icons/bs';

export const CategoryWiseFetch = () => {
    const [data,Setdata] = useState([]);
    const [progressdisplay,Setprogressdisplay] = useState('block');
    setTimeout(()=>{
        Setprogressdisplay('none');
    },1000)
    useEffect(()=>{
                (async()=>{
                    await fetch(`http://localhost:8000/shoppinglist/${localStorage.getItem('category')}`)
                    .then(
                        res=>{
                            return res.json()
                        }
                    )
                    .then(
                        (i)=>{
                            Setdata(i.data)
                        }
                    )
                })()

    },[])
    const customTheme  = createTheme({
        palette:{
            primary:{
                main:'#FFFFFF'
            },
            secondary:{
                main:'#FFFFFF'
            }            
        }
    })
    const StyledAvatar = styled(Card)`
        ${({ theme }) => `
        cursor: pointer;
        background-color: ${theme.palette.primary.main};
        transition: ${theme.transitions.create(['background-color', 'transform'], {
            duration: theme.transitions.duration.standard,
        })};
        &:hover {
            background-color: ${theme.palette.secondary.main};
            transform: scale(1.09);
        }
    `}
    
`; 
const StyledImage = styled(CardMedia)`
        ${({ theme }) => `
        cursor: pointer;
        background-color: ${theme.palette.primary.main};
        transition: ${theme.transitions.create(['background-color', 'transform','transform-origin'], {
            duration: theme.transitions.duration.standard,
        })};
        &:hover {
            background-color: ${theme.palette.secondary.main};
            transform-origin:'center';
            transform: scale(145%) translateY(15%);
        }
    `}
    
`; 

    
  return (
    <center>
        <Typography variant='h3' className='my-5'>   
            {localStorage.getItem('categoryHead')}
        </Typography>
        <CircularProgress style={{display:progressdisplay}} color="secondary" />

        <Stack justifyContent={'center'}>
                
                <Paper>
                    <Grid className='my-5' container spacing={5} justifyContent={'center'}>
                    {
                        data.map((index)=>(
                            <Grid item>
                                <ThemeProvider theme={customTheme}>
                                    <StyledAvatar raised sx={{maxWidth: 400}} style={{justifySelf:'center'}}>
                                        <CardActionArea>
                                            <Stack className='my-1' direction={'row'} justifyContent={'space-between'}>
                                                <IconButton style={{justifySelf:'start'}}>
                                                    <BsHeart size={16}/>
                                                </IconButton>
                                                <Chip variant='filled' style={{marginRight:"1%"}} color='error' label={index.Discount_rates !== undefined ? index.Discount_rates.toString() : index.Discount_rates} />
                                            </Stack>
                                            <StyledImage style={{objectFit:'contain',maxHeight:'200px',height:"200px",width:"300px"}} 
                                            component='img'
                                            onClick={()=>{
                                                localStorage.setItem('originalprice',index.Original_Prices)
                                                localStorage.setItem('discount',index.Discount_rates)
                                                localStorage.setItem('productprice',index.Price)
                                                localStorage.setItem('imgurl',index.Image_URLS);
                                                localStorage.setItem('productname',index.Product_Name);
                                                window.location.href=`/productdetails/${index._id}`
                                            }}
                                            image={index.Image_URLS}
                                            title={index.Product_Name}
                                            alt={index.Product_Name}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom fontSize={10} style={{color:'black'}}  component="a" onClick={()=>{
                                                localStorage.setItem('originalprice',index.Original_Prices)
                                                localStorage.setItem('discount',index.Discount_rates)
                                                localStorage.setItem('productprice',index.Price)
                                                localStorage.setItem('imgurl',index.Image_URLS);
                                                localStorage.setItem('productname',index.Product_Name);
                                                window.location.href=`/productdetails/${index._id}`
                                                }}>
                                                {index.Product_Name}
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{justifyContent:'space-between'}}>
                                            <Button size="small" style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                            Share
                                            </Button>
                                            <Button style={{backgroundColor:'#000000',color:'whitesmoke'}} size="small" variant='contained'>
                                            Details
                                            </Button>
                                        </CardActions>
                                    </StyledAvatar>
                                </ThemeProvider>
                            </Grid>
                        ))
                    }
                    </Grid>
                </Paper>
            </Stack>
        </center>
    )
}
