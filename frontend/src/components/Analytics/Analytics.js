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
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Browser from "./Browser";
import { Divider } from "@mui/material";
import { useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

function Analytics(props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const username = params.get("username");

  const theme = useTheme();
  const themeColor = theme.palette.primary.main;
  const [transitions, setTransitions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [incomeContent, setIncomeContent] = useState([
    "income",
    "expense",
    "profit",
  ]);
  const total = ["$459.1k", "$316.5k", "$147.9k"];
  const less = ["28k", "60k", "36k"];
  const imgs = ["paypal.png", "wallet.png", "chart.png"];
  const [incomeIdx, setIncomeIdx] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/analytics/transitions")
      .then((res) => {
        setTransitions(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/analytics/orders")
      .then((res) => {
        setOrders(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/analytics/browsers/browser")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const incomeBtn = (id) => {
    setIncomeIdx(id);
  };

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
                  <Dropdown className="mb-3 mt-3 year-dropdown">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{ color: themeColor, borderColor: themeColor }}
                      variant="outlined"
                    >
                      2023
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      align="end"
                      className=""
                      style={{ width: "50px!important" }}
                    >
                      <Dropdown.Item
                        // className="py-2"
                        style={{
                          color: "rgba(50, 71, 92, 0.6)",
                          textAlign: "center",
                        }}
                        href="#/action-1"
                      >
                        2022
                      </Dropdown.Item>
                      <Dropdown.Item
                        // className="py-2"
                        style={{
                          color: "rgba(50, 71, 92, 0.6)",
                          textAlign: "center",
                        }}
                        href="#/action-2"
                      >
                        2021
                      </Dropdown.Item>
                      <Dropdown.Item
                        // className="py-2"
                        style={{
                          color: "rgba(50, 71, 92, 0.6)",
                          textAlign: "center",
                        }}
                        href="#/action-3"
                      >
                        2020
                      </Dropdown.Item>
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

                    <DriveFolderUploadOutlinedIcon
                      sx={{
                        color: themeColor,
                        backgroundColor: theme.palette.primary.bgMain,
                        height: "35px",
                        width: "35px",
                        borderRadius: "5px",
                      }}
                    />
                    <div className="d-flex flex-column">
                      <div>2022</div>
                      <div>$41.2k</div>
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
            <Item className="box-padding" style={{ height: "464px" }}>
              <div>
                <div className="d-flex flex-row justify-content-between">
                  <div className="default-dark font-lg">Order Statistics</div>
                  <DropdownButton
                    title=""
                    className="payment-dropdown"
                    align="end"
                  >
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
                <div className="default font-xs mb-4">42.82k Total Sales</div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <div className="default-dark font-lg">8,258</div>
                    <div className="default font-sm mb-4">Total Orders</div>
                  </div>
                  <div className="order total_orders me-3"></div>
                </div>
                <ul style={{ paddingLeft: "0" }}>
                  {orders.map((v, id) => {
                    return (
                      <li
                        key={v._id}
                        className="d-flex flex-row align-items-center justify-content-between mb-3"
                      >
                        <div className="d-flex flex-row gap-3 align-items-center">
                          <img
                            alt="Paypal"
                            src={require(`../../images/cards/${v.img}`)}
                            className="smallIcon"
                          ></img>
                          <div className="d-flex flex-column">
                            <div className="font-sm default">{v.name}</div>
                            <div className="font-sm default-dark">
                              {v.usage}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row gap-3 align-items-center">
                          <div className="font-sm default-dark shrink-flex-1">
                            {v.amount}
                          </div>
                          <div className="font-sm default">{v.unit}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Item>
          </Grid>
          <Grid item className="col-lg-4 col-12">
            <Item className="box-padding" style={{ height: "464px" }}>
              <div className="mb-3">
                {incomeContent.map((v, id) => {
                  return (
                    <Button
                      key={id}
                      style={{
                        color:
                          incomeIdx === id
                            ? "white"
                            : theme.palette.background.pen,
                        backgroundColor:
                          incomeIdx === id
                            ? theme.palette.primary.main
                            : "white",
                      }}
                      onClick={() => {
                        incomeBtn(id);
                      }}
                      className="me-2"
                    >
                      {v}
                    </Button>
                  );
                })}
              </div>
              <Divider />
              <div className="d-flex flex-row gap-3 align-items-center mb-3 mt-2 p-2">
                <img
                  alt="Paypal"
                  src={require(`../../images/cards/${imgs[incomeIdx]}`)}
                  className="smallIcon"
                ></img>
                <div className="d-flex flex-column">
                  <div
                    className="font-sm default"
                    style={{ textTransform: "capitalize" }}
                  >
                    Total {incomeContent[incomeIdx]}
                  </div>
                  <div className="font-sm default-dark">{total[incomeIdx]}</div>
                </div>
              </div>
              <div className="order income mb-2"></div>
              <div className="d-flex flex-row justify-content-center gap-2">
                {/* <img src="" alt="income"></img> */}
                <div>
                  <div
                    className="default-dark font-sm"
                    style={{ textTransform: "capitalize" }}
                  >
                    {incomeContent[incomeIdx]} this week
                  </div>
                  <div className="default font-sm">
                    {less[incomeIdx]} less than last week
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item className="col-lg-4 col-12">
            <Item className="box-padding" style={{ height: "464px" }}>
              <div className="d-flex flex-row justify-content-between mb-3">
                <div className="default-dark font-lg">Transition</div>
                <DropdownButton
                  title=""
                  className="payment-dropdown"
                  align="end"
                >
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
              <ul style={{ paddingLeft: "0" }}>
                {transitions.map((v, id) => {
                  return (
                    <li
                      key={v._id}
                      className="d-flex flex-row align-items-center justify-content-between mb-3"
                    >
                      <div className="d-flex flex-row gap-3 align-items-center">
                        <img
                          alt="Paypal"
                          src={require(`../../images/cards/${v.img}`)}
                          className="smallIcon"
                        ></img>
                        <div className="d-flex flex-column">
                          <div className="font-sm default">{v.name}</div>
                          <div className="font-sm default-dark">{v.usage}</div>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-3 align-items-center">
                        <div className="font-sm default-dark shrink-flex-1">
                          {v.amount}
                        </div>
                        <div className="font-sm default">{v.unit}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
        <Grid container spacing={2}>
          <Grid item className="col-lg-6 col-12">
            <Item className="box-padding" style={{ height: "415px" }}>
              <div className="d-flex flex-row justify-content-between mb-3">
                <div className="default-dark font-lg mb-3">
                  Activity Timeline
                </div>
                <DropdownButton
                  title=""
                  className="payment-dropdown"
                  align="end"
                >
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
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: themeColor }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row gap-3">
                        <div className="d-flex flex-column">
                          <div className="font-sm default-dark">
                            12 Invoices have been paid
                          </div>
                          <div className="font-xs default">
                            Invoices have been paid to the company
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src={require(`../../images/icons/file-icons/pdf.png`)}
                              className="xsIcon"
                            ></img>
                            <div className="font-sm default-dark ms-3">
                              Invoices.pdf
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="default font-sm">12 min ago</div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: themeColor }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row gap-3">
                        <div className="d-flex flex-column">
                          <div className="font-sm default-dark">
                            Client Meeting
                          </div>
                          <div className="font-xs default">
                            Project meeting with john @10:15am
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src={require(`../../images/avatars/3.png`)}
                              className="smallIcon border-circle"
                            ></img>
                            <div className="font-sm default-dark ms-3">
                              Steven Nash (Client)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="default font-sm">12 min ago</div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: themeColor }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row gap-3">
                        <div className="d-flex flex-column">
                          <div className="font-sm default-dark">
                            Create a new project for client
                          </div>
                          <div className="font-xs default"></div>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src={require(`../../images/avatars/5.png`)}
                              className="smallIcon border-circle"
                            ></img>
                            <img
                              src={require(`../../images/avatars/12.png`)}
                              className="smallIcon border-circle"
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="default font-sm">12 min ago</div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Item>
          </Grid>
          <Grid item className="col-lg-6 col-12">
            <Item className="box-padding">
              <Browser items={items} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Analytics;
