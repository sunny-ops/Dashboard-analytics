import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import "./Analytics.css";

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
      <Box sx={{ flexGrow: 1 }} className="mt-5 default-color">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item
              sx={{ color: "inherit" }}
              className="d-flex flex-direction-row justify-content-between box-padding g-5"
            >
              <div>
                <h4 style={{ color: themeColor }} className="mt-2">
                  Congratulations John!
                </h4>
                <p>
                  You have done 72% more sales today. <br></br>Check your new
                  badge in your profile.
                </p>

                <Button
                  variant="outlined"
                  sx={{ color: themeColor, borderColor: themeColor }}
                  className="mt-3"
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
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2}>
            <Item className="box-padding default-color">
              <div style={{ height: "160px" }}>
                <div className="d-flex flex-direction-row mb-3">
                  <img></img>
                  <MoreVertOutlinedIcon />
                </div>
                <h5 className="mb-2">Sales</h5>
                <h5 className="default-dark mb-2">$4,679</h5>
                <div className="d-flex flex-direction-row">
                  <ArrowUpwardOutlinedIcon />
                  <p>28.14%</p>
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
