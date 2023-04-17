import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import WaiterSingle from "./pages/waiter-single/WaiterSingle";
import Login from "./pages/login/Login";
import SecondStepResetPassword from "./pages/reset-password/SecondStepResetPassword";
import Error from "./pages/error/Error";
import CouponSingle from "./pages/coupon-single/CouponSingle";
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
import SingleRestaurant from "./pages/single-restaraunt/SingleRestaurant";
import AllRestaurant from "./pages/all-restaurant/AllRestaurant";
import Connect from "./pages/connect/Connect";
import FirstStepResetPassword from "./pages/reset-password/FirstStepResetPassword";
import ListOfCoupons from "./pages/admin/list-of-coupons/ListOfCoupons";
import ListOfRestaurants from "./pages/admin/list-of-restaurants/ListOfRestaurants";
import {ListOfWaiters} from "./pages/restaurant/list-of-waiters/ListOfWaiters";
import Payment from "./pages/payment/Payment";
import Report from "./pages/report/Report";
import {Step1} from "./pages/business-auth/Step1";
import {Step2} from "./pages/business-auth/Step2";
import {Step3_1Coupon} from "./pages/business-auth/Step3_1Coupon";
import {Step3MoreThan1Coupon} from "./pages/business-auth/Step3MoreThan1Coupon";
import {Step3CouponExample} from "./pages/business-auth/Step3CouponExample";
import {Step41} from "./pages/business-auth/Step4.1";
import {Step42} from "./pages/business-auth/Step4.2";
import {Step5} from "./pages/business-auth/Step5";
import ReportList from "./pages/report-list/ReportList";
import {Test} from "./pages/test/Test";
import CreateNewUser from "./pages/create-new-user/CreateNewUser";
import ReadUser from "./pages/read-user/ReadUser";

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
                <Route path='/allrestaurants' element={<AllRestaurant/>}/>
                <Route path='/connect' element={<Connect/>}/>
                <Route path='/singlerestaurant/:id' element={<SingleRestaurant/>}/>

                {/* PUBLIC ROUTES AUTH*/}
                <Route path="/login" element={<Login/>}/>
                <Route path='/reset-password' element={<FirstStepResetPassword/>}/>
                <Route path='/reset-password-final' element={<SecondStepResetPassword/>}/>
                <Route path='/reset-success' element={<ResetSuccess/>}/>
                <Route path='/add-personal-info/:activationCode' element={<AddPersonalInfo/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/step1' element={<Step1/>}/>
                <Route path='/step2' element={<Step2/>}/>
                <Route path='/step3' element={<Step3_1Coupon/>}/>
                <Route path='/step3.1' element={<Step3MoreThan1Coupon/>}/>
                <Route path='/step3.2' element={<Step3CouponExample/>}/>
                <Route path='/step4.1' element={<Step41/>}/>
                <Route path='/step4.2' element={<Step42/>}/>
                <Route path='/step5' element={<Step5/>}/>
                <Route path='/test' element={<Test/>}/>

                {/* AUTHORIZED ROUTES WITHOUT THE DASHBOARD */}
                <Route element={<AuthGuard allowedRoles={[ROLES.waiter, ROLES.customer, ROLES.admin]}/>}>
                    <Route path='/qrcode' element={<Qrcode/>}/>
                    {/*<Route path='/qrcode-success' element={<Qrcodesuccess/>}/>*/}
                    <Route path='/qrcode-success' element={<Success/>}/>
                    <Route path='/qrcode-fail' element={<Fail/>}/>
                </Route>

                {/* PUBLIC ROUTES ERROR HANDLING */}
                <Route path="/*" element={<Error/>}/>
                <Route path="/unauthorized" element={<Unauthorized/>}/>


                <Route element={<AuthGuard allowedRoles={[ROLES.waiter, ROLES.customer, ROLES.admin]}/>}>

                    <Route path="/dashboard/*" element={<Dashboard/>}>
                        {/* PRIVATE ROUTES CUSTOMER */}
                        <Route element={<AuthGuard allowedRoles={[ROLES.customer, ROLES.admin]}/>}>
                            <Route path="" element={<MainStats/>}/>
                            <Route path="types-of-restaurants" element={<TypesOfRestaurants/>}/>
                            <Route path='waiter-info/create' element={<WaiterSingle/>}/>
                            <Route path='waiter-info/:waiterId' element={<WaiterSingle/>}/>
                            <Route path='create-waiter' element={<CreateWaiter/>}/>
                        </Route>

                        {/* PRIVATE ROUTES ADMIN */}
                        <Route element={<AuthGuard allowedRoles={[ROLES.customer, ROLES.admin]}/>}>
                            <Route path="restaurant/create" element={<RestaurantBusinessInformation/>}/>
                            <Route path="restaurant-info/:restaurantId" element={<RestaurantBusinessInformation/>}/>
                            <Route path="list-of-coupons" element={<ListOfCoupons/>}/>
                            <Route path="list-of-restaurants" element={<ListOfRestaurants/>}/>
                            <Route path="list-of-waiters" element={<ListOfWaiters/>}/>
                            <Route path='coupon/create' element={<CouponSingle/>}/>
                            <Route path='coupon-info/:couponId' element={<CouponSingle/>}/>
                            <Route path='report' element={<Report/>}/>
                            <Route path='reportlist' element={<ReportList/>}/>
                            <Route path='createnewuser' element={<CreateNewUser/>}/>
                            <Route path='readuser' element={<ReadUser/>}/>
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
