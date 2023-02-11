import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import WaiterSingle from "./pages/waiter-single/WaiterSingle";
import Login from "./pages/login/Login";
import Reset from "./pages/reset/Reset";
import Error from "./pages/error/Error";
import CouponSingle from "./pages/coupon-single/Coupon-single";
import CreateWaiter from "./pages/create-waiter/Create-waiter";
import Qrcode from "./pages/qrcode/Qrcode";
import Qrcodesuccess from "./pages/qrcodesuccess/Qrcodesuccess";
import Success from "./pages/success/Success";
import Fail from "./pages/fail/Fail";
import ResetSuccess from "./pages/reset-success/Reset-success";
import {AddPersonalInfo} from "./pages/add-personal-info/AddPersonalInfo";
import RequireAuth from "./auth/require-auth/RequireAuth";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import {TypesOfRestaurants} from "./pages/admin/types-of-restaurants/TypesOfRestaurants";
import {MainStats} from "./pages/admin/main-stats/MainStats";
import {RestaurantBusinessInformation} from "./pages/admin/resto-business-info/RestaurantBusinessInformation";

const ROLES = {
    'client': 'ROLE_CLIENT',
    'waiter': 'ROLE_WAITER',
    'admin': 'ROLE_ADMIN'
}

export const App = () => {

    return (
        <>
            <Routes>
                {/* PUBLIC ROUTES */}
                <Route path="" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/reset-success' element={<ResetSuccess/>}/>
                <Route path='/add-personal-info' element={<AddPersonalInfo/>}/>

                {/* ERROR HANDLING */}
                <Route path="/*" element={<Error/>}/>

                <Route path="/dashboard/*" element={<Dashboard/>}>
                    {/* PRIVATE ROUTES CLIENT */}
                    <Route element={<RequireAuth allowedRoles={[ROLES.client]}/>}>
                        <Route path="" element={<MainStats/>}/>
                        <Route path="types-of-resto" element={<TypesOfRestaurants/>}/>
                        <Route path='waiter-info' element={<WaiterSingle/>}/>
                        <Route path='coupon-info' element={<CouponSingle/>}/>
                        <Route path='create-waiter' element={<CreateWaiter/>}/>


                        <Route element={<RequireAuth allowedRoles={[ROLES.waiter, ROLES.client]}/>}>
                            <Route path='qrcode' element={<Qrcode/>}/>
                            <Route path='qrcode-success' element={<Qrcodesuccess/>}/>
                            <Route path='success' element={<Success/>}/>
                            <Route path='fail' element={<Fail/>}/>
                        </Route>
                    </Route>

                    {/* PRIVATE ROUTES ADMIN */}
                    <Route element={<RequireAuth allowedRoles={[ROLES.admin]}/>}>
                        <Route path="" element={<MainStats/>}/>
                        <Route path="resto-business-info" element={<RestaurantBusinessInformation/>}/>

                    </Route>

                    {/* ERROR HANDLING */}
                    <Route element={<RequireAuth allowedRoles={[ROLES.waiter, ROLES.client, ROLES.admin]}/>}>
                        <Route path="*" element={<Error/>}/>
                        <Route path="unauthorized" element={<Unauthorized/>}/>
                    </Route>

                </Route>
            </Routes>
        </>
    );
}

export default App;
