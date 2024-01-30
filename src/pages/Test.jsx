// import { useQuery } from "@tanstack/react-query";
import { Button, Spin } from "antd";

import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";
// import { getClients } from "../services/apiClients";

function Test() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata; // default -> avatar: ''
  const { logout, isLoading } = useLogout();

  // const { data: clients, isLoading: isLoadingClients } = useQuery({
  //   queryKey: ["clients"],
  //   queryFn: getClients,
  // });

  // if (isLoadingClients) return <Spin />;

  return (
    <>
      {/* <div>id: {clients?.[0].id}</div>
      <div>username: {clients?.[0].username}</div>
      <div>aicoin: {clients?.[0].aicoin}</div> */}
      <Button type="primary" disabled={isLoading} onClick={logout}>
        logout
      </Button>

      <div>Email: {user?.email}</div>
      <div>FullName: {fullName}</div>
      <div>Avatar: {avatar}</div>
    </>
  );
}

export default Test;
