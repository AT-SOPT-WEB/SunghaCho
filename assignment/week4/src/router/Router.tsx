import { createBrowserRouter, Navigate } from "react-router";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import MyInfo from "../pages/mypage/MyInfo";
import MySearch from "../pages/mypage/MySearch";

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
  {
    path: "/mypage/info",
    element: <MyInfo />,
  },
  {
    path: "/mypage/search",
    element: <MySearch />,
  },
]);

export default router;
