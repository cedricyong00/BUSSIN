/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import SignInPage from "./pages/User/Signin.jsx";
import SignUpPage from "./pages/User/Signup.jsx";
import { Layout } from "./components/Layout/Layout";
import Homepage from "./pages/User/Homepage.jsx";
import { ProductPage } from "./pages/General/ProductPage.jsx";
import { North } from "./pages/General/North.jsx";
import NotFound from "./pages/User/NotFound.jsx";
import CreateSeat from "./pages/Admin/createSeat.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Booking from "./pages/User/Booking.jsx";
import { NorthE } from "./pages/General/NorthE.jsx";
import { WestPage } from "./pages/General/West.jsx";
import { EastPage } from "./pages/General/East.jsx";

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
  cursorType: "pointer",
  primaryColor: "gray",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Notifications />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            {/* Auth */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Product Page */}
            <Route path="/taylor-swift" element={<ProductPage />} />
            <Route path="/taylor-swift-north" element={<North />} />
            <Route path="/taylor-swift-northeast" element={<NorthE />} />
            <Route path="/taylor-swift-west" element={<WestPage />} />
            <Route path="/taylor-swift-east" element={<EastPage />} />

            {/* Admin */}
            <Route path="/boss/create" element={<CreateSeat />} />
            <Route path="/boss" element={<Admin />} />

            {/* User */}
            <Route path="/booking" element={<Booking />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MantineProvider>
    </Router>
  </React.StrictMode>
);
