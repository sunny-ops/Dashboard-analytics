import { Navigate } from "react-router-dom";
import Analytics from "../components/Analytics/Analytics";
import CRM from "../components/CRM/CRM";
import Ecommerce from "../components/Ecommerce/Ecommerce";

const routes = [
  { path: "/", element: <Navigate to="/dashboards/analytics"></Navigate> },
  { path: "dashboards/analytics", element: <Analytics /> },
  { path: "dashboards/crm", element: <CRM /> },
  { path: "dashboards/ecommerce", element: <Ecommerce /> },
];

export default routes;
