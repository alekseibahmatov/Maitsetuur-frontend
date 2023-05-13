import React from 'react';
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
import AddYourPersonalData from "./pages/personal-coupon-order/AddYourPersonalData";
import Report from "./pages/report/Report";
import {AddBusinessInformation} from "./pages/business-coupon-order/AddBusinessInformation";
import {AddBusinessAddress} from "./pages/business-coupon-order/AddBusinessAddress";
import {AddCouponConfiguration} from "./pages/business-coupon-order/AddCouponConfiguration";
import {AddCouponData} from "./pages/business-coupon-order/AddCouponData";
import {OrderDetails} from "./pages/common-pages/OrderDetails";
import ReportList from "./pages/report-list/ReportList";
import CreateNewUser from "./pages/create-new-user/CreateNewUser";
import ReadUser from "./pages/user-info/ReadUser";

import {
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS,
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION,
    BUSINESS_COUPON_ORDER_ADD_COUPON_CONFIGURATION,
    BUSINESS_COUPON_ORDER_ADD_COUPON_DATA,
    BUSINESS_COUPON_ORDER_DETAILS, PERSONAL_COUPON_ORDER_ADD_RECIPIENT_PERSONAL_DATA,
    PERSONAL_COUPON_ORDER_ADD_YOUR_ADDRESS_DATA,
    PERSONAL_COUPON_ORDER_ADD_YOUR_PERSONAL_DATA, PERSONAL_COUPON_ORDER_CHECK_COUPON_DATA, PERSONAL_COUPON_ORDER_DETAILS
} from "./routes";
import AddYourAddressData from "./pages/personal-coupon-order/AddYourAddressData";
import AddRecipientPersonalData from "./pages/personal-coupon-order/AddRecipientPersonalData";
import CheckCouponData from "./pages/personal-coupon-order/CheckCouponData";

const ROLES = {
    'customer': 'ROLE_CUSTOMER',
    'waiter': 'ROLE_WAITER',
    'admin': 'ROLE_ADMIN',
    'newbie': 'ROLE_NEWBIE',
    'account': 'ROLE_ACCOUNTANT'
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

                {/* PUBLIC ROUTES AUTH */}
                <Route path="/login" element={<Login/>}/>
                <Route path='/reset-password' element={<FirstStepResetPassword/>}/>
                <Route path='/reset-password-final' element={<SecondStepResetPassword/>}/>
                <Route path='/reset-success' element={<ResetSuccess/>}/>
                <Route path='/add-personal-info/:activationCode' element={<AddPersonalInfo/>}/>

                {/* PUBLIC ROUTES PERSONAL COUPON ORDER */}
                <Route path={PERSONAL_COUPON_ORDER_ADD_YOUR_PERSONAL_DATA} element={<AddYourPersonalData/>}/>
                <Route path={PERSONAL_COUPON_ORDER_ADD_YOUR_ADDRESS_DATA} element={<AddYourAddressData/>}/>
                <Route path={PERSONAL_COUPON_ORDER_ADD_RECIPIENT_PERSONAL_DATA} element={<AddRecipientPersonalData/>}/>
                <Route path={PERSONAL_COUPON_ORDER_CHECK_COUPON_DATA} element={<CheckCouponData/>}/>
                <Route path={PERSONAL_COUPON_ORDER_DETAILS + '/:orderToken'} element={<OrderDetails/>}/>

                {/* PUBLIC ROUTES BUSINESS COUPON ORDER */}
                <Route path={BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION} element={<AddBusinessInformation/>}/>
                <Route path={BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS} element={<AddBusinessAddress/>}/>
                <Route path={BUSINESS_COUPON_ORDER_ADD_COUPON_CONFIGURATION} element={<AddCouponConfiguration/>}/>
                <Route path={BUSINESS_COUPON_ORDER_ADD_COUPON_DATA} element={<AddCouponData/>}/>
                <Route path={BUSINESS_COUPON_ORDER_DETAILS + '/:orderToken'} element={<OrderDetails/>}/>
               {/* todo add failure order page */}

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

                        {/* PRIVATE ROUTES ACCOUNTANT */}
                        <Route element={<AuthGuard allowedRoles={[ROLES.customer, ROLES.admin, ROLES.account]}/>}>
                            <Route path='report' element={<Report/>}/>
                            <Route path='reportlist' element={<ReportList/>}/>
                        </Route>


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
                            <Route path='user/create' element={<CreateNewUser/>}/>
                            <Route path='user-info/:userId' element={<CreateNewUser/>}/>
                            {/*<Route path='user-info/:userId' element={<ReadUser/>}/>*/}
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
