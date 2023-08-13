import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div
      className="d-flex justify-content-end gap-3 align-items-center"
      style={{ width: "100%" }}
    >
      <DarkModeOutlinedIcon fontSize="medium" />
      <GridViewOutlinedIcon fontSize="medium" />
      <NotificationsNoneOutlinedIcon fontSize="medium" />
      <div class="MuiAvatar-root MuiAvatar-circular css-1o3owhp">
        <img
          alt="John Doe"
          src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?fit=5184%2C3456&ssl=1"
          class="MuiAvatar-img css-1hy9t21"
        />
      </div>
    </div>
  );
}

export default Navbar;
