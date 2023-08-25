import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useTheme } from "@mui/material/styles";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";

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
        <DropdownButton title="" className="image-dropdown myProfile">
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row mb-2 ">
              <div className="myImg me-3"></div>
              <div>
                <div className="default-dark font-sm">Sunny</div>
                <div className=" font-xs">Admin</div>
              </div>
            </div>
            <Divider />
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row p-2 gap-3">
              <PersonOutlineIcon />
              <div>Profile</div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row p-2 gap-3">
              <ChatBubbleOutlineIcon />
              <div>Chat</div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row p-2 gap-3">
              <MailOutlineIcon />
              <div>Inbox</div>
            </div>
          </Dropdown.Item>
          <Divider />
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row p-2 gap-3">
              <SettingsIcon />
              <div>Settings</div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row p-2 gap-3">
              <MonetizationOnOutlinedIcon />
              <div>Pricing</div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row p-2 gap-3">
              <LiveHelpOutlinedIcon />
              <div>FAQ</div>
            </div>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default Navbar;
