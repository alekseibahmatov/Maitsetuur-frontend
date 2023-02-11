import useAuth from "../auth-hooks/useAuth";
import {useLocation, Outlet, Navigate} from "react-router-dom";
// import {Cookies} from "react-cookie";
// import jwt_decode from "jwt-decode";

const RequireAuth = ({allowedRoles}) => {
    // const {auth} = useAuth();
    const location = useLocation();

    // line 13 only for dev purposes
    const auth = {role: ['ROLE_WAITER', 'ROLE_CLIENT', 'ROLE_ADMIN']}

    return (
        auth?.role?.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth?.accountType
                ? <Navigate to="/unauthorized" state={{from: location}} replace/>
                : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default RequireAuth;