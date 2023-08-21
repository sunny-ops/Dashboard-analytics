import { Navigate } from "react-router-dom";
import Analytics from "../components/Analytics/Analytics";
import CRM from "../components/CRM/CRM";
import Ecommerce from "../components/Ecommerce/Ecommerce";
import Email from "../components/Email/Email";
import Chat from "../components/Chat/Chart";

const routes = [
  { path: "/", element: <Navigate to="/dashboards/analytics"></Navigate> },
  { path: "dashboards/analytics", element: <Analytics /> },
  { path: "dashboards/crm", element: <CRM /> },
  { path: "dashboards/ecommerce", element: <Ecommerce /> },
  { path: "email", element: <Email /> },
  { path: "chat", element: <Chat /> },
];

export default routes;
