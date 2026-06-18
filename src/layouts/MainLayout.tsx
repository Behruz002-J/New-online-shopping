import { Outlet } from "react-router-dom";
import Navbar from "../components/MainNavbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
