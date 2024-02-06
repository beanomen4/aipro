import { useQuery } from "@tanstack/react-query";

import { getClientData } from "../../services/apiAuthClient";

export function useAuthClient(user) {
  const { data: AuthClient, isLoading } = useQuery({
    queryKey: ["clientData"],
    queryFn: () => getClientData(user.id),
  });  
  return { AuthClient, isLoading, isAuthenticated: user?.role === "authenticated" };
}
