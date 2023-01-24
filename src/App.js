import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/landing/Landing";
import {Layout} from "./ui-components/layout/Layout";
import LandingKolbaska from "./pages/landing-kolbaska/LandingKolbaska";
import Dashboard from "./pages/dashboard/Dashboard";
import '../src/pages/dashboard/Dashboard.css'
import WaiterSingle from "./pages/waiter-single/Waiter-single";
import Login from "./pages/login/Login";
import Reset from "./pages/reset/Reset";
import Error from "./pages/error/Error";

export const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="" element={<Landing/>}/>
                    <Route path="/kolbaska" element={<LandingKolbaska/>}/>
                    <Route path="/dashboard/*" element={<Dashboard/>}/>
                    <Route path='/admin/singlewaiter' element={<WaiterSingle/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/reset' element={<Reset/>}/>
                    <Route path='/error' element={<Error/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
