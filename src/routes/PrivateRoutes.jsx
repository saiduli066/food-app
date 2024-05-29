import React from 'react';
import useAuth from "@/firebase/useAuth";
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    
    const { user } = useAuth();
     const location = useLocation();

    
    if (user) {
        return children;
    }
   return <Navigate to={'/login'} state={{from:location} } replace/>
};

export default PrivateRoutes;