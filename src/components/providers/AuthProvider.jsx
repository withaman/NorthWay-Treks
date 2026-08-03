"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

const getAdmin = async () => {
  try {
    setLoading(true);

    const res = await fetch("/api/auth/me");

    if (!res) {
      setAdmin(null);
      return;
    }

    const data = await res.json();

    if (data.success) {
      setAdmin(data.admin);
    } else {
      setAdmin(null);
    }
  } catch (err) {
    console.error(err);
    setAdmin(null);
  } finally {
    setLoading(false);
  }
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