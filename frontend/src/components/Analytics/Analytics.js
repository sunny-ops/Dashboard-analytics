import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Analytics.css";
import Payment from "./Payment";
import RevenueBar from "./RevenueBar";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

function Analytics(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
        <Grid container spacing={2}>
          <Grid item className="col-lg-8 col-md-12">
            <Item
              sx={{ color: "inherit" }}
              className="d-flex flex-direction-row justify-content-between box-padding g-5 round-border"
            >
              <div>
                <h4 style={{ color: themeColor }} className="mt-2 font-lg">
                  Congratulations John!
                </h4>
                <p className="font-sm">
                  You have done 72% more sales today. <br></br>Check your new
                  badge in your profile.
                </p>

                <Button
                  variant="outlined"
                  sx={{ color: themeColor, borderColor: themeColor }}
                  className="font-sm"
                >
                  View Badges
                </Button>
              </div>
              <div>
                <img
                  alt="Congratulations John"
                  src={require("../../images/cards/illustration-john-light.png")}
                  className="congrat-img me-5"
                />
              </div>
            </Item>
          </Grid>
          <Grid item className="col-lg-2 col-6">
            <Item className="round-border" sx={{ color: "inherit" }}>
              <div className="default font-md ms-2">Order</div>
              <div className="default-dark font-lg ms-2">276K</div>
              <div className="order"></div>
            </Item>
          </Grid>
          <Grid item className="col-lg-2 col-6">
            <Item
              className="box-padding default-color round-border "
              sx={{ color: "inherit" }}
            >
              <Payment
                value="Sales"
                isUp={true}
                imgName="stats-vertical-wallet.png"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
        <Grid container spacing={2}>
          <Grid item className="col-lg-8 col-12">
            <Item
              sx={{
                color: "inherit",
                height: "429px",
                paddingTop: "30px!important",
              }}
              className="d-flex flex-direction-row justify-content-between box-padding g-5 round-border"
            >
              <div style={{ width: "65%" }}>
                <p className="default-dark font-lg">Total Revenue</p>
                <div className="d-flex flex-direction-row align-items-center mb-2">
                  <div className="me-2">
                    <FiberManualRecordIcon
                      fontSize="xs"
                      className="me-2"
                      style={{ color: themeColor }}
                    />
                    2023
                  </div>
                  <div>
                    <FiberManualRecordIcon
                      fontSize="xs"
                      className="me-2"
                      style={{ color: themeColor }}
                    />
                    2022
                  </div>
                </div>
                <div>
                  <RevenueBar />
                </div>
              </div>
              <div className="flex-grow-1 m-3">
                <div className="d-flex flex-column align-items-center">
                  <Dropdown className="mb-3 mt-3">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{ color: themeColor, borderColor: themeColor }}
                      variant="outlined"
                    >
                      2023
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2021</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">2020</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div
                    className="order growth mb-3"
                    style={{ width: "100%" }}
                  ></div>
                  <div className="default font-sm mb-3">62% Company Growth</div>
                  <div className="d-flex flex-row align-items-center gap-2">
                    <AttachMoneyOutlinedIcon
                      sx={{
                        color: themeColor,
                        backgroundColor: theme.palette.primary.bgMain,
                        height: "35px",
                        width: "35px",
                        borderRadius: "5px",
                      }}
                    />
                    <div className="d-flex flex-column">
                      <div>2023</div>
                      <div>$32.5k</div>
                    </div>

                    <AttachMoneyOutlinedIcon
                      sx={{
                        color: themeColor,
                        backgroundColor: theme.palette.primary.bgMain,
                        height: "35px",
                        width: "35px",
                        borderRadius: "5px",
                      }}
                    />
                    <div className="d-flex flex-column">
                      <div>2023</div>
                      <div>$32.5k</div>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item className="col-lg-4 col-12">
            <Item
              className="round-border"
              sx={{
                color: "inherit",
                boxShadow: "none",
                backgroundColor: "rgb(245, 245, 249)",
                padding: "0",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <Item
                      className="box-padding default-color round-border "
                      sx={{ color: "inherit" }}
                    >
                      <Payment
                        value="Payments"
                        isUp={false}
                        imgName="stats-vertical-paypal.png"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item className="round-border" sx={{ color: "inherit" }}>
                      <div className="default font-md ms-2">Revenue</div>
                      <div className="default-dark font-lg ms-2">425K</div>
                      <div className="order revenue"></div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item
                      className="round-border"
                      style={{ marginTop: "12px" }}
                    >
                      <div className="d-flex flex-direction-row box-padding justify-content-between align-items-center">
                        <div>
                          <div className="default-dark font-md mb-3">
                            Profit Report
                          </div>
                          <Button
                            variant="contained"
                            className="mb-3"
                            sx={{
                              backgroundColor: "rgba(255, 171, 0, 0.16)",
                              color: "rgb(255, 171, 0)",
                              boxShadow: "none",
                            }}
                          >
                            Year 2023
                          </Button>
                          <div className="d-flex flex-direction-row align-items-center mb-2">
                            <ArrowUpwardOutlinedIcon
                              fontSize="xs"
                              className="me-2 color-green"
                            />
                            <div className="color-green">28.14%</div>
                          </div>
                          <div className="default-dark font-lg">$84,686k</div>
                        </div>
                        <div
                          className="order profit"
                          style={{ width: "250px" }}
                        ></div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
        <Grid container spacing={2}>
          <Grid item className="col-lg-4 col-12">
            <Item>xs=4</Item>
          </Grid>
          <Grid item className="col-lg-4 col-12">
            <Item>xs=4</Item>
          </Grid>
          <Grid item className="col-lg-4 col-12">
            <Item className="box-padding">
              <div className="d-flex flex-row justify-content-between">
                <div className="default-dark font-lg">Transition</div>
                <DropdownButton title="" className="payment-dropdown">
                  <Dropdown.Item
                    style={{ color: "rgba(50, 71, 92, 0.6)" }}
                    href="#"
                  >
                    Refresh
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "rgba(50, 71, 92, 0.6)" }}
                    href="#"
                  >
                    Share
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ color: "rgba(50, 71, 92, 0.6)" }}
                    href="#"
                  >
                    Update
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row gap-3 align-items-center">
                    <img
                      alt="Paypal"
                      src={require(`../../images/cards/stats-vertical-paypal.png`)}
                      className="smallIcon"
                    ></img>
                    <div className="d-flex flex-column">
                      <div className="font-sm default">Paypal</div>
                      <div className="font-sm default-dark">Send Money</div>
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-3 align-items-center">
                    <div className="font-sm default-dark shrink-flex-1">82</div>
                    <div className="font-sm default">USD</div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Analytics;
