import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import WaiterSingle from "./pages/waiter-single/WaiterSingle";
import Login from "./pages/login/Login";
import SecondStepResetPassword from "./pages/reset-password/SecondStepResetPassword";
import Error from "./pages/error/Error";
import CouponSingle from "./pages/coupon-single/Coupon-single";
import CreateWaiter from "./pages/create-waiter/Create-waiter";
import Qrcode from "./pages/qrcode/Qrcode";
import Qrcodesuccess from "./pages/qrcodesuccess/Qrcodesuccess";
import Success from "./pages/success/Success";
import Fail from "./pages/fail/Fail";
import ResetSuccess from "./pages/reset-success/Reset-success";
import {AddPersonalInfo} from "./pages/add-personal-info/AddPersonalInfo";
import AuthGuard from "./auth/AuthGuard";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import {TypesOfRestaurants} from "./pages/admin/types-of-restaurants/TypesOfRestaurants";
import {MainStats} from "./pages/admin/main-stats/MainStats";
import {RestaurantBusinessInformation} from "./pages/admin/resto-business-info/RestaurantBusinessInformation";
import SingleRestaraunt from "./pages/single-restaraunt/Single-restaraunt";
import AllRestaraunt from "./pages/all-restaurant/All-restaraunt";
import Connect from "./pages/connect/Connect";
import FirstStepResetPassword from "./pages/reset-password/FirstStepResetPassword";

const ROLES = {
    'customer': 'ROLE_CUSTOMER',
    'waiter': 'ROLE_WAITER',
    'admin': 'ROLE_ADMIN',
    'newbie': 'ROLE_NEWBIE'
}

export const App = () => {

    return (
        <>
            <Routes>
                {/* PUBLIC INFORMATIVE ROUTES */}
                <Route path="" element={<Landing/>}/>
                <Route path='/singlerestaraunt' element={<SingleRestaraunt/>}/>
                <Route path='/allrestaraunts' element={<AllRestaraunt/>}/>
                <Route path='/connect' element={<Connect/>}/>

                {/* PUBLIC ROUTES AUTH*/}
                <Route path="/login" element={<Login/>}/>
                <Route path='/reset-password' element={<FirstStepResetPassword/>}/>
                <Route path='/reset-password-final' element={<SecondStepResetPassword/>}/>
                <Route path='/reset-success' element={<ResetSuccess/>}/>
                <Route path='/add-personal-info/:activationCode' element={<AddPersonalInfo/>}/>

                {/* AUTHORIZED ROUTES WITHOUT THE DASHBOARD */}
                <Route element={<AuthGuard allowedRoles={[ROLES.waiter, ROLES.customer, ROLES.admin]}/>}>
                    <Route path='/qrcode' element={<Qrcode/>}/>
                    <Route path='/qrcode-success' element={<Qrcodesuccess/>}/>
                    <Route path='/success' element={<Success/>}/>
                    <Route path='/fail' element={<Fail/>}/>
                </Route>

                {/* PUBLIC ROUTES ERROR HANDLING */}
                <Route path="/*" element={<Error/>}/>
                <Route path="/unauthorized" element={<Unauthorized/>}/>


                <Route element={<AuthGuard allowedRoles={[ROLES.waiter, ROLES.customer, ROLES.admin]}/>}>

                    <Route path="/dashboard/*" element={<Dashboard/>}>
                        {/* PRIVATE ROUTES CUSTOMER */}
                        <Route element={<AuthGuard allowedRoles={[ROLES.customer, ROLES.admin]}/>}>
                            <Route path="" element={<MainStats/>}/>
                            <Route path="types-of-resto" element={<TypesOfRestaurants/>}/>
                            <Route path='waiter-info' element={<WaiterSingle/>}/>
                            <Route path='coupon-info' element={<CouponSingle/>}/>
                            <Route path='create-waiter' element={<CreateWaiter/>}/>
                        </Route>

                        {/* PRIVATE ROUTES ADMIN */}
                        <Route element={<AuthGuard allowedRoles={[ROLES.admin]}/>}>
                            <Route path="resto-business-info" element={<RestaurantBusinessInformation/>}/>
                        </Route>

                        {/* ERROR HANDLING */}
                        <Route element={<AuthGuard allowedRoles={[ROLES.waiter, ROLES.customer, ROLES.admin]}/>}>
                            <Route path="*" element={<Error/>}/>
                        </Route>

                    </Route>
                </Route>

            </Routes>
        </>
    );
}

export default App;
