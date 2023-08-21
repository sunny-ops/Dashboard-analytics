import { Navigate } from "react-router-dom";
import Analytics from "../components/Analytics/Analytics";
import CRM from "../components/CRM/CRM";
import Ecommerce from "../components/Ecommerce/Ecommerce";
import Email from "../components/Email/Email";
import Chat from "../components/Chat/Chart";
import Content from "../components/Email/Content";

const routes = [
  { path: "/", element: <Navigate to="/dashboards/analytics"></Navigate> },
  { path: "dashboards/analytics", element: <Analytics /> },
  { path: "dashboards/crm", element: <CRM /> },
  { path: "dashboards/ecommerce", element: <Ecommerce /> },
  {
    path: "email",
    element: <Email />,
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
    ],
  },
  { path: "chat", element: <Chat /> },
];

export default routes;
