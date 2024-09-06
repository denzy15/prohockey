import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SERVER_URL } from "@/shared/constants";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post(`${SERVER_URL}/admin/verify-token`, { token })
        .then((response) => {
          if (response.status === 200) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            toast.warn("Срок действия сессии истек, войдите заново");
            localStorage.removeItem("token");
            router.push("/admin/auth");
          }
        })
        .catch((error) => {
          setIsAuthenticated(false);
          toast.warn(error.response?.data?.message || "Ошибка проверки токена");
          localStorage.removeItem("token");
          router.push("/admin/auth");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsAuthenticated(false);
      router.push("/admin/auth");
      setIsLoading(false);
    }
  }, [router.asPath]);

  return { isAuthenticated, isLoading };
};
