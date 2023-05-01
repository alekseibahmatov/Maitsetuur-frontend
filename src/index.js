import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App/>}/>
            </Routes>
        </BrowserRouter>
        <Toaster position="top-center" />
    </React.StrictMode>
);