import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      message.success("You have successfully logged in");
      navigate("/profile");
    },
    onError: (err) => {
      console.log("ERROR", err);
      message.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
