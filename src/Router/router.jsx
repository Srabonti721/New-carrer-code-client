import { createBrowserRouter } from "react-router";
import RootLayout from "../Layoutes/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/Shared/SignIn";
import JobDetails from "../Pages/JobDetails";

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
                path:'/jobs/:id',
                Component:JobDetails,
                loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
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