import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-[#3b7165] w-64 min-h-full">
            <ul className="menu p-4">
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/mycourse">My Courses</NavLink>
                </li>
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/recom">Add Courses</NavLink>
                </li>
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/recom">My Users</NavLink>
                </li>

                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                <NavLink to="/fav">Favourite Course</NavLink>
                </li>
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/recom">Recommended Course</NavLink>
                </li>
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/profile">Profile Settings</NavLink>
                </li>
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/cnpas">Change Password</NavLink>
                </li>
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/recom">Logout</NavLink>
                </li>
                <li className="rounded-lg text-white bg-[#6f151b] my-2">
                    <NavLink to="/popt">Popular Teacher</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;