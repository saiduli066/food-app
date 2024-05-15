import Footer from "@/Pages/Footer";
import Navbar from "@/Pages/Navbar";
import { Outlet } from "react-router-dom";
const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayouts;
