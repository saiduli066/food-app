import Sidebar from "@/Pages/Sidebar";
import Container from "@/components/ui/Container";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Container>
      <div className="flex gap-4 w-full">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[85%]">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
