import { createBrowserRouter } from "react-router";
import RootLayout from "../Layoutes/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/Shared/SignIn";

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout /> ,
        children:[
            {
                index:true,
                 element: <Home /> 
            },
            {
                path:'register',
                 element: <Register /> 
            },
            {
                path:"signIn",
                element:<SignIn/>
            }
        ]
    }
])

export default router