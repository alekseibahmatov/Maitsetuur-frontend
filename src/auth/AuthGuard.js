import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/auth';
import jwt_decode from "jwt-decode";

const AuthGuard = ({allowedRoles}) => {
    // const authUser = authService.getAuthUser();
    // console.log(authUser)
    //
    // // no token and empty localstorage
    // if (!authUser) {
    //     return <Navigate to={'/login'} replace/>;
    // }
    //
    // const decodedRoles = jwt_decode(authUser.token)?.roles;
    //
    // if (!decodedRoles.some(role => allowedRoles.includes(role))) {
    //     return <Navigate to={'/unauthorized'} replace/>;
    // }

    return <Outlet/>;
};

export default AuthGuard;
