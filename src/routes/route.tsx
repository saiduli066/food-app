import DashboardLayout from "@/Layouts/DashboardLayout";
import MainLayouts from "@/Layouts/MainLayouts";
import CreateSupply from "@/Pages/CreateSupply";
import Dashboard from "@/Pages/Dashboard";
import Home from "@/Pages/Home";
import Login from "@/Pages/Login";
import Register from "@/Pages/Register";
import ViewDetails from "@/Pages/ViewDetails";
import AllSupplies from "@/components/AllSupplies";
import AllSupplyPage from "@/components/AllSupplyPage";
import Container from "@/components/ui/Container";
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
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "/supplies/:id",
        element: <ViewDetails _id={""} image={""} title={""} category={""} quantity={""} />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <AllSupplyPage />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);
