import React, { Fragment, useEffect, useState } from "react";
import {
  BsCart3,
  BsDashLg,
  BsFillStarFill,
  BsLifePreserver,
  BsPlusLg,
  BsTruck,
} from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { GoHeartFill, GoStarFill } from "react-icons/go";
import { RatingsAndReviews } from "../components/RatingsAndReviews";
import { QuestionAndAnswer } from "../components/QuestionAndAnswer";
import { FaArrowRotateLeft } from "react-icons/fa6";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IoCloseSharp } from "react-icons/io5";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(size, chest, brand, shoulder, length, sleeve_length) {
  return { size, chest, brand, shoulder, length, sleeve_length };
}

const rows = [
  createData("S", 39.2, "S", 17, 29.5, 25),
  createData("M", 40.8, "M", 17.7, 29.5, 25.5),
  createData("L", 42.4, "L", 18.5, 30.3, 25.9),
  createData("XL", 45.6, "XL", 19.2, 30.7, 26.3),
  createData("XXL", 48.8, "XXL", 20, 31, 26.7),
];
const ProductDetails = (props) => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const [number, setNumber] = useState(1);
 
 
  useEffect(()=>{
    localStorage.setItem("itemcount",number)
  })
  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={props.Close}
      >
        <IoCloseSharp fontSize="small" />
      </IconButton>
    </Fragment>
  );
const[disable,setdisable] = useState([]);
useEffect(()=>{
  let temp=[]
  for(let i=localStorage.getItem('cartlength');i>=0;i--)
  {
      temp.push(localStorage.getItem(`itemurl${i}`))
          
  }
  setdisable(temp)
})
  return (
    <>
      <div class="container-fluid mt-3">
        <div class="row">
          <div class="col-md-8">
            <div class="row mb-3">
              <div class="col-md-5 text-center">
                <div style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    title="Add to wishlist"
                  >
                    <GoHeartFill style={{ marginBottom: "2px" }} />
                  </button>
                </div>
                <img
                  class="img-fluid mb-3"
                  alt=""
                  src={localStorage.getItem("imgurl")}
                />
                <div className="row">
                  <div className="col-sm-12">
                    <img
                      class="btn border border-secondary me-2"
                      width="75"
                      alt="..."
                      src="data:image/webp;base64,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"
                    />
                    <img
                      class="btn border border-secondary me-2"
                      width="75"
                      alt="..."
                      src="data:image/webp;base64,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"
                    />
                    <img
                      class="btn border border-secondary me-2"
                      width="75"
                      alt="..."
                      src="data:image/webp;base64,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"
                    />
                    <img
                      class="btn border border-secondary me-2"
                      width="75"
                      alt="..."
                      src="data:image/webp;base64,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"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <h1 class="h5 d-inline me-2">{localStorage.getItem('productname')}</h1>
                <span class="badge bg-success me-2">New</span>
                <span class="badge bg-danger me-2">Hot</span>
                <div class="mb-3 ">
                  <BsFillStarFill color="#ffc107" className="mx-1" />
                  <BsFillStarFill color="#ffc107" className="mx-1" />
                  <BsFillStarFill color="#ffc107" className="mx-1" />
                  <BsFillStarFill color="#ffc107" className="mx-1" />
                  <BsFillStarFill color="#ffc107" className="mx-1" />|{" "}
                  <span class="text-muted small">42 ratings and 4 reviews</span>
                </div>
                <dl class="row small mb-3">
                  <dt class="col-sm-3">Availability</dt>
                  <dd class="col-sm-9">In stock</dd>
                  <dt class="col-sm-3">Sold by</dt>
                  <dd class="col-sm-9">Authorised Store</dd>
                  <dt class="col-sm-3">Size</dt>
                  <dd class="col-sm-9">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="sizes"
                        disabled=""
                      />
                      <label class="form-check-label" for="sizes">
                        S
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="sizem"
                        disabled=""
                      />
                      <label class="form-check-label" for="sizem">
                        M
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="sizel"
                      />
                      <label class="form-check-label" for="sizel">
                        L
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="sizexl"
                      />
                      <label class="form-check-label" for="sizexl">
                        XL
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="sizexxl"
                      />
                      <label class="form-check-label" for="sizexxl">
                        XXL
                      </label>
                    </div>
                  </dd>
                  <dt class="col-sm-3">Color</dt>
                  <dd class="col-sm-9">
                    <button class="btn btn-sm btn-primary p-2 me-2 mx-1"></button>
                    <button class="btn btn-sm btn-secondary p-2 me-2 mx-1"></button>
                    <button class="btn btn-sm btn-success p-2 me-2 mx-1"></button>
                    <button class="btn btn-sm btn-danger p-2 me-2 mx-1"></button>
                    <button class="btn btn-sm btn-warning p-2 me-2 mx-1"></button>
                    <button class="btn btn-sm btn-info p-2 me-2 mx-1"></button>
                    <button class="btn btn-sm btn-dark p-2 me-2 mx-1"></button>
                  </dd>
                </dl>
                <div class="mb-3">
                  <span class="fw-bold h5 me-2">${localStorage.getItem('productprice')}</span>
                  <del class="small text-muted me-2">${localStorage.getItem('originalprice')}</del>
                  <span class="rounded p-1 bg-warning  me-2 small">{localStorage.getItem('discount')}</span>
                </div>
                <div class="mb-3">
                  <div class="d-inline float-start me-2">
                    <TextField  size='small' style={{width:120}}
                      disabled={disable.includes(localStorage.getItem('imgurl'))?true:false}
                      onChange={(e)=>{
                        setNumber(e.target.value)
                      }}
                      inputProps={{
                        style:{textAlign:'center'}
                      }} 
                      InputProps={{
                        startAdornment:(<Typography component={IconButton}
                          disabled={disable.includes(localStorage.getItem('imgurl'))?true:false}
                          onClick={()=>{
                            let temp=number;
                            temp--;
                            setNumber(temp <= 0 ? 0 : temp);
                          }}
                        ><BsDashLg/></Typography>),
                        endAdornment:(<Typography component={IconButton}
                          disabled={disable.includes(localStorage.getItem('imgurl'))?true:false}
                          onClick={()=>{
                            let temp = number;
                            temp++;
                            setNumber(temp)
                          }}                          
                        ><BsPlusLg/></Typography>)
                      }} 
                      value={number} />
                  </div>
                  <Snackbar
                    open={props.openvalue}
                    autoHideDuration={4000}
                    onClose={props.Close}
                    message="Successfully Added!"
                    action={action}
                  />
                  <Stack direction={'row'} spacing={2}>
                  <Button startIcon={<FaCartPlus />} 
                  disabled={disable.includes(localStorage.getItem('imgurl'))?true:false}
                  onClick={props.Click}
                  variant="contained">Add to Cart
                  </Button>
                    
                  </Stack>
                </div>
                <div>
                  <p class="fw-bold mb-2 small">Product Highlights</p>
                  <ul class="small">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                    <li>Cras consequat felis ut vulputate porttitor.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="lab API tabs example"
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                      
                      >
                        <Tab label="Details" value="1" />
                        <Tab label="Rating & Reviews" value="2" />
                        <Tab label="Question and Answers" value="3" />
                        <Tab label="Shipping & Returns" value="4" />
                        <Tab label="Size Chart" value="5" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Typography>
                      <details>
                        <Typography component={"summary"}>
                          Even more details
                        </Typography>
                        <p>Here are even more details about the details.</p>
                      </details>
                      <details>
                        <summary>Even more details</summary>
                        <p>Here are even more details about the details.</p>
                      </details>
                      <hr />
                      <dl>
                        <dt>Description lists</dt>
                        <dd>
                          A description list is perfect for defining terms.
                        </dd>
                        <dt>Euismod</dt>
                        <dd>
                          Vestibulum id ligula porta felis euismod semper eget
                          lacinia odio sem.
                        </dd>
                        <dd>
                          Donec id elit non mi porta gravida at eget metus.
                        </dd>
                        <dt>Malesuada porta</dt>
                        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                      </dl>
                    </TabPanel>
                    <TabPanel value="2">
                      <RatingsAndReviews
                        username="Certified Buyer"
                        msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        date="15 October 2020"
                        thumbsup="10"
                        thumbsdown="5"
                      />
                      <RatingsAndReviews
                        username="Certified Buyer"
                        msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        date="15 October 2020"
                        thumbsup="10"
                        thumbsdown="5"
                      />
                      <RatingsAndReviews
                        username="Certified Buyer"
                        msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        date="15 October 2020"
                        thumbsup="10"
                        thumbsdown="5"
                      />
                      <RatingsAndReviews
                        username="Certified Buyer"
                        msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        date="15 October 2020"
                        thumbsup="10"
                        thumbsdown="5"
                      />
                      <RatingsAndReviews
                        username="Certified Buyer"
                        msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        date="15 October 2020"
                        thumbsup="10"
                        thumbsdown="5"
                      />
                    </TabPanel>
                    <TabPanel value="3">
                      <QuestionAndAnswer
                        question="Will there be any price cut within one month?"
                        answer="Dont know but can hope for it."
                        user="Venks"
                        date="12 January, 2020"
                      />
                      <QuestionAndAnswer
                        question="Will there be any price cut within one month?"
                        answer="Dont know but can hope for it."
                        user="Venks"
                        date="12 January, 2020"
                      />
                      <QuestionAndAnswer
                        question="Will there be any price cut within one month?"
                        answer="Dont know but can hope for it."
                        user="Venks"
                        date="12 January, 2020"
                      />
                      <QuestionAndAnswer
                        question="Will there be any price cut within one month?"
                        answer="Dont know but can hope for it."
                        user="Venks"
                        date="12 January, 2020"
                      />
                      <QuestionAndAnswer
                        question="Will there be any price cut within one month?"
                        answer="Dont know but can hope for it."
                        user="Venks"
                        date="12 January, 2020"
                      />
                    </TabPanel>
                    <TabPanel value="4">
                      <p>
                        Your order of 100$ or more gets free standard delivery.
                      </p>
                      <ul>
                        <li>Standard delivered 4-5 Business Days</li>
                        <li>Express delivered 2-4 Business Days</li>
                      </ul>
                      <p>
                        Orders are processed and delivered Monday-Friday
                        (excluding public holidays)
                      </p>
                      <p>
                        No Returns/Replacements Allowed - Returns or
                        replacements are not accepted by seller for this
                        product. Cancellation allowed.
                      </p>
                    </TabPanel>
                    <TabPanel value="5">
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow align="space-between">
                              <StyledTableCell>Size</StyledTableCell>
                              <StyledTableCell>Chest</StyledTableCell>
                              <StyledTableCell>Brand Size</StyledTableCell>
                              <StyledTableCell>Shoulder</StyledTableCell>
                              <StyledTableCell>Length</StyledTableCell>
                              <StyledTableCell>Sleeve Length</StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.size}
                                </StyledTableCell>
                                <StyledTableCell>{row.chest}</StyledTableCell>
                                <StyledTableCell>{row.brand}</StyledTableCell>
                                <StyledTableCell>
                                  {row.shoulder}
                                </StyledTableCell>
                                <StyledTableCell>{row.length}</StyledTableCell>
                                <StyledTableCell>
                                  {row.sleeve_length}
                                </StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                  </TabContext>
                </Box>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3">
              <div class="card-header fw-bold text-uppercase">
                Featured Products
              </div>
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <img
                      src="data:image/webp;base64,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"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-capitalize mb-1">
                      <a class="text-decoration-none" href="/product/detail">
                        Great product name goes here
                      </a>
                    </h6>
                    <div class="mb-2">
                      <GoStarFill className="text-warning me-1" />
                      <GoStarFill className="text-warning me-1" />
                      <GoStarFill className="text-warning me-1" />
                      <GoStarFill className="text-warning me-1" />
                    </div>
                    <span class="fw-bold h5">$180</span>
                    <del class="small text-muted ms-2">$200</del>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <img
                      src="data:image/webp;base64,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"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-capitalize mb-1">
                      <a class="text-decoration-none" href="/product/detail">
                        Great product name goes here
                      </a>
                    </h6>
                    <div class="mb-2">
                      <GoStarFill className="text-warning me-1" />
                      <GoStarFill className="text-warning me-1" />
                      <GoStarFill className="text-warning me-1" />
                    </div>
                    <span class="fw-bold h5">$475</span>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <img
                      class="img-fluid"
                      alt="..."
                      src="data:image/webp;base64,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"
                    />
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-capitalize mb-1">
                      <a class="text-decoration-none" href="/product/detail">
                        Great product name goes here
                      </a>
                    </h6>
                    <div class="mb-2">
                      <GoStarFill className="text-warning me-1" />
                      <GoStarFill className="text-warning me-1" />
                    </div>
                    <span class="fw-bold h5">$1900</span>
                    <del class="small text-muted ms-2">$2000</del>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-md-4">
                    <img
                      src="data:image/webp;base64,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"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-capitalize mb-1">
                      <a class="text-decoration-none" href="/product/detail">
                        Great product name goes here
                      </a>
                    </h6>
                    <div class="mb-2"></div>
                    <span class="fw-bold h5">$10</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header fw-bold text-uppercase">
                Custom Service
              </div>
              <div class="card-body">
                <div class="row border-bottom">
                  <div class="col-2">
                    <BsTruck size={40} />
                  </div>
                  <div class="col">
                    <div class="ms-3">
                      <span class="fw-bold">Free Delivery</span>
                      <p class="text-muted small">From $59.89</p>
                    </div>
                  </div>
                </div>
                <div class="row border-bottom py-3">
                  <div class="col-2">
                    <BsLifePreserver size={40} />
                  </div>
                  <div class="col">
                    <div class="ms-3">
                      <span class="fw-bold">Support 24/7</span>
                      <p class="text-muted small m-0">Online 24 hours</p>
                    </div>
                  </div>
                </div>
                <div class="row pt-3">
                  <div class="col-2">
                    <FaArrowRotateLeft size={40} />
                  </div>
                  <div class="col">
                    <div class="ms-3">
                      <span class="fw-bold">Free return</span>
                      <p class="text-muted small m-0">365 a day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
