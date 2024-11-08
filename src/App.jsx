import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPage from "./pages/ForgotPassword";
import ErrorRoute from "./pages/errorRoute";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import Goalspage from "./pages/goals";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement:<ErrorRoute/>,
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    {
      path: "/register",
      element: <SignUpPage/>,
    },
    {
      path: "/forgot",
      element: <ForgotPage/>,
    },
    {
      path: "/balance",
      element: <BalancePage/>,
    },
    {
      path: "/goals",
      element: <Goalspage/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
