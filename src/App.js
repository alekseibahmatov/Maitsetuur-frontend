import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/landing/Landing";
import {Layout} from "./ui-components/layout/Layout";
import LandingKolbaska from "./pages/landing-kolbaska/LandingKolbaska";

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Landing/>}/>
                <Route path="/kolbaska" element={<LandingKolbaska/>}/>
                {/* ВОТ СЮДА ДОБАВЛЯЙ НОВЫЕ РУТЫ КАК ЛЕНДОС (ВНУТРИ LAYOUT)*/}
                {/*<Route path="landing" element={<Landing/>}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
