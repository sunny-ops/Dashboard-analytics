import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useTheme } from "@mui/material/styles";
import "./Navbar.css";

function Navbar(props) {
  const theme = useTheme();

  // 现在你可以使用 theme 变量来获取主题的值
  // console.log("main", theme.palette.primary.main);
  return (
    <div className="d-flex justify-content-between align-items-center navbarDiv default">
      <div className="d-flex align-items-center gap-3 px-3">
        <SearchOutlinedIcon fontSize="medium" />
        <div style={{ fontSize: "1.2rem" }}>Search (Ctrl+/)</div>
      </div>
      <div className="d-flex justify-content-end gap-3 align-items-center px-3">
        <DarkModeOutlinedIcon fontSize="medium" />
        <GridViewOutlinedIcon fontSize="medium" />
        <NotificationsNoneOutlinedIcon fontSize="medium" />
        <div className="MuiAvatar-root MuiAvatar-circular css-1o3owhp">
          <img
            alt="John Doe"
            src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?fit=5184%2C3456&ssl=1"
            className="MuiAvatar-img css-1hy9t21"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
