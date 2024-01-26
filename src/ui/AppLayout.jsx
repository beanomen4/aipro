import { Outlet } from "react-router-dom";

import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
