import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

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
      <Box className="mt-5 default">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item sx={{ color: "inherit" }}>
              <div>
                <h5 style={{ color: themeColor }}>Congratulations John!</h5>
                <p>
                  You have done 72% more sales today. Check your new badge in
                  your profile.
                </p>
                <Button
                  variant="outlined"
                  sx={{ color: themeColor, borderColor: themeColor }}
                >
                  View Badges
                </Button>
              </div>
              <div></div>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Analytics;
