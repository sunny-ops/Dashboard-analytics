import { Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import App from "../App";

export const myroutes = [
  { path: "/", element: <Navigate to="/dashboards/analytics"></Navigate> },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <App />,
  },
];
