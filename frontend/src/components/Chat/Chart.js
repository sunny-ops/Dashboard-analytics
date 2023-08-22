import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../../General.css";

function Chat(props) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;
  const items = ["inbox", "sent", "draft", "starred", "spam", "trash"];
  const iconMap = {
    inbox: ArchiveOutlinedIcon,
    sent: UnarchiveOutlinedIcon,
    draft: ModeEditOutlinedIcon,
    starred: StarBorderOutlinedIcon,
    spam: ReportGmailerrorredOutlinedIcon,
    trash: DeleteOutlineOutlinedIcon,
  };
  const labels = ["personal", "company", "important", "private"];

  function renderIcon(iconName) {
    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent />;
    } else {
      console.warn(`Icon named "${iconName}" not found in iconMap`);
      return null;
    }
  }
  return (
    <div
      className="default round-border mt-3 d-flex flex-row"
      style={{ height: "100vh" }}
    >
      <div
        className="col-3 box-padding"
        style={{
          borderRight: "1px solid rgba(50, 71, 92, 0.12)",
        }}
      >
        <div
          className="d-flex gap-3 align-items-center py-3"
          style={{ borderBottom: "1px solid rgba(50, 71, 92, 0.12)" }}
        >
          <img
            src={require("../../images/avatars/1.png")}
            className="portrait-sm"
          />
          <div
            className="round-border p-1"
            style={{
              border: "2px solid",
              borderColor: theme.palette.primary.main,
              flexGrow: "1",
            }}
          >
            <SearchOutlinedIcon />
          </div>
        </div>
        {items.map((v, id) => {
          return (
            <NavLink
              key={id}
              to={v}
              className={({ isActive }) => {
                return isActive
                  ? "active round-border nav-link"
                  : "default round-border nav-link";
              }}
              style={{ "--color": theme.palette.primary.main }}
            >
              <div className="d-flex justify-content-center">
                <div
                  key={id}
                  className="d-flex flex-row justify-content-start align-items-center py-2 gap-3"
                  style={{ width: "80%" }}
                >
                  {renderIcon(v)}
                  <div
                    className="font-md"
                    style={{ textTransform: "capitalize" }}
                  >
                    {v}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
        <div className="d-flex justify-content-center mt-3 mb-2">
          <div style={{ width: "80%" }} className="default">
            Labels
          </div>
        </div>
        {labels.map((v, id) => {
          return (
            <NavLink
              key={id}
              to={v}
              className={({ isActive }) => {
                return isActive
                  ? "active round-border nav-link"
                  : "default round-border nav-link";
              }}
              style={{ "--color": theme.palette.primary.main }}
            >
              <div key={id} className="d-flex justify-content-center">
                <div
                  className="d-flex flex-row justify-content-start align-items-center py-2 gap-3"
                  style={{ width: "80%" }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "16px" }} />
                  <div
                    className="font-md"
                    style={{ textTransform: "capitalize" }}
                  >
                    {v}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>

      <div className="col-9">
        <Outlet />
      </div>
    </div>
  );
}

export default Chat;
