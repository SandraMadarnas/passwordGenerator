import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./component/NavBar.jsx";
import Home from "./view/Home.jsx";
import MyPassWords from "./view/MyPasswords.jsx";

const Layout = () => {
    const basename = "";

    return (
        <BrowserRouter basename={basename}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-passwords" element={<MyPassWords />} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
