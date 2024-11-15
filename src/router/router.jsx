import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import LandingPage from "../pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ]
  },
]);
