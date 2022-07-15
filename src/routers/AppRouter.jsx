import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../auth/pages/LoginScreen";

import { HeroesRoutes } from "../heroes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }
      ></Route>

      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
};
