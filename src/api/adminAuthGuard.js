export function handleAdminAuthError(res) {
  if (res.status === 401 || res.status === 403) {
    window.location.href = "/admin/login";
    throw new Error("Admin not authenticated");
  }
}
