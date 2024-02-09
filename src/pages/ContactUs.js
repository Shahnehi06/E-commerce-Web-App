import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { IoPerson } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaRegBuilding } from "react-icons/fa";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,

  FormLabel,



  Paper,
  Stack,
  TextField,

  Typography,
} from "@mui/material";
import { Button } from "@mui/material";

export const ContactUs = () => {
  return (
    <>
      <div class="container my-3">
        <div class="row g-3">
          <div class="col-md-8">
            <div class="card">
              <Card>
                <CardHeader style={{backgroundColor:'#ebf6f1'}}  avatar={<SlEnvolope />} title={<Typography color={'inherit'} fontSize={15} component={Button}>Send Message</Typography>} />
                <CardContent>
                  <Stack direction={'column'} spacing={3}>
                    <Stack direction={"row"} spacing={5}>
                      <Stack direction={'row'}>
                            <TextField
                            size="small"
                              name="name"
                              type="text"
                              label="Name"
                              placeholder="Your full name"
                              
                              required=""
                              pattern="[a-zA-Z\s]*"
                              maxlength="50"
                              id="name"
                              
                            />
                      </Stack>
                      <Stack direction={'row'}>
                          <TextField
                          size='small'
                            name="company"
                            type="text"
                            label="Company"
                            placeholder="Your company name"
                            
                            required=""
                            maxlength="50"
                            id="company"
                            
                          />
                      </Stack>
                    </Stack>
                    <Stack direction={"row"} spacing={5}>
                      <Stack direction={'row'}>
                            <TextField
                            size="small"
                              name="mobile no"
                              type="number"
                              label="Mobile Number"
                              placeholder="ex:-1234567890"
                              required=""
                              maxlength="10"
                              id="phoneNo"
                            />
                      </Stack>
                      <Stack direction={'row'}>
                          <TextField
                          size='small'
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="ex:email@example.com"
                            
                            required=""
                            maxlength="50"
                            id="company"
                            
                          />
                      </Stack>
                    </Stack>
                    <Stack>

                      <TextField
                        fullWidth
                        label='Message'
                        placeholder="What you are looking for?"
                        multiline
                        rows={8}
                        maxRows={8}
                      />  
                    <Stack className="my-3">
                    <FormLabel for="informed">
                      <Checkbox/>
                      Keep me informed via email or phone about its Products and
                      Services.
                    </FormLabel>                      
                    </Stack>
                    <Stack>
                      <Button className="mx-auto">
                        <Button className="mx-auto">
                          <Button className="mx-auto" variant="contained">
                            Submit
                          </Button>
                        </Button>
                      </Button>
                    </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3">
              <Paper>
                <Card>
                  <CardHeader avatar={<FaRegBuilding />} style={{backgroundColor:'#ebf6f1'}} title="Address" />
                <CardContent>
                  <Typography className="mx-3">
                    <Typography
                      variant="h6"
                      className="card-title border-bottom border-dark pb-2"
                    > <b className="pb-2" style={{ fontSize: '16px' }}> Head Office</b>
                    
                    </Typography>
                    <br />
                    <strong>Twitter, Inc.</strong>
                    <br />
                    1355 Market St, Suite 900
                    <br />
                    San Francisco, CA 94103
                    <br />
                    <BsTelephone /> P:(123) 456-7890
                    <br />
                    <br />
                    <Typography
                      variant="h6"
                      className="card-title border-bottom border-dark pb-2 "
                      > <b className="pb-2" style={{ fontSize: '16px' }}> Development Office</b>
                    
                    </Typography>
                    <br />
                    <strong>Twitter, Inc.</strong>
                    <br />
                    1355 Market St, Suite 900
                    <br />
                    San Francisco, CA 94103
                    <br />
                    <BsTelephone /> P:(123) 456-7890
                  </Typography>
                </CardContent>

                    </Card>
                </Paper>
            </div>
            <div class="card">
              <Card>
                <iframe 
                style={{width:window.screen.width < 400 ? window.screen.width : 420,border:0}}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313635.5491853188!2d-122.57606416467848!3d37.20933611930123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c67b3754d%3A0xb42714f3436732f2!2s1355%20Market%20St%20%23900%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1599193189366!5m2!1sen!2sin"
                  height="300"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  title="Location"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
