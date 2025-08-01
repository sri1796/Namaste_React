import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import {RouterProvider}  from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RestaurantsMenu from "./components/RestaurantsMenu";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const AboutUs = lazy(()=>import("./components/AboutUs"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
         element: <Body/>   
      },
      {
        path:"/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><AboutUs /></Suspense>
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />
      }
    ] ,
    errorElement: <ErrorPage />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
