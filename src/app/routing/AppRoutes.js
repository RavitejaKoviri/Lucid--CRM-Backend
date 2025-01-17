/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { Logout, AuthPage } from "../modules/auth";
import { App } from "../newApp";
import { shallowEqual, useSelector } from "react-redux";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

const AppRoutes = () => {
  // const {currentUser} = useAuth()
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );
  // const currentUser = true
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />

          {/* <Route path="/" element={<Navigate to="/websocCRM" />} />
          <Route path="*" element={<Navigate to="/websocCRM" />} /> */}
          {isAuthorized ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/websocCRM" />} />
            </>
          ) : (
            <>
              <Route path="websocCRM/auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/websocCRM/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
