import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/landing/Landing";
import {Layout} from "./ui-components/layout/Layout";
import LandingKolbaska from "./pages/landing-kolbaska/LandingKolbaska";
import Dashboard from "./pages/dashboard/Dashboard";
import '../src/pages/dashboard/Dashboard.css'

export const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="" element={<Landing/>}/>
                    <Route path="/kolbaska" element={<LandingKolbaska/>}/>
                    <Route path="/dashboard/*" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
