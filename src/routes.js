import {
    createBrowserRouter,
} from "react-router-dom";
import BaseApp from "./App";
import AdminBilling from "./web/pages/admin/billing";
import Customers from "./web/pages/admin/customers";
import AdminDashboard from "./web/pages/admin/Dashboard/Dashboard";
import JobBoards from "./web/pages/admin/jobBoard";
import Package from "./web/pages/admin/package";
import Ticket from "./web/pages/admin/ticket";
import AdminUsers from "./web/pages/admin/users";
import ForgotPassword from "./web/pages/auth/forgetPassword";
import Login from './web/pages/auth/login';
import Signup from './web/pages/auth/signup';
import ClientDashboard from "./web/pages/client/Dashboard";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <BaseApp />
    },
    {
        path: "/admin/",
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "customers",
                element: <Customers />,
            },
            {
                path: "package",
                element: <Package />,
            },
            {
                path: "billing",
                element: <AdminBilling />,
            },
            {
                path: "job-board",
                element: <JobBoards />,
            },
            {
                path: "users",
                element: <AdminUsers />,
            },
            {
                path: "ticket",
                element: <Ticket />,
            },
        ],
    },
    {
        path: "/customer/",
        children: [
            {
                path: "dashboard",
                element: <ClientDashboard />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    },
    // {
    //     path: "/password-reset",
    //     element: <PasswordReset />
    // },
]);

export default Routes;