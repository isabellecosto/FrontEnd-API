import { createBrowserRouter } from "react-router";
import ViewDashboard from "../views/dashboard/view-dashboard";
import Home from "../views/home/view-home";
import Users from "../views/users/view-users";
import Products from "../views/products/view-products";

export const appRoutes = [
    {
        path: '/',
        element: (
            <Home />
        ),
    },
    {
        path: '/users',
        element: (
            <Users />
        ),
    },
    {
        path: '/products',
        element: (
            <Products />
        ),
    }
]

export const routes = [
    {
      path: '/',
      element: <ViewDashboard />,
      children: appRoutes,
    },
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;