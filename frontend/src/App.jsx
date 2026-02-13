import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./landing_page/Navbar.jsx";
import HomePage from "./landing_page/home/HomePage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/product/ProductPage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/login/Login.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";

import DashboardRedirect from "./landing_page/DashboardRedirect.jsx";

// Layout component to include Navbar + Footer
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This is where routed pages will render */}
    <Footer />
  </>
);

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <DashboardRedirect />,
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
        {
          path: "/support",
          element: <SupportPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
