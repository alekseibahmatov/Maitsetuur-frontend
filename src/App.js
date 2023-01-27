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

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Landing/>}/>
                <Route path="/kolbaska" element={<LandingKolbaska/>}/>
                <Route path="/dashboard/*" element={<Dashboard/>}/>
                <Route path='/admin/singlewaiter' element={<WaiterSingle/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/error' element={<Error/>}/>
                <Route path='/couponsingle' element={<CouponSingle/>}/>
                <Route path='/createwaiter' element={<CreateWaiter/>}/>
                <Route path='/qrcode' element={<Qrcode/>}/>
                <Route path='/qrcodesuccess' element={<Qrcodesuccess/>}/>
                <Route path='/success' element={<Success/>}/>
                <Route path='/fail' element={<Fail/>}/>
                {/* ВОТ СЮДА ДОБАВЛЯЙ НОВЫЕ РУТЫ КАК ЛЕНДОС (ВНУТРИ LAYOUT)*/}
                {/*<Route path="landing" element={<Landing/>}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
