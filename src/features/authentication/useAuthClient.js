import { useQuery } from "@tanstack/react-query";

import { getClientData } from "../../services/apiAuthClient";

export function useAuthClient(userId) {
  const { data: AuthClient, isLoading } = useQuery({
    queryKey: ["clientData"],
    queryFn: () => getClientData(userId),
  });  
  return { AuthClient, isLoading};
}
