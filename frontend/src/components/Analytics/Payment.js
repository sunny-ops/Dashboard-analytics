import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../../App.css";

function Payment(props) {
  // console.log(props.imgName);
  return (
    <div style={{ height: "145.289px" }}>
      <div className="d-flex flex-direction-row mb-3 justify-content-between">
        <img
          alt="Payment"
          src={require(`../../images/cards/${props.imgName}`)}
          className="smallIcon"
        ></img>
        <DropdownButton title="" className="payment-dropdown">
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            Refresh
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            Share
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            Update
          </Dropdown.Item>
        </DropdownButton>
        {/* <MoreVertOutlinedIcon /> */}
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
