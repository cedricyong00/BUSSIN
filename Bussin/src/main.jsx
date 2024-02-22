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
          <Route index element={<SignInPage />} />
          {/* Auth */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Routes>
      </MantineProvider>
    </Router>
  </React.StrictMode>
);
