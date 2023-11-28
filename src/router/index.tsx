import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import PrivateGuard from "../guards/PrivateGuard";
import PublicGuard from "../guards/PublicGuard";

import Loadable from "./Loadable";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";

import DashboardPage from "../pages/Dashboard/Dashboard";
import UserManagement from "../pages/UserManagement/UserManagemnt";
import Transactions from "../pages/Transactions/Transactions";

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <PublicGuard>
          <PublicLayout>
            <DashboardPage />
          </PublicLayout>
        </PublicGuard>
      ),
      index: true,
    },
    {
      path: "UserManagement",
      element: (
        <PublicGuard>
          <PublicLayout>
            <UserManagement />
          </PublicLayout>
        </PublicGuard>
      ),
    },
    {
      path: "Transactions",
      element: (
        <PublicGuard>
          <PublicLayout>
            <Transactions />
          </PublicLayout>
        </PublicGuard>
      ),
    },
    {
      path: "LoginPage",
      element: (
        <PublicGuard>
          <PrivateLayout>
            <LoginPage />
          </PrivateLayout>
        </PublicGuard>
      ),
    },
    {
      path: "RegisterPage",
      element: (
        <PublicGuard>
          <PrivateLayout>
            <RegisterPage />
          </PrivateLayout>
        </PublicGuard>
      ),
    },
    {
      path: "*",
      children: [
        {
          path: "404",
          element: <Error404Page />,
        },
      ],
    },
  ]);

export default Router;

// Guest routes
const LoginPage = Loadable(
  lazy(() => import("../pages/Auth/LoginPage/LoginPage"))
);
const RegisterPage = Loadable(
  lazy(() => import("../pages/Auth/RegisterPage/RegisterPage"))
);

// Auth routes
const Dashboard = Loadable(
  lazy(() => import("../pages/Dashboard/Dashboard"))
);

// Error routes
const Error404Page = Loadable(lazy(() => import("../pages/NotFound/NotFound")));
