import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Spin />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
