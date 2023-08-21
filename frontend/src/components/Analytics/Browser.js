import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import axios from "axios";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function Browser(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;
  const [browserContent, setBrowserContent] = useState([
    "browser",
    "operating system",
    "country",
  ]);
  const [browserIdx, setBrowserIdx] = useState(0);
  const items = props.items;
  const browserBtn = (id) => {
    setBrowserIdx(id);
  };

  // console.log(items[0].name);
  return (
    <div>
      <div className="ms-4 mb-3">
        {browserContent.map((v, id) => {
          return (
            <Button
              key={id}
              style={{
                color:
                  browserIdx === id ? "white" : theme.palette.background.pen,
                backgroundColor:
                  browserIdx === id ? theme.palette.primary.main : "white",
              }}
              onClick={() => {
                browserBtn(id);
              }}
              className="me-2"
            >
              {v}
            </Button>
          );
        })}
      </div>
      <div className="d-flex flex-row justify-content-around default font-sm">
        <div>NO.</div>
        <div style={{ textTransform: "uppercase" }}>
          {browserContent[browserIdx]}
        </div>
        <div>VISITS</div>
        <div>DATA IN PERCENTAGE</div>
      </div>

      {items.map((v, id) => {
        return (
          <div className="d-flex flex-row justify-content-around align-items-baseline default font-sm mb-3">
            <div>{id + 1}</div>
            <div className="d-flex flex-row align-items-center">
              <img
                className="xsIcon me-2"
                src={require(`../../images/cards/${v.img}`)}
              ></img>
              <div>{v.name}</div>
            </div>
            <div>{v.visits}</div>
            <Box sx={{ flexGrow: 0.3 }}>
              <BorderLinearProgress variant="determinate" value={v.percent} />
            </Box>
            <div>{`${v.percent}%`}</div>
          </div>
        );
      })}
      {/* <Box sx={{ flexGrow: 1 }}>
        <br />
        <BorderLinearProgress variant="determinate" value={50} />
      </Box> */}
    </div>
  );
}

export default Browser;
