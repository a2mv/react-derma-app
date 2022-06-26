import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardLayout from "../presentation/components/layout/Dashboard";

export const AppRouter = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/*'  element={<DashboardLayout />} />
            </Routes>
        </BrowserRouter>
    );
}