import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Homepage from "./Homepage";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;