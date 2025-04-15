import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import DefaultLayout from "./components/DefaultLayout";
import ArticlesDashboard from "./views/ArticlesDashboard";
import LoginPage from "./views/LoginPage";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
    },
    {
        path: "/app",
        element: <DefaultLayout />,
        children: [
            {
            path: "articlesdashboard",
            element: <ArticlesDashboard />,
            },
        ]
    },

    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;