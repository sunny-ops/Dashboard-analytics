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

function Email(props) {
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
        <div className="d-flex justify-content-center mt-3 mb-3">
          <Button
            style={{
              color: "white",
              backgroundColor: themeColor,
              width: "80%",
            }}
            variant="contained"
            className="px-5 font-md"
          >
            Compose
          </Button>
        </div>
        {items.map((v, id) => {
          return (
            <NavLink
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
                    className="default-color font-md"
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
            <div className="d-flex justify-content-center">
              <div
                key={id}
                className="d-flex flex-row justify-content-start align-items-center py-2 gap-3"
                style={{ width: "80%" }}
              >
                <FiberManualRecordIcon sx={{ fontSize: "16px" }} />
                <div
                  className="default font-md"
                  style={{ textTransform: "capitalize" }}
                >
                  {v}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="col-9">
        <Outlet />
      </div>
    </div>
  );
}

export default Email;
