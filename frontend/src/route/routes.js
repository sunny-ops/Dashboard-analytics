import { Navigate } from "react-router-dom";
import Analytics from "../components/Analytics/Analytics";
import CRM from "../components/CRM/CRM";
import Ecommerce from "../components/Ecommerce/Ecommerce";
import Email from "../components/Email/Email";
import Chat from "../components/Chat/Chart";
import Content from "../components/Email/Content";
import User from "../components/User/User";
import Invoice from "../components/Invoice/Invoice";
import Calendar from "../components/UserInterface/Calendar";
import Editor from "../components/UserInterface/Editor";
import Icons from "../components/UserInterface/Icons";
import Typography from "../components/UserInterface/Typography";
import LineChart from "../components/Charts/LineChart";
import BarChart from "../components/Charts/BarChart";
import AreaChart from "../components/Charts/AreaChart";
import BubbleChart from "../components/Charts/BubbleChart";
import PieChart from "../components/Charts/PieChart";
import PolarChart from "../components/Charts/PolarChart";
import RadarChart from "../components/Charts/RadarChart";
import Components from "../components/UserInterface/Components";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import App from "../App";

const routes = [
  { path: "/", element: <Navigate to="/dashboards/analytics"></Navigate> },
  { path: "dashboards/analytics", element: <Analytics value="10" /> },
  { path: "dashboards/crm", element: <CRM /> },
  { path: "dashboards/ecommerce", element: <Ecommerce /> },
  {
    path: "email",
    element: <Email />,
    // element: <Navigate to="/email" />,
    children: [
      {
        path: "inbox",
        element: <Content value="inbox" />,
      },
      {
        path: "sent",
        element: <Content value="sent" />,
      },
      {
        path: "draft",
        element: <Content value="draft" />,
      },
      {
        path: "starred",
        element: <Content value="starred" />,
      },
      {
        path: "spam",
        element: <Content value="spam" />,
      },
      {
        path: "trash",
        element: <Content value="trash" />,
      },
      {
        path: "personal",
        element: <Content value="personal" />,
      },
      {
        path: "company",
        element: <Content value="company" />,
      },
      {
        path: "important",
        element: <Content value="important" />,
      },
      {
        path: "private",
        element: <Content value="private" />,
      },
    ],
  },
  { path: "chat", element: <Chat /> },
  { path: "user", element: <User /> },
  { path: "invoice", element: <Invoice /> },
  { path: "typography", element: <Typography /> },
  { path: "editor", element: <Editor /> },
  { path: "icons", element: <Icons /> },
  { path: "components", element: <Components /> },
  { path: "area", element: <AreaChart /> },
  { path: "bar", element: <BarChart /> },
  { path: "bubble", element: <BubbleChart /> },
  { path: "line", element: <LineChart /> },
  { path: "pie", element: <PieChart /> },
  { path: "polar", element: <PolarChart /> },
  { path: "radar", element: <RadarChart /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  { path: "app", element: <App /> },
];

export default routes;
