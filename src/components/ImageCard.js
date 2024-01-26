import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, IconButton, Paper, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';


export const ImageCard = (props) => {
    const [initalwishlist1,Setwishlist1] = useState(0);
    const [initalwishlist2,Setwishlist2] = useState(0);
    const [initalwishlist3,Setwishlist3] = useState(0);
    const [data,Setdata] = useState([]);
    const [img,Setimg] = useState(''); 
    const [time,setTime] = useState();
    useEffect(()=>{
        (async()=>{
            await fetch(`http://localhost:8000/shoppinglist/${props.prototype}`).then(
                i=>{
                    return i.json();
                }
            ).then(ii=>{
                Setdata(ii.data);
            })
        })()
    },[])
    useEffect(()=>{
        const images = data.map(element => 
            {
                // console.log(data.indexOf(element));
            return element.Image_URLS}
            );
        Setimg(images.flat());
    },[data])
    // console.log(img)
    
    useEffect(()=>{
      const interval = setInterval(()=>{
          setTime(Date.now())
            if( localStorage.getItem(`Item${data[index]}`)|| localStorage.getItem(`Item${data[index]}`) !==0 )
            {
                Setwishlist1(1);
            }
            else{
                Setwishlist1(0)
            }
            if( localStorage.getItem(`Item${data[index+1]}`) !==0 || localStorage.getItem(`Item${data[index]}`)){
                Setwishlist2(1)
            }
            else{
                Setwishlist2(0)
            }
            if(localStorage.getItem(`Item${data[index+2]}`) !==0 || localStorage.getItem(`Item${data[index]}`)){
                Setwishlist3(1)
            }
            else{
                Setwishlist3(0)
            }
      },5000)
    
      return ()=> clearInterval(interval)
    },[])
    // console.log(time)
    var index = Math.floor((time / 1000) % img.length); 
    if(index >= 795){
        index=0;
    }
        
    

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
            transform: scale(145%) translateY(32%);
        }
    `}
    
`; 
    return (
        <center className='my-5'>
        {
            index?
            (
                    <Stack justifyContent={'center'}>
                        <Paper>
                            <Typography variant='h3'>   
                                {props.heading}
                            </Typography>
                            <Grid className='my-5' container spacing={5} justifyContent={'center'}>
                                <Grid item>
                                    <ThemeProvider theme={customTheme}>
                                        <StyledAvatar raised sx={{maxWidth: 400}} style={{justifySelf:'center'}}>
                                            <CardActionArea>
                                                <Stack className='my-1' direction={'row'} justifyContent={'space-between'}>
                                                    <IconButton style={{justifySelf:'start'}}
                                                    onClick={()=>{
                                                        if(initalwishlist1 === 0){
                                                            Setwishlist1(1);
                                                            localStorage.setItem(`Item${data[index].Product_Name}`,data[index].Product_Name);
                                                        }
                                                        else{
                                                            Setwishlist1(0);
                                                            localStorage.setItem(`Item${data[index].Product_Name}`,0);
                                                            
                                                        }
                                                    }}
                                                    >
                                         
                                                    {initalwishlist1===0 ?<BsHeart size={16}/>:<BsHeartFill size={16}/>}
                                                    </IconButton>
                                                    <Chip variant='filled' style={{marginRight:"1%"}} color='error' label={data[index].Discount_rates.toString()} />
                                                </Stack>
                                                <StyledImage style={{objectFit:'contain',height:"200px",width:"300px"}} 
                                                component='img'
                                                onClick={()=>{
                                                    localStorage.setItem('originalprice',data[index].Original_Prices)
                                                    localStorage.setItem('discount',data[index].Discount_rates)
                                                    localStorage.setItem('productprice',data[index].Price);
                                                    localStorage.setItem('productname',data[index].Product_Name);
                                                    localStorage.setItem('imgurl',data[index].Image_URLS)
                                                    window.location.href=`/productdetails/${data[index]._id}`
                                                }}
                                                image={img[index]}
                                                title={data[index].Product_Name}
                                                alt={data[index].Product_Name}
                                                onChange={()=>{
                                                    if(localStorage.getItem(`Item${data[index].Product_Name}`)){
                                                        Setwishlist1(1);
                                                    }
                                                    else{
                                                        Setwishlist1(0);
                                                    }
                                                }}
                                                />
                                                
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="a"  style={{textDecoration:'none',color:'black'}}
                                                onClick={()=>{
                                                    localStorage.setItem('originalprice',data[index].Original_Prices)
                                                    localStorage.setItem('discount',data[index].Discount_rates)
                                                    localStorage.setItem('productprice',data[index].Price);
                                                    localStorage.setItem('productname',data[index].Product_Name);
                                                    localStorage.setItem('imgurl',data[index].Image_URLS)
                                                    window.location.href=`/productdetails/${data[index]._id}`
                                                }}
                                                >
                                                    {data[index].Product_Name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
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
                                <Grid item>
                                <ThemeProvider theme={customTheme}>
                                        <StyledAvatar raised sx={{maxWidth: 400}}>
                                            <CardActionArea>
                                                <Stack className='my-1' direction={'row'} justifyContent={'space-between'}>
                                                    <IconButton style={{justifySelf:'start'}}
                                                    onClick={()=>{
                                                        if(initalwishlist2 === 0){
                                                            Setwishlist2(1);
                                                            localStorage.setItem(`Item${data[index+1].Product_Name}`,data[index+1].Product_Name);
                                                        }
                                                        else{
                                                            Setwishlist2(0);
                                                            localStorage.setItem(`Item${data[index+1].Product_Name}`,0);
                                                            
                                                        }
                                                    }}
                                                    >
                                                    {initalwishlist2===0?<BsHeart size={16}/>:<BsHeartFill size={16}/>}
                                                    </IconButton>
                                                    <Chip style={{marginRight:"1%"}} variant='filled' color='error' label={data[index+1].Discount_rates}/>
                                                </Stack>
                                                <StyledImage style={{objectFit:'contain',height:"200px",width:"300px"}}
                                                onClick={()=>{
                                                    localStorage.setItem('originalprice',data[index+1].Original_Prices)
                                                    localStorage.setItem('discount',data[index+1].Discount_rates)
                                                    localStorage.setItem('productprice',data[index+1].Price);
                                                    localStorage.setItem('productname',data[index+1].Product_Name);
                                                    localStorage.setItem('imgurl',data[index+1].Image_URLS)
                                                    window.location.href=`/productdetails/${data[index+1]._id}`
                                                }}
                                                component="img"
                                                image={img[index+1]}
                                                alt={data[index+1].Product_Name}
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="a" style={{textDecoration:'none',color:'black'}}
                                                onClick={()=>{
                                                    localStorage.setItem('originalprice',data[index+1].Original_Prices)
                                                    localStorage.setItem('discount',data[index+1].Discount_rates)
                                                    localStorage.setItem('productprice',data[index+1].Price);
                                                    localStorage.setItem('productname',data[index+1].Product_Name);
                                                    localStorage.setItem('imgurl',data[index+1].Image_URLS)
                                                    window.location.href=`/productdetails/${data[index+1]._id}`
                                                }}
                                                >
                                                    {data[index+1].Product_Name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions style={{justifyContent:'space-between'}}>
                                                <Button size="small" variant='contained' style={{backgroundColor:'#000000',color:'whitesmoke'}}>
                                                    Share
                                                </Button>
                                                <Button size="small"style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                                    Details
                                                </Button>
                                            </CardActions>
                                        </StyledAvatar>
                                </ThemeProvider>

                                </Grid>
                                <Grid item>
                                <ThemeProvider theme={customTheme}>
                                    <StyledAvatar raised sx={{maxWidth: 400}}>
                                        <CardActionArea>
                                            <Stack className='my-1' direction={'row'} justifyContent={'space-between'}>
                                                <IconButton style={{justifySelf:'start'}}
                                                onClick={()=>{
                                                    if(initalwishlist3 === 0){
                                                        Setwishlist3(1);
                                                        localStorage.setItem(`Item${data[index+2].Product_Name}`,data[index+2].Product_Name);
                                                    }
                                                    else{
                                                        Setwishlist3(0);
                                                        localStorage.setItem(`Item${data[index+2].Product_Name}`,0);
                                                        
                                                    }
                                                }}
                                                >
                                                {initalwishlist3===0?<BsHeart size={16}/>:<BsHeartFill size={16}/>}
                                                </IconButton>
                                                <Chip variant='filled' style={{marginRight:"1%"}} color='error' label={data[index+2].Discount_rates}/>
                                            </Stack>
                                            <StyledImage style={{objectFit:'contain',height:"200px",width:"300px"}}
                                            onClick={()=>{
                                                localStorage.setItem('originalprice',data[index+2].Original_Prices)
                                                localStorage.setItem('discount',data[index+2].Discount_rates)
                                                localStorage.setItem('productprice',data[index+2].Price);
                                                localStorage.setItem('productname',data[index+2].Product_Name);
                                                localStorage.setItem('imgurl',data[index+2].Image_URLS)
                                                window.location.href=`/productdetails/${data[index+2]._id}`
                                            }}
                                            component="img"
                                            image={img[index+2]}
                                            alt={data[index+2].Product_Name}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="a" style={{color:'black',textDecoration:'none'}}
                                            onClick={()=>{
                                                    localStorage.setItem('originalprice',data[index+2].Original_Prices)
                                                    localStorage.setItem('discount',data[index+2].Discount_rates)
                                                    localStorage.setItem('productprice',data[index+2].Price);
                                                    localStorage.setItem('productname',data[index+2].Product_Name);
                                                    localStorage.setItem('imgurl',data[index+2].Image_URLS)
                                                    window.location.href=`/productdetails/${data[index+2]._id}`
                                                }}
                                                >
                                                {data[index+2].Product_Name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{justifyContent:'space-between'}}>
                                            <Button size="small" variant='contained' style={{backgroundColor:'#000000',color:'whitesmoke'}}>
                                            Share
                                            </Button>
                                            <Button size="small" variant='contained' style={{backgroundColor:'#000000',color:'whitesmoke'}}>
                                            Details
                                            </Button>
                                        </CardActions>
                                    </StyledAvatar>
                                </ThemeProvider>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Stack>
             
            )
            :
            (   
                <Stack justifyContent={'center'}>
                        <Paper>
                                <Typography variant='h3'>   
                                    {props.heading}
                                </Typography>
                            <Grid className='my-5' container spacing={5} justifyContent={'center'}>
                                <Grid item>
                                    <ThemeProvider theme={customTheme}>
                                        <StyledAvatar raised sx={{maxWidth: 400}} style={{justifySelf:'center'}}>
                                            <CardActionArea>
                                                <Chip className='my-1' style={{marginRight:"1%"}} variant='filled' color='error' label={'Loading...'} style={{marginTop:"2%",marginLeft:"80%"}}/>
                                                <CardMedia style={{objectFit:'contain',height:"200px",width:"300px"}} 
                                                component="img"
                                                
                                                image={''}
                                                alt="Loading..."
                                                
                                                />
                                                
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                Loading...
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                Loading...
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions style={{justifyContent:'space-between'}}>
                                                <Button size="small" style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                                Share
                                                </Button>
                                                <Button size="small" style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                                Details
                                                </Button>
                                            </CardActions>
                                        </StyledAvatar>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item>
                                <ThemeProvider theme={customTheme}>
                                        <StyledAvatar raised sx={{maxWidth: 400}}>
                                            <CardActionArea>
                                            <Chip className='my-1' style={{marginRight:"1%"}} variant='filled' color='error' label={'Loading...'} style={{marginTop:"2%",marginLeft:"80%"}}/>
                                                <CardMedia style={{objectFit:'contain',height:"200px",width:"300px"}}
                                                component="img"
                                                image={''}
                                                alt="Loading..."
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                Loading...
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                Loading...
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions style={{justifyContent:'space-between'}}>
                                                <Button size="small" style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                                Share
                                                </Button>
                                                <Button size="small" style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                                Details
                                                </Button>
                                            </CardActions>
                                        </StyledAvatar>
                                </ThemeProvider>

                                </Grid>
                                <Grid item>
                                <ThemeProvider theme={customTheme}>
                                    <StyledAvatar raised sx={{maxWidth: 400}}>
                                        <CardActionArea>
                                        <Chip className='my-1' style={{marginRight:"1%"}} variant='filled' color='error' label={'Loading...'} style={{marginTop:"2%",marginLeft:"80%"}}/>
                                            <CardMedia style={{objectFit:'contain',height:"200px",width:"300px"}}
                                            component="img"
                                            image={''}
                                            alt="Loading..."
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            Loading...
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            Loading...
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{justifyContent:'space-between'}}>
                                            <Button size="small" style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                            Share
                                            </Button>
                                            <Button size="small" style={{backgroundColor:'#000000',color:'whitesmoke'}} variant='contained'>
                                            Details
                                            </Button>
                                        </CardActions>
                                    </StyledAvatar>
                                </ThemeProvider>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Stack>
            )
        }

    </center>
  )
}
