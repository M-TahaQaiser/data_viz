const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function isUnauthorizedError(error: Error): boolean {
  return /^401: .*Unauthorized/.test(error.message);
}

export function redirectToLogin() {
  window.location.href = "/login";
}

export async function logout() {
  try {
    await fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error("Logout error:", error);
  }
  window.location.href = "/login";
}
