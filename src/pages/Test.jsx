import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

import { getClients } from "../services/apiClients";

function Test() {
  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  if (isLoading) return <Spin />;

  return (
    <>
      <div>id: {clients?.[0].id}</div>
      <div>username: {clients?.[0].username}</div>
      <div>aicoin: {clients?.[0].aicoin}</div>
    </>
  );
}

export default Test;
