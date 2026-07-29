"use client";

import { useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAdmin = async () => {
    try {
      const res = await fetch("/api/auth/me");

      if (!res.ok) {
        setLoading(false);
        return;
      }

      const data = await res.json();

      setAdmin(data.admin);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        admin,
        loading,
        refreshAdmin: getAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}