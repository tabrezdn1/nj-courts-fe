import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { sidebarItems } from "./data/configs";
import { routeGroups } from "./routes";
import * as Pages from "./pages";

function App() {
  const renderRoutes = (routes, parentPath = "") =>
    routes.map(({ path, component, children, parameters }) => {
      const ComponentToRender = Pages[component];
      const paramRoute =
        parameters?.length > 0 ? `/:${parameters.join("/:")}` : null;
      return children ? (
        <Route key={path} path={`${parentPath}${path}`}>
          {renderRoutes(children, `${parentPath}${path}/`)}
        </Route>
      ) : (
        <Route
          key={path}
          path={
            paramRoute
              ? `${parentPath}${path}${paramRoute}`
              : `${parentPath}${path}`
          }
          element={
            <ComponentToRender aria-label={`Navigate to ${component}`} />
          }
        />
      );
    });

  return (
    <div
      className="w-full flex h-svh max-h-svh"
      role="application"
      aria-label="Main application area"
    >
      <Sidebar items={sidebarItems} aria-label="Sidebar navigation" />
      <div className="h-full flex-1 overflow-y-auto" role="main">
        <Routes>{renderRoutes(routeGroups)}</Routes>
      </div>
    </div>
  );
}

export default App;
