
import styled from '@emotion/styled';
import { Box, Button, Drawer, Grid, ThemeProvider, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const CategoryRedirect = (props) => {
    const [data,Setdata] = useState([]);

    useEffect(() => {
        (async()=>{
            await fetch('http://localhost:8000/shoppinglist/').then(
                res=>{
                    return res.json();
                })
                .then(
                    i=>{
                        Setdata(i);
                    }
                )
        })()

    },[])
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  const custombuttonTheme  = createTheme({
    palette:{
        primary:{
            main:'#FFFFFF'
        },
        secondary:{
            main:'#FFFFFF'
        }            
    }
})
const CategoryButton = styled(Button)`
${({ theme }) => `
cursor: pointer;
background-color: ${theme.palette.primary.main};
transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})
};
&:hover{
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.09);
}
`}
`; 
const DrawerCategoryButton = styled(Button)`
${({ theme }) => `
cursor: pointer;
background-color: ${theme.palette.primary.main};
transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})
};
&:hover{
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.5);
}
`}
`; 
const DrawerList = (
  <Box style={{color:'white',backgroundColor:'black'}} sx={{ width: 250,height:'100%' }} role="presentation" onClick={toggleDrawer(false)}>
    <Grid container spacing={3} style={{justifySelf:"center"}} direction='column'>
    <Grid item key={'all'} style={{textAlign:'center'}}>
          <DrawerCategoryButton variant='container' style={{backgroundColor:'black',color:'white'}} onClick={()=>{
            localStorage.setItem('navvalue',null)
            localStorage.setItem('category','/');
            localStorage.setItem('categoryHead','All category');
            window.location.href='/'}}>
            
              ALL
            
          </DrawerCategoryButton>
        </Grid>
      {data.map(i=>(
        <Grid item key={i.value} style={{textAlign:'center'}}>
          <DrawerCategoryButton variant='container' style={{backgroundColor:'black',color:'white'}} onClick={
            ()=>{
                localStorage.setItem('navvalue',null)
                localStorage.setItem('category',i.value);
                localStorage.setItem('categoryHead',i.Shopping_Category);
                window.location.href=`/category/${i.value}`
              }}>
            {i.Shopping_Category}
          </DrawerCategoryButton>
        </Grid>
      ))}
    </Grid>
  </Box>
);
  return (
    <>
    {/* <Grid direction={'column'}> */}
      <ThemeProvider theme={custombuttonTheme}>
        <CategoryButton style={{backgroundColor:'black'}} onClick={toggleDrawer(true)}>{props.choicename}</CategoryButton>
        <Drawer open={open} onClose={toggleDrawer(false)} >
          {DrawerList}
        </Drawer>
      </ThemeProvider>

    {/* </Grid> */}
    </>
  )
}
