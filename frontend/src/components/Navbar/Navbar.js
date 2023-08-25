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
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { NavLink, useRoutes, useMatch } from "react-router-dom";

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
      <div className="d-flex justify-content-end align-items-center px-3 gap-3">
        {/* <DarkModeOutlinedIcon fontSize="medium" /> */}
        {/* <GridViewOutlinedIcon fontSize="medium" /> */}
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <DarkModeOutlinedIcon className="default" fontSize="medium" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-3" align="end">
            <div className="default font-md mb-3" style={{ fontWeight: "600" }}>
              Primary Color
            </div>
            <Divider />
            <div className="d-flex flex-row gap-2 mt-3">
              <div className="color-div blue"></div>
              <div className="color-div gray"></div>
              <div className="color-div green"></div>
              <div className="color-div red"></div>
              <div className="color-div orange"></div>
              <div className="color-div purple"></div>
            </div>

            <Divider />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <GridViewOutlinedIcon className="default" fontSize="medium" />
          </Dropdown.Toggle>

          <Dropdown.Menu
            className="py-3"
            style={{ width: "300px" }}
            align="end"
          >
            <div className="d-flex flex-row justify-content-between align-items-center mb-3 mx-3">
              <div className="default font-md " style={{ fontWeight: "600" }}>
                Shortcuts
              </div>
              <AddCircleOutlineOutlinedIcon className="default-color" />
            </div>

            <Divider />

            <div className="d-flex flex-row">
              <Dropdown.Item
                style={{ color: "rgba(50, 71, 92, 0.6)" }}
                href="#"
              >
                <NavLink to="email/inbox" style={{ color: "inherit" }}>
                  <div
                    className="box-padding d-flex flex-column justify-content-center align-items-center"
                    style={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}
                  >
                    <div className="icon-background d-flex justify-content-center align-items-center mb-2">
                      <MailOutlineIcon />
                    </div>
                    <div>Email</div>
                  </div>
                </NavLink>
              </Dropdown.Item>

              <Dropdown.Item
                style={{ color: "rgba(50, 71, 92, 0.6)" }}
                href="#"
              >
                <NavLink to="chat" style={{ color: "inherit" }}>
                  <div className="box-padding d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-background d-flex justify-content-center align-items-center mb-2">
                      <ChatBubbleOutlineIcon />
                    </div>
                    <div>Chat</div>
                  </div>
                </NavLink>
              </Dropdown.Item>
            </div>
            <Divider />
            <div className="d-flex flex-row">
              <Dropdown.Item
                style={{ color: "rgba(50, 71, 92, 0.6)" }}
                href="#"
              >
                <NavLink to="user" style={{ color: "inherit" }}>
                  <div
                    className="box-padding d-flex flex-column justify-content-center align-items-center"
                    style={{
                      borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    <div className="icon-background d-flex justify-content-center align-items-center mb-2">
                      <PeopleAltOutlinedIcon />
                    </div>
                    <div>User</div>
                  </div>
                </NavLink>
              </Dropdown.Item>

              <Dropdown.Item
                style={{ color: "rgba(50, 71, 92, 0.6)" }}
                href="#"
              >
                <NavLink to="invoice" style={{ color: "inherit" }}>
                  <div
                    className="box-padding d-flex flex-column justify-content-center align-items-center"
                    style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
                  >
                    <div className="icon-background d-flex justify-content-center align-items-center mb-2">
                      <ReceiptOutlinedIcon />
                    </div>
                    <div>Invoice</div>
                  </div>
                </NavLink>
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <NotificationsNoneOutlinedIcon
              className="default"
              fontSize="medium"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-3" align="end">
            <div className="mb-3 default font-md" style={{ fontWeight: "600" }}>
              Notifications
            </div>
            <Divider />
            <Dropdown.Item
              style={{ color: "rgba(50, 71, 92, 0.6)" }}
              href="#"
              className="p-0 py-2"
            >
              <div className="d-flex flex-row mb-2 align-items-center gap-2  ">
                <div className="myImg img1 me-3"></div>
                <div>
                  <div className="default-dark font-sm">
                    Congratulations, Sunny
                  </div>
                  <div className=" font-xs">
                    Won the monthly best student badge
                  </div>
                </div>
                {/* <div className="font-xs">Today</div> */}
              </div>
              <Divider />
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "rgba(50, 71, 92, 0.6)", padding: 0 }}
              href="#"
              className="p-0 py-2"
            >
              <div className="d-flex flex-row mb-2 align-items-center gap-2 ">
                <div className="myImg img2 me-3"></div>
                <div>
                  <div className="default-dark font-sm">
                    New Message Received!
                  </div>
                  <div className=" font-xs">You have 10 unread messages</div>
                </div>
              </div>
              <Divider />
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "rgba(50, 71, 92, 0.6)", padding: 0 }}
              href="#"
              className="p-0 py-2"
            >
              <div className="d-flex flex-row mb-2 align-items-center gap-2  ">
                <div className="myImg img3 me-3"></div>
                <div>
                  <div className="default-dark font-sm">
                    New User Registered!
                  </div>
                  <div className=" font-xs">5 hours age</div>
                </div>
                {/* <div className="font-xs">Yesterday</div> */}
              </div>
              <Divider />
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "rgba(50, 71, 92, 0.6)", padding: 0 }}
              href="#"
              className="p-0 py-2"
            >
              <div className="d-flex flex-row mb-2 align-items-center gap-2  ">
                <div className="myImg img4 me-3"></div>
                <div>
                  <div className="default-dark font-sm">Received Order</div>
                  <div className=" font-xs">New order received from John</div>
                </div>
              </div>
              <Divider />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <DropdownButton
          title=""
          className="image-dropdown myProfile"
          align="end"
        >
          <Dropdown.Item style={{ color: "rgba(50, 71, 92, 0.6)" }} href="#">
            <div className="d-flex flex-row mb-2 ">
              <div className="myImg me-3"></div>
              <div>
                <div
                  className="default-color font-sm"
                  style={{ fontWeight: "600" }}
                >
                  Sunny
                </div>

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
