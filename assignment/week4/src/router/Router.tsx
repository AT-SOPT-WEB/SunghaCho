import { createBrowserRouter, Navigate } from "react-router";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" />, // 기본 경로에서 /login으로 리다이렉트
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
