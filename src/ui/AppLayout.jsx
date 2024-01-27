import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Navigation from "./Navigation/Navigation";

function AppLayout() {
  return (
    <div>
      <Navigation />
      {/* <Sidebar /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
