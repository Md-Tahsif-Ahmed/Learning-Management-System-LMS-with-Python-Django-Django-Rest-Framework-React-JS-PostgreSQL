import {
    createBrowserRouter

  } from "react-router-dom";
import Home from "../Home/Home";
import FavouriteCourse from "../Pages/Course/FavouriteCourse";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import RecommondedCourse from "../Pages/Course/RecommondedCourse";
import Profile from "../Pages/Auth/Profile";
import ChangePass from "../Pages/Auth/ChangePass";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Logout from "../Pages/Auth/Logout";
import MyCourses from "../Pages/Course/MyCourses";
import PopularTeacher from "../Teacher/PopularTeacher";
import TeacherRegister from "../Teacher/TeacherRegister";
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/mycourse',
            element: <MyCourses></MyCourses>,
        },
        {
            path: '/fav',
            element: <FavouriteCourse></FavouriteCourse>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/recom',
            element: <RecommondedCourse></RecommondedCourse>,
        },
        {
            path: '/profile',
            element: <Profile></Profile>,

        },
        {
            path: '/cnpas',
            element: <ChangePass></ChangePass>,
        },
        {
            path: '/dash',
            element: <Dashboard></Dashboard>,
        },
        {
            path:'/logout',
            element: <Logout></Logout>
        },
        {
          path: '/popt',
          element: <PopularTeacher></PopularTeacher>
        },
        {
          path: '/treg',
          element: <TeacherRegister></TeacherRegister>,
        },

       
        
        
      ]
    },
  ]);
  

export default router;
