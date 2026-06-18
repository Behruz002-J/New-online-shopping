import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/MainNavbar";
import Homepage from "../pages/Homepage/BestDeals"
// import ShopPage from "../Pages/ShopPage/Home";
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
      }
    //   {
    //     path:"/shoppage",
    //     element:<ShopPage />
    //   },
    ],
  },
]);
