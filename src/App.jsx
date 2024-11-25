import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { sidebarItems } from "./data/configs";
import { routeGroups } from "./routes";
import * as Pages from "./pages";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

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
          element={<ComponentToRender />}
        />
      );
    });

  return (
    <I18nextProvider i18n={i18n}>
      <div className="w-full flex h-svh max-h-svh">
        <Sidebar items={sidebarItems} />
        <div className="h-full flex-1">
          <Routes>{renderRoutes(routeGroups)}</Routes>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
