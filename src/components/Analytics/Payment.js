import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import "../../App.css";

function Payment(props) {
  return (
    <div style={{ height: "145.289px" }}>
      <div className="d-flex flex-direction-row mb-3">
        <img></img>
        <MoreVertOutlinedIcon />
      </div>
      <p className="mb-2 font-md">{props.value}</p>
      <h5 className="default-dark mb-2 font-lg">$4,679</h5>
      <div className="d-flex flex-direction-row align-items-center default-color">
        {props.isUp ? (
          <>
            <ArrowUpwardOutlinedIcon
              fontSize="xs"
              className="me-2 color-green"
            />
            <div className="color-green">28.14%</div>
          </>
        ) : (
          <>
            <ArrowDownwardOutlinedIcon
              fontSize="xs"
              className="me-2 color-red"
            />
            <div className="color-red">28.14%</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Payment;
