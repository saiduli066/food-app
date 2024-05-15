import { cn } from "@/lib/utils";
import { ClipboardList, HomeIcon, LayoutDashboard, PlusSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col space-y-2 p-2  ">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-gray-300 p-1 md:p-3 rounded transition-all flex items-center gap-2",
              {
                "bg-gray-700 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />{" "}
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/dashboard/supplies"
          className={({ isActive }) =>
            cn(
              "bg-gray-300 p-1 md:p-3 rounded transition-all flex items-center gap-2",
              {
                "bg-gray-700 text-white": isActive,
              }
            )
          }
        >
          <ClipboardList className="shrink-0" />{" "}
          <span className="truncate">Supply List</span>
        </NavLink>
        <NavLink
          to="/dashboard/create-supply"
          className={({ isActive }) =>
            cn(
              "bg-gray-300 p-1 md:p-3 rounded transition-all flex items-center gap-2",
              {
                "bg-gray-700 text-white": isActive,
              }
            )
          }
        >
          <PlusSquare className="shrink-0" />{" "}
          <span className="truncate">Create Supply</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "bg-gray-300 p-1 md:p-3 rounded transition-all flex items-center gap-2",
              {
                "bg-gray-700 text-white": isActive,
              }
            )
          }
        >
          <HomeIcon className="shrink-0" />{" "}
          <span className="truncate">Back to Home</span>
        </NavLink>
      </nav>
    </aside>
  );
};



export default Sidebar;