import { useState, useEffect } from "react";

const useAuth = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: null,
    role: null,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/check-auth`,
          {
            method: "GET",
            credentials: "include",
          },
        );
        const data = await response.json();
        setAuthState({ isAuthenticated: data.authenticated, role: data.role });
      } catch (error) {
        console.error("Error checking authentication", error);
        setAuthState({ isAuthenticated: null, role: null });
      }
    };

    checkAuth();
  }, []);

  return authState;
};

export default useAuth;
