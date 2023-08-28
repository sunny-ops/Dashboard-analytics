import React from "react";
import { useRoutes } from "react-router-dom";
import { myroutes } from "./route/myroutes.js";

function MyApp(props) {
  const element = useRoutes(myroutes);
  return <div>{element}</div>;
}

export default MyApp;
