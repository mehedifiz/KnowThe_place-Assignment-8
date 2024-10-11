import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main_layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "./MyProfile";
import EditProfile from "../pages/EditProfile";
 


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5010/tourist-spot')
            },
            {
                path: "/about-us",
                element: <About></About>
            },
            {
                path: "/contact-us",
                element: <Contact></Contact>
            }, {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/my-profile",
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path: "/edit-profile",
                element: <PrivateRoute>
                    <EditProfile></EditProfile>
                </PrivateRoute>
            },
        
            
        ]
    }
])

export default router;