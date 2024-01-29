import { useQuery } from "@tanstack/react-query";
import { Button, Spin } from "antd";

import { getClients } from "../services/apiClients";
import { useLogout } from "../features/authentication/useLogout";

function Test() {
  const { logout, isLoading } = useLogout();

  const { data: clients, isLoading: isLoadingClients } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  if (isLoadingClients) return <Spin />;

  return (
    <>
      <div>id: {clients?.[0].id}</div>
      <div>username: {clients?.[0].username}</div>
      <div>aicoin: {clients?.[0].aicoin}</div>
      <Button type="primary" disabled={isLoading} onClick={logout}>
        logout
      </Button>
    </>
  );
}

export default Test;
