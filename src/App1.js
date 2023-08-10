import routes from "./route/routes";
import { NavLink, useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <h1>App1</h1>
      {/* <div>
        <NavLink to="dashboards/analytics"> Analytics</NavLink>
      </div>
      <div>
        <NavLink to="dashboards/crm"> CRM</NavLink>
      </div>
      <div>
        <NavLink to="dashboards/ecommerce"> Ecommerce</NavLink>
      </div>

      {element} */}
    </>
  );
}

export default App;
