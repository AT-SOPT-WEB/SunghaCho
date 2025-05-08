import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />, // 기본 경로에서 /login으로 리다이렉트
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
