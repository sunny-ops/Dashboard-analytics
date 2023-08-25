import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Components(props) {
  return (
    <Box sx={{ flexGrow: 1 }} className="mt-4 default-color">
      <Grid container spacing={2}>
        <Grid item className="col-lg-6 col-12">
          <Item sx={{ color: "inherit" }} className="round-border">
            <div>Accordion</div>
          </Item>
        </Grid>
        <Grid item className="col-lg-6 col-12">
          <Item className="round-border" sx={{ color: "inherit" }}>
            haha
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Components;
