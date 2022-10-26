import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(!loading){
        return <div>Loading........</div>
    }
    if(user?.uid){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;