import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "./LoginPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
      {path: 'login', element: <LoginPage />},
      { path: "posts/:year/:month", element: <UserListPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
        {
            path: "users",
            element: <UsersPage />,
            children: [{ path: ":id", element: <UserDetailPage /> }],
        }
    ]
  }
]);

export default route;
