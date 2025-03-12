import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Component/Header/header";
import { routes } from "../Data/data";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
