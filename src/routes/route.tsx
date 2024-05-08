import MainLayouts from "@/Layouts/MainLayouts";
import Login from "@/Pages/Login";
import Register from "@/Pages/Register";
import Container from "@/components/ui/Container";
import path from "path";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <MainLayouts />
      </Container>
    ),
    children: [
      {
        path: 'dashboard',
        element:<h2>Dashboard</h2>,
      },
      {
        path: 'all-supply',
        element:<h2>All Supply</h2>,
      },
      {
        path: 'login',
        element:<Login/>,
      },
      {
        path: 'register',
        element:<Register/>,
      },
      
      
    ]
  },
]);