import { Outlet, useNavigation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { useGlobalContext } from "../Context";

function HomeLayout() {
  const { searchRef } = useGlobalContext();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  if(isPageLoading)return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <ToastContainer/>
      <div className="loader"></div>
    </div>
  );
  return (
    <div className="relative flex flex-col h-screen overflow-auto scrollbar-hidden">
      <ToastContainer />
      <nav className="w-full fixed flex items-center justify-center h-20 top-0  max-sm:h-fit max-sm:pb-5 z-[2] bg-white">
        <div className="w-[80%] h-full flex justify-between max-sm:flex-col max-sm:items-center">
          <h1 className="font-bold text-5xl text-green-700 flex items-center max-sm:mb-5">
            MixMaster
          </h1>
          <div className="w-80 flex items-center justify-evenly max-sm:flex-col">
            <NavLink to={`/?search=${searchRef.current}`} className="tracking-widest text-lg">
              Home
            </NavLink>
            <NavLink to="/About" className="tracking-widest text-lg">
              About
            </NavLink>
            <NavLink to="/Newsletter" className="tracking-widest text-lg">
              Newsletter
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="w-full mt-20 max-sm:mt-43 bg-gradient-to-r from-green-50 to-green-100 flex-grow ">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
