import SideBar from "../components/SideBar";


const Layout = () => {
  return (
    <div className="text-base-color1 font-Poppins flex">
      <div className="bg-dark-color2 h-[100vh] w-1/4">
        <SideBar />
      </div>
      <div className="bg-dark-color4 h-[100vh] w-full">
        {/* <Outlet/> */}
        content
      </div>
    </div>
  );
};

export default Layout;
