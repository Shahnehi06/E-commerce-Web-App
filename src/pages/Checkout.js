import React, { useState } from 'react'
import { SlEnvolope } from 'react-icons/sl'
import { LiaShippingFastSolid } from "react-icons/lia";
import {  FaRegRectangleList } from 'react-icons/fa6';
import { MdOutlinePayment } from "react-icons/md";
import { IoCartOutline } from 'react-icons/io5';
import { Autocomplete, Button, Card, CardContent, CardHeader, CardMedia, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { IoIosCloseCircleOutline } from 'react-icons/io';



function createData(name, count, price) {
  return { name, count, price };
}

const rows = [
  createData(localStorage.getItem('buynowproductname'),localStorage.getItem('buynowproductcount'),localStorage.getItem('buynowproductprice')),
];
export const Checkout = () => {
  var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
  const [mobileNumber, setMobileNumber] = useState('');
  const maxLength = 10; 

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length > maxLength || isNaN(value))
    {
      const limitedValue = value.slice(0, maxLength);
      setMobileNumber(limitedValue.substring(0, maxLength));
    }
    else
    {
      setMobileNumber(value);
    }
  };
  return (
    <>
      <div>
        <div class="bg-secondary border-top p-4 text-white mb-3">
          <h1 class="display-6">Checkout</h1>
        </div>
        <div class="container mb-3">
            <div class="row">
              <div class="col-md-8">
                {/* <div class="card mb-3"> */}
                <Stack direction={'column'} spacing={2}>
                    <Card>
                      <CardHeader style={{backgroundColor:'#e9ecef'}} avatar={
                        <SlEnvolope/>
                      }
                      title='Contact Info'/>
                      <Divider style={{border:'1px solid grey'}} />
                      <CardContent>
                          <Stack width={'auto'} direction={'row'} spacing={2} >
                              <TextField  type='email' fullWidth label='Email' variant='outlined' size='small' color='secondary'/>
                              <TextField
                              maxRows={10}
                              type='number'
                              fullWidth
                              label='Mobile no'
                              variant='outlined'
                              size='small'
                              color='secondary'
                              value={mobileNumber}
                              onChange={handleChange}
                            />
                          </Stack>
                      </CardContent>
                    </Card>
                  <Card>
                    <CardHeader style={{backgroundColor:'#e9ecef'}} title='Shopping Inoformation' avatar={<LiaShippingFastSolid/>}/>
                    <Divider style={{boder:'1px solid grey'}}/>
                    <CardContent>
                      <Stack direction={'column'} spacing={2}>
                        <TextField label='Name' size='small' type='text' variant='outlined' color='secondary' fullWidth/>
                        <Stack direction={'row'} spacing={2}>
                          <TextField label='Address' size='small'/>
                          <TextField label='Address 2 (Optional)' size='small'/>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={country_list}
                          sx={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} size='small' label="Country" />}
                        />
                          <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={['State']}
                          sx={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} size='small' label="State" />}
                        />
                          <TextField type='number' label='Zip' size='small'/>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader action={
                    <Stack direction={'row'}>
                      <FormLabel>
                      <Checkbox/>
                        Same as Shipping Information</FormLabel>
                    </Stack>
                    } style={{backgroundColor:'#e9ecef'}} avatar={<FaRegRectangleList/>} title='Billing Information'/>
                    <Divider/>
                    <CardContent>
                    <Stack direction={'column'} spacing={2}>
                        <TextField label='Name' size='small' type='text' variant='outlined' color='secondary' fullWidth/>
                        <Stack direction={'row'} spacing={2}>
                          <TextField label='Address' size='small'/>
                          <TextField label='Address 2 (Optional)' size='small'/>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={country_list}
                          sx={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} size='small' label="Country" />}
                        />
                          <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={['State']}
                          sx={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} size='small' label="State" />}
                        />
                          <TextField type='number' label='Zip' size='small'/>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card style={{border:'1px solid #abbfdc'}}>
                    <CardHeader style={{backgroundColor:'#abbfdc',color:'	#ff3333'}} avatar={<IoIosCloseCircleOutline />} title='Unavailable Currently'/>
                    <CardHeader style={{color:'GrayText',backgroundColor:'#abbfdc'}} avatar={<MdOutlinePayment/>} title='Payment Method'/>

                    <Divider/>
                    <FormControl disabled>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={value}
                        // onChange={handleChange}
                      >
                        <Stack className='p-2' direction={'row'} spacing={3}>
                          <Stack direction={'row'} spacing={0}>
                            <FormControlLabel value="female" control={<Radio />} label='Credit card'/>
                            <Button>
                              <CardMedia className='my-1' component={'img'}  src="data:image/webp;base64,UklGRhQFAABXRUJQVlA4IAgFAABQGACdASrQABoAPpVAmkmlpCKhOJpuqLASiWwAqo8l/VfLflf7LNh/vu9zH77ds7n979anli9B7zFeaf/venA6oz0Wul+/zLiXDh+C+lcmleRvUHFrFjC+8kk0/Kyj47rGfJILLJdtQ64BPTXvo/vKgIGMzWoiepJOKakNt/jahklS+yZIsPx7wWa/bQit+ARrWCCcBpfCFD2dbJ0Rwl5CvPeRo3i48Cs5QdxrUT5h6KbBVIn1P/ecD0tMNYJetXUuRMaIlpHD8/n4wAD9AwPgvGatVdiOHdl3d70obDvUv040cIUyRBPDMshT27hFV2ECvHzgDS3Njgs4vzD/wY5Sl/xgwknTM/rhOQWjurnqSlgY6W+Gx5JNHyiu9GmTnH0Px4qPYDI9ymbqfgqZ/sBzWxP8dLUbXC4k6YEMGdWxBLAPkZSZDPAtofHxPG6iBgEC8yGOPMtIkc0KGL9lT+PzH9fbdExFWybOd9sY3usZ4I5G3fXXgRTnj7oapiaCgd9TnrlRFYt/CtN12hfC6dMnsftWwzXauTPYpr+sm/dvUNqevB7GKas02zlJFAeTAbdHdRiKZhab2/+AupiGVOfFL4Ov/j++oTAn9CbOjsUZYVqdCea8htGtrFPWCQD2nUIKv2yhTuqImiDmCmkgPfuSzpF46S2bounWTxkuJGoeaek+LMGyf8IqBT2LwOtfTvGhZuhkdtH9Jymgc69ooejlNPOh6L4Hzx/3py9ZnsQ6Koh7tdB1z+YvzgpBXcnHBAB0aQI3KhywyZsuy8+htJ2nD8uIH3hIS3hsBNMOdY61t9ond8fi5LJnVvWJUGa+b4V0us+niedvbPdoQjgbRjCru6NpvN02mqH/Mh0tSXoaHo+0A8nHPrfRDh0drJMH1FcevKX+5gu/6+I0+oazMnO2CHS7kJU/jaWrapOFzWAhyP6fcvOGQhXTid39EBhqZrKoUHDuRpKlYzsV6xh1cI7ZmSubHzaiK+jizH7Ty6Ncs6eFg+I8/cKTFqbs5DvmGqCevesbmgQ3fnOP8yrC8zijjzMH/TjEPut14VrQr6gULoXWhr2VwJ0hryWaQgJNevOJM1CHPWIEPbIPBA1JyStb5BJVMihBR8nfx/zX8Dkfy1omVxXm/uWGA2Gzvid17qsSsEIxmtWAGJeDosbf/zb66/ysf1O2/BbMyUjhmVa9qWnH8gXsxxyc2GGVYr+2/xhchMn0gx7ELJHl48+sGiYCiovA1weNdKTvdh2XfCOsSbZXRIdqcSlup7+Gb8CLPSKC9VubIfOpQ7MoSkAbhyq71sQOxv7cqSAJgJs0qfcq0V+d95BAns9vuMPLf9kVsn0J7abNn/e+dwVOgQG4tyPQABObgeWnCusQBF/S9BNv1JoeP3tZg+Y+H679oKaZPsk2cYxh8nvvrutPhDtnhkXy8FaO+5BrZiqNzGbjIpS51TZhRAOzI9fY7TeywLpFFvTNRGXyYoAwLZzhyum06qs0x/a7QpJO8veUtHCAg7ehd8zpV4yDmo7NVfRiDA+qnGwTvTyZ0lmDRfxLNEALQCxbywJgVPXC0SiyXaW1Cr4a/FT4J4Vq0kIU4pzqnp3z2rakWKaqLt2OBPLBGOx/ZXRqczWzJDbZksVZbqzy6mlZ0clsZz9hEGJYEuFn+ttWlyOX1jplHdkZVnJxoPM41yFc1+2X8POU1io+f3FPlshFOMNSNKANYAAA" alt="..." height={26}/>
                            </Button>
                          </Stack>
                          <Stack direction={'row'} spacing={0}>
                            <FormControlLabel value="male" control={<Radio />} label="PayPal" />
                            <Button>
                              <CardMedia className='my-1' component={'img'}  src="data:image/webp;base64,UklGRkoDAABXRUJQVlA4WAoAAAAQAAAAPwAAGQAAQUxQSBACAAANkAVJsmlbdXDvs23btm3btm3btm3bNi7Xebi2bRxsPOMzIiaA/4Ajd0iMga9WPf1FGiDVZK0xZd7TX6OEDKCfsO6X0BRToojTL5EHlYVzP5UpdFaHMez2hphvW94aEh23vFFaXHk/xdWEblogUxPQZGiunfVtXQB96eFd/BV6c48SKpKzZ3CSKUVsnXwnU1aw+SbrfMy9u7BlisJCLkUuhBqjTyFvFBxjPZukcUsxsZ32SNEMm9tan3akRbeQ3XCTsOa4NRqf3+5JLbvrGD/LGJONsYGZS/NUKbpLM7jyEIz94VK98hHrs2xkaWMoUSc9NgPnYSxfD0MQbkhcCms1KbNC/F4ZXWHqToS9I0s7tfE62AWDTY921zZw32YeHIPAJeGM3Nfyos6xM4IUOSEwK9KIEcgWgQNOEc+4wha41Tk88mm3HOMJnUhp3A8kur5oj3jMjTqZRCcERQEtxBwLF3eRLwUzAVJS/HPqvgjcfWrMYiyU4vprIBs5oiOGgWNnBCWAjPBmNypLEZQkOd959JSURgxwqgenEtEWwwBwv3LhjwlGkpzaISgC5AEDagOfuSLd6dSuwP50xaJBg9dSSHMxJoskuNeoUu7HO7qmtwlIz+4d5L0DQtXeq8ga110Bz89Qpo9xEBDRH/nXK3zgAjQBwlwoloZkG1Xf8QCb+KEPGvOjW33Q/JifMCiR/5hWUDggFAEAAJAHAJ0BKkAAGgA+tVimTyckoyIkCADgFolsAMEQAImXtd+/bZjAbbDcJ7wBvJYBjIOn155WF9R8n1uElLvkK1a9Pq1USAD+68sKktFKcH/4fd6QnGKP8YPm+CJkCqrCESknK+eEvep1Zd4u9Dn6Ez+hQP//cscdK7ZGFwQZOXgm/htZVERFprgplYF8tE2wL+uXhtP6qdNDyO1h5LGRl21xhKbdaa/kxx//96Ro4/RQasXnci83D71Kr5iUe4t3XZDapV9r/zAqk6JX7rpTHLtjoA/G46pQe2ybnwX/3YhQCYq41VuxELLpFwEqmt+9gKNU/uWRur/jAaKb7F4uvPKY/zM2xVY1RkiwANnbtpOWBAAAAA==" alt="..." height={26}/>
                            </Button>
                          </Stack>
                        </Stack>
                      </RadioGroup>

                    </FormControl>
                    <Stack>
                     <Divider style={{border:'1px solid grey'}}/> 
                      <Stack className='my-2 p-2' direction={'row'} spacing={2} justifyContent={'space-between'}>
                        
                        <TextField label='Name on card' size='small' fullWidth disabled/>
                        <TextField label='Card Number' size='small' fullWidth disabled />
                      </Stack>
                     <Stack className='my-2 p-2' direction={'row'} spacing={2} justifyContent={'space-between'}>
                      <TextField label='Expiration month' size='small' fullWidth disabled/>
                      <TextField label='Expiration year' size='small' fullWidth disabled/>
                      <TextField label='CVV' size='small' fullWidth disabled />
                     </Stack>
                     <Stack style={{borderTop:'1px solid #abbfdc'}} className='p-2'>
                      <Button className='mx-auto' disabled variant='contained'>Pay now<strong>$162</strong></Button>
                     </Stack>
                    </Stack>
                  </Card>
                </Stack>
              </div>
              <div class="col-md-4">
                <Stack spacing={4}>
                  <Card>
                  <CardHeader style={{backgroundColor:'#e9ecef'}} avatar={<IoCartOutline/>} title='Cart' action={
                      <Button variant='text' size='small' className='mx-auto' style={{backgroundColor:'#e9ecef',color:'navy'}}>{localStorage.getItem('buynowproductname')!==null?1:0}</Button>
                    } />
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 'auto' }}>
                          <caption>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                            <Typography>
                              Total
                            </Typography>
                            <Typography>
                              ${+localStorage.getItem('buynowproductcount')*+localStorage.getItem('buynowproductprice')}
                            </Typography>
                            </Stack>
                          </caption>
                          <TableHead>
                            <TableRow>
                              <TableCell>Product Name</TableCell>
                              <TableCell >Items</TableCell>
                              <TableCell align='right' >Price</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow key={row.name}>
                                <TableCell>
                                  {row.name}
                                </TableCell>
                                <TableCell >{row.count}</TableCell>
                                <TableCell align='right' >${row.price}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                  </Card>
                  <center>
                    <Button variant='contained'>Place Your Order</Button>
                  </center>
                </Stack>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
