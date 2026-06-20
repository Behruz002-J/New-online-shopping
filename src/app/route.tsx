import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/MainNavbar";
import Homepage from "../pages/Homepage/BestDeals"
import Shoppage from "../pages/Shoppage/Category"
import Trackorder from "../components/Trackorder";
import ComparePage from "../pages/Compare/compare";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path:"/mainnavbar",
        element:<Navbar />
      },
      {
        path:"/shoppage",
        element:<Shoppage />
      },
      {
        path:"/trackorder",
        element:<Trackorder />
      },
      {
        path:"/compare",
        element:<ComparePage />
      }
    ],
  },
]);
