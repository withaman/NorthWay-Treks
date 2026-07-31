"use client";

import { useRouter } from "next/navigation";
import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { SessionExpiredError } from "@/lib/errors";
import { useAuth } from "@/context/AuthContext";

export default function useAuthFetch() {
  const router = useRouter();
  const { refreshAdmin } = useAuth();

  const authFetch = async (url, options = {}) => {
    try {
      return await fetchWithAuth(url, options);
    } catch (error) {
      if (error instanceof SessionExpiredError) {
        await fetch("/api/auth/logout", {
          method: "POST",
        });

        await refreshAdmin();

        router.replace("/auth/login");

        return null;
      }

      throw error;
    }
  };

  return authFetch;
}