import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Shared/Loading';

const PrivateRoutes = ({children}) => {
    const {users, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    
    if(loading){
        return <Loading/>
    }

    if(!users){
      return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoutes;