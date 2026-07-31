import { SessionExpiredError } from "./errors";

export async function fetchWithAuth(url, options = {}) {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      credentials: "include",
      ...options,
    });

    if (response.status === 401) {
      throw new SessionExpiredError("Your session has expired.");
    }

    if (!response.ok) {
      let message = "Something went wrong";

      try {
        const errorData = await response.json();
        message = errorData.message || message;
      } catch {
        // Ignore JSON parsing errors
      }

      throw new Error(message);
    }

    return response;
  } catch (error) {
    if (error instanceof SessionExpiredError) {
      throw error;
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to the server. Please check your internet connection."
      );
    }

    throw error;
  }
}