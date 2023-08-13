import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="d-flex justify-content-between align-items-center navbarDiv">
      <div className="d-flex align-items-center gap-3">
        <SearchOutlinedIcon fontSize="medium" />
        <div style={{ color: "rgba(50, 71, 92, 0.38)", fontSize: "1.2rem" }}>
          Search (Ctrl+/)
        </div>
      </div>
      <div className="d-flex justify-content-end gap-3 align-items-center px-3">
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
    </div>
  );
}

export default Navbar;
