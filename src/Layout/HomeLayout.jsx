import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const HomeLayout = () => {
    return (
        <div>
        <div className="w-[100%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
        </div>
            
    );
}

export default HomeLayout;
