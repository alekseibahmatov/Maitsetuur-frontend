import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/landing/Landing";
import {Layout} from "./ui-components/layout/Layout";
import LandingKolbaska from "./pages/landing-kolbaska/LandingKolbaska";
import Dashboard from "./pages/dashboard/Dashboard";
import WaiterSingle from "./pages/waiter-single/Waiter-single";
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
import AuthStep1 from "./pages/auth-step-1/Auth-step-1";
import AuthStep2 from "./pages/auth-step-2/Auth-step-2";
import AuthStep3 from "./pages/auth-step-3/Auth-step-3";
import SingleRestaraunt from "./pages/single-restaraunt/Single-restaraunt";
import AllRestaraunt from "./pages/all-restaurant/All-restaraunt";

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Landing/>}/>
                <Route path="/kolbaska" element={<LandingKolbaska/>}/>
                <Route path="/dashboard/*" element={<Dashboard/>}/>
                <Route path='/dashboard/singlewaiter' element={<WaiterSingle/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/error' element={<Error/>}/>
                <Route path='/couponsingle' element={<CouponSingle/>}/>
                <Route path='/createwaiter' element={<CreateWaiter/>}/>
                <Route path='/qrcode' element={<Qrcode/>}/>
                <Route path='/qrcodesuccess' element={<Qrcodesuccess/>}/>
                <Route path='/success' element={<Success/>}/>
                <Route path='/fail' element={<Fail/>}/>
                <Route path='/resetsuccess' element={<ResetSuccess/>}/>
                <Route path='/authstep1' element={<AuthStep1/>}/>
                <Route path='/authstep2' element={<AuthStep2/>}/>
                <Route path='/authstep3' element={<AuthStep3/>}/>
                <Route path='/singlerestaraunt' element={<SingleRestaraunt/>}/>
                <Route path='/allrestaraunts' element={<AllRestaraunt/>}/>

                {/* ВОТ СЮДА ДОБАВЛЯЙ НОВЫЕ РУТЫ КАК ЛЕНДОС (ВНУТРИ LAYOUT)*/}
                {/*<Route path="landing" element={<Landing/>}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
