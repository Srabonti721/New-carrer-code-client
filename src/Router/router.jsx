import { createBrowserRouter } from "react-router";
import RootLayout from "../Layoutes/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/Shared/SignIn";
import JobDetails from "../Pages/JobDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import ApplyJob from "../Pages/ApplyJob";
import MyApplications from "../Pages/myApplications/MyApplications";

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
                path:"/applyJob/:id",
                element:<PrivateRoutes>
                  <ApplyJob></ApplyJob>
                </PrivateRoutes>
            },
            {
                path:"myApplications",
                element:<PrivateRoutes>
                    <MyApplications></MyApplications>
                </PrivateRoutes>
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