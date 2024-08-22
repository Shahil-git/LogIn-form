import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignIn from "../../Pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/registration",
                element:<SignIn></SignIn>
            }
        ]
      },
])

export default router