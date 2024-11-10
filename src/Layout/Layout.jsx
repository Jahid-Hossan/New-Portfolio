import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";



const Layout = () => {
  return (
    <div className="grid">
      <div className="h-screen fixed  bg-dark-color2 w-1/5">
        <div className="text-base-color1 font-Poppins   ">
          <SideBar />
        </div>
      </div>
      <div className="bg-dark-color4 w-4/5 justify-self-end">
        <Outlet />
        {/* <LandingPage /> */}
      </div>
    </div>
  );
};

export default Layout;
