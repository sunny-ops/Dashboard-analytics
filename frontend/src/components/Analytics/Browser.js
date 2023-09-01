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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

function Browser(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;
  const [browserContent, setBrowserContent] = useState([
    "browser",
    "system",
    "country",
  ]);
  const [browserIdx, setBrowserIdx] = useState(0);
  // const items = props.items;
  const [items, setItems] = useState(props.items);

  useEffect(() => {
    axios
      .get("/api/analytics/browsers/browser")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const browserBtn = (id) => {
    setBrowserIdx(id);
    axios
      .get(`/api/analytics/browsers/${browserContent[id]}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

      <div className="d-flex flex-row justify-content-around default font-sm mb-3">
        <div>NO.</div>
        <div style={{ textTransform: "uppercase" }}>
          {browserContent[browserIdx]}
        </div>
        <div>VISITS</div>
        <div>DATA IN PERCENTAGE</div>
      </div>

      {items.map((v, id) => {
        return (
          <div
            key={v._id}
            className="d-flex flex-row justify-content-around align-items-baseline default font-sm mb-3"
          >
            <div style={{ width: "10px" }}>{id + 1}</div>
            <div className="d-flex flex-row align-items-center">
              <img
                className="xsIcon me-2"
                src={require(`../../images/cards/${v.img}`)}
              ></img>
              <div style={{ width: "70px" }}>{v.name}</div>
            </div>
            <div style={{ widht: "50px" }}>{v.visits}</div>
            <div className="d-flex flex-row align-items-center">
              <Box sx={{ width: "100px" }} className="me-3">
                <BorderLinearProgress variant="determinate" value={v.percent} />
              </Box>
              <div style={{ width: "50px" }}>{`${v.percent}%`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Browser;
