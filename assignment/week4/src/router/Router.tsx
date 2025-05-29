import { createBrowserRouter, Navigate } from "react-router";
import { ROUTES } from "./routesPath"
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import MyInfo from "../pages/mypage/MyInfo";
import MySearch from "../pages/mypage/MySearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES.SIGN_IN} />,
  },
  {
    path: ROUTES.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: ROUTES.MYPAGE_INFO,
    element: <MyInfo />,
  },
  {
    path: ROUTES.MYPAGE_SEARCH,
    element: <MySearch />,
  },
]);

export default router;
