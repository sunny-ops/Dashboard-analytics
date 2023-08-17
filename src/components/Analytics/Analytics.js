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

  console.log("main", theme.palette.primary.main);
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
                  src="https://static.vecteezy.com/system/resources/previews/021/449/803/non_2x/cute-girl-with-computer-working-on-laptop-cartoon-icon-illustration-people-technology-icon-concept-art-vector.jpg"
                  class="congrat-img"
                />
              </div>
            </Item>
          </Grid>
          <Grid item className="col-lg-2 col-6">
            <Item className="round-border" sx={{ color: "inherit" }}>
              xs=2
            </Item>
          </Grid>
          <Grid item className="col-lg-2 col-6">
            <Item
              className="box-padding default-color round-border "
              sx={{ color: "inherit" }}
            >
              <Payment value="Sales" isUp={true} />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
        <Grid container spacing={2}>
          <Grid item className="col-lg-8 col-md-12">
            <Item
              sx={{ color: "inherit" }}
              className="d-flex flex-direction-row justify-content-between box-padding g-5 round-border"
            >
              <div>
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
              <div>dd</div>
            </Item>
          </Grid>
          <Grid item className="col-lg-4 col-12">
            <Item className="round-border" sx={{ color: "inherit" }}>
              xs=2
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Analytics;
