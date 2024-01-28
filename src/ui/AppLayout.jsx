import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function AppLayout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
