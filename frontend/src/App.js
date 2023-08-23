import routes from "./route/routes";
import { NavLink, useRoutes, useMatch } from "react-router-dom";

import * as React from "react";
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import "./General.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Footer";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const myTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(3, 195, 236)", // 主题颜色
      bgMain: "rgba(3, 195, 236, 0.16);", //主题bgColor
    },
    background: {
      paper: "#FFFFFF",
      pen: "rgba(50, 71, 92, 0.6)",
    },
  },
});

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openNest, setOpenNest] = React.useState(false);

  const iconMap = {
    email: MailIcon,
    chat: ChatBubbleOutlineOutlinedIcon,
    user: GroupOutlinedIcon,
    invoice: ReceiptOutlinedIcon,
    typography: TextFieldsIcon,
    icons: InsertEmoticonIcon,
    editor: BorderColorIcon,
    calendar: CalendarMonthIcon,
  };

  function renderIcon(iconName) {
    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent />;
    } else {
      console.warn(`Icon named "${iconName}" not found in iconMap`);
      return null;
    }
  }

  const handleClick = () => {
    setOpenNest(!openNest);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const element = useRoutes(routes);

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          open={open}
          // style={{ backgroundColor: "rgb(3, 195, 236)" }}
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              color: "background.pen",
              px: 1,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
              ></ListSubheader>
            }
          >
            <ListItemButton className="round-border" onClick={handleClick}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboards" />
              {openNest ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openNest} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink
                  to="dashboards/analytics"
                  className={({ isActive }) => {
                    return isActive
                      ? "active round-border nav-link"
                      : "default round-border nav-link";
                  }}
                  style={{ "--color": myTheme.palette.primary.main }}
                >
                  <ListItemButton
                    className="round-border"
                    sx={{
                      pl: 4,
                    }}
                  >
                    <ListItemIcon style={{ color: "inherit" }}>
                      <FiberManualRecordIcon fontSize="xs" />
                    </ListItemIcon>
                    <ListItemText primary="Analytics" />
                  </ListItemButton>
                </NavLink>

                <NavLink
                  to="dashboards/crm"
                  className={({ isActive }) => {
                    return isActive
                      ? "active round-border nav-link"
                      : "default round-border nav-link";
                  }}
                  style={{ "--color": myTheme.palette.primary.main }}
                >
                  <ListItemButton className="round-border" sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "inherit" }}>
                      <FiberManualRecordIcon fontSize="xs" />
                    </ListItemIcon>
                    <ListItemText primary="CRM" />
                  </ListItemButton>
                </NavLink>
                <NavLink
                  to="dashboards/ecommerce"
                  className={({ isActive }) => {
                    return isActive
                      ? "active round-border nav-link"
                      : "default round-border nav-link";
                  }}
                  style={{ "--color": myTheme.palette.primary.main }}
                >
                  <ListItemButton className="round-border" sx={{ pl: 4 }}>
                    <ListItemIcon style={{ color: "inherit" }}>
                      <FiberManualRecordIcon fontSize="xs" />
                    </ListItemIcon>
                    <ListItemText primary="Ecommerce" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </List>
          <Divider />
          <div className="px-2">
            <div>
              <div className="default mt-3 ms-3 font-xs">APPS & PAGES</div>
            </div>
            <List sx={{ color: "background.pen" }}>
              {["email", "chat", "user", "invoice"].map((text, index) => (
                <ListItem key={index} disablePadding sx={{ display: "block" }}>
                  <NavLink
                    to={text}
                    className={({ isActive }) => {
                      return isActive
                        ? "active round-border nav-link"
                        : "default round-border nav-link";
                    }}
                    style={{ "--color": myTheme.palette.primary.main }}
                  >
                    <ListItemButton
                      className="round-border"
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {renderIcon(text)}
                      </ListItemIcon>
                      <ListItemText
                        style={{ textTransform: "capitalize" }}
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
          <div className="px-2">
            <div>
              <div className="default mt-3 ms-3 font-xs">USER INTERFACE</div>
            </div>
            <List sx={{ color: "background.pen" }}>
              {["typography", "icons", "editor"].map((text, index) => (
                <ListItem key={index} disablePadding sx={{ display: "block" }}>
                  <NavLink
                    to={text}
                    className={({ isActive }) => {
                      return isActive
                        ? "active round-border nav-link"
                        : "default round-border nav-link";
                    }}
                    style={{ "--color": myTheme.palette.primary.main }}
                  >
                    <ListItemButton
                      className="round-border"
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {renderIcon(text)}
                      </ListItemIcon>
                      <ListItemText
                        style={{ textTransform: "capitalize" }}
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, py: 3 }}
          style={{
            backgroundColor: "#F5F5F9",
            // height: "100vh",
          }}
        >
          <div className="container" style={{ padding: "0" }}>
            <Navbar />
            {element}
            <Footer />
          </div>
        </Box>
        {/* {element} */}
      </Box>
    </ThemeProvider>
  );
}
